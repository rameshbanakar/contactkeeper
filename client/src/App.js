import { Navbar } from "./component/layout/Navbar";
import { Home } from "./component/layout/Home";
import { About } from "./component/layout/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactState from "./context/contact/ContactState"

function App() {
  return (
    <ContactState>
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
    </ContactState>
  );
}

export default App;
