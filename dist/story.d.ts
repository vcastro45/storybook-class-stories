export interface StoryOptions {
    title?: string;
    [key: string]: any;
}
export default function Story(options?: StoryOptions): (target: {
    new (): any;
}) => any;
