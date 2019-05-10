import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        <List />
      </div>
    </main>
  );
}

export default App;
