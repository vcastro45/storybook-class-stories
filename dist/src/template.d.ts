export interface TemplateOptions {
    [key: string]: any;
}
export default function Template(options?: TemplateOptions): (target: any, name?: string) => void;
