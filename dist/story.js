function getObjectProps(obj) {
    const excludedProps = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
    const p = {};
    for (; obj != null; obj = Object.getPrototypeOf(obj)) {
        const op = Object.getOwnPropertyNames(obj);
        for (const prop of op) {
            if (excludedProps.indexOf(prop) === -1 && !prop.startsWith('__'))
                p[prop] = obj[prop];
        }
    }
    return p;
}
export default function Story(options = {}) {
    return function (target) {
        const instance = new target();
        const story = {
            ...getObjectProps(instance),
            'default': options
        };
        return story;
    };
}
