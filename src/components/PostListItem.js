import React from "react";

function showPost(id) {
  window.location.pathname = `/posts/${id}`;
}

function PostListItem({ post }) {
  return (
    <div className="card my-2">
      <div className="card-body" onClick={showPost(post._id)}>
        {post.title}
      </div>
    </div>
  );
}

export default PostListItem;
