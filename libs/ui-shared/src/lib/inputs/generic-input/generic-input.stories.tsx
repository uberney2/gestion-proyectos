import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChevronRightIcon } from '../../icon-svg';
import { GenericInput } from './generic-input';

const Story: ComponentMeta<typeof GenericInput> = {
  component: GenericInput,
  title: 'Inputs/Generic Input',
  argTypes: {
    errorMessage: {
      description: 'Message that will appear on error',
    },
    error: {
      description: 'Set to true in case you want to display an error message',
    },
    type: {
      description: 'Same property as in a normal input text',
    },
  },
};
export default Story;

const Template: ComponentStory<typeof GenericInput> = (args) => {
  return (
    <div style={{ width: 670 }}>
      <GenericInput {...args} />
    </div>
  );
};

export const Small = Template.bind({});
export const NormalIcon = Template.bind({});
export const MedDisabled = Template.bind({});
export const Error = Template.bind({});

Small.args = {
  defaultValue: 5,
  type: 'text',
  width: '30px',
  height: '30px',
};

MedDisabled.args = {
  defaultValue: 'This is a med disabled input',
  type: 'text',
  disabled: true,
  width: '300px',
};

NormalIcon.args = {
  defaultValue: 5,
  type: 'number',
  icon: <ChevronRightIcon />,
  placeholder: 'The best',
};

Error.args = {
  defaultValue: 'Woah, some error is happening here',
  error: true,
  type: 'text',
  errorMessage: 'Oops, there was an error',
  icon: <ChevronRightIcon />,
};
