import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Typography } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/BearShow';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/futurabg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  footer:{
    fontFamily: "Nunito"
    
  }
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
      <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
          <img src="https://img.icons8.com/nolan/30/email.png" alt=""/>Contact: daemonium97@gmail.com
            <br/>
            
            
            
          
          </Typography>
          <Typography variant="subtitle1" align="center" color="textPrimary">
              Design by Pixel<span style={{color:'#2BB965'}}>Alive.</span>
          </Typography>
      </footer>
      
     
    </div>
  );
}
