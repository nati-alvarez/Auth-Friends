import React, {useReducer} from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';

import reducer from "./reducers/index";

import ProtectedRoute from "./ProtectedRoute";
import Home from "./components/Home";
import FriendsList from "./components/FriendsList";

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
        <ProtectedRoute path="/friends" component={FriendsList}/>
      </Switch>
    </div>
  );
}

export default App;
