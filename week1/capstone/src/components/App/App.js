import React, { useState } from 'react';
import Metronome from "../../Metronome"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
import useToken from './useToken';
import Logout from '../Logout/Logout'
import Navbar from '../Navbar/Navbar'

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

export default function App() {
  const { token, setToken } = useToken();
//   const [token, setToken] = useState();
 
  if(!token) {
    return <Login setToken={setToken} />
    
  }
  else {}
      return (
    <div className="wrapper">
 <BrowserRouter>
      <Navbar/>
        <h1>Metronome</h1>
        {token? <Logout setToken={setToken} /> :""}
     
        <Routes>
          <Route path="/dashboard"element={<Dashboard/>}/>
          
          <Route path="/preferences"element={<Preferences/>}/>
          
          <Route path="/metronome"element={<Metronome/>}/>

        </Routes>
      </BrowserRouter>
       
    </div>
      );
    
      }