import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CreateEditAccount } from './create-edit-account';

const Story: ComponentMeta<typeof CreateEditAccount> = {
  component: CreateEditAccount,
  title: 'Components/CreateEditAccount',
};
export default Story;

const Template: ComponentStory<typeof CreateEditAccount> = (args) => (
  <CreateEditAccount {...args} />
);

export const Default = Template.bind({});
Default.args = {};
