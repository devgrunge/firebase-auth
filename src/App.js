import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../src/Routes/Routes';
import Login from './pages/Login';

function App() {

  const [user, setUser] = useState(null);

  if( user === null ){
    return(
      <Login/>
    )
  }


  return (
    <BrowserRouter>
      <Header />

      <Routes />


      <Footer />

    </BrowserRouter>

  );
}

export default App;
