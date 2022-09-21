import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login";
import React from "react";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";

function App() {
  const [verify, setVerify] = useState(false);

  const dashboard = () => {
    setVerify(true);
  };

  const login = () => {
    setVerify(false);
  };

  return (
    <div className="App">
      {verify ? (
        <Dashboard setVerify={login} />
      ) : (
        <Login setVerify={dashboard} />
      )}
    </div>
  );
}

export default App;
