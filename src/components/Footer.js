import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LanguageIcon from "@material-ui/icons/Language";
import FlagIcon from "@material-ui/icons/Flag";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    backgroundColor: "#f2f2f2",
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
  );
}
