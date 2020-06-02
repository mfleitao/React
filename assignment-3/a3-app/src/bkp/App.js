import React from 'react';
import './App.css';
import TeamCard from './TeamCard';
import ListTeams from './ListTeams';

function App() {
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
        <ListTeams />
      </div>
    </div>
  );
}

export default App;
