import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypeSelector';
import ImageHelper from './imagehelper/ImageHelper';
import MovieCard from './MovieCard/MovieCard';
import { Link, useLocation } from 'react-router-dom';

// ! TODO: Попробовать через useRef сравнить fetchMovies разных версий
// ! TODO: Мемомизировать fetchMovies

const MovieList2: React.FC = () => {
  const { error, loading, movies, page, limit } = useTypeSelector((state) => state.movies);
  const { fetchMovies } = useActions();
  const pages = [1, 2, 3, 4, 5];
  const { search } = useLocation();
  const searchParamsFromUrl = search.split(/&|=/);

  useEffect(() => {
    fetchMovies(page, limit, searchParamsFromUrl[3], searchParamsFromUrl[1]);
  }, []);

  if (loading) {
    return <h2>Идёт загрузка</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/film/${movie.id}`}>
          <div className="MovieCard">
            <ImageHelper imagePath={movie.poster_path} />
            <MovieCard
              title={movie.title + ` | id = ${movie.id}`}
              description={movie.overview}
              year={movie.release_date}
              genre={movie.genres.join(', ')}
              key={movie.id}
            />
          </div>
        </Link>
      ))}
      <div className="pagination">
        {pages.map((p) => (
          <div onClick={() => fetchMovies(p)} className="page" key={p}>
            {p}
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList2;
