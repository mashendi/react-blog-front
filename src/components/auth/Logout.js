import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../context/AuthContext";

function LogoutBtn() {
  const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();
  async function Logout() {
    await axios.get("http://localhost:5000/users/logout");
    await getLoggedIn();
    history.push("/")
  }

  return (
    <button onClick={Logout} className="btn btn-link" style={{outline: "none"}}>
      Logout
    </button>
  );
}

export default LogoutBtn;
