import { makeStyles } from '@material-ui/core';
import React from 'react';
import preloader from '../images/preloader.gif'
const useStyles=makeStyles((theme)=>({
root:{
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    zIndex:100000,
    backgroundColor:'white'
}
}))
function Preloader(props) {
    const classes=useStyles()
    return (
        <div className={classes.root}>
            <img src={preloader} alt='preloader' />
        </div>
    );
}

export default Preloader;