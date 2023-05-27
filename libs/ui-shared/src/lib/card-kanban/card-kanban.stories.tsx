import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardKanban, dimensionStatus } from './card-kanban';

const Story: ComponentMeta<typeof CardKanban> = {
  component: CardKanban,
  title: 'Components/CardKanban',
};
export default Story;

const Template: ComponentStory<typeof CardKanban> = (args) => (
  <div style={{ width: 241 }}>
    <CardKanban {...args} />
  </div>
);

export const Default = Template.bind({});

const diemnsionStatus: dimensionStatus = {
  team: { status: 'Good' },
  plan: { status: 'Warning' },
  process: { status: 'Bad' },
  QA: { status: 'Not Defined' },
  gut: { status: 'Good' },
};

Default.args = {
  pursuitName: 'PursuitTest',
  accountName: 'AccountTest',
  portfolioName: 'PortfolioTest',
  usaPointOfContact: 'User',
  dimension: diemnsionStatus,
  lastUpdated: '28/02/2013',
};
