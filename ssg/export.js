const renderStatic = require('solid-ssr/static');
const path = require('path');

const PAGES = ['index'];
const pathToServer = path.resolve(__dirname, './lib/index.js');
const pathToPublic = path.resolve(__dirname, './public');

renderStatic(
  PAGES.map((p) => ({
    entry: pathToServer,
    output: path.join(pathToPublic, `${p}.html`),
    url: `/${p}`,
  })),
);
