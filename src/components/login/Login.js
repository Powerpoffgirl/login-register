import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  // Created a user object
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //Created a handlechange function to read values
  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    // console.log(name, value);
    // Setting individual values
    setUser({
      ...user,
      [name]: value,
    });
  };

  // console.log("user", user);
  return (
    <div className="login">
      {console.log("User", user)}
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your Email"
        onChange={handleChange}
      />
      <input
        type="password"
        value={user.password}
        name="password"
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <div className="button">Login</div>
      <div>or</div>
      <div className="button">Register</div>
    </div>
  );
};

export default Login;
