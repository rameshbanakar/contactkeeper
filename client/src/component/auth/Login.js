import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("login submitted");
  };
  return (
    <div className="form-container">
      <h3>User Login</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <br />
           
          <input type="email" name="email" value={email} onChange={onChange}  required/>
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            minLength={6}
            required
          />
          <br />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
