import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypeSelector';
import ImageHelper from './imagehelper/ImageHelper';
import MovieCard from './MovieCard/MovieCard';
import { useHistory } from 'react-router-dom';

// ! TODO: Попробовать через useRef сравнить fetchMovies разных версий
// ! TODO: Мемомизировать fetchMovies

const MovieList2: React.FC = () => {
  const { error, loading, movies, page, limit } = useTypeSelector((state) => state.movies);
  const { fetchMovies } = useActions();
  const pages = [1, 2, 3, 4, 5];
  const history = useHistory();
  // console.log('movies: \n', movies);
  // console.log('history:', history);

  useEffect(() => {
    fetchMovies(page, limit);
    console.log('useEffect: ');
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
        <div
          className="MovieCard"
          key={movie.id}
          onClick={() => history.push('/films/' + movie.id)}
        >
          <ImageHelper imagePath={movie.poster_path} />
          <MovieCard
            title={movie.title}
            description={movie.overview}
            year={movie.release_date}
            genre={movie.genres.join(', ')}
            key={movie.id}
          />
        </div>
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
