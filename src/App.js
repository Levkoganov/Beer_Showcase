// Dependncies
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Header/Navbar";
import Home from "./components/Pages/Home";
import Favorite from "./components/Pages/Favorite";

// Axios config
import "./config/baseUrl";

function App() {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
      </Routes>
    </div>
  );
}

export default App;
