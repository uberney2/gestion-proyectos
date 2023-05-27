import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProcessForm } from './process-form';

const Story: ComponentMeta<typeof ProcessForm> = {
  component: ProcessForm,
  title: 'Components/ProcessForm',
};
export default Story;

const Template: ComponentStory<typeof ProcessForm> = (args) => (
  <ProcessForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
