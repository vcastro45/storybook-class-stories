import { createButton } from './Button'
import { Story, Template } from '../../../../src'
import ButtonFixture from './Button.fixture'

@Story({
  title: 'New way/Button',
  fixtureClass: ButtonFixture,
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
  @Template({
    template: (data) => createButton(data),
    args: {
      primary: true,
      label: 'Button'
    }
  })
  Primary

  @Template((data) => createButton(data))
  Secondary

  @Template((data) => createButton(data))
  Success
}

module.exports = ButtonStory
