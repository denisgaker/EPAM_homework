import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageHelper from '../content/imagehelper/ImageHelper';
import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypeSelector';
import './style.css';

interface IdFromUrl {
  film: string;
}

const MoviePage = (): React.ReactElement => {
  const urlParams: IdFromUrl = useParams();
  const { fetchMovieForId } = useActions();
  const { movie } = useTypeSelector((state) => state.movies);
  useEffect(() => {
    fetchMovieForId(urlParams.film);
  }, []);
  console.log('urlParams: ', urlParams.film, '\nТип данных: ', typeof urlParams.film);
  return (
    <div className="filmPage">
      <h1 style={{ width: '100%', textAlign: 'center' }}>
        Страница с фильмом | id = {urlParams.film}
      </h1>
      <ImageHelper imagePath={movie.poster_path} />
      <div className="filmDesc">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MoviePage;
