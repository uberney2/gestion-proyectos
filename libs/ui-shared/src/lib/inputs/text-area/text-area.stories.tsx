import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from './text-area';

export const Story: ComponentMeta<typeof TextArea> = {
  component: TextArea,
  title: 'Inputs/Text Area',
  argTypes: {
    errorMessage: {
      description: 'Message that will appear on error',
    },
    error: {
      description: 'Set to true in case you want to display an error message',
    },
  },
};
export default Story;

const Template: ComponentStory<typeof TextArea> = (args) => {
  return <TextArea {...args} />;
};

export const Primary = Template.bind({});
export const Disabled = Template.bind({});
export const CustomSized = Template.bind({});
export const Error = Template.bind({});

Primary.args = {
  placeholder: 'This is a placeholder',
};

CustomSized.args = {
  placeholder: 'This is a custom sized text area',
  style: {
    height: '200px',
    width: '400px',
  },
};

Disabled.args = {
  defaultValue: 'This is not a placeholder, this is a disabled text area',
  disabled: true,
};

Error.args = {
  defaultValue: 'This is an error text area',
  error: true,
  errorMessage: 'Oops, there was an error',
};
