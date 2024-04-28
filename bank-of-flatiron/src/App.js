import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js';
import Table from './components/Table.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>The Royal Bank of Flatiron</p>
      </header>
      <Form />
      <Table />
    </div>
  );
}

export default App;
