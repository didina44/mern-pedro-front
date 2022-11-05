import "./App.css";
import Public2 from './components2/Public2'
import apiClient from "./access/http-common";
import { useQuery } from 'react-query'
import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
//import Navbar from "./components2/Navbar";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    
    <div className="App">

     <Routes>
       <Route exact path="/" element={<Public2 />} />
     </Routes>
          
    </div>
  );
}

export default App;

