
import {Container, AppBar, Typography, Grid, Grow} from '@material-ui/core'
import memories from './images/memories.png'
import {getPosts} from './actions/posts'
import {Posts, Form} from './components/index'
import useStyles from './styles';

import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';

function App() {
  const [currentId, setCurrentId ] = useState(null)
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
   <>
   
      <Container>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="memories" width="100" height="100"/>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={4}>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
     
   </>
  );
}

export default App;
