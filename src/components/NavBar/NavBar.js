import React from 'react';
import './NavBar.css';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { AlternateEmailRounded, AppsRounded, HomeRounded, PersonRounded } from '@material-ui/icons';


function NavBar(props) {
    const classes = useStyles();

    function handleChange(event, newValue) {
        props.history.push(newValue);
    }

    return (
        <BottomNavigation value={props.location.pathname} onChange={handleChange} className={classes.nav}>
            <BottomNavigationAction label="Home" value="/" icon={<HomeRounded />} />
            <BottomNavigationAction label="Projects" value="/projects" icon={<AppsRounded />} />
            <BottomNavigationAction label="About me" value="/about" icon={<PersonRounded />} />
            <BottomNavigationAction label="Contact" value="/contact" icon={<AlternateEmailRounded />} />
        </BottomNavigation>
    );
}

const useStyles = makeStyles({
    nav: {
        margin: '1.5em',
        padding: '0.1em',
        width: '25%',
        borderRadius: '5em',
    },
});

export default withRouter(NavBar);