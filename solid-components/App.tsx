import CatFacts from './cafa';
import Page from './Page';
import { HydrationScript, Suspense } from 'solid-js/web'

type AppPropTypes = {
    url?: string;
}


const App = (props: AppPropTypes) => {
    return (
    <html>
        <head>
            <meta charset='UTF-8'></meta>
            <HydrationScript />
        </head>
        <body>
            <Suspense fallback={<span>Loading</span>}>
                <CatFacts />
            </Suspense>
            <div />
            <Suspense fallback={<span>Loading</span>}>
                <Page /> 
            </Suspense>
        </body>
        <script type="module" src="/js/index.js" async></script>
    </html>
    );
};

export default App;
