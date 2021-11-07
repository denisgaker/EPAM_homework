import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StyledSearchBy from './SearchBy';

export default {
  title: 'SearchBy',
  component: StyledSearchBy,
  argTypes: {
    backgroundColor: { control: 'color' },
    label1: { control: 'text' },
    label2: { control: 'text' },
  },
} as ComponentMeta<typeof StyledSearchBy>;

const Template: ComponentStory<typeof StyledSearchBy> = (args) => <StyledSearchBy {...args} />;

export const StyledSearchByStory = Template.bind({});
