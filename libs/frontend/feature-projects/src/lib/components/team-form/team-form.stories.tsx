import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { TeamForm } from './team-form';

const Story: ComponentMeta<typeof TeamForm> = {
  component: TeamForm,
  title: 'Components/TeamForm',
};
export default Story;

const Template: ComponentStory<typeof TeamForm> = (args) => (
  <TeamForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
