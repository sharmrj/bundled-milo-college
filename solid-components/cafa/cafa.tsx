import { Suspense } from 'solid-js';
import './cafa.css';

type CatFactProps = {
    fact: string | any,
    refetch: any;
}

const CatFacts = (props: CatFactProps) => {
    
    const onClick = () => {
        props.refetch();
    };

    return (
        <>
            <h1 class="text-3xl font-bold underline bg-purple animate-bounce animate-infinite">
                Cat Facts
            </h1>
            <Suspense fallback={<div class="loader">Loading</div>}>
                <div>
                    {props.fact}
                </div>
            </Suspense>
            <button onClick={onClick}>
                Click to get a catFact
            </button>
        </>
    )
}

export default CatFacts;