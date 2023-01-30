import { c as createComponent, g as getNextElement, a as createRenderEffect, b as innerHTML, S as Suspense, t as template } from './index.js';

const _tmpl$ = /*#__PURE__*/template(`<div></div>`),
  _tmpl$2 = /*#__PURE__*/template(`<div>Loading</div>`);
const Page = props => {
  return createComponent(Suspense, {
    get fallback() {
      return getNextElement(_tmpl$2);
    },
    get children() {
      const _el$ = getNextElement(_tmpl$);
      createRenderEffect(() => innerHTML(_el$, props.html));
      return _el$;
    }
  });
};

export { Page as default };
