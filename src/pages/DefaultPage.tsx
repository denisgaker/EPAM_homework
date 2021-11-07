import React, { FC } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import stylesMovieList2 from '../components/movies/style';

interface StyledDefaultPageProps extends WithStylesProps<typeof stylesMovieList2> {}

const DefaultPage:FC<StyledDefaultPageProps> = ({ classes }) => (
  <div className={classes.movieList}>
    <h1>0</h1>
  </div>
);

const styledDefaultPage = withStyles(stylesMovieList2)(DefaultPage);

export default styledDefaultPage;
