import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from './app';

const Story: ComponentMeta<typeof App> = {
  component: App,
  title: 'App',
};
export default Story;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
