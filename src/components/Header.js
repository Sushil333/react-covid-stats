import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff",
    color: "#000"
  },
}));

function DenseAppBar(props) {
  const classes = useStyles();
  const [title, setTitle] = useState("Global Corona Cases");

  useEffect(() => {
    props.history.listen(() => {
      switch (window.location.pathname) {
        case "/about":
          setTitle("About");
          break;
        case "/contries":
          setTitle("Coronavirus by Country");
          break;
        default:
          setTitle("Global Corona Cases");
      }
    });
  });

  return (
    <AppBar className={classes.root} position="fixed" elevation={1}>
      <Toolbar >
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(DenseAppBar);
