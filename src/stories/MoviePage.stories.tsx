import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MoviePage from './MoviePage';

export default {
  title: 'MoviePage',
  component: MoviePage,
} as ComponentMeta<typeof MoviePage>;

const Template: ComponentStory<typeof MoviePage> = (args) => <MoviePage {...args} />;

export const MoviePageComponent = Template.bind({});
