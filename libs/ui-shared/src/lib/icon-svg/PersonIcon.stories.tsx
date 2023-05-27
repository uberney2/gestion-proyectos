import type { ComponentStory, ComponentMeta } from '@storybook/react';
import SvgPersonIcon from './PersonIcon';

const Story: ComponentMeta<typeof SvgPersonIcon> = {
  component: SvgPersonIcon,
  title: 'icons/PersonIcon',
};
export default Story;

const Template: ComponentStory<typeof SvgPersonIcon> = (args) => (
  <SvgPersonIcon {...args} />
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
