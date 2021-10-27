import * as React from 'react';
import { Datats } from './Data';
import Header from './header/header/Header';
import Heading from './header/header/Heading';
import Search from './header/search/Search';
import Footer from './footer/footer/Footer';
import SocLinks from './footer/SocLinks';
import './style.css';
import Copyright from './footer/copyright/Copyright';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DefaultPage from './pages/DefaultPage';
import MovieList2 from './content/MovieList2';
import MoviePage from './pages/MoviePage';
import Page404 from './pages/Page404';

const NameApp = Datats.main.nameApp;
const SearchCTA = Datats.main.searchCTA;
const SearchPlaceholder = Datats.main.searchPlaceholder;
const SearchBtnText = Datats.main.searchBtnText;

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
        <Route exact path="/" component={DefaultPage} />
        <Route exact path="/films" component={MovieList2} />
        <Route path="/film/:film" component={MoviePage} />
        <Route path="/404" component={Page404} />
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
