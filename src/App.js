import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import HomePage from "./pages/home/HomePage";
import Services from "./pages/services/Services";
import ServicesDetailes from "./pages/services/Services_detailes";
// import RefreshToken from "./pages/auth/RefreshToken";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route element={<RefreshToken />}> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service_detailes/:slug" element={<ServicesDetailes />}/>
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
