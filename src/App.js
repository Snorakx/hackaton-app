import React from "react";
import "./App.css";
import StartPage from "./pages/StartPage";
import MainPage from "./pages/MainPage";
import ConfigureRoutePage from "./pages/ConfigureRoute"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StartPage/>}></Route>
        <Route exact path="/main" element={<MainPage/>}></Route>
        <Route exact path="/configureRoute" element={<ConfigureRoutePage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
