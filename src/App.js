import React, {Component} from 'react';
import logo from './vehicle-logo.png';
import './App.css';

import VehicleMilageForm from './components/VechileMilageForm';

function App() {
    
  
  return (
    <div className="Apps" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title" >VEHICLE MILEAGE SYSTEM</h1>
        <div className="info" ss><a href="https://www.sunnyflour.com" target="_blank" ><p>Developed <i className="fa fa-heart"></i> by Muhammad Anees Adrees </p></a></div>
      
      </header>

    <section>

     <VehicleMilageForm/>

    </section>
   </div>
  ) 
};

export default App;
