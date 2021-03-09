export interface StoryOptions {
  title?: string
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

export default function Story(options: StoryOptions = {}) {
  return function (target: { new(): any }) {
    const instance = new target()
    const story = {
      ...getObjectProps(instance),
      'default': options
    }

    return story
  }
}