import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Prehomepage from './pages/Prehomepage';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Layout from './component/Layout';


function App() {
  const [count, setCount] = useState(0)

  return (
  

    <Router>
      <Routes>
         <Route path="/" element={<Prehomepage/>}/>
          <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  
   
  )
}

export default App
