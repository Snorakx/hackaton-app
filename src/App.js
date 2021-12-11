import React from "react";
import "./App.css";
import StartPage from "./pages/StartPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StartPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
