import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Post() {
  const params = useParams();
  const [post, setPost] = useState({
    title: "",
    body: "",
    createdAt: "",
    postedBy: {
      username: "Anonymous",
      profilePic:"default_user.png"
    },
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${params.id}`).then((res) => {
      setPost(res.data);
    });
  }, [params.id]);
  function showUserPosts() {
    window.location.pathname = `${post.postedBy.username}/posts/`;
  }

  return (
    <div className="mt-5">
      <h1
        style={{ fontSize: 100 }}
        className="font-weight-bold text-capitalize"
      >
        {post.title}
      </h1>
      <div className="mt-4">
        <img
          src={`http://localhost:5000/uploads/profiles/${post.postedBy.profilePic}`}
          alt="profile"
          width="24"
          height="24"
          style={{ objectFit: "cover", cursor: "pointer", borderRadius: 12 }}
          onClick={showUserPosts}
        />
        <p className="font-weight-light d-inline" style={{ fontSize: 10 }}>
          <span className="btn btn-link" onClick={showUserPosts}>
            {post["postedBy"]["username"]
              ? post["postedBy"]["username"]
              : "Anonymous"}
          </span>{" "}
          - <span>{new Date(post["createdAt"]).toUTCString()}</span>
        </p>
      </div>
      <img
        src={`http://localhost:5000/uploads/posts/${post.postImage}`}
        alt="post"
        height="600"
        width="100%"
        style={{ objectFit: "cover" }}
        className="d-block mx-auto"
      />
      <div className="mt-4 mb-5 text-left container">{post.body}</div>
    </div>
  );
}

export default Post;
