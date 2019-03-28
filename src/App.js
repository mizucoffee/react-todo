import React from 'react'
import { createStore } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Top from './components/pages/Top';
import List from './components/pages/List';
import Add from './components/pages/Add';
import Show from './components/pages/Show';

import tasksReducer from './reducers/tasks';
import { Provider } from 'react-redux';

const store = createStore(tasksReducer)

const App = () => (
  <BrowserRouter>
    <div>
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={Top} />
          <Route exact path='/list' component={List} />
          <Route exact path='/add' component={Add} />
          <Route path='/show/:id' component={Show} />
        </Switch>
      </Provider>
    </div>
  </BrowserRouter>
)

export default App