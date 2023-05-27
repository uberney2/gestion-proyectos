import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { StatusLabel } from './status-label';

const Story: ComponentMeta<typeof StatusLabel> = {
  component: StatusLabel,
  title: 'Components/StatusLabel',
};
export default Story;

const Template: ComponentStory<typeof StatusLabel> = (args) => (
  <div style={{ width: 100 }}>
    <StatusLabel {...args} />
  </div>
);

export const Good = Template.bind({});
export const Warning = Template.bind({});
export const Bad = Template.bind({});
export const NotDefined = Template.bind({});

Good.args = {
  text: 'Label',
  status: 'Good',
};

Warning.args = {
  text: 'Label',
  status: 'Warning',
};

Bad.args = {
  text: 'Label',
  status: 'Bad',
};

NotDefined.args = {
  text: 'Label',
  status: 'Not Defined',
};
