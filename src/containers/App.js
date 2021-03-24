import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Navegation
import { BrowserRouter as Router, Route } from 'react-router-dom';

//My containers
import Home from './Home/Home';


function App() {
  const classes = useStyle();

  return (
    <Router>
      <div className={classes.app}>
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

const useStyle = makeStyles((theme) => ({
  app: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default App;
