import type { ComponentStory, ComponentMeta } from '@storybook/react';
import SvgDetailsIcon from './ExitIcon';

const Story: ComponentMeta<typeof SvgDetailsIcon> = {
  component: SvgDetailsIcon,
  title: 'icons/DetailsIcon',
};
export default Story;

const Template: ComponentStory<typeof SvgDetailsIcon> = (args) => (
  <div
    style={{ padding: '5px', backgroundColor: 'grey', display: 'inline-block' }}
  >
    <SvgDetailsIcon {...args} />
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
