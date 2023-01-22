import { render } from "solid-js/web";
import './something-else.css'

const Something = () => {
    return <h1 class="text-xl underline">Something</h1>
}

export default (block: HTMLElement) => {
    render(() => <Something />, block);
}