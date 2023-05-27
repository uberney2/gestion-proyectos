import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './dropdown';

const Story: ComponentMeta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Components/Dropdown',
};
export default Story;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <div style={{ width: 400 }}>
    <Dropdown {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  placeholder: 'DROP DOWN',
  options: [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
  ],
  isDisabled: false,
};
