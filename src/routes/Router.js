import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "../components/layout/Navbar";
import PostList from "../components/PostList";
import Post from "../components/Post";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import AuthContext from "../context/AuthContext";
import AddPostBtn from "../components/layout/AddPostBtn";
import AddPost from "../components/AddPost";
import Footer from "../components/layout/Footer";
import UserPostsList from "../components/UserPostsList";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route exact path="/posts/:id" component={Post} />
        <Route exact path="/create" component={AddPost} />
        <Route exact path="/posts" component={UserPostsList} />
        <Route exact path="/:username/posts" component={UserPostsList} />
        {loggedIn === false ? (
          <>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </>
        ) : (
          <></>
        )}
      </Switch>
      {loggedIn === true ? <AddPostBtn /> : <></>}
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
