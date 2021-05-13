import React from "react";

function PostListItem({ post }) {
  function showPost() {
    window.location.pathname = `/posts/${post._id}`;
  }
  function showUserPosts() {
    window.location.pathname = `/${post.postedBy.username}/posts`;
  }
  return (
    <div className="row border m-3 rounded w-75 mx-auto">
      <div className="col-3 p-4">
        <img
          src={`http://localhost:5000/uploads/posts/${post.postImage}`}
          alt="post"
          width="160"
          height="160"
          style={{ objectFit: "cover", cursor: "pointer" }}
          className="rounded d-block mx-auto"
          onClick={showPost}
        />
      </div>
      <div className="col-9 text-left p-4">
        <h2
          className="font-weight-bold text-capitalize"
          onClick={showPost}
          style={{ cursor: "pointer" }}
        >
          {post.title}
        </h2>
        <p className="font-weight-light">{post.body}</p>
        <div className="mt-4">
        <img
          src={`http://localhost:5000/uploads/profiles/${post.postedBy.profilePic}`}
          alt="profile"
          width="24"
          height="24"
          style={{ objectFit: "cover", cursor: "pointer", borderRadius:12}}
          onClick={showUserPosts}
        />
          <p className="font-weight-light d-inline" style={{ fontSize: 10 }}>
            <span className="btn btn-link" onClick={showUserPosts}>
              {post.postedBy.username ? post.postedBy.username : "Anonymous"}
            </span>{" "}
            - <span>{new Date(post["createdAt"]).toUTCString()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostListItem;
