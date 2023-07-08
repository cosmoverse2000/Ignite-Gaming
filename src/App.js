import React from "react";
//styles
import GlobalStyles from "../src/components/GlobalStyles";
//pages and components
import Home from "../src/pages/Home";
import Nav from "./components/Nav";
//router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Axios-Redux" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
