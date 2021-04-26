import React from "react";
import { withRouter } from 'react-router';
import { makeStyles } from '@material-ui/core';
import colors from '../../config/colors';
import { Carousel } from "../../components/Carousel/Carousel";

function Projects({history}) {
    const classes = useStyle();

    return (
        <div className={classes.container} >
            <div className={classes.textContent}>
                <h1 className={classes.title + " animate__animated animate__slideInDown"}>Here are some of my projects</h1>
                <h2 className={classes.titleProject + " animate__animated animate__slideInUp"}>La pasión es el motor de la innovación</h2>
            </div>
            <div className={classes.content}>
                <Carousel history={history}/>
            </div>
        </div>

    );
}

const useStyle = makeStyles((theme) => ({
    container: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContent: {
        margin: '1.5%',
        padding: 0,
        width: '35%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    title: {
        fontFamily: 'Julius Sans One',
        fontSize: '3.4vw',
        letterSpacing: '0.05em',
        textAlign: 'right',
    },
    titleProject: {
        fontFamily: 'Courgette',
        fontSize: '3vw',
        letterSpacing: '0.05em',
        textAlign: 'right',
        color: colors.pink,
    },
    content: {
        width: '60%',
        height: '90%',
        display: 'block',
        position: 'relative',
    },
}));


export default withRouter(Projects);