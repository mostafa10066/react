import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks'
import Task from './components/Task'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
library.add(faTrash)
function App() {
  return (
      <Router>
    <div className="App">

    </div>
        <Switch>
          <Route exact path='/' component={Tasks} />
          <Route path='/task' component={Task} />
        </Switch>
      </Router>
  );
}

export default App;
