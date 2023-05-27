import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { TooltipComponent } from './tooltip';

const Story: ComponentMeta<typeof TooltipComponent> = {
  component: TooltipComponent,
  title: 'Components/TooltipComponent ',
};
export default Story;

const Template: ComponentStory<typeof TooltipComponent> = (args) => {
  return (
    <TooltipComponent anchorSelect="#tooltip-id" content="Test" place="top" />
  );
};

export const Default = Template.bind({});

Default.args = {};
