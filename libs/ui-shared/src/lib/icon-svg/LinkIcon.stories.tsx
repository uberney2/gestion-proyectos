import type { ComponentStory, ComponentMeta } from '@storybook/react';
import SvgLinkIcon from './LinkIcon';

const Story: ComponentMeta<typeof SvgLinkIcon> = {
  component: SvgLinkIcon,
  title: 'icons/LinkIcon',
};
export default Story;

const Template: ComponentStory<typeof SvgLinkIcon> = (args) => (
  <SvgLinkIcon {...args} />
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
