import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  IconButton,
  Toolbar,
  Collapse,
  Typography,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import logo from '../components/logoB.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
    color: "black",
  },
  icon: {
    color: "#fff",
    height:'40px',
  },
  colorText: {
    color: "#2BB965",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "black",
    fontSize: "3.5rem",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "4rem",
  },
  para:{
    fontFamily: "Nunito",
    
  }
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          
          <h1 className={classes.appbarTitle}>
            Pixel<span className={classes.colorText}>Alive.</span>
          </h1>

          <IconButton>
            <img className={classes.icon} src={logo} alt="PixelAlive"/>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <Grid item xs={12}>
            <h1 className={classes.title}>
              Welcome to <br />
              <span className={classes.colorText}>PixelAlive.</span>
            </h1>
            <Typography className={classes.para} variant="h6" align="center" paragraph>
              En PixelAlive nos gusta crear páginas creativas,
              ofrecemos menús para restaurantes o páginas personalizadas. Somos un equipo de trabajo conformado por un programador y una diseñadora gráfica.
            </Typography>
            <Typography className={classes.para} variant="h6" align="center" paragraph>
              At PixelAlive we love to create cool websites, we offer menus for restaurants or custom websites. We're a team made by a developer and a graphic design.
            </Typography>
          </Grid>

          <Scroll to="bears-gallery" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
