import type { ComponentStory, ComponentMeta } from '@storybook/react';
import SvgExitIcon from './ExitIcon';

const Story: ComponentMeta<typeof SvgExitIcon> = {
  component: SvgExitIcon,
  title: 'icons/ExitIcon',
};
export default Story;

const Template: ComponentStory<typeof SvgExitIcon> = (args) => (
  <div
    style={{ padding: '5px', backgroundColor: 'grey', display: 'inline-block' }}
  >
    <SvgExitIcon {...args} />
  </div>
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
