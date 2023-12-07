import React from "react";
import "./App.css";
import "./index.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router";
import NotFountPage from "./components/NotFountPage";
import Details from "./components/Details";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="lg:mx-5">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/details/:id" element={<Details />} />
        <Route path="*" element={<NotFountPage />} />
      </Routes>
    </div>
  );
};

export default App;
