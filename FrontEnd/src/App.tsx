import { useState } from 'react'
import "./index.css"
import './App.css'
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import Home from "./pages/Home";
import ServicioTecnico from './pages/ServicioTecnico';
import Login from "./pages/Login";
import RegisterUser from './pages/RegisterUser';
function App() {

  return (
    <>
      <Router>
        
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ServicioTecnico" element={<ServicioTecnico />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/RegisterUser" element={<RegisterUser />} />
            </Routes>
          
      </Router>
    </>
  )
}

export default App
