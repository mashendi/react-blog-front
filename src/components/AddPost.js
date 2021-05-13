import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [postImage, setPostImage] = useState("");

  const history = useHistory();

  async function addPost(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("body", body);
      formData.append("createdAt", new Date());
      formData.append("tags", tags);
      formData.append("postImage", postImage);

      await axios.post("http://localhost:5000/posts", formData, {
        "Content-Type": "multipart/form-data",
      });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <Form
        className="mt-5 w-50 mx-auto border rounded p-4"
        onSubmit={addPost}
        encType="multipart/form-data"
      >
        <Form.Group controlId="username" className="mt-2">
          <Form.Control
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Form.Group>

        <Form.Group controlId="body" className="mt-2">
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="Post Body"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </Form.Group>

        <Form.Group controlId="tags" className="mt-2">
          <Form.Control
            type="text"
            placeholder="Tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="postImage" className="mt-2">
          <Form.File
            id="postImage"
            onChange={(e) => setPostImage(e.target.files[0])}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-2" block>
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddPost;
