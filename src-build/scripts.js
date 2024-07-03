(()=>{"use strict";var t={100:(t,e,r)=>{r.d(e,{A:()=>i});var o=r(601),n=r.n(o),a=r(314),c=r.n(a)()(n());c.push([t.id,'*{margin:0;padding:0;font-family:inherit;font-size:inherit;font-weight:inherit;color:inherit}html,body{height:100%;width:100%}:root{font-family:system-ui,"Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif}button{cursor:pointer}body{background:#1a6477;display:flex;justify-content:center;align-items:center}body .calculator-contents{padding:1.5rem;background:linear-gradient(to bottom, #0c2f38, #0a1a17);color:#fff;box-shadow:0px 0px 10px 1px rgba(255,255,255,.1);height:90%;width:375px;border:none;border-radius:12px;display:flex;flex-direction:column;justify-content:flex-end;align-items:stretch;gap:2.05rem}body .calculator-contents .calculator-outputs-display{background-color:rgba(255,255,255,.75);color:#000;height:135px;border:none;border-radius:12px;display:flex;flex-direction:column;justify-content:flex-end;padding:0;overflow-x:scroll;scrollbar-width:none}body .calculator-contents .calculator-outputs-display:hover{background-color:rgba(255,255,255,.8)}body .calculator-contents .calculator-outputs-display .calculator-operations{width:100%;font-size:2rem;font-weight:bold;font-family:"Courier New",Courier,monospace;word-wrap:nowrap;white-space:nowrap;overflow-x:scroll;scrollbar-width:thin}body .calculator-contents .calculator-outputs-display .calculator-operations>span{padding-right:1rem;padding-left:1rem;padding-bottom:1rem}body .calculator-contents .calculator-numbers-operators{display:flex;flex-direction:column;gap:.55rem}body .calculator-contents .calculator-numbers-operators .calculator-row{display:flex;gap:.55rem}body .calculator-contents .calculator-numbers-operators .calculator-row .calculator-btn{flex:1;background-color:rgba(0,0,0,.75);border:none;border-radius:12px;height:65px;transition:.05s;font-size:1.5rem;font-weight:100}body .calculator-contents .calculator-numbers-operators .calculator-row .calculator-btn:hover{background-color:rgba(255,255,255,.05)}body .calculator-contents .calculator-numbers-operators .calculator-row .calculator-btn:active{background-color:rgba(0,0,0,.75)}',""]);const i=c},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",o=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),o&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),o&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,o,n,a){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(c[l]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);o&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),n&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=n):u[4]="".concat(n)),e.push(u))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function r(t){for(var r=-1,o=0;o<e.length;o++)if(e[o].identifier===t){r=o;break}return r}function o(t,o){for(var a={},c=[],i=0;i<t.length;i++){var l=t[i],s=o.base?l[0]+o.base:l[0],u=a[s]||0,d="".concat(s," ").concat(u);a[s]=u+1;var p=r(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var b=n(f,o);o.byIndex=i,e.splice(i,0,{identifier:d,updater:b,references:1})}c.push(d)}return c}function n(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,n){var a=o(t=t||[],n=n||{});return function(t){t=t||[];for(var c=0;c<a.length;c++){var i=r(a[c]);e[i].references--}for(var l=o(t,n),s=0;s<a.length;s++){var u=r(a[s]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=l}}},659:t=>{var e={};t.exports=function(t,r){var o=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,n&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0;var o=r(72),n=r.n(o),a=r(825),c=r.n(a),i=r(659),l=r.n(i),s=r(56),u=r.n(s),d=r(540),p=r.n(d),f=r(113),b=r.n(f),m=r(100),h={};h.styleTagTransform=b(),h.setAttributes=u(),h.insert=l().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=p(),n()(m.A,h),m.A&&m.A.locals&&m.A.locals})();