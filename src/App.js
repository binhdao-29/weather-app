import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/weather-app" element={<Main />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
