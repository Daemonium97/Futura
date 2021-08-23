import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Container, makeStyles, Grid } from "@material-ui/core";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    fontFamily: "Nunito",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailMessage",
        "template_kk54ase",
        e.target,
        "user_T61OqAFwdj7RvlgUp71p1"
      )
      .then(
        (result) => {
          alert("I got your message!");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  };

  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid container>
    
      </Grid>
    </Container>
  );
};
