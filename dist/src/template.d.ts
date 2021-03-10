export interface TemplateOptions {
    [key: string]: any;
}
export default function Template(options?: TemplateOptions): (target: any, key: PropertyKey) => void;
