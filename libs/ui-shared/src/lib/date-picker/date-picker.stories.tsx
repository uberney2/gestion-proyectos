import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { DatePickerComponent } from './date-picker';

const Story: ComponentMeta<typeof DatePickerComponent> = {
  component: DatePickerComponent,
  title: 'Components/DatePickerComponent',
};
export default Story;

const Template: ComponentStory<typeof DatePickerComponent> = (args) => (
  <div style={{ width: 400 }}>
    <DatePickerComponent
      selected={new Date()}
      onChange={() => console.log(Date)}
    />
  </div>
);

export const Default = Template.bind({});

Default.args = {};
