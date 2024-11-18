import React from 'react';
import MainContent from './components/maincontent/maincontent';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import './index.css';
import 'flowbite';
function App() {
  return (
    <div class="h-screen">
      

      <Header />
    <div className="App flex main">
       <Sidebar />
      <MainContent /> 
       
    </div>
    </div>
  );
}

export default App;