import Card from "@material-ui/core/Card";
import { CardContent, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "1em .5em",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 0,
  },
  pos: {
    fontSize: 24,
    marginTop: 5,
  },
});

export default function SimpleCard({ type, name, count }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {type}
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
}
