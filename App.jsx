//import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import {CameraIcon} from '@material-ui/icons/Camera';
import useStyles from './styles';
//import Grid from '@material-ui/core/Grid';
//import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';

const App = () => {
  const classes = useStyles();
  return (
  <>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon className={classes.icon}/>
        <Typography variant = "h6">
          PhotoSpace
        </Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div className={classes.container} />
      <div>
        <Container maxwidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom >
            PhotoSpace
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Scroll down to your memory lane especially curated for you. A place to store all your funny, romantic and special moments and visit whenever and wherever your heart desires !
          </Typography>
          <div className={classes.button}>
            <Grid container spacing={2} justify="center">
              <GridItem >
                <Button variant="contained" color="primary">
                  SnaPeek
                </Button>
              </GridItem>
              <GridItem>
              <Button variant="outlined" color="primary">
                Collections
              </Button>
            </GridItem>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <GridItem>
            <Card className={classes.card}>
              <CardMedia
              className={classes.cardMedia}
              image = "https://source.unsplash.com/random"
              title = "Image title"
              />
              <CardContent className={classes.CardContent}>
                <Typography gutterBottom variant="h5">
                  Heading
                </Typography>
                <Typography>
                  Media card. Describe Content.
                </Typography>
            </CardContent>
            <CardActions>
              <Button size = "small" color = "primary">View
              </Button>
              <Button size = "small" color = "primary">
                Edit
              </Button>
            </CardActions>
          </Card>
        </GridItem>
        </Grid>


      </Container>
    </main>
  </>
    
  );
}

export default App;
