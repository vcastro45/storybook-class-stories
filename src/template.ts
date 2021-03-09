export interface TemplateOptions {
  [key: string]: any
}

export default function Template(options: TemplateOptions = {}) {
  return function (target: any, name?: string) {
    const prop = options.template
    delete options.template
    Object.assign(prop, options)
    Object.defineProperty(target, name, {
      value: prop
    })
  }
}