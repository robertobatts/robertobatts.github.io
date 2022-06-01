import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import Resume from "./containers/resume/Resume";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
