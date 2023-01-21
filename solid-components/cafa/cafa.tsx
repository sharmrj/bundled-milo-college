import { createResource, createSignal } from 'solid-js';
import { render } from 'solid-js/web';

type CatFactProps = {
    block: HTMLElement,
}

const getCatFact = () => fetch('https://meowfacts.herokuapp.com/')
    .then(data => data.json())
    .then(data => data.data[0])
    .catch(error => error);

const CatFacts = () => {
    
    const [isLoading, changeIsLoading] = createSignal(false);
    const [fact, { refetch }] = createResource(getCatFact);
    const onClick = () => {
        changeIsLoading(true);
        refetch().finally(() => changeIsLoading(false));
    };

    return (
        <>
            <div>Cat Facts</div>
            <div>
                {isLoading() ? 'Loading' : fact()}
            </div>
            <button onClick={onClick}>
                Click to get a catFact
            </button>
        </>
    )
}

export default (block: HTMLElement) => {
    render(() => <CatFacts />, block)
};