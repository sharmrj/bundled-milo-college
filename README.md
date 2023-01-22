# Milo with a bundler
A setup for using Milo with rollup. In particular, this project uses SolidJS and typescript with Tailwind along with pnpm for a package manager. But you can modify it to use or not use whatever you please. 

## Developing

You can start the local dev server with `hlx up` like you would in a vanilla Milo project.
You'll want to run `pnpm run watch` to watch any changes in your files (or `pnpm run build` to just compile once). The bundler is configured to compile your `.tsx/.ts` files and place them in the blocks folder.
To make a component, make a new file `solid-components/your-component/your-component.tsx`. To use Tailwind with this component, make sure to make a file `solid-components/your-component/whatever.css` and import it into your `.tsx` file. Add the following incantation into the css file to make Tailwind work:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```
Right now Tailwind looks inside `.ts` and `.tsx` files. You can change that in `tailwind.config.js`. You can define themes (like default colors) and so on in the tailwind config as well. See the Tailwind documentation for more. https://tailwindcss.com/docs/configuration

Your final `.tsx` file might end up looking something like this:

```
import { createResource, createSignal } from 'solid-js';
import { render } from 'solid-js/web';
import './cafa.css';
// other imports

const Component = () => { ... }

export default (block: HTMLElement) => {
    render(() => <Component />, block);
}

```

You can pass `block` as a prop to `Component` too if you like. Do as you please. 