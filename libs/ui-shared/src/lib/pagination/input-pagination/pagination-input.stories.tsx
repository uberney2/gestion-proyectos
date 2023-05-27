import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaginationInput } from './pagination-input';
import { useState } from 'react';
import { PageChangeParameters } from '../ipage-change-params';

const totalPosts = 240;
const postsPerPage = 4;

const Story: ComponentMeta<typeof PaginationInput> = {
  component: PaginationInput,
  title: 'Components/Pagination/Pagination Input',
  argTypes: {
    totalPosts: {
      description: 'Amount of results received',
    },
    postsPerPage: {
      description: 'Number of results that will be shown per page',
    },
  },
};
export default Story;

const Template: ComponentStory<typeof PaginationInput> = (args) => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = ({ currentPage }: PageChangeParameters) => {
    console.log(`Sending information to API with page ${currentPage}`);
    setCurrentPage(currentPage);
  };
  return (
    <PaginationInput
      {...args}
      currentPage={currentPage}
      onPageChange={onPageChange}
    />
  );
};

export const Normal = Template.bind({});

Normal.args = {
  totalPosts,
  postsPerPage,
};
