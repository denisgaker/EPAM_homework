import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypeSelector';
import './style.css';

interface Film {
  film: string;
}

const MoviePage = (): React.ReactElement => {
  const film: Film = useParams();
  const { setMovieId, fetchMovies } = useActions();
  const { page, limit, movieId } = useTypeSelector((state) => state.movies);
  console.log('movieId: ', movieId);
  useEffect(() => {
    setMovieId(film.film);
    fetchMovies(page, limit, movieId);
  }, []);
  return <h1>Страница с фильмом (id: {film.film})</h1>;
};

export default MoviePage;

/* const thisFilm = movies.filter((m) => {
   return m.id === +film.film;
 });
 const f = thisFilm[0];
 return (
   <div className="filmPage">
     <ImageHelper imagePath={f.poster_path} />
     <div className="filmDesc">
       <h1>{f.title}</h1>
       <p>{f.overview}</p>
     </div>
   </div>
 ); */
