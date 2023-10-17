import { Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App text-white mx-auto max-w-[1400px] ">
      <Navbar />
      {/* routes */}
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
