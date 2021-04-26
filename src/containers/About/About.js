import { makeStyles } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router';
import clapperboard from '../../assets/About/Clapperboard.svg';
import camera from '../../assets/About/Camera.svg';
import hand from '../../assets/About/Hand.svg';
import pen from '../../assets/About/Pen.svg';
import photo from '../../assets/About/Photo.svg';
import Btn from '../../components/General/Btn';


function About({history}) {
    const classes = useStyle();

    function handleClick() {
        history.push('/skills');
    }

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.textContent}>
                    <h1 className={classes.title + " animate__animated animate__fadeInDown"}>Valentina Alegría Muñoz</h1>
                    <p className={classes.paragraph + " animate__animated animate__fadeInDown"}>Soy estudiante de Diseño de Medios Interactivos con interés en trabajar en las áreas de Diseño Visual, Diseño de Interacción y Arquitectura de la Información; con experiencia en proyectos de Experiencia de Usuario, Interfaz de Usuario, Investigación y Freelance.</p>
                </div>
                <div className={classes.iconContent}>
                    <div className={classes.item + " animate__animated animate__slideInDown"}>
                        <img className={classes.icon} src={clapperboard} alt="Clapperboard" />
                        <label className={classes.label}>Production</label>
                    </div>
                    <div className={classes.item + " animate__animated animate__slideInDown"}>
                        <img className={classes.icon} src={hand} alt="Hand" />
                        <label className={classes.label}>Interaction</label>
                    </div>
                    <div className={classes.item + " animate__animated animate__slideInDown"}>
                        <img className={classes.icon} src={pen} alt="pen" />
                        <label className={classes.label}>Illustration</label>
                    </div>
                    <div className={classes.item + " animate__animated animate__slideInDown"}>
                        <img className={classes.icon} src={camera} alt="camera" />
                        <label className={classes.label}>Photography</label>
                    </div>
                </div>
                <div className={classes.btnContent}>
                    <Btn onClick={handleClick} value="skills" text="View more" />
                </div>
            </div>
            <img className={classes.img + " animate__animated animate__fadeIn"} src={photo} alt="Valentina" />
        </div>
    );
}

const useStyle = makeStyles((theme) => ({
    container: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    content: {
        margin: 0,
        padding: 0,
        width: '60%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContent: {
        margin: 0,
        padding: 0,
        width: '75%',
        height: '35%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        margin: 0,
        padding: 0,
        fontFamily: 'Julius Sans One',
        fontSize: '3vw',
        letterSpacing: '0.05em',
        textAlign: 'center',
    },
    paragraph: {
        margin: 0,
        padding: 0,
        fontFamily: 'Quicksand',
        fontSize: '1vw',
        letterSpacing: '0.05em',
    },
    iconContent: {
        margin: 0,
        padding: 0,
        width: '75%',
        height: '16%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    item: {
        margin: 0,
        padding: 0,
        width: '15%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    icon: {
        margin: '1em',
    },
    label: {
        fontFamily: 'Courgette',
        fontSize: '1.1vw',
        letterSpacing: '0.05em',
        textAlign: 'center',
    },
    btnContent: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '40%',
    },
}));
export default withRouter(About);