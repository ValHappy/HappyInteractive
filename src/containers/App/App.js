import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Navegation
import { BrowserRouter as Router, Route } from 'react-router-dom';

//My containers
import Home from '../Home/Home';
import NavBar from '../../components/NavBar/NavBar';
import Project from '../Project/Project';
import About from '../About/About';
import Contact from '../Contact/Contact';

function App() {
  const classes = useStyle();

  return (
    <Router>
      <div className={classes.nav}>
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
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  app: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default App;
