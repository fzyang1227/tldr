import React from 'react';
import './App.css';
import App2 from './components/app';
import Header from './components/header';

function App() {

  return (
    <div>
      <Header title="tl;dr" rightIcon="fas fa-gear"/>
      <App2/ >
    </div> 
  );
}

export default App;
