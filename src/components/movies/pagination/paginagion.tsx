import React, { FC } from 'react';
import withStyles, { WithStylesProps } from 'react-jss';
import { useLocation } from 'react-router-dom';
import Url from 'url-parse';
import useActions from '../../../hooks/useActions';
import useTypeSelector from '../../../hooks/useTypeSelector';
import styles from './style';

interface StyledPaginationProps extends WithStylesProps<typeof styles> {}

const Pagination:FC<StyledPaginationProps> = ({ classes }) => {
  const { limit, total, page } = useTypeSelector((state) => state.movies);
  const { fetchMovies, setMoviePage } = useActions();

  const { search } = useLocation();
  const urlParams = new Url(search, true);

  const allPages = Array.from({ length: Math.ceil(total / 9) }, (v, i) => i + 1);
  let pages = [];
  if (page <= 5) {
    pages = allPages.slice(0, 11);
  } else {
    pages = allPages.slice(page - 6, page + 5);
  }

  const clickHelper = (p: number) => {
    fetchMovies(p, limit, urlParams.query.query, urlParams.query.searchBy);
    setMoviePage(p);
  };

  return (
    <div className={classes.pagination}>
        <div
          className={[classes.page, classes.start].join(' ')}
          onClick={() => clickHelper(1)}
        >
          To the begining
        </div>
        {pages.map((pageNum) => (
          <div
            onClick={() => clickHelper(pageNum)}
            className={ (page === pageNum) ? [classes.page, classes.active].join(' ') : classes.page }
            key={pageNum}>
            {pageNum}
          </div>
        ))}
        <div
          className={[classes.page, classes.end].join(' ')}
          onClick={() => clickHelper(allPages.length)}
        >
          To the end
        </div>
      </div>
  );
};

const styledPagination = withStyles(styles)(Pagination);

export default styledPagination;
