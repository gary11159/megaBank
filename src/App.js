import React from 'react';
import './App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Table from './components/table';
import Logo from './public/logo.svg';

function App() {
  return (
    <div className="App">
      <div className="headerRow">
        <a className="logo">
          <h1 style={{margin: '0 auto'}}>
            <img src={Logo} alt="兆豐logo"></img>
          </h1>
        </a>
      </div>
      <header className="App-header">
        <Table/>
      </header>
    </div>
  );
}

export default App;
