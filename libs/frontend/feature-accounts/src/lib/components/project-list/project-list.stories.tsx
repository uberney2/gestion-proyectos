import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProjectList } from './project-list';

const Story: ComponentMeta<typeof ProjectList> = {
  component: ProjectList,
  title: 'Components/ProjectList',
};
export default Story;

const Template: ComponentStory<typeof ProjectList> = (args) => <ProjectList />;

export const Default = Template.bind({});
Default.args = {};
