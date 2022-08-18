import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import Anime from './page/Anime';
import './index.css';
// import AnimeProvider from './context/AnimeContext';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/anime/:id" exact render={() => <Anime />} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default App;
