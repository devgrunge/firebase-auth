import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../src/Routes/Routes';
import Login from './pages/Login';

function App() {

  const [user, setUser] = useState(null);

  const actionLoginDataGoogle = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }

    setUser(newUser);

  }

  if (user === null) {
    return (
      <Login onReciveGoogle={actionLoginDataGoogle} />
    );
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
