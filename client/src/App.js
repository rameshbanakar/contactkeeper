import { Navbar } from "./component/layout/Navbar";
import { Home } from "./component/layout/Home";
import { About } from "./component/layout/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ContactState from "./context/contact/ContactState";
//import AuthState from "./context/auth/AuthState";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import AlertState from "./context/alert/AlertState";
import Alerts from "./component/Alerts";
import setAuthToken from "./utils/setAuthToken";
//import PrivateRoute from "./component/privateRouting/PrivateRoute";
import AuthContext from "./context/auth/AuthContext";
import { useContext } from "react";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  // console.log(isAuthenticated)
  return (
    <ContactState>
      <AlertState>
        <Router>
          <Navbar />
          <div className="container">
            <Alerts />
            <Routes>
              <Route
                path="/"
                element={
                  !isAuthenticated && !loading ? (
                    <Navigate to="/login" replace={true} />
                  ) : (
                    <Home />
                  )
                }
              />

              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </AlertState>
    </ContactState>
  );
};

export default App;
