import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import bears from "../static/bears";
import useWindowPosition from "../hook/useWindowPosition";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="bears-gallery">
      <ImageCard place={bears[0]} checked={checked} />
      <ImageCard place={bears[1]} checked={checked} />
      <ImageCard place={bears[2]} checked={checked} />
      <ImageCard place={bears[3]} checked={checked} />
    </div>
  );
}
