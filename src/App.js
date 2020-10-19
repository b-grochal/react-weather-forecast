import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './layout/Navbar';
import Main from './layout/Main';
import Footer from './layout/Footer';

function App() {
  return (
    <Router>
        <Navbar />
        <Main />
        <Footer />
    </Router>
    
  );
}

export default App;
