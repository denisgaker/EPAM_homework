import * as React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import datats from './Data';
import { SearchCTA, SearchPlaceholder, SearchBtnText } from './components/header/search/constants';
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

const NameApp = datats.main.nameApp;

const App = (): React.ReactElement => (
  <>
    <Router>
      <Header>
        <Heading name={NameApp} />
        <Search
          searchCTA={SearchCTA}
          searchPlaceholder={SearchPlaceholder}
          searchBtnText={SearchBtnText}
        />
      </Header>
      <Switch>
        <Route path="/film/:film" component={MoviePage} />
        <Route exact path="/films" component={MovieList2} />
        <Route path="/404" component={Page404} />
        <Route exact path="/" component={DefaultPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
    <Footer>
      <Copyright name={NameApp} />
      <SocLinks />
    </Footer>
  </>
);

export default App;
