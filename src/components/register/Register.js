import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  // Created a user object
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
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
    <div className="register">
      {console.log("User", user)}
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter password"
        onChange={handleChange}
      />
      <div className="button">Register</div>
      <div>or</div>
      <div className="button">Login</div>
    </div>
  );
};

export default Register;
