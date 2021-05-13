import React, { useContext, useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };
      await axios.post("http://localhost:5000/users/login", loginData);
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <Form className="mt-5 w-25 mx-auto rounded border p-4" onSubmit={login}>
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

        <Button variant="primary" type="submit" className="mt-2" block>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
