import{r as u}from"./index.DhYZZe0J.js";var i={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=u,f=Symbol.for("react.element"),_=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,d=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function a(t,e,p){var r,n={},l=null,x=null;p!==void 0&&(l=""+p),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(x=e.ref);for(r in e)m.call(e,r)&&!y.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:f,type:t,key:l,ref:x,props:n,_owner:d.current}}s.Fragment=_;s.jsx=a;s.jsxs=a;i.exports=s;var o=i.exports;function v(){const[t,e]=u.useState(0);return o.jsxs(o.Fragment,{children:[o.jsxs("span",{className:"text-yellow-300 text-xl mr-4",children:["Counter: ",t]}),o.jsx("button",{className:" border px-4 py-2 text-xl",onClick:()=>e(t+1),children:"+"}),o.jsx("button",{className:"border px-4 py-2 text-xl",onClick:()=>e(t-1),children:"-"})]})}export{v as default};
