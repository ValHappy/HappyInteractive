import React from 'react';
import { makeStyles } from '@material-ui/core';
import { FormatQuoteRounded } from '@material-ui/icons';
import Btn from './General/Btn';
import colors from '../config/colors';

const urlImg = 'https://images.pexels.com/photos/2020267/pexels-photo-2020267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

function Project() {
    const classes = useStyle();

    const projects = [
        {
            id: 'project1',
            bannerTitle: 'La Nueva Eduteka',
            bannerDescription: 'Rediseño de Eduteka, el portal educativo gratuito de la Universidad Icesi dirigido a docentes, directivos escolares y formadores de maestros interesados en utilizar las Tecnologías de Información y Comunicaciones (TIC) en el proceso de aprendizaje con materiales de alta calidad.',
            sectionTitle1: 'Información',
            sectionDescription1: 'Conformado por documentos y articulos verificados por expertos separados por diversas categorías, herramientas de texto y un asistente de lectura.',
            sectionTitle2: 'Formación',
            sectionDescription2: 'Contiene el desarrollo de competencias como docente con micro lecciones, comprobación y certificación de conocimientos en cualquier momento y lugar.',
            sectionTitle3: 'Herramientas',
            sectionDescription3: 'Para el almacenamiento de cada archivo de forma personalizada y gratuita con acceso en desde cualquier dispositivo móvil o de escritorio para compartir archivos.',
            infoTitle: 'Rediseño de Marca',
            infoDescription: 'Aprender para enseñar no tiene por qué ser un proceso largo, aburrido y agotador. Puede ser muy divertido. La nueva Eduteka es un lugar de conocimientos para todos los que quieran aprender de una forma dinámica y rápida.',
            infoImg: '',
            phrase: 'Si quieres aprender, enseña',
            author: 'Marco Tulio Cicerón',
            profession: 'Jurista & Filósofo',
        },
        {
            id: 'project2',
            bannerTitle: 'Pokemón Up',
            bannerDescription: 'Inspirado en la franquicia Pokemon de Nintendo, Pokemon Up es un juego de plataformas multijugador en el que podrás elegir entre tus personajes favoritos de la saga para competir en una carrera de obstáculos, recoger tantas bayas como sea posible y vencer a tu oponente.',
            sectionTitle1: 'Baya Frambu',
            sectionDescription1: 'Acelera y adelanta a su oponente.',
            sectionTitle2: 'Baya Zanama',
            sectionDescription2: 'Causa daño a tu oponente y lo ralentiza.',
            sectionTitle3: 'Baya Oram',
            sectionDescription3: 'Para el almacenamiento de cada archivo de forma personalizada y gratuita con acceso en desde cualquier dispositivo móvil o de escritorio para compartir archivos.',
            infoTitle: 'Una Experiencia Completa',
            infoDescription: 'Los componentes de la interfaz de usuario sobre la funcionalidad de la Pokédex y el juego se mezclan con el sonido para crear una experiencia completa para el usuario a la hora de jugar a Pokemon Up.',
            infoImg: '',
            phrase: 'En mi tarjeta de visita, soy un presidente de empresa. En mi mente soy un programador de juegos. Pero en mi corazón soy un jugador',
            author: 'Satoru Iwata',
            profession: 'Programador de videojuegos',
        },
    ];

    function handleClick() {
        console.log("Se hace click en un boton")
        console.log(projects)
    }

    return (
        <div className={classes.project}>
            <div className={classes.banner}>
                <div className={classes.bannerInfo}>
                    <h1 className={classes.bannerTitle}>Titulo del Proyecto</h1>
                    <p className={classes.bannerDescription}>lorem ipsum dolor sit amet consectetur adipiscing, elit convallis erat volutpat suscipit vel egestas, natoque quam quisque nulla mi. Mus at suspendisse metus varius sociis ac platea enim, ornare lacus molestie rhoncus sed inceptos nam faucibus, dis hendrerit dui a odio eleifend risus.</p>
                </div>
                <div className={classes.buttons}>
                    <Btn onClick={handleClick} text="Volver a Proyectos" col={colors.orangeLight} />
                    <Btn onClick={handleClick} text="Ir al Behance" />
                </div>
            </div>
            <div className={classes.sections}>
                <div className={classes.section}>
                    <h2 className={classes.sectionTitle}>Titulo1</h2>
                    <p className={classes.sectionDescription}>lorem ipsum dolor sit amet consectetur adipiscing, elit convallis erat volutpat suscipit vel egestas, natoque quam quisque nulla mi. Mus at suspendisse metus varius sociis ac platea enim,</p>
                </div>
                <div className={classes.section}>
                    <h2 className={classes.sectionTitle}>Titulo2</h2>
                    <p className={classes.sectionDescription}>lorem ipsum dolor sit amet consectetur adipiscing, elit convallis erat volutpat suscipit vel egestas, natoque quam quisque nulla mi. Mus at suspendisse metus varius sociis ac platea enim,</p>
                </div>
                <div className={classes.section}>
                    <h2 className={classes.sectionTitle}>Titulo3</h2>
                    <p className={classes.sectionDescription}>lorem ipsum dolor sit amet consectetur adipiscing, elit convallis erat volutpat suscipit vel egestas, natoque quam quisque nulla mi. Mus at suspendisse metus varius sociis ac platea enim,</p>
                </div>
            </div>
            <div className={classes.info}>
                <h2 className={classes.infoTitle}>Titulo1</h2>
                <p className={classes.infoDescription}>lorem ipsum dolor sit amet consectetur adipiscing, elit convallis erat volutpat suscipit vel egestas, natoque quam quisque nulla mi. Mus at suspendisse metus varius sociis ac platea enimlorem ipsum dolor sit amet consectetur adipiscing, elit convallis erat volutpat suscipit vel egestas, natoque quam quisque nulla mi. Mus at suspendisse metus varius sociis ac platea enim,</p>
                <img className={classes.infoImg} src="https://images.pexels.com/photos/3856635/pexels-photo-3856635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Imagen del proyecto" />
                <br />
                <br />
                <br />
            </div>
            <div className={classes.phrase}>
                <FormatQuoteRounded style={{ fontSize: '8em', marginTop: '0.5em' }} />
                <h1 className={classes.phraseText}>Insert here an inspirational phrase</h1>
                <h2 className={classes.phraseAuthor}>Lorem Ipsum Dolor</h2>
                <h3 className={classes.phraseProfession}>Lorem Ipsum</h3>
            </div>
            <div className={classes.thanks}>
                <h2 className={classes.thanksTitle}>Thanks for watching</h2>
                <p className={classes.thanksInfo}>You can view more about this project on Behance</p>
                <Btn onClick={handleClick} text="Ir al Behance" />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}

const useStyle = makeStyles(() => ({
    project: {
        margin: 0,
        marginTop: '60vw',
        padding: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    banner: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("' + urlImg + '")',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    bannerInfo: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bannerTitle: {
        margin: 0,
        padding: '0.5em',
        width: '60%',
        textAlign: 'center',
        fontFamily: 'Julius Sans One',
        fontSize: '3.2vw',
        color: colors.pink,
    },
    bannerDescription: {
        margin: 0,
        marginBottom: '4em',
        padding: '0.5em',
        width: '60%',
        letterSpacing: '0.05em',
        textAlign: 'center',
    },
    buttons: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    sections: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '45vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    section: {
        margin: '1em',
        padding: '1em',
        width: '23%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionTitle: {
        margin: 0,
        padding: 0,
        width: '60%',
        fontFamily: 'Courgette',
        fontSize: '2vw',
        letterSpacing: '0.05em',
        textAlign: 'center',
    },
    sectionDescription: {
        margin: 0,
        padding: 0,
        letterSpacing: '0.05em',
        textAlign: 'center',
    },
    info: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoTitle: {
        margin: 0,
        marginTop: '1em',
        padding: '0.5em',
        width: '60%',
        fontFamily: 'Julius Sans One',
        fontSize: '3vw',
        letterSpacing: '0.05em',
        textAlign: 'center',
    },
    infoDescription: {
        margin: 0,
        marginBottom: '1em',
        padding: '1em',
        width: '40%',
        letterSpacing: '0.05em',
        textAlign: 'center',
    },
    infoImg: {
        margin: '1em',
        padding: 0,
        width: '40%',
    },
    phrase: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("https://images.pexels.com/photos/288099/pexels-photo-288099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    phraseText: {
        margin: 0,
        padding: '1.5em',
        width: '50%',
        fontFamily: 'Julius Sans One',
        fontSize: '3vw',
        letterSpacing: '0.05em',
        textAlign: 'center',
    },
    phraseAuthor: {
        margin: 0,
        padding: 0,
        fontFamily: 'Courgette',
        letterSpacing: '0.05em',
        textAlign: 'center',
    },
    phraseProfession: {
        margin: 0,
        marginBottom: '5.5em',
        padding: 0,
        letterSpacing: '0.05em',
        textAlign: 'center',
    },
    thanks: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    thanksTitle: {
        margin: 0,
        marginTop: '3em',
        padding: 0,
        width: '50%',
        fontFamily: 'Julius Sans One',
        fontSize: '3vw',
        letterSpacing: '0.05em',
        textAlign: 'center',
    },
    thanksInfo: {
        margin: 0,
        marginBottom: '2em',
        padding: 0,
        width: '60%',
        letterSpacing: '0.05em',
        textAlign: 'center',
    },
}));

export default Project;