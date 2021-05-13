import React, { useContext, useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("passwordVerify", passwordVerify);
      formData.append("profilePic", profilePic);

      await axios.post("http://localhost:5000/users", formData, {
        "Content-Type": "multipart/form-data",
      });
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <Form
        className="mt-5 w-50 mx-auto rounded border p-4"
        onSubmit={register}
        encType="multipart/form-data"
      >
        <Form.Group controlId="username" className="mt-2">
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </Form.Group>

        <Form.Group controlId="email" className="mt-2">
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>

        <Form.Group controlId="password" className="mt-2">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>

        <Form.Group controlId="passwordVerify" className="mt-2">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setPasswordVerify(e.target.value)}
            value={passwordVerify}
          />
        </Form.Group>

        <Form.Group controlId="profilePic" className="mt-2">
          <Form.File
            id="profilePic"
            onChange={(e) => setProfilePic(e.target.files[0])}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-2" block>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
