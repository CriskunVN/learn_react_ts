import React, { useState } from 'react';
import Header from './layout/Header';
import Homepage from './pages/Homepage';
import Footer from './layout/Footer';
import CreatePizzaPage from './pages/CreatePizzaPage';

function App() {
 


  return (
    <div className="App">
      <Header/>
      <Homepage/>
      {/* <CreatePizzaPage/> */}
      <Footer/>
    </div>
  );
}

export default App;
