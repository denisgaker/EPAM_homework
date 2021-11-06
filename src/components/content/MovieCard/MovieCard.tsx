import React, { FC } from 'react';
import { MovieCardProps } from './MovieCard.interface';

const MovieCard:FC<MovieCardProps> = ({
  title,
  description,
  year,
  genre,
}) => (
    <>
      <h3>{title}</h3>
      <span>{year}</span>
      <p>{description}</p>
      <span>{genre}</span>
    </>
);

export default MovieCard;
