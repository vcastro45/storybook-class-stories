export type TemplateProps = { [key: string]: any }
export type TemplatePropsFactory = () => TemplateProps

export interface FixtureInterface {
  global?: TemplateProps | TemplatePropsFactory

  [key: string]: TemplateProps | TemplatePropsFactory
}
