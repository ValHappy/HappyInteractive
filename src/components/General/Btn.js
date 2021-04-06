
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import colors from '../../config/colors';

//variables
const btnWidth = '15%';
const btnHeigth = 45;

function Btn({onClick,text, value, col = colors.pink}) {
    const classes = useStyle();

    return (
        <Button onClick={onClick} className={classes.btn} variant="outlined" value={value} style={{background: col}}> {text} </Button>
    );
}

const useStyle = makeStyles((theme) => ({
    btn: {
        margin: '1em',
        padding: '0.5em',
        width: btnWidth,
        height: btnHeigth,
        borderRadius: '5em',
        color: colors.white,
        
        '&:hover': {
            backgroundColor: colors.white,
            borderColor: colors.pink,
            opacity: 0.7,
            boxShadow: 'none',
        },
    }
}));

export default Btn;