import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login";
import React from "react";

import { useState } from "react";
import { Dashboard } from "./components/Dashboard";

function App() {
  const [verify, setVerify] = useState(false);
  const [todo, setTodo] = useState([]);
  const [temporaryList, setTemporaryList] = useState([]);

  const dashboard = () => {
    setVerify(true);
  };

  const login = () => {
    setVerify(false);
  };

  const title = () => {
    document.title = "Nu Kenzie";
  };
  title();

  return (
    <div className="App">
      {verify ? (
        <Dashboard
          todo={todo}
          setTodo={setTodo}
          temporaryList={temporaryList}
          setTemporaryList={setTemporaryList}
          setVerify={login}
        />
      ) : (
        <Login setVerify={dashboard} />
      )}
    </div>
  );
}

export default App;
