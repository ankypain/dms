import React from "react";
import "antd/dist/reset.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { Toaster } from "react-hot-toast";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
