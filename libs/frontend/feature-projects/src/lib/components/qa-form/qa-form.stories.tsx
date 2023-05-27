import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { QAForm } from './qa-form';

const Story: ComponentMeta<typeof QAForm> = {
  component: QAForm,
  title: 'Components/QAForm',
};
export default Story;

const Template: ComponentStory<typeof QAForm> = (args) => <QAForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
