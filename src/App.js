import './App.css';
import React from 'react'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Footer></Footer>
    </div>
  );
}

export default App;
