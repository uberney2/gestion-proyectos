import type { ComponentStory, ComponentMeta } from '@storybook/react';
import SvgPersonIcon from '../icon-svg/PersonIcon';
import SvgPerficientIcon from '../icon-svg/PerficientIcon';
import { Header } from './navbar';
import { BrowserRouter } from 'react-router-dom';

const Story: ComponentMeta<typeof Header> = {
  component: Header,
  title: 'Components/Header',
};

export default Story;

const Template: ComponentStory<typeof Header> = (args) => (
  <BrowserRouter>
    <Header {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  user: { name: 'John Doe', avatar: <SvgPersonIcon width={50} /> },
  tool: 'Delia',
  logo: <SvgPerficientIcon width={130} />,
  items: [
    {
      itemName: 'Accounts',
      url: 'Dashboard/Accounts',
    },
    {
      itemName: 'Projects',
      url: 'Dashboard/Projects',
    },
  ],
};
