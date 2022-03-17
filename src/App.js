import React from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes/>


      <Footer />

    </BrowserRouter>

  );
}

export default App;
