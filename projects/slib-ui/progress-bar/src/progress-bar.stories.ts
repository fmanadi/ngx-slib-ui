// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SlProgressBar } from './progress-bar';

export default {
  title: 'Example/ProgressBar',
  component: SlProgressBar,
  argTypes: {
    value: { control: 'number' },
  },
} as Meta;

const Template: Story<SlProgressBar> = (args: SlProgressBar) => ({
  props: args,
});

export const Complete = Template.bind({});
Complete.args = {
  value: 100,
};

export const Half = Template.bind({});
Half.args = {
  value: 50,
};

export const Empty = Template.bind({});
Empty.args = {
  value: 0,
};
