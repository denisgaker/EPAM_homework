import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageHelper from '../content/imagehelper/ImageHelper';
import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypeSelector';
import './style.css';

interface Film {
  film: string;
}

const MoviePage = (): React.ReactElement => {
  const film: Film = useParams();
  const { setMovieId, fetchMovieForId } = useActions();
  const { movieId, movie } = useTypeSelector((state) => state.movies);
  useEffect(() => {
    setMovieId(film.film);
    fetchMovieForId(movieId);
  }, []);
  return (
    <div className="filmPage">
      <ImageHelper imagePath={movie.poster_path} />
      <div className="filmDesc">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
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
