import React from 'react';
import logo from './logo.svg';
import './App.css';

import { StubNavbar } from "./components/specific/StubNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div >
      <StubNavbar/>
    </div>
  );
}

export default App;
