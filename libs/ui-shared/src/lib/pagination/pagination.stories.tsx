import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageChangeParameters } from './ipage-change-params';
import { Pagination } from './pagination';

const totalPosts = 124;
const postsPerPage = 4;

const Story: ComponentMeta<typeof Pagination> = {
  component: Pagination,
  title: 'Components/Pagination',
  argTypes: {
    totalPosts: {
      description: 'Amount of results received',
    },
    pagesLimit: {
      description:
        'Number of pages that will be shown as a normal paginator before collapsing into an ellipsis one',
    },
    ellipsisRange: {
      description:
        'Number of buttons shown that represent a page in both sides of the ellipsis paginator. It must be higher than 1, and is recommended to use a max value of 5 for this property ',
    },
    showSelectedOnLeftUntil: {
      description:
        'The ellipsis paginator will show the selected page on its left side if the corresponding number is lower than this property, if it is not, it will show the selected page on its right side. This property cannot be equal or lower than the ellipsis range, and higher or 3 pages close to the final one, otherwise it will be equal to the half of the amount of pages',
    },
    onPageChange: {
      description:
        'Method that will be executed once a page is selected (and state changes)',
    },
    postsPerPage: {
      description: 'Number of results that will be shown per page',
    },
  },
};
export default Story;

const onPageChange = ({ currentPage }: PageChangeParameters) => {
  console.log(`Sending info to API with page ${currentPage}`);
};

const Template: ComponentStory<typeof Pagination> = (args) => {
  return <Pagination {...args} />;
};

export const CompletePagination = Template.bind({});

CompletePagination.args = {
  totalPosts: totalPosts,
  postsPerPage: postsPerPage,
  onPageChange: onPageChange,
  style: { width: '800px' },
};
