import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PursuitsForm } from './pursuits-form';

const Story: ComponentMeta<typeof PursuitsForm> = {
  component: PursuitsForm,
  title: 'Components/PursuitsForm',
};
export default Story;

const Template: ComponentStory<typeof PursuitsForm> = (args) => (
  <PursuitsForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
