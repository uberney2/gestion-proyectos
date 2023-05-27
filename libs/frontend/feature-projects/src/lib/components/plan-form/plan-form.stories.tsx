import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PlanForm } from './plan-form';

const Story: ComponentMeta<typeof PlanForm> = {
  component: PlanForm,
  title: 'Components/PlanForm',
};
export default Story;

const Template: ComponentStory<typeof PlanForm> = (args) => (
  <PlanForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
