import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { KeyPeopleList } from './key-people-list';

const Story: ComponentMeta<typeof KeyPeopleList> = {
  component: KeyPeopleList,
  title: 'Components/KeyPeopleList',
};
export default Story;

const Template: ComponentStory<typeof KeyPeopleList> = (args) => (
  <KeyPeopleList {...args} />
);

export const Default = Template.bind({});
Default.args = {};
