import React from 'react';
import logo from './logo.svg';
import './App.css';

type childProps= {
  children?: React.ReactNode
}
function App({children}: childProps) {
  return (
    <div>{children}</div>
  );
}

export default App;
