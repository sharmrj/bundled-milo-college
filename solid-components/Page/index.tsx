import { createResource, lazy } from "solid-js";

const Page = lazy(() => import('./Page'));

const getHTML = () => fetch('http://127.0.0.1:8081/index.plain.html')
                        .then(resp => resp.text())
                        .catch(error => "Uh Oh");

// this component lazy loads data and code in parallel
export default () => {
  const [html] = createResource(getHTML);
  return <Page html={html()} />;
};