import React from 'react'
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app_body">
       {/* Sidebar */}
      <Sidebar/>  
      {/* Feed */}
      <Feed/>
      {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
