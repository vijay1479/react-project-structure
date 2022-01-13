import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainRouter from "./App.routing";
import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Layout className="layout">
      <Router>
        <MainRouter />
      </Router>
    </Layout>
  );
}

export default App;
