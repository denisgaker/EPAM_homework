import React, { FC, memo } from 'react';
import { MovieCardProps } from './MovieCard.interface';

const MovieCard:FC<MovieCardProps> = ({
  title,
  description,
  year,
  genre,
}) => (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <span><b>Жанр: </b>{genre}</span>
      <span><b>Дата выхода: </b>{year}</span>
    </>
);

export default memo(MovieCard);
