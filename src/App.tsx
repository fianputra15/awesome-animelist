import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import Anime from './page/Anime';
import './index.css';
import Collection from './page/Collection';
import CollectionDetail from './page/ListCollection';
// import AnimeProvider from './context/AnimeContext';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/collection" exact render={() => <Collection />} />
          <Route
            path="/anime/collection/:id"
            exact
            render={() => <CollectionDetail />}
          />
          <Route path="/anime/:id" exact render={() => <Anime />} />
          <Route path="/" exact render={() => <Home />} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default App;
