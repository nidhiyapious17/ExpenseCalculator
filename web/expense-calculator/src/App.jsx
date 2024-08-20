import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Home from "./components/home/Home";
import UserContext from "./context/UserContext";
import Layout from "./components/navigation/Layout";
import Income from "./components/income/Income";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<Layout />}>
              {/* <Route path="/dashboard" element={<DashBoard />} /> */}
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
              <Route path="/income" element={<Income />} />
            </Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
