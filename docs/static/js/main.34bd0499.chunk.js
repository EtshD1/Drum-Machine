(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t(3),r=t.n(i),a=t(4),o=t(0),s=function(e){var n=e.name,t=e.handleDisplay,i=Object(c.useRef)(null),r=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=function(e){var c,a;e.key.toLocaleLowerCase()===n.toLocaleLowerCase()&&(t(n),null===(c=i.current)||void 0===c||c.play(),null===(a=r.current)||void 0===a||a.classList.add("active"))},c=function(e){var t;e.key.toLocaleLowerCase()===n.toLocaleLowerCase()&&(null===(t=r.current)||void 0===t||t.classList.remove("active"))};return document.addEventListener("keydown",e),document.addEventListener("keyup",c),function(){document.removeEventListener("keydown",e),document.removeEventListener("keydown",c)}}),[n,t]),Object(o.jsxs)("div",{ref:r,id:"".concat(n,"Container"),className:"drum-pad",onClick:function(){var e;t(n),null===(e=i.current)||void 0===e||e.play()},children:[n,Object(o.jsx)("audio",{ref:i,id:n,className:"clip",src:"./audio/".concat(n,".wav")})]})},d=(t(10),t(11),["Q","W","E","A","S","D","Z","X","C"]),u=function(){var e=Object(c.useState)("    "),n=Object(a.a)(e,2),t=n[0],i=n[1],r=function(e){i(e)},u=d.map((function(e){return Object(o.jsx)(s,{name:e,handleDisplay:r},e)}));return Object(o.jsxs)("div",{id:"drum-machine",children:[Object(o.jsxs)("div",{id:"display",children:[Object(o.jsx)("div",{children:"Action:"}),Object(o.jsx)("div",{children:t}),Object(o.jsx)("div",{})]}),Object(o.jsx)("div",{className:"keysContainer",children:u})]})};r.a.render(Object(o.jsx)(u,{}),document.querySelector("#root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.34bd0499.chunk.js.map