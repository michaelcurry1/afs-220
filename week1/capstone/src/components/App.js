import React, { Component } from 'react';
import Metronome from "../Metronome"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Preferences from './Preferences/Preferences';

export default class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
      
      };
    
    }
    render() {
     
  
      return (
    <div className="wrapper">
        <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard"element={<Dashboard/>}/>
          
          <Route path="/preferences"element={<Preferences/>}/>
          
          <Route path="/metronome"element={<Metronome/>}/>

        </Routes>
      </BrowserRouter>
       
    </div>
      );
    }
}