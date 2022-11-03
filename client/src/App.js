import './App.css';
import Landing from './components/landing/landing.jsx';
import Home from "./components/home/home.jsx"
import { Route, useLocation } from "react-router-dom";
import CountryDetail from "./components/country_detail/country_detail.jsx"
import Creator from './components/creator/creator';
import NavBar from './components/nav_bar/nav_bar';
import Footer from './components/footer/footer';

function App() {
  let location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      <Route exact path="/">
        <Landing/>
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/countryDetail/:id">
        <CountryDetail />
      </Route>
      <Route path="/country/create">
        <Creator />
      </Route>
      {location.pathname != "/" && <Footer />}
    </div>
  );
}

export default App;
