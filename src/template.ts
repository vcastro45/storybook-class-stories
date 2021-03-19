export type TemplateFactory = (variables?: object | undefined) => string

export interface TemplateOptions {
  [key: string]: any
}

export default function Template (options: TemplateOptions | TemplateFactory = {}) {
  return function (target: any, key: PropertyKey) {
    if (typeof options === 'function') {
      options = {
        template: options
      }
    }
    const prop = options.template
    delete options.template

    for (const option in options) {
      prop[option] = options[option]
    }

    Object.defineProperty(target, key, {
      value: prop
    })
  }
}