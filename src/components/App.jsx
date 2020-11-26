//ternary and && operators
import React from "react";

import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {currentTime > 16 && <h1>Why r u still at work </h1>}
    </div>
  );
}

export default App;
