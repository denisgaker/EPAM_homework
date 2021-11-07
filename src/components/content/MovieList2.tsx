import React, { useEffect, FC } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import { Link, useLocation } from 'react-router-dom';
import useActions from '../../hooks/useActions';
import useTypeSelector from '../../hooks/useTypeSelector';
import ImageHelper from './imagehelper/ImageHelper';
import MovieCard from './MovieCard/MovieCard';
import stylesMovieList2 from './stylesMovieList2';

interface StyledMovieListProps extends WithStylesProps<typeof stylesMovieList2> {}

// ! TODO: Попробовать через useRef сравнить fetchMovies разных версий
// ! TODO: Мемомизировать fetchMovies

const MovieList2:FC<StyledMovieListProps> = ({ classes }) => {
  const {
    error, loading, movies, page, limit,
  } = useTypeSelector((state) => state.movies);
  const { fetchMovies } = useActions();
  const pages = [1, 2, 3, 4, 5];
  const { search } = useLocation();
  const searchParamsFromUrl = search.split(/&|=/);
  /**
   * Структура массива searchParamsFromUrl:
   * searchParamsFromUrl: ['?searchBy', 'title', 'query', 'Transformers']
   */

  useEffect(() => {
    fetchMovies(page, limit, searchParamsFromUrl[3], searchParamsFromUrl[1]);
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
      {movies.map((movie) => (
        <Link key={movie.id} to={`/film/${movie.id}`}>
          <div className={classes.MovieCard}>
            <ImageHelper imagePath={movie.poster_path} />
            <MovieCard
              title={movie.title}
              description={movie.overview}
              year={movie.release_date}
              genre={movie.genres.join(', ')}
              key={movie.id}
            />
          </div>
        </Link>
      ))}
      <div className={classes.pagination}>
        {pages.map((p) => (
          <div
            onClick={() => fetchMovies(p, limit, searchParamsFromUrl[3], searchParamsFromUrl[1])}
            className={classes.page}
            key={p}>
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

const StyledMovieList2 = withStyles(stylesMovieList2)(MovieList2);

export default StyledMovieList2;
