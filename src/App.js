

import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Landing-Page/Home'
import About from './components/About-Section/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills-Sectino/Skills'

import Marginner from './components/Marginner'
import Contact from './components/Contact-Section/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
<Router>


<div className = 'App'>
<div className='layer'>

  <Route path = '/' exact>
    <Home/>
    <Marginner/>
    <About/>
    <Marginner/>
   <Skills/>
   <Marginner/>
   <Projects/>
   <Marginner/>
   <Contact/>
   
   <Footer/>
  </Route>
  <Route path = '/about'>
    <About/>
  </Route>
    </div>
    </div>
</Router>

   
  );
}

export default App;
