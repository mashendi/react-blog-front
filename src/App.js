import React from "react";
import Router from "./routes/Router";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";

import "./App.css";

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Router />
      </div>
    </AuthContextProvider>
  );
}

export default App;
