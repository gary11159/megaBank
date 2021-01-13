import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Table from './components/table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Table/>
      </header>
    </div>
  );
}

export default App;
