'use strict';

var web = require('solid-js/web');
var solidJs = require('solid-js');

const _tmpl$ = ["<div", ">", "</div>"],
  _tmpl$2 = ["<div", ">Loading</div>"];
const Page = props => {
  return web.createComponent(solidJs.Suspense, {
    get fallback() {
      return web.ssr(_tmpl$2, web.ssrHydrationKey());
    },
    get children() {
      return web.ssr(_tmpl$, web.ssrHydrationKey(), props.html);
    }
  });
};

exports.default = Page;
