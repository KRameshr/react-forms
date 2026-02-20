import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <div className="container d-flex justify-content-center align-items-center min-vh-100 py-5">
          <div style={{ width: "100%", maxWidth: "500px" }}>
            <Home />
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
