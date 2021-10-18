import * as React from 'react';
import { Datats } from './Data';
import Header from './header/header/Header';
import Heading from './header/header/Heading';
import Search from './header/search/Search';
// import MovieList2 from './content/MovieList2';
// import MovieList from './content/MovieList';
// import ErrorBoundary from './errorBoundary/ErrorBoundary';
import Footer from './footer/footer/Footer';
import SocLinks from './footer/SocLinks';
import './style.css';
import Copyright from './footer/copyright/Copyright';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Default from './pages/Default';

const NameApp = Datats.main.nameApp;
const SearchCTA = Datats.main.searchCTA;
const SearchPlaceholder = Datats.main.searchPlaceholder;
const SearchBtnText = Datats.main.searchBtnText;

const App = (): React.ReactElement => (
  <>
    <Header>
      <Heading name={NameApp} />
      <Search
        searchCTA={SearchCTA}
        searchPlaceholder={SearchPlaceholder}
        searchBtnText={SearchBtnText}
      />
    </Header>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Default} />
      </Switch>
    </BrowserRouter>
    <Footer>
      <Copyright name={NameApp} />
      <SocLinks />
    </Footer>
  </>
);

export default App;
