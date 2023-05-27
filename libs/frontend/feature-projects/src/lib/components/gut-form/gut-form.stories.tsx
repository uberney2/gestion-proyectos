import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { GutForm } from './gut-form';

const Story: ComponentMeta<typeof GutForm> = {
  component: GutForm,
  title: 'Components/GutForm',
};
export default Story;

const Template: ComponentStory<typeof GutForm> = (args) => (
  <GutForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
