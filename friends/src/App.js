import React, {useReducer} from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';

import reducer from "./reducers/index";

import Home from "./components/Home";

function App() {
  const initialState = {
    friends: []
  }
  
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
