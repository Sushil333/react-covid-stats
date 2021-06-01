import useFetch from "../services/useFetch";
import SimpleCard from "../components/SimpleCard";
import Skeleton from "../components/Skeleton";

export default function Global() {
  const { error, isPending, data } = useFetch(
    "https://coronavirus-19-api.herokuapp.com/all"
  );

  return (
    <>
      {data && (
        <>
          <SimpleCard type="Global" name="Corona Cases" count={data.cases.toLocaleString()} />
          <SimpleCard type="Global" name="Recovered" count={data.recovered.toLocaleString()} />
          <SimpleCard type="Global" name="Deaths" count={data.deaths.toLocaleString()} />
        </>
      )}
      {isPending && (
        <div>
          <SimpleCard
            type={<Skeleton width="20%" />}
            name={<Skeleton width="80%" />}
            count={<Skeleton width="80%" />}
          />
          <SimpleCard
            type={<Skeleton width="20%" />}
            name={<Skeleton width="80%" />}
            count={<Skeleton width="80%" />}
          />
          <SimpleCard
            type={<Skeleton width="20%" />}
            name={<Skeleton width="80%" />}
            count={<Skeleton width="80%" />}
          />
        </div>
      )}
      {error && <div>{error}</div>}
    </>
  );
}
