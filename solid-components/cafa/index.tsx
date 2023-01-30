import { createResource, lazy } from "solid-js";
const CatFacts = lazy(() => import("./cafa"));

const getCatFact = async () => fetch('https://meowfacts.herokuapp.com/')
    .then(data => data.json())
    .then(data => data.data[0])
    .catch(error => error);
// this component lazy loads data and code in parallel
export default () => {
  const [fact, { refetch }] = createResource(getCatFact)
  return <CatFacts fact={fact()} refetch={refetch} />;
};
