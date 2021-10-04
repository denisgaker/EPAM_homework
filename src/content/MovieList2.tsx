import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { fetchMovies } from '../store/action-creators/movie';

const MovieList2: React.FC = () => {
  const { error, loading, movies } = useTypeSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  console.log('movies: \n', movies[0] && movies[0].title);
  if (loading) {
    return <h2>Идёт загрузка</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return <div>movies</div>;
};

export default MovieList2;
