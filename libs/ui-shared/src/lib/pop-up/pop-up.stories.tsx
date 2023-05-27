import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PopUp } from './pop-up';

const Story: ComponentMeta<typeof PopUp> = {
  component: PopUp,
  title: 'Components/PopUp',
};
export default Story;

const Template: ComponentStory<typeof PopUp> = (args) => {
  return <PopUp {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <p>Are you sure you want to cancel the creation of this process?</p>
      <p> All the information currently filled will be lost.</p>
    </>
  ),
  isVisible: true,
  buttonMessage: 'Cancel',
};
