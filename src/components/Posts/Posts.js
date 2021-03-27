import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux';


import Post from './Post/Post'
import useStyles from './styles';


const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    console.log(posts)

    const classes = useStyles();
    return (
       !posts.length ? <CircularProgress /> :(
            <Grid className={classes.mainContainer} container justify="center" alignItems="center" spacing={3} >
                {posts.map((post) =>(
                    <Grid key={post._id} item xs={12} sm={12} container justify="center" alignItems="center" >
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
       )
    )
    
}

export default Posts
