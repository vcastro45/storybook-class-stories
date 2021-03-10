# Storybook Class Stories

ECMAScript / TypeScript decorator for class-style Storybook stories.

This library fully depends on storybook 6.x, so please read its README before using this library.

[![npm](https://img.shields.io/npm/v/storybook-class-stories.svg)](https://www.npmjs.com/package/storybook-class-stories)

## Install

```bash
npm i -S storybook-class-stories
```

## Decorators

- `@Story`
- `@Template`

## Example

```ts
import { createButton } from './Button'
import { Story, Template } from 'storybook-class-stories'

const HtmlTemplate = ({ label, ...args }) => {
  return createButton({ label, ...args })
}

@Story({
  title: 'New way/Button Class'
})
class ButtonStory {
  @Template({
    template: HtmlTemplate.bind({}),
    args: {
      label: 'Button',
      primary: true
    }
  })
  Primary: Function

  @Template({
    template: HtmlTemplate.bind({}),
    args: { label: 'Button' }
  })
  Secondary: Function
}

module.exports = ButtonStory

```

is equivalent to

```ts
import { createButton } from './Button'
import { Story, Template } from 'storybook-class-stories'

const HtmlTemplate = ({ label, ...args }) => {
  return createButton({ label, ...args })
}

export default {
  title: 'New way/Button Class'
}

export const Primary = HtmlTemplate.bind({})

Primary.args = {
      label: 'Button',
      primary: true
    }


export const Secondary = HtmlTemplate.bind({})

Secondary.args = { label: 'Button' }
```

## License

[MIT](http://opensource.org/licenses/MIT)