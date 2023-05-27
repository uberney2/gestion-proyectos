import type { ComponentStory, ComponentMeta } from '@storybook/react';
import SvgChevronRightIcon from './ChevronRightIcon';

const Story: ComponentMeta<typeof SvgChevronRightIcon> = {
  component: SvgChevronRightIcon,
  title: 'icons/ChevronRightIcon',
};
export default Story;

const Template: ComponentStory<typeof SvgChevronRightIcon> = (args) => (
  <SvgChevronRightIcon {...args} />
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
  stroke: '#000',
};
