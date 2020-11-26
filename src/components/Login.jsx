import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form>
      <Input type="text" placeholder="password" />
      <Input type="password" placeholder="password" />
      <button type="submit">Login</button>)
    </form>
  );
}

export default Login;
