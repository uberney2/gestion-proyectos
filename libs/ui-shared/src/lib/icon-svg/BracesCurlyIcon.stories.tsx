import type { ComponentStory, ComponentMeta } from '@storybook/react';
import SvgBracesCurlyIcon from './BracesCurlyIcon';

const Story: ComponentMeta<typeof SvgBracesCurlyIcon> = {
  component: SvgBracesCurlyIcon,
  title: 'icons/BracesCurlyIcon',
};
export default Story;

const Template: ComponentStory<typeof SvgBracesCurlyIcon> = (args) => (
  <SvgBracesCurlyIcon {...args} />
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
