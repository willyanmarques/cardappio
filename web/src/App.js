import React from 'react';
import './App.css';
import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';


function App() {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <Header />
      <div className="app-main">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
