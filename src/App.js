import React from 'react';
import './App.css';
import ViolationTableData from './violationtable';
import CalculateViolations from './calculateviolations';

function App() {

  return (
    <div className="App">
      <h6 className="is-size-1 tag is-warning">Code for canada Challage savan</h6><br/>
      <CalculateViolations/><br/><br/>
      <ViolationTableData/>
    </div>
  );
}

export default App;