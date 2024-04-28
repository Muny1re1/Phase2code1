import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js';
import Table from './components/Table.js';
import SearchBar from './components/SearchBar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>The Royal Bank of Flatiron</p>
      </header>
      <SearchBar />
      <Form />
      <Table />
    </div>
  );
}

export default App;
