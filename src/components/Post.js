import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function Post(id) {
    const params = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/posts/${params.id}`).then(res => setPost(res.data));
    })


    return (
        <div>
            <h1>
                {post.title}
            </h1>
            <p>{post._id}</p>
            <p>{post.createdAt}</p>
            {post.body}
        </div>
    )
}

export default Post;
