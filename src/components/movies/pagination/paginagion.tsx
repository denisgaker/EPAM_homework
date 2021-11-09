import React, { FC } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import { useLocation } from 'react-router-dom';
import Url from 'url-parse';
import useActions from '../../../hooks/useActions';
import useTypeSelector from '../../../hooks/useTypeSelector';
// import pages from '../movieList.constants';
import styles from './style';

interface StyledPaginationProps extends WithStylesProps<typeof styles> {}

const Pagination:FC<StyledPaginationProps> = ({ classes }) => {
  const { limit, total } = useTypeSelector((state) => state.movies);
  const { fetchMovies } = useActions();
  const { search } = useLocation();
  const urlParams = new Url(search, true);
  const pages = Array.from({ length: total / 9 }, (v, i) => i + 1);
  /* console.log('Делим общее кол-во на 9: ', total / 9);
  console.log('Получаем остаток от деления на 9: ', total % 9); */
  // console.log('Получаем количество страниц: ', Math.ceil(total / 9));
  return (
    <div className={classes.pagination}>
        {pages.map((pageNum) => (
          <div
            onClick={() => fetchMovies(
              pageNum, limit, urlParams.query.query, urlParams.query.searchBy,
            )}
            className={classes.page}
            key={pageNum}>
            {pageNum}
          </div>
        ))}
      </div>
  );
};

const styledPagination = withStyles(styles)(Pagination);

export default styledPagination;
