import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import FlagIcon from "@material-ui/icons/Flag";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    switch (window.location.pathname) {
      case "/about":
        setValue(2);
        break;
      case "/countries":
        setValue(1);
        break;
      default:
        setValue(0);
    }
  }, []);

  return (
    <Paper elevation={1}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          component={Link}
          to={"/"}
          label="Global"
          icon={<LanguageIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to={"/countries"}
          label="Countries"
          icon={<FlagIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to={"/about"}
          label="About"
          icon={<InfoIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
