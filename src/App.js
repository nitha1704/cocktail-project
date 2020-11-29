import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Error from "./pages/Error"
import About from './pages/About'
import Contact from './pages/Contact'

// Placeholder Pages
import CocktailSinglePage from './pages/placeholder-pages/CocktailSinglePage'

// Component
import Navbar from './components/Navbar'

// CSS
import "./css/style.css";
import "./css/responsive.css";

// Plugin
import "./plugins/bootstrap-4.0.0-dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/cocktail/:id">
            <CocktailSinglePage />
          </Route>
          <Route path="/*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
