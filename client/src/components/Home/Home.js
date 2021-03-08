import React from 'react'

import {Container, Grow, Grid} from '@material-ui/core'
import {getPosts} from './actions/posts'
import {Posts, Form} from './components/index'


import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';


function Home() {
    const [currentId, setCurrentId ] = useState(null)
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch])
    return (
        <>
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
        </>
    )
}

export default Home
