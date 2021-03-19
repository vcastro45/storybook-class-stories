import { TemplateProps, TemplatePropsFactory } from './fixture'

export interface StoryOptions {
  title?: string
  fixtureClass?: { new (): any }

  [key: string]: any
}

function getObjectProps (obj: any) {
  const excludedProps = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf']
  const p: any = {}
  for (; obj != null; obj = Object.getPrototypeOf(obj)) {
    const op = Object.getOwnPropertyNames(obj)
    for (const prop of op) {
      if (excludedProps.indexOf(prop) === -1 && !prop.startsWith('__'))
        p[prop] = obj[prop]
    }
  }
  return p
}

function wrapTemplateFactory (tp: TemplateProps | TemplatePropsFactory, templateFactory: Function) {
  const args = typeof tp === 'function' ? tp() : tp
  const newTemplateFactory: any = (opt: any = {}) => templateFactory({...args, ...opt})

  for (const key of Object.keys(templateFactory)) {
    newTemplateFactory[key] = (templateFactory as any)[key]
  }

  return newTemplateFactory
}

export default function Story (options: StoryOptions = {}) {
  return function (target: { new (): any }) {
    const instance = new target()
    const instanceProps = getObjectProps(instance)

    if (options.fixtureClass) {
      const fixture = new options.fixtureClass()
      delete options.fixtureClass

      const fixtureProps = getObjectProps(fixture)

      for (const prop in instanceProps) {
        if (fixture.global) {
          const templateFn = instanceProps[prop]
          instanceProps[prop] = wrapTemplateFactory(fixture.global, templateFn)
        }

        if (fixtureProps[prop]) {
          const templateFn = instanceProps[prop]
          instanceProps[prop] = wrapTemplateFactory(fixtureProps[prop], templateFn)
        }
      }
    }

    const story = {
      ...instanceProps,
      'default': options
    }

    return story
  }
}