import { Navbar } from "./component/layout/Navbar";
import { Home } from "./component/layout/Home";
import { About } from "./component/layout/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import AlertState from "./context/alert/AlertState";
import Alerts from "./component/Alerts";

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <BrowserRouter>
            <Navbar />
            <div className="container">
              <Alerts/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </BrowserRouter>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
