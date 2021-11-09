import React, { useEffect, FC } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import { Link, useLocation } from 'react-router-dom';
import Url from 'url-parse';
import useActions from '../../hooks/useActions';
import useTypeSelector from '../../hooks/useTypeSelector';
import ImageHelper from './imagehelper/ImageHelper';
import MovieCard from './MovieCard/MovieCard';
import Pagination from './pagination/paginagion';
import styles from './style';
// import pages from './movieList.constants';

interface StyledMovieListProps extends WithStylesProps<typeof styles> {}

// ! TODO: Попробовать через useRef сравнить fetchMovies разных версий
// ! TODO: Мемомизировать fetchMovies

const MovieList2:FC<StyledMovieListProps> = ({ classes }) => {
  const {
    error, loading, movies, page, limit,
  } = useTypeSelector((state) => state.movies);
  const { fetchMovies } = useActions();
  const { search } = useLocation();
  const urlParams = new Url(search, true);

  useEffect(() => {
    fetchMovies(page, limit, urlParams.query.query, urlParams.query.searchBy);
  }, []);

  if (loading) {
    return (
      <div className={classes.movieList}>
        <h1>Идёт загрузка</h1>;
      </div>
    );
  }
  if (error) {
    return (
      <div className={classes.movieList}>
        <h2>{error}</h2>;
      </div>
    );
  }
  return (
    <div className={classes.movieList}>
      {movies.map(({
        id, poster_path, title, overview, release_date, genres,
      }) => (
        <Link key={id} to={`/film/${id}`}>
          <div className={classes.MovieCard}>
            <ImageHelper path={poster_path} />
            <MovieCard
              title={title}
              description={overview}
              year={release_date}
              genre={genres.join(', ')}
              key={id}
            />
          </div>
        </Link>
      ))}
      <Pagination />
    </div>
  );
};

const StyledMovieList2 = withStyles(styles)(MovieList2);

export default StyledMovieList2;
