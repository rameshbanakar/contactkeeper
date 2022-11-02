import React, { useContext, useState ,useEffect} from "react";
import AlertContext from "../../context/alert/AlertContext";
import AuthContext from "../../context/auth/AuthContext";
const Register = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { register,error ,clearError} = authContext;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Enter the all the fields", "danger");
    } else if (password !== password2) {
      setAlert("password not matching", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  useEffect(()=>{
    if(error==="user already exists"){
      setAlert(error,"danger")
      clearError()
    }
  },[error])
  return (
    <div className="form-container">
      <h3>Account Registration</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
          <br />
        </div>
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
            required
            minLength={6}
          />
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password:</label>
          <br />
          <input
            type="text"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength={6}
          />
          <br />
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
