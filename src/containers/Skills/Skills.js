import { makeStyles } from '@material-ui/core';
import React from 'react';
import colors from '../../config/colors';
import img1 from '../../assets/Skills/1.svg';
import img2 from '../../assets/Skills/2.svg';
import img3 from '../../assets/Skills/3.svg';
import img4 from '../../assets/Skills/4.svg';
import img5 from '../../assets/Skills/5.svg';
import img6 from '../../assets/Skills/6.svg';
import img7 from '../../assets/Skills/7.svg';
import img8 from '../../assets/Skills/8.svg';
import img9 from '../../assets/Skills/9.svg';
import img10 from '../../assets/Skills/10.svg';

function Skills() {
    const classes = useStyle();

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.skillsContent}>
                    <h1 className={classes.title + " animate__animated animate__slideInDown"}>Skills</h1>
                    <h3 className={classes.subtitle + " animate__animated animate__fadeInDown"}>User Experience (UX)</h3>
                    <p className={classes.text + " animate__animated animate__fadeInDown"}>IDEO Design Kit, usability testing, user-centered design, wireframing, information architecture, prototyping.</p>
                    <h3 className={classes.subtitle + " animate__animated animate__fadeInDown"}>User Interface (UI)</h3>
                    <p className={classes.text + " animate__animated animate__fadeInDown"}>Interface design, atomic design, interaction design, visual and graphic design.</p>
                    <h3 className={classes.subtitle + " animate__animated animate__fadeInDown"}>Visual Design</h3>
                    <p className={classes.text + " animate__animated animate__fadeInDown"}>Fotografía, guia de estilos, logos, identidad corporativa, </p>
                </div>
                <div className={classes.abilitiesContent}>
                    <h1 className={classes.title + " animate__animated animate__slideInDown"}>Abilities</h1>
                    <div className={classes.abilities}>
                        <div className={classes.divider}>
                            <label className={classes.label + " animate__animated animate__fadeInDown"}>Initiative</label>
                            <label className={classes.label + " animate__animated animate__fadeInDown"}>Leadership</label>
                            <label className={classes.label + " animate__animated animate__fadeInDown"}>Dynamism</label>
                        </div>
                        <div className={classes.divider}>
                            <label className={classes.label + " animate__animated animate__fadeInDown"}>Order and clarity</label>
                            <label className={classes.label + " animate__animated animate__fadeInDown"}>Working under pressure</label>
                            <label className={classes.label + " animate__animated animate__fadeInDown"}>Interpersonal relationships</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.interaction}>
                <img className={classes.img1} src={img1} alt="headphones" />
                <img className={classes.img2} src={img2} alt="clip" />
                <img className={classes.img3} src={img3} alt="tablet" />
                <img className={classes.img4} src={img4} alt="www" />
                <img className={classes.img5} src={img5} alt="computer" />
                <img className={classes.img6} src={img6} alt="message" />
                <img className={classes.img7} src={img7} alt="post-it" />
                <img className={classes.img8} src={img8} alt="mouse" />
                <img className={classes.img9} src={img9} alt="pencil" />
                <img className={classes.img10} src={img10} alt="cursor" />
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        margin: 0,
        padding: 0,
        width: '40%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    skillsContent: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '55%',
    },
    title: {
        margin: 0,
        padding: 0,
        fontFamily: 'Julius Sans One',
        fontSize: '3vw',
        letterSpacing: '0.05em',
        color: colors.pink,
    },
    subtitle: {
        margin: 0,
        padding: 0,
        fontFamily: 'Courgette',
        fontSize: '1.2vw',
        letterSpacing: '0.05em',
        color: colors.gray,
    },
    text: {
        fontFamily: 'Quicksand',
        fontSize: '1vw',
        letterSpacing: '0.05em',
    },
    abilitiesContent: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    abilities: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '55%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    divider: {
        margin: 0,
        padding: 0,
        width: '35%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    label: {
        marginTop: '0.5em',
        fontFamily: 'Quicksand',
        fontSize: '1vw',
        letterSpacing: '0.05em',
    },
    interaction: {
        margin: 0,
        padding: 0,
        width: '40%',
        height: '100%',
    },
    img1: {
        width: '12%',
        position: 'absolute',
        left: '68.75%',
        right: '17.18%',
        top: '23.46%',
        bottom: '60.25%',
        fill: colors.pink,

        '&:hover': {

        }
    },
    img2: {
        width: '3%',
        position: 'absolute',
        left: '60.05%',
        right: '37.19%',
        top: '31.2%',
        bottom: '59.44%',
    },
    img3: {
        width: '5%',
        position: 'absolute',
        left: '83.43%',
        right: '88.31%',
        top: '33.25%',
        bottom: '24.52%',
    },
    img4: {
        width: '3.5%',
        position: 'absolute',
        left: '65.48%',
        right: '31.51%',
        top: '41.11%',
        bottom: '52.4%',
    },
    img5: {
        width: '11%',
        position: 'absolute',
        left: '67.08%',
        right: '21.97%',
        top: '43.06%',
        bottom: '41.84%',
    },
    img6: {
        width: '7%',
        position: 'absolute',
        left: '57.2%',
        right: '36.05%',
        top: '52.31%',
        bottom: '39.15%',
    },
    img7: {
        width: '3%',
        position: 'absolute',
        left: '80.2%',
        right: '15.85%',
        top: '50.56%',
        bottom: '43.39%',
    },
    img8: {
        width: '7%',
        position: 'absolute',
        left: '64.79%',
        right: '27.83%',
        top: '62.11%',
        bottom: '25.45%',
    },
    img9: {
        width: '7%',
        position: 'absolute',
        left: '76.15%',
        right: '16.32%',
        top: '63.04%',
        bottom: '26.32%',
    },
    img10: {
        width: '2.5%',
        position: 'absolute',
        left: '84.64%',
        right: '13.18%',
        top: '59.26%',
        bottom: '35.17%',
    },
}));
export default Skills;