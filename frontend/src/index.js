import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import BoardContainer from './containers/BoardContainer';
import BoardListContainer from './containers/BoardListContainer';
import BoardPostContainer from './containers/BoardPostContainer';
import BoardViewContainer from './containers/BoardViewContainer';

class App {
  static main() {
    render(
      <Router history={browserHistory}>
        <Route path="/" component={BoardContainer}>
          <IndexRoute component={BoardListContainer} />
          <Route path="post(/:boardIdx)" component={BoardPostContainer} />
          <Route path=":boardIdx" component={BoardViewContainer} />
        </Route>
      </Router>
      ,
      document.getElementById('app'),
    );
  }
}

App.main();
