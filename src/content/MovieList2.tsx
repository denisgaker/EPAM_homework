import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypeSelector';
import ImageHelper from './imagehelper/ImageHelper';
import MovieCard from './MovieCard/MovieCard';

const MovieList2: React.FC = () => {
  const { error, loading, movies } = useTypeSelector((state) => state.movies);
  const { fetchMovies } = useActions();

  useEffect(() => {
    fetchMovies();
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
        <div className="MovieCard" key={movie.id}>
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
    </>
  );
};

export default MovieList2;
