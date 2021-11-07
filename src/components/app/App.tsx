import React, { FC } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import withStyles, { WithStylesProps } from 'react-jss';
import Header from '../header/Header';
import Heading from '../header/heading/Heading';
import Search from '../header/search/Search';
import Footer from '../footer/footer/Footer';
import SocLinks from '../footer/SocLinks';
import styles from './style';
import Copyright from '../footer/copyright/Copyright';

import DefaultPage from '../../pages/DefaultPage';
import MovieList2 from '../movies/MovieList';
import MoviePage from '../../pages/MoviePage';
import Page404 from '../../pages/Page404';

import APP_NAME from './app.constants';

interface StyledAppProps extends WithStylesProps<typeof styles> {}

const App:FC<StyledAppProps> = ({ classes }) => (
  <div className={classes.app}>
    <Router>
      <Header>
        <Heading name={APP_NAME} />
        <Search />
      </Header>
      <Switch>
        <Route exact path="/" component={DefaultPage} />
        <Route exact path="/films" component={MovieList2} />
        <Route exact path="/film/:film" component={MoviePage} />
        <Route path="/404" component={Page404} />
        <Redirect to="/404" />
      </Switch>
    </Router>
    <Footer>
      <Copyright name={APP_NAME} />
      <SocLinks />
    </Footer>
  </div>
);

const StyledApp = withStyles(styles)(App);

export default StyledApp;
