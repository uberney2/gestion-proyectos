import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { KeyPeopleForm } from './key-people-form';

const Story: ComponentMeta<typeof KeyPeopleForm> = {
  component: KeyPeopleForm,
  title: 'Components/KeyPeopleForm',
};
export default Story;

const Template: ComponentStory<typeof KeyPeopleForm> = (args) => (
  <KeyPeopleForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
