import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { DimensionStatusForm } from './dimension-status-form';

const Story: ComponentMeta<typeof DimensionStatusForm> = {
  component: DimensionStatusForm,
  title: 'Components/DimensionStatusForm',
};
export default Story;

const Template: ComponentStory<typeof DimensionStatusForm> = (args) => (
  <DimensionStatusForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
