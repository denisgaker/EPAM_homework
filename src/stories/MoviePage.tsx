import React, { ReactElement } from 'react';
import ImageHelper from '../components/movies/imagehelper/ImageHelper';
import '../pages/style.css';

const MoviePage = ({
  movie = {
    title: 'Transformers: The Last Knight',
    overview: 'Autobots and Decepticons are at war, with humans on the sidelines. Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth.',
    poster_path: 'https://image.tmdb.org/t/p/w500/s5HQf2Gb3lIO2cRcFwNL9sn1o1o.jpg',
  },
  urlParams = {
    film: '335988',
  },
}):ReactElement => {
  console.log('Страница с фильмом');
  return (
    <div className="filmPage" onLoad={() => ImageHelper('filmPage')}>
      <h1 style={{ width: '100%', textAlign: 'center' }}>
        Страница с фильмом | id = {urlParams.film}
      </h1>
      <img src={movie.poster_path} alt={movie.title} />
      <div className="filmDesc">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MoviePage;
