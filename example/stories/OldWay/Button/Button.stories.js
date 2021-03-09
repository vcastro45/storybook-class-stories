import { createButton } from './Button'

export default {
  title: 'Old way/Button',
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    onClick: { action: 'onClick' },
  },
}

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args })
}

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Old way Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Old way Button'
}
