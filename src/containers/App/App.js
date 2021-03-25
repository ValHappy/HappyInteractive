import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { animateScroll as scroll } from "react-scroll";

//Navegation
import { BrowserRouter as Router, Route } from 'react-router-dom';

//My containers
import Home from '../Home/Home';
import NavBar from '../../components/NavBar/NavBar';
import Project from '../Project/Project';
import About from '../About/About';
import Contact from '../Contact/Contact';

import logo from '../../assets/logo.svg'

function App() {
  const classes = useStyle();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Router>
      <div className={classes.nav}>
        <img src={logo} className={classes.logo} alt="Logo" onClick={scrollToTop} />
        <NavBar />
      </div>
      <div className={classes.app}>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Project} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

const useStyle = makeStyles((theme) => ({
  nav: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '10%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: '1%',
  },
  logo: {
    width: '7%',
    marginLeft: '2.5em',
  },
  app: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '85vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default App;
