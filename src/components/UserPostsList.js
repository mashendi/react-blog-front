import React, { useEffect, useState } from "react";
import axios from "axios";

import PostListItem from "./PostListItem";

function UserPostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users${window.location.pathname}`)
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="container mt-5">
      {posts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </div>
  );
}

export default UserPostsList;
