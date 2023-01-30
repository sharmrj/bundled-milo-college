import { renderToStringAsync } from "solid-js/web";
import App from '../solid-components/App';

export default async (req: {url: string}) => {
    return await renderToStringAsync(() => <App url={req.url} />);
};