(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{2167:function(e,n,r){"use strict";var t=r(3038),o=r(862);n.default=void 0;var c=o(r(7294)),a=r(9414),u=r(4651),i=r(7426),s={};function l(e,n,r,t){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,o=(0,u.useRouter)(),f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),r=t(n,2),c=r[0],u=r[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):u||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,g=e.shallow,y=e.scroll,_=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var b=(n=c.Children.only(v))&&"object"===typeof n&&n.ref,m=(0,i.useIntersection)({rootMargin:"200px"}),E=t(m,2),L=E[0],w=E[1],k=c.default.useCallback((function(e){L(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,L]);(0,c.useEffect)((function(){var e=w&&r&&(0,a.isLocalURL)(d),n="undefined"!==typeof _?_:o&&o.locale,t=s[d+"%"+p+(n?"%"+n:"")];e&&!t&&l(o,d,p,{locale:n})}),[p,d,w,_,r,o]);var x={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,c,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(r))&&(e.preventDefault(),null==u&&t.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](r,t,{shallow:c,locale:i,scroll:u}))}(e,o,d,p,h,g,y,_)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var M="undefined"!==typeof _?_:o&&o.locale,j=o&&o.isLocaleDomain&&(0,a.getDomainLocale)(p,M,o&&o.locales,o&&o.domainLocales);x.href=j||(0,a.addBasePath)((0,a.addLocale)(p,M,o&&o.defaultLocale))}return c.default.cloneElement(n,x)};n.default=f},7426:function(e,n,r){"use strict";var t=r(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!a,i=(0,o.useRef)(),s=(0,o.useState)(!1),l=t(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),r||f||e&&e.tagName&&(i.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=u.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return u.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,c=t.observer,a=t.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=r(7294),c=r(3447),a="undefined"!==typeof IntersectionObserver;var u=new Map},4673:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return c},default:function(){return a}});var t=r(5893),o=r(1664),c=!0;function a(e){var n=e.data;return(0,t.jsx)(t.Fragment,{children:n.product.map((function(e,n){return(0,t.jsxs)("div",{className:"indent",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("span",{children:[" ",e.title," "]})," - ",(0,t.jsxs)("span",{children:[" ",e.price," "]})]}),(0,t.jsx)("div",{children:e.blurb}),(0,t.jsx)(o.default,{href:"/products/".concat(e.slug.current),children:(0,t.jsx)("img",{src:null===e||void 0===e?void 0:e.imageUrl,style:{cursor:"pointer"}})})]},n)}))})}},9343:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products",function(){return r(4673)}])},1664:function(e,n,r){e.exports=r(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=9343,e(e.s=n);var n}));var n=e.O();_N_E=n}]);