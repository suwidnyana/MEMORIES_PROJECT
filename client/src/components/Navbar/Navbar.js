import React from 'react'
import {Container, AppBar, Typography, Grid, Grow, Toolbar} from '@material-ui/core'
import useStyles from './styles';
import memories from '../images/memories.png'

function Navbar() {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
          <div className={classes.brandContainer}>
            <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
            <img className={classes.image} src={memories} alt="memories" width="100" height="100"/>
          </div>
          <Toolbar classname={classes.toolbar}>
                
          </Toolbar>
        </AppBar>
    )
}

export default Navbar
