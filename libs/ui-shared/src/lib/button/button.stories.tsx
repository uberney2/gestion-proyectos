import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PencilIcon } from '../icon-svg';
import { Button } from './button';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const IconButton = Template.bind({});

Primary.args = {
  text: 'Primary',
  disabled: false,
  variant: 'primary',
};

Secondary.args = {
  text: 'Secondary',
  disabled: false,
  variant: 'secondary',
};

IconButton.args = {
  text: 'Secondary',
  disabled: false,
  variant: 'secondary',
  type: 'icon',
  icon: <PencilIcon width={20} />,
};
