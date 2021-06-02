import useFetch from "../services/useFetch";
import {
  Typography,
  makeStyles,
  CircularProgress,
  Paper,
} from "@material-ui/core";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: "-25px",
    marginTop: "-25px"
  },
  paper: {
    marginTop: "1em",
    padding: ".25em 1em"
  },
  title: {
    fontSize: 14,
  },
});

export default function Contries() {
  const classes = useStyles();

  const { isPending, data: allData, error } = useFetch(
    "https://coronavirus-19-api.herokuapp.com/countries"
  );

  // const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    setFilterData(allData);
  }, [allData]);

  // const [error, setError] = useState(null);
  // const [isPending, setIsPending] = useState(true);

  // useEffect(() => {
  //   // const { error, isPending, data } = useFetch(
  //   //   "https://coronavirus-19-api.herokuapp.com/countries"
  //   // );
  //   async function fetchData() {
  //     try {
  //       let res = await fetch(
  //         "https://coronavirus-19-api.herokuapp.com/countries"
  //       );
  //       let data = await res.json();
  //       setIsPending(false);
  //       setAllData(data);
  //       setFilterData(data);
  //     } catch (err) {
  //       setError(err);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    let target = e.target.value.toLowerCase();

    setFilterData(
      allData.filter((x) => x.country.toLowerCase().includes(target))
    );
  };

  return (
    <>
      {isPending && <CircularProgress className={classes.root} />}

      {filterData && (
        <>
          <Paper position="fixed">
            <SearchBar onChange={handleSearch} />
          </Paper>
          {filterData.map((ele, index) => (
            <Paper className={classes.paper} elevation={0} key={index}>
              <Typography variant="h5" component="h2">
                {ele.country}
              </Typography>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Cases: {ele.cases.toLocaleString()} | Today Cases:{" "}
                {ele.todayCases.toLocaleString()} | Active:{" "}
                {ele.active.toLocaleString()} <br />
                Deaths: {ele.deaths.toLocaleString()} | Today Deaths:{" "}
                {ele.todayDeaths.toLocaleString()} <br />
                Recovered: {ele.recovered.toLocaleString()} | Critical:{" "}
                {ele.critical}
              </Typography>
            </Paper>
          ))}
        </>
      )}
      {error && <div>{error}</div>}
    </>
  );
}
