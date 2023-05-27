import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { AccountsList } from './accounts-list';

const Story: ComponentMeta<typeof AccountsList> = {
  component: AccountsList,
  title: 'Components/AccountsList',
};
export default Story;

const Template: ComponentStory<typeof AccountsList> = (args) => (
  <AccountsList {...args} />
);

export const Default = Template.bind({});
Default.args = {};
