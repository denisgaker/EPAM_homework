import React from 'react';
import { useParams } from 'react-router-dom';
import ImageHelper from '../content/imagehelper/ImageHelper';
// import MovieCard from '../content/MovieCard/MovieCard';
import { useTypeSelector } from '../hooks/useTypeSelector';
import './style.css';

interface Film {
  film: string;
}

const MoviePage = () => {
  const film: Film = useParams();
  const { movies } = useTypeSelector((state) => state.movies);
  const thisFilm = movies.filter((m) => {
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
  );
  // return <h1>Страница с фильмом</h1>;
};

export default MoviePage;
