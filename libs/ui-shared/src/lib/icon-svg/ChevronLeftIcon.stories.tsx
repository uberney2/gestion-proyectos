import type { ComponentStory, ComponentMeta } from '@storybook/react';
import SvgChevronLeftIcon from './ChevronLeftIcon';

const Story: ComponentMeta<typeof SvgChevronLeftIcon> = {
  component: SvgChevronLeftIcon,
  title: 'icons/ChevronLeftIcon',
};
export default Story;

const Template: ComponentStory<typeof SvgChevronLeftIcon> = (args) => (
  <SvgChevronLeftIcon {...args} />
);

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
Primary.argTypes = {
  fill: {
    control: 'color',
  },
  stroke: {
    control: 'color',
  },
};
Primary.args = {
  width: '50',
  height: '50',
  stroke: '#000',
};
