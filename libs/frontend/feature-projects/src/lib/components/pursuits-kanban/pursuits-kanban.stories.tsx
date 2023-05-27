import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PursuitsKanban } from './pursuits-kanban';

const Story: ComponentMeta<typeof PursuitsKanban> = {
  component: PursuitsKanban,
  title: 'Components/PursuitsKanban',
};
export default Story;

const Template: ComponentStory<typeof PursuitsKanban> = (args) => (
  <PursuitsKanban {...args} />
);

export const Default = Template.bind({});
Default.args = {};
