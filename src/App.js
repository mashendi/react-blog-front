import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import PostList from "./components/PostList";
import Post from "./components/Post";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/posts/:id" component={Post} />
        <Route path="/posts" component={PostList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
