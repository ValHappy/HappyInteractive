import { makeStyles } from '@material-ui/core';
import { PhoneAndroidRounded } from '@material-ui/icons';
import React from 'react';
import { withRouter } from 'react-router';
import colors from '../../config/colors';

function Contact() {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>¡Let’s talk!</h1>
            <div className={classes.content}>
                <div className={classes.social}>
                    <label className={classes.label}>Behance</label>
                    <label className={classes.label}>Instragram</label>
                </div>
                <p className={classes.mail}>val.happy.m<br/>@gmail.com</p>
                <div className={classes.numContent}>
                    <PhoneAndroidRounded fontSize="large"/>
                    <label className={classes.num}>318 272 6766</label>
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
    content: {
        margin: 0,
        padding: 0,
        width: '52%',
        height: '65%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    social: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    label: {
        margin: '0.5em',
        fontFamily: 'Quicksand',
        fontSize: '1.5vw',
        letterSpacing: '0.05em',
        textDecoration: 'underline',
        color: colors.orange,
    },
    mail: {
        margin: 0,
        padding: 0,
        fontFamily: 'Julius Sans One',
        fontSize: '8vw',
        letterSpacing: '0.01em',
        textAlign: 'center',
        fontWeight: 'bolder',
        lineHeight: '100%',
    },
    numContent: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    num: {
        margin: '0.5em',
        fontFamily: 'Quicksand',
        fontSize: '1.5vw',
        letterSpacing: '0.05em',
    },
}));

export default withRouter(Contact);