import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader } from './loader';

const Story: ComponentMeta<typeof Loader> = {
  component: Loader,
  title: 'Components/Loader',
};
export default Story;

const Template: ComponentStory<typeof Loader> = (args) => <Loader />;

export const Default = Template.bind({});

Default.args = {};
