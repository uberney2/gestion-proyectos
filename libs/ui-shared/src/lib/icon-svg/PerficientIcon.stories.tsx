import type { ComponentStory, ComponentMeta } from '@storybook/react';
import SvgPerficientIcon from './PerficientIcon';

const Story: ComponentMeta<typeof SvgPerficientIcon> = {
  component: SvgPerficientIcon,
  title: 'icons/PencilIcon',
};
export default Story;

const Template: ComponentStory<typeof SvgPerficientIcon> = (args) => (
  <SvgPerficientIcon {...args} />
);

export const Primary = Template.bind({});
Primary.argTypes = {
  fill: {
    control: 'color',
  },
};
Primary.args = {
  width: '50',
  height: '50',
};
