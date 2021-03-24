import React from 'react';

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { AlternateEmailRounded, AppsRounded, HomeRounded, PersonRounded } from '@material-ui/icons';
import colors from '../../config/colors';

function NavBar(props) {
    const classes = useStyles();

    function handleChange(event, newValue) {
        props.history.push(newValue);
    }

    return (
        <ThemeProvider theme={theme}>
            <BottomNavigation value={props.location.pathname} onChange={handleChange} className={classes.nav}>
                <BottomNavigationAction label="Home" value="/" icon={<HomeRounded />} />
                <BottomNavigationAction label="Projects" value="/projects" icon={<AppsRounded />} />
                <BottomNavigationAction label="About me" value="/about" icon={<PersonRounded />} />
                <BottomNavigationAction label="Contact" value="/contact" icon={<AlternateEmailRounded />} />
            </BottomNavigation>
        </ThemeProvider>
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

const theme = createMuiTheme({
    overrides: {
        MuiBottomNavigationAction: {
            root: {
                fontSize: '0.8vw',
                fontFamily: 'Quicksand',
                fontWeight: '400',
                letterSpacing: '0.1em',

                '&$selected': {
                    color: colors.pink,
                },
            },
        },
    },
});


export default withRouter(NavBar);