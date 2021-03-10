export default function Template(options = {}) {
    return function (target, key) {
        const prop = options.template;
        delete options.template;
        Object.assign(prop, options);
        Object.defineProperty(target, key, {
            value: prop
        });
    };
}
