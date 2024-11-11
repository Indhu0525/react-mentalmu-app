import React from 'react';
import MainContent from './components/maincontent/maincontent';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import './output.css';
function App() {
  return (
    <div>
      

      <Header />
    <div className="App flex">
    
       <Sidebar />
      {/* <MainContent />  */}
       
    </div>
    </div>
  );
}

export default App;