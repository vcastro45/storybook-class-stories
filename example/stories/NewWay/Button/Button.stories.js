import { createButton } from './Button'
import { Story, Template as StoryTemplate } from '../../../../dist'

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args })
}

@Story({
  title: 'New way/Button Class',
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    onClick: { action: 'onClick' },
  }
})
class ButtonStory {
  @StoryTemplate({
    template: Template.bind({}),
    args: {
      primary: true,
      label: 'Button'
    }
  })
  Primary

  @StoryTemplate({
    template: Template.bind({}),
    args: {
      label: 'Button'
    }
  })
  Secondary
}

module.exports = ButtonStory
