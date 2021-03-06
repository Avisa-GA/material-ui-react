import { withStyles } from "@material-ui/styles";
import React from "react";

const styles = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "200%",
    backgroundColor: "#253053",
  },
};

const SideMenu = (props) => {
  const { classes } = props;

  return <div className={classes.sideMenu}></div>;
};

export default withStyles(styles)(SideMenu);
