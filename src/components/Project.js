import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { FormatQuoteRounded } from '@material-ui/icons';
import Btn from './General/Btn';
import colors from '../config/colors';
import { MenuContext } from '../containers/App/Provider';
import { imgs } from "../const/projectInfo";
import { info } from '../const/projectInfo';

function Project({ history }) {
    const classes = useStyle();
    const [index] = useContext(MenuContext)
    const projectInfo = info[index];
    const img = imgs[index];

    const handleBack = () => {
        history.push("/projects")
    }

    const handleClick = () => {
        console.log("Se hace click en un boton")
    }

    return (
        <div className={classes.project}>

            <div className={classes.banner}
                style={{ backgroundImage: 'url("' + img + '")', }}>
                <div className={classes.bannerInfo}>
                    <h1 className={classes.bannerTitle}>{projectInfo.bannerTitle}</h1>
                    <p className={classes.bannerDescription}>{projectInfo.bannerDescription}</p>
                </div>
                <div className={classes.buttons}>
                    <Btn onClick={handleBack} text="Volver a Proyectos" col={colors.orangeLight} />
                    <Btn onClick={handleClick} text="Ir al Behance" />
                </div>
            </div>

            <div className={classes.sections}>

                <div className={classes.section}>
                    <img className={classes.sectionIcon} src={projectInfo.sectionIcon1} alt="Icon section" />
                    <h2 className={classes.sectionTitle}>{projectInfo.sectionTitle1}</h2>
                    <p className={classes.sectionDescription}>{projectInfo.sectionDescription1}</p>
                </div>

                <div className={classes.section}>
                    <img className={classes.sectionIcon} src={projectInfo.sectionIcon2} alt="Icon section" />
                    <h2 className={classes.sectionTitle}>{projectInfo.sectionTitle2}</h2>
                    <p className={classes.sectionDescription}>{projectInfo.sectionDescription2}</p>
                </div>

                <div className={classes.section}>
                    <img className={classes.sectionIcon} src={projectInfo.sectionIcon3} alt="Icon section" />
                    <h2 className={classes.sectionTitle}>{projectInfo.sectionTitle3}</h2>
                    <p className={classes.sectionDescription}>{projectInfo.sectionDescription3}</p>
                </div>

            </div>

            <div className={classes.info}>
                <h2 className={classes.infoTitle}>{projectInfo.infoTitle}</h2>
                <p className={classes.infoDescription}>{projectInfo.infoDescription}</p>
                <img className={classes.infoImg} src="https://images.pexels.com/photos/3856635/pexels-photo-3856635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Imagen del proyecto" />
                <br />
                <br />
                <br />
            </div>

            <div className={classes.phrase}>
                <FormatQuoteRounded style={{ fontSize: '8em', marginTop: '0.5em' }} />
                <h1 className={classes.phraseText}>{projectInfo.phrase}</h1>
                <h2 className={classes.phraseAuthor}>{projectInfo.author}</h2>
                <h3 className={classes.phraseProfession}>{projectInfo.profession}</h3>
            </div>

            <div className={classes.thanks}>
                <h2 className={classes.thanksTitle}>Thanks for watching</h2>
                <p className={classes.thanksInfo}>You can view more about this project on Behance</p>
                <Btn onClick={() => window.open("https://www.behance.net/valhappym", "Behance")} text="Ir al Behance" />
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
        marginTop: '65vw',
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
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: colors.grayLight,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
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
        margin: '15% 0 0 0',
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
        marginTop: '10%',
        padding: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    section: {
        margin: '1em',
        padding: '1em',
        width: '25%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionIcon:{
        margin: '1em',
        width: '10%',
    },
    sectionTitle: {
        margin: 0,
        padding: 0,
        width: '100%',
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
        marginTop: '15%',
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
        marginTop: '10%',
        padding: 0,
        width: '100%',
        height: '70vh',
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
        width: '70%',
        fontFamily: 'Julius Sans One',
        fontSize: '2.5vw',
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