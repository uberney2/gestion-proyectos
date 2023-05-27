/* eslint-disable react/jsx-no-useless-fragment */
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChevronRightIcon } from '../icon-svg';
import { Breadcrumb } from './breadcrumb';

const Story: ComponentMeta<typeof Breadcrumb> = {
  component: Breadcrumb,
  title: 'Components/Breadcrumb',
};
export default Story;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args}>
    <>Accounts</>
    <>Fossil</>
    <>F1</>
    <>F2</>
  </Breadcrumb>
);

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  separator: <ChevronRightIcon />,
};

Secondary.args = {
  separator: '/',
};
