import * as React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import datats from './Data';
import Header from './components/header/Header';
import Heading from './components/header/heading/Heading';
import Search from './components/header/search/Search';
import Footer from './components/footer/footer/Footer';
import SocLinks from './components/footer/SocLinks';
import './style.css';
import Copyright from './components/footer/copyright/Copyright';

import DefaultPage from './pages/DefaultPage';
import MovieList2 from './components/content/MovieList2';
import MoviePage from './pages/MoviePage';
import Page404 from './pages/Page404';

const { nameApp } = datats.main;

const App = (): React.ReactElement => (
  <>
    <Router>
      <Header>
        <Heading name={nameApp} />
        <Search searchBtnText={''} />
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
      <Copyright name={nameApp} />
      <SocLinks />
    </Footer>
  </>
);

export default App;
