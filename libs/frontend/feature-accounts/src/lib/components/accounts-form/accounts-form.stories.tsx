import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { AccountsForm } from './accounts-form';

const Story: ComponentMeta<typeof AccountsForm> = {
  component: AccountsForm,
  title: 'Components/AccountsForm',
};
export default Story;

const Template: ComponentStory<typeof AccountsForm> = (args) => (
  <AccountsForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
