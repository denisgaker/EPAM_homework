import React, { useEffect, FC } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import { useParams } from 'react-router-dom';
import useActions from '../hooks/useActions';
import useTypeSelector from '../hooks/useTypeSelector';
import styles from './style';

interface StyledMoviePageProps extends WithStylesProps<typeof styles> {}

interface IdFromUrl {
  film: string;
}

const MoviePage:FC<StyledMoviePageProps> = ({ classes }) => {
  const urlParams: IdFromUrl = useParams();
  const { fetchMovieForId } = useActions();
  const movies = useTypeSelector((state) => state.movies.movie);
  useEffect(() => {
    fetchMovieForId(urlParams.film);
  }, []);
  return (
    <div className={classes.filmPage}>
      <img src={movies.poster_path} alt={movies.title} />
      <div className={classes.filmDesc}>
        <h1>{movies.title}</h1>
        <p>{movies.overview}</p>
      </div>
    </div>
  );
};

const StyledMoviePage = withStyles(styles)(MoviePage);

export default StyledMoviePage;
