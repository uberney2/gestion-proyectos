import type { ComponentStory, ComponentMeta } from '@storybook/react';
import SvgPencilIcon from './PencilIcon';

const Story: ComponentMeta<typeof SvgPencilIcon> = {
  component: SvgPencilIcon,
  title: 'icons/PencilIcon',
};
export default Story;

const Template: ComponentStory<typeof SvgPencilIcon> = (args) => (
  <SvgPencilIcon {...args} />
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
