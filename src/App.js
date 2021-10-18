import React, { useState, useLayoutEffect } from 'react';
import Dropdown from './components/Dropdown/Dropdown';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import Footer from './components/Footer/Footer';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages';
import about from './pages/about';
import Projects from './pages/projects';
import api from './pages/api';
import other from './pages/other';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  useLayoutEffect(() => {
    window.scrollTo(0,0)
  }, [location.pathname])

  return (
    <>
    <GlobalStyle/>
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle = {toggle}/>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={about} /> 
      <Route path='/projects' component={Projects} />
      <Route path='/api' component={api} /> 
      <Route path='/other' component={other} />
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
