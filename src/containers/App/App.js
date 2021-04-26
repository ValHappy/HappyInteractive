import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { animateScroll as scroll } from "react-scroll";

//Navegation
import { BrowserRouter as Router, Route } from 'react-router-dom';

//My containers
import Home from '../Home/Home';
import NavBar from '../../components/NavBar/NavBar';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Project from '../../components/Project';

import logo from '../../assets/logo.svg'
import Provider from './Provider';

function App() {
  const classes = useStyle();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Router>
      <Provider>
        <div className={classes.nav}>
          <img src={logo} className={classes.logo} alt="Logo" onClick={scrollToTop} />
          <NavBar />
        </div>
        <div className={classes.app}>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/project" component={Project} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </div>
      </Provider>
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
    position: 'fixed',
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
    height: '85%',
  },
}));

export default App;
