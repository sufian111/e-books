import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Top from './Component/Top/Top';
import Contect from './Component/Contect/Contect';
import PostDetail from './Component/PostDetail/PostDetail';
import All from './Component/All/All';

function App() {
  return (
    <Router>
      <Top></Top>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/contact-us">
          <Contect></Contect>
        </Route>
        <Route path="/blog">
          <All></All>
        </Route>
        <Route path="/detail/:id">
          <PostDetail></PostDetail>
        </Route>
        <Route path="*">
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
