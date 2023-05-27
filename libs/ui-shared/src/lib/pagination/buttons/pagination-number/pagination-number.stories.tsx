import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaginationNumber } from './pagination-number';

const Story: ComponentMeta<typeof PaginationNumber> = {
  title: 'Components/Pagination/Pagination-number',
  argTypes: {
    page: {
      description: 'Number displayed in the button',
    },
    selected: {
      description: 'Whether the number represents the current page or not',
    },
  },
};
export default Story;

const Template: ComponentStory<typeof PaginationNumber> = (args) => (
  <PaginationNumber {...args} />
);

export const Selected = Template.bind({});
export const NonSelected = Template.bind({});

Selected.args = {
  page: 2,
  selected: true,
};

NonSelected.args = {
  page: 3,
  selected: false,
};
