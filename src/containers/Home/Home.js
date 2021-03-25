import { makeStyles } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router';
import img from '../../assets/Home/img.svg';
import logo from '../../assets/logoColor.svg';
import colors from '../../config/colors';

function Home() {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <img className={classes.img} src={img} alt="Valentina Alegría" />
      <div className={classes.content}>

        <div className={classes.textContent}>
          <h1 className={classes.title}>Welcome</h1>
          <h2 className={classes.text}>This is</h2>
          <img className={classes.logo} src={logo} alt="Happy Interactive" />
          <h2 className={classes.text}>I am an Interactive Media Designer</h2>
        </div>

      </div>
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  container: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
  },
  img: {
    margin: 0,
    marginTop: '3%',
    padding: 0,
    width: '100%',
  },
  content: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
  },
  textContent: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    padding: 0,
    fontFamily: 'Courgette',
    fontSize: '3vw',
    letterSpacing: '0.05em',
    textAlign: 'center',
    color: colors.pink,
  },
  text: {
    margin: 0,
    padding: 0,
    fontFamily: 'Julius Sans One',
    fontSize: '1.5vw',
    letterSpacing: '0.05em',
    textAlign: 'center',
  },
  logo: {
    margin: 0,
    marginBottom: '3em',
    padding: 0,
    width: '20%',
  },
}));
export default withRouter(Home);