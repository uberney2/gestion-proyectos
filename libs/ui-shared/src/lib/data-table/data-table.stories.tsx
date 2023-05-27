import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { DataTable } from './data-table';

const Story: ComponentMeta<typeof DataTable> = {
  component: DataTable,
  title: 'Components/Data Table',
};
export default Story;

const Template: ComponentStory<typeof DataTable> = (args) => (
  <DataTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      name: 'Baylor Scott & White Health',
      portfolio: 'Lorem Ipsum',
      buOwner: 'Dallas',
      keyPeople: 'Christine Thornton',
    },
    {
      name: 'Baylor Scott & White Health',
      portfolio: 'Lorem Ipsum',
      buOwner: 'Dallas',
      keyPeople: 'Christine Thornton',
    },
    {
      name: 'Baylor Scott & White Health',
      portfolio: 'Lorem Ipsum',
      buOwner: 'Dallas',
      keyPeople: 'Christine Thornton',
    },
    {
      name: 'Baylor Scott & White Health',
      portfolio: 'Lorem Ipsum',
      buOwner: 'Dallas',
      keyPeople: 'Christine Thornton',
    },
    {
      name: 'Baylor Scott & White Health',
      portfolio: 'Lorem Ipsum',
      buOwner: 'Dallas',
      keyPeople: 'Christine Thornton',
    },
    {
      name: 'Baylor Scott & White Health',
      portfolio: 'Lorem Ipsum',
      buOwner: 'Dallas',
      keyPeople: 'Christine Thornton',
    },
    {
      name: 'Baylor Scott & White Health',
      portfolio: 'Lorem Ipsum',
      buOwner: 'Dallas',
      keyPeople: 'Christine Thornton',
    },
    {
      name: 'Baylor Scott & White Health',
      portfolio: 'Lorem Ipsum',
      buOwner: 'Dallas',
      keyPeople: 'Christine Thornton',
    },
    {
      name: 'Baylor Scott & White Health',
      portfolio: 'Lorem Ipsum',
      buOwner: 'Dallas',
      keyPeople: 'Christine Thornton',
    },
    {
      name: 'Baylor Scott & White Health',
      portfolio: 'Lorem Ipsum',
      buOwner: 'Dallas',
      keyPeople: 'Christine Thornton',
    },
    {
      name: 'Baylor Scott & White Health',
      portfolio: 'Lorem Ipsum',
      buOwner: 'Dallas',
      keyPeople: 'Christine Thornton',
    },
    {
      name: 'Baylor Scott & White Health',
      portfolio: 'Lorem Ipsum',
      buOwner: 'Dallas',
      keyPeople: 'Christine Thornton',
    },
    {
      name: 'Baylor Scott & White Health',
      portfolio: 'Lorem Ipsum',
      buOwner: 'Dallas',
      keyPeople: 'Christine Thornton',
    },
  ],

  columns: [
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Portfolio',
      accessorKey: 'portfolio',
    },
    {
      header: 'BU Owner',
      accessorKey: 'buOwner',
    },
    {
      header: 'key People',
      accessorKey: 'keyPeople',
    },
  ],
  postsPerPage: 6,
  pagesLimit: 3,
  pagination: true,
};
