import * as React from 'react';
import {MovieCardProps} from './MovieCard.interface';
import '../style.css';

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  description,
  year,
  genre,
}: MovieCardProps) => {
  return (
    <>
      <h3>{title}</h3>
      <span className="year">{year}</span>
      <p>{description}</p>
      <span className="genre">{genre}</span>
    </>
  );
};

export default MovieCard;
