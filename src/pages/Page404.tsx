import React, { FC } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import stylesMovieList2 from '../components/content/stylesMovieList2';

interface StyledPage404Props extends WithStylesProps<typeof stylesMovieList2> {}

const Page404:FC<StyledPage404Props> = ({ classes }) => (
  <div className={classes.movieList}>
    <h1>Такой страницы не существует</h1>;
  </div>
);

const styledtPage404 = withStyles(stylesMovieList2)(Page404);

export default styledtPage404;
