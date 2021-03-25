import { Button, createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';
import React from 'react';
import { withRouter } from 'react-router';
import colors from '../../config/colors';

function Project() {
    const classes = useStyle();

    const handleNext = () => {
        console.log("Next");
    };

    const handleBack = () => {
        console.log("Previous");
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.container} >
                <div className={classes.textContent}>
                    <h1 className={classes.title + " animate__animated animate__slideInDown"}>Here are some of my projects</h1>
                    <h2 className={classes.titleProject + " animate__animated animate__slideInUp"}>Interface Design</h2>
                </div>
                <div className={classes.content}>
                    <div className={classes.projects}>
                        <div className={classes.project + " animate__animated animate__zoomIn"} />
                        <div className={classes.project + " animate__animated animate__zoomIn"} />
                        <div className={classes.project + " animate__animated animate__zoomIn"} />
                    </div>
                    <div className={classes.arrows}>
                        <Button
                            className={classes.btn}
                            variant="contained"
                            onClick={handleBack}
                        ><ChevronLeftRounded /></Button>
                        <Button
                            className={classes.btn}
                            variant="contained"
                            onClick={handleNext}
                        ><ChevronRightRounded /></Button>
                    </div>
                </div>
            </div>
        </ThemeProvider>
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
        height: '90%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    project: {
        margin: 0,
        width: '32%',
        height: '90%',
        background: colors.white,
    },
    arrows: {
        margin: 0,
        padding: 0,
        height: '3%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    btn: {
        marginRight: '0.5em',
        padding: '0.4em',
    },
}));

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            contained: {
                backgroundColor: colors.pink,
                '&:hover': {
                    backgroundColor: colors.pinkDark,
                },

            },
        },
    },
});
export default withRouter(Project);