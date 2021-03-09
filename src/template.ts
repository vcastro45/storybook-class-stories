export interface TemplateOptions {
  [key: string]: any
}

export default function Template(options: TemplateOptions = {}) {
  return function (target: any, name?: string) {
    const prop = options.template
    delete options.template
    Object.assign(prop, options)
    const item = Object.defineProperty(target, name, {
      value: prop
    })
    const descriptor = Object.getOwnPropertyDescriptor(item, name)
    return descriptor
  }
}