import React from 'react';
import { Button, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';
import colors from '../../config/colors';
import { consts } from 'react-elastic-carousel';

function myArrow({ type, onClick }) {

    return (
        <ThemeProvider theme={theme}>
            <Button
                variant="contained"
                onClick={onClick}
            >
                {type === consts.PREV ? <ChevronLeftRounded /> : <ChevronRightRounded />}
            </Button>
        </ThemeProvider>
    );
}

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

export default myArrow;