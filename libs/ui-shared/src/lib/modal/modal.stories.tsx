import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './modal';

const Story: ComponentMeta<typeof Modal> = {
  component: Modal,
  title: 'Components/Modal',
};
export default Story;

const Template: ComponentStory<typeof Modal> = (args) => {
  return <Modal {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  children: <p>content</p>,
  isVisible: false,
  position: 'right',
  title: 'Key People',
};
