import React, { useState } from "react";
import { withRouter } from 'react-router';
import { makeStyles } from '@material-ui/core';
import Carousel from "react-elastic-carousel";
import Item from '../../components/General/Item';
import colors from '../../config/colors';
import myArrow from "../../components/General/myArrow";
import "./styles.css";


const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 1 }
];


function Projects() {
    const classes = useStyle();
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);



    return (
        <div className={classes.container} >
            <div className={classes.textContent}>
                <h1 className={classes.title + " animate__animated animate__slideInDown"}>Here are some of my projects</h1>
                <h2 className={classes.titleProject + " animate__animated animate__slideInUp"}>Interface Design</h2>
            </div>
            <div className={classes.content}>
                <div className={classes.projects}>
                    <Carousel
                        style={{ height: '100%'}}
                        renderArrow={myArrow}
                        enableAutoPlay autoPlaySpeed={2400}
                        focusOnSelect={true}
                        breakPoints={breakPoints}>
                        {items.map((item) => (
                            <Item key={item}>{item}</Item>
                        ))}
                    </Carousel>

                </div>
            </div>
        </div>
    );
}

const useStyle = makeStyles((theme) => ({
    container: {
        margin: 0,
        padding: 0,
        width: '90%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContent: {
        margin: '1.5%',
        padding: 0,
        width: '35%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        background: colors.orange,
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
        margin: '1.5%',
        padding: 0,
        width: '60%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    projects: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '85%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: colors.orangeLight,
    },
    project: {
        margin: 0,
        width: '32%',
        height: '90%',
        background: colors.white,
    },
}));

export default withRouter(Projects);