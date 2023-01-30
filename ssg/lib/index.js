'use strict';

var web = require('solid-js/web');
var solidJs = require('solid-js');

const CatFacts = solidJs.lazy(() => Promise.resolve().then(function () { return require('./cafa-af6e4330.js'); }));
const getCatFact = async () => fetch('https://meowfacts.herokuapp.com/').then(data => data.json()).then(data => data.data[0]).catch(error => error);
// this component lazy loads data and code in parallel
var CatFacts$1 = (() => {
  const [fact, {
    refetch
  }] = solidJs.createResource(getCatFact);
  return web.createComponent(CatFacts, {
    get fact() {
      return fact();
    },
    refetch: refetch
  });
});

const Page = solidJs.lazy(() => Promise.resolve().then(function () { return require('./Page-bf184844.js'); }));
const getHTML = () => fetch('http://127.0.0.1:8081/index.plain.html').then(resp => resp.text()).catch(error => "Uh Oh");
// this component lazy loads data and code in parallel
var Page$1 = (() => {
  const [html] = solidJs.createResource(getHTML);
  return web.createComponent(Page, {
    get html() {
      return html();
    }
  });
});

const _tmpl$ = ["<head><meta charset=\"UTF-8\">", "</head>"],
  _tmpl$2 = ["<html", ">", "<body><!--#-->", "<!--/--><div></div><!--#-->", "<!--/--></body><script type=\"module\" src=\"/js/index.js\" async></script></html>"],
  _tmpl$3 = ["<span", ">Loading</span>"];
const App = props => {
  return web.ssr(_tmpl$2, web.ssrHydrationKey(), web.createComponent(web.NoHydration, {
    get children() {
      return web.ssr(_tmpl$, web.escape(web.createComponent(web.HydrationScript, {})));
    }
  }), web.escape(web.createComponent(web.Suspense, {
    get fallback() {
      return web.ssr(_tmpl$3, web.ssrHydrationKey());
    },
    get children() {
      return web.createComponent(CatFacts$1, {});
    }
  })), web.escape(web.createComponent(web.Suspense, {
    get fallback() {
      return web.ssr(_tmpl$3, web.ssrHydrationKey());
    },
    get children() {
      return web.createComponent(Page$1, {});
    }
  })));
};

var index = (async req => {
  return await web.renderToStringAsync(() => web.createComponent(App, {
    get url() {
      return req.url;
    }
  }));
});

module.exports = index;
