import React from 'react';
import './App.css';
import TodoContainer from './components/todo/TodoContainer';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { history } from './store';
import About from 'components/about/About';

function App() {
  return (
    <ConnectedRouter history={history}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">TodoList</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <TodoContainer />
        </Route>
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
