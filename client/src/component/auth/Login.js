import React, { useContext, useState, useEffect } from "react";
import AlertContext from "../../context/alert/AlertContext";
import AuthContext from "../../context/auth/AuthContext";
const Login = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { login, clearError, isAuthenticated, error } = authContext;
  const { setAlert } = alertContext;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (isAuthenticated) {
      //props.history.push("/")

      setAlert("User login success", "success");
      clearError();
    }
    if (error === "Invalid creditials") {
      setAlert(error, "danger");
      clearError();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Enter all credentials", "warning");
    } else {
      login({ email, password });
    }
  };
  return (
    <div className="form-container">
      <h3>User Login</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <br />

          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
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
