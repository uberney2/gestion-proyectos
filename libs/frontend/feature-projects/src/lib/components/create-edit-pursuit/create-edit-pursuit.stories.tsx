import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CreateEditPursuit } from './create-edit-pursuit';

const Story: ComponentMeta<typeof CreateEditPursuit> = {
  component: CreateEditPursuit,
  title: 'Components/CreateEditPursuit',
};
export default Story;

const Template: ComponentStory<typeof CreateEditPursuit> = (args) => (
  <CreateEditPursuit {...args} />
);

export const Default = Template.bind({});
Default.args = {};
