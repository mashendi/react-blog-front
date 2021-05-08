import React, { useEffect, useState } from "react";
import axios from "axios";

import PostListItem from "./PostListItem";
function showPost(id) {
  window.location.pathname = `/posts/${id}`
}

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="container">
      {posts.map((post) => (
        <PostListItem key={post._id} post={post} onclick={showPost(post._id)} />
      ))}
    </div>
  );
}

export default PostList;
