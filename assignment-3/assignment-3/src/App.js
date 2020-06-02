/*********************************************************************************
* WEB422 – Assignment 03
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
* of this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: Matheus Fernando Leitao Student ID: 148 300 171 Date: 06/17/2019
*
********************************************************************************/

import React from 'react';
import Teams from './Teams';
import Car from './Car';

import './App.css';

function App() {
  let urlAPI = "https://floating-everglades-82678.herokuapp.com/";
  return (
    <div>
      <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Assignment 3 - Team Details</a>
            </div>    
          </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Car />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
