import { makeStyles } from '@material-ui/core';
import React from 'react';
import colors from '../config/colors';
import Btn from './General/Btn';

function Project() {
    const classes = useStyle();

    function handleClick() {
        console.log("Se hace click en un boton")
    }

    return (
        <div className={classes.project}>
            <div className={classes.banner}>
                <div className={classes.info}>

                    <h1 className={classes.title}>Titulo del Proyecto</h1>
                    <p className={classes.description}>orem ipsum dolor sit amet consectetur adipiscing, elit convallis erat volutpat suscipit vel egestas, natoque quam quisque nulla mi. Mus at suspendisse metus varius sociis ac platea enim, ornare lacus molestie rhoncus sed inceptos nam faucibus, dis hendrerit dui a odio eleifend risus.</p>
                </div>
                <div className={classes.buttons}>
                    <Btn onClick={handleClick} text="Volver a Proyectos" col={colors.orangeLight} />
                    <Btn onClick={handleClick} text="Ir al Behance" />
                </div>
            </div>

        </div>
    );
}

const useStyle = makeStyles(() => ({
    project: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    banner: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '75%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: colors.grayLight,
    },
    info: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        margin: '0.5em',
        padding: 0,
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Julius Sans One',
        fontSize: '3.2vw',
        color: colors.pink,
    },
    description: {
        margin: 0,
        padding: 0,
        width: '60%',
        textAlign: 'center',
    },
    buttons: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    }
}));

export default Project;