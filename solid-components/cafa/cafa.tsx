import { createResource, createSignal } from 'solid-js';
import { render } from 'solid-js/web';
import './cafa.css';

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
            <h1 class="text-3xl font-bold underline bg-purple ">
                Cat Facts
            </h1>
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