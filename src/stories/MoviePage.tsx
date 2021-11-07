import React, { ReactElement } from 'react'; // //, { useEffect }
// //import { useParams } from 'react-router-dom';
import ImageHelper from '../components/movies/imagehelper/ImageHelper';
// //import useActions from '../hooks/useActions';
// //import useTypeSelector from '../hooks/useTypeSelector';
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
    <div className="filmPage">
      <h1 style={{ width: '100%', textAlign: 'center' }}>
        Страница с фильмом | id = {urlParams.film}
      </h1>
      <ImageHelper path={movie.poster_path} />
      <div className="filmDesc">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MoviePage;
