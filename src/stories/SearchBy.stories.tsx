import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBy from './SearchBy';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SearchBy',
  component: SearchBy,
} as ComponentMeta<typeof SearchBy>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBy> = (args) => <SearchBy {...args} />;

export const SearchByStory = Template.bind({});
