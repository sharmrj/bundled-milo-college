import { delegateEvents, render, createComponent, insert, memo, template } from 'solid-js/web';
import { createSignal, createResource } from 'solid-js';

const _tmpl$ = /*#__PURE__*/template(`<div>Cat Facts</div>`, 2),
      _tmpl$2 = /*#__PURE__*/template(`<div></div>`, 2),
      _tmpl$3 = /*#__PURE__*/template(`<button>Click to get a catFact</button>`, 2);

const getCatFact = () => fetch('https://meowfacts.herokuapp.com/').then(data => data.json()).then(data => data.data[0]).catch(error => error);

const CatFacts = props => {
  const [isLoading, changeIsLoading] = createSignal(false);
  const [fact, {
    refetch
  }] = createResource(getCatFact);

  const onClick = () => {
    changeIsLoading(true);
    refetch().finally(() => changeIsLoading(false));
  };

  return [_tmpl$.cloneNode(true), (() => {
    const _el$2 = _tmpl$2.cloneNode(true);

    insert(_el$2, (() => {
      const _c$ = memo(() => !!isLoading());

      return () => _c$() ? 'Loading' : fact();
    })());

    return _el$2;
  })(), (() => {
    const _el$3 = _tmpl$3.cloneNode(true);

    _el$3.$$click = onClick;
    return _el$3;
  })()];
};

var ReactiveComponent = (block => {
  render(() => createComponent(CatFacts, {
    block: block
  }), block);
});

delegateEvents(["click"]);

export { ReactiveComponent as default };
