(()=>{"use strict";var t={100:(t,e,r)=>{r.d(e,{A:()=>l});var o=r(601),n=r.n(o),a=r(314),c=r.n(a)()(n());c.push([t.id,'*{margin:0;padding:0;font-family:inherit;font-size:inherit;font-weight:inherit;color:inherit}html,body{height:100%;width:100%}:root{font-family:system-ui,"Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif}button{cursor:pointer}body{background:#1a6477;display:flex;justify-content:center;align-items:center}body .calculator-contents{padding:1.5rem;background:linear-gradient(to bottom, #0c2f38, #0a1a17);color:#fff;box-shadow:0px 0px 10px 1px rgba(255,255,255,.1);height:90%;width:375px;border:none;border-radius:12px;display:flex;flex-direction:column;justify-content:flex-end;align-items:stretch;gap:2.05rem}body .calculator-contents .calculator-outputs-display{background-color:rgba(255,255,255,.75);color:#000;height:135px;border:none;border-radius:12px;display:flex;flex-direction:column;justify-content:flex-end;padding:0;overflow-x:scroll;scrollbar-width:none}body .calculator-contents .calculator-outputs-display:hover{background-color:rgba(255,255,255,.8)}body .calculator-contents .calculator-outputs-display .calculator-operations{width:100%;font-size:2rem;font-weight:bold;font-family:"Courier New",Courier,monospace;word-wrap:nowrap;white-space:nowrap;overflow-x:scroll;overflow-y:hidden;scrollbar-width:thin}body .calculator-contents .calculator-outputs-display .calculator-operations>span{padding-right:1rem;padding-left:1rem;padding-bottom:1rem}body .calculator-contents .calculator-numbers-operators{display:flex;flex-direction:column;gap:.55rem}body .calculator-contents .calculator-numbers-operators .calculator-row{display:flex;gap:.55rem}body .calculator-contents .calculator-numbers-operators .calculator-row .calculator-btn{flex:1;background-color:rgba(0,0,0,.75);border:none;border-radius:12px;height:65px;transition:.05s;font-size:1.5rem;font-weight:100}body .calculator-contents .calculator-numbers-operators .calculator-row .calculator-btn:hover{background-color:rgba(255,255,255,.05)}body .calculator-contents .calculator-numbers-operators .calculator-row .calculator-btn:active{background-color:rgba(0,0,0,.75)}',""]);const l=c},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",o=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),o&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),o&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,o,n,a){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(o)for(var l=0;l<this.length;l++){var i=this[l][0];null!=i&&(c[i]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);o&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),n&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=n):u[4]="".concat(n)),e.push(u))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function r(t){for(var r=-1,o=0;o<e.length;o++)if(e[o].identifier===t){r=o;break}return r}function o(t,o){for(var a={},c=[],l=0;l<t.length;l++){var i=t[l],s=o.base?i[0]+o.base:i[0],u=a[s]||0,d="".concat(s," ").concat(u);a[s]=u+1;var p=r(d),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=n(f,o);o.byIndex=l,e.splice(l,0,{identifier:d,updater:m,references:1})}c.push(d)}return c}function n(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,n){var a=o(t=t||[],n=n||{});return function(t){t=t||[];for(var c=0;c<a.length;c++){var l=r(a[c]);e[l].references--}for(var i=o(t,n),s=0;s<a.length;s++){var u=r(a[s]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=i}}},659:t=>{var e={};t.exports=function(t,r){var o=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,n&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0;var o=r(72),n=r.n(o),a=r(825),c=r.n(a),l=r(659),i=r.n(l),s=r(56),u=r.n(s),d=r(540),p=r.n(d),f=r(113),m=r.n(f),b=r(100),h={};h.styleTagTransform=m(),h.setAttributes=u(),h.insert=i().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=p(),n()(b.A,h),b.A&&b.A.locals&&b.A.locals;const g=document.querySelectorAll(".calculator-btn"),y=document.getElementById("calculator-operations-text");let v=y.textContent;g.forEach(((t,e)=>{0===e?t.addEventListener("click",(()=>{isNaN(y.textContent[0])||isNaN(y.textContent[y.textContent.length-1])?(y.textContent="ERROR!",v=""):(y.textContent=String(function(t){t=t.trim();let e=[],r="";for(let o=0;o<t.length;o++)isNaN(t[o])&&"."!==t[o]?(r&&(e.push(r),r=""),e.push(t[o])):r+=t[o];r&&e.push(r);for(let t=0;t<e.length;t++)"*"===e[t]&&(e[t-1]=String(Number(e[t-1])*Number(e[t+1])),e[t]=!1,e[t+1]=!1,e=e.filter((t=>Boolean(t))),t=0),"/"===e[t]&&(e[t-1]=String(Number(e[t-1])/Number(e[t+1])),e[t]=!1,e[t+1]=!1,e=e.filter((t=>Boolean(t))),t=0);for(let t=0;t<e.length;t++)"+"===e[t]&&(e[t-1]=String(Number(e[t-1])+Number(e[t+1])),e[t]=!1,e[t+1]=!1,e=e.filter((t=>Boolean(t))),t=0),"-"===e[t]&&(e[t-1]=String(Number(e[t-1])-Number(e[t+1])),e[t]=!1,e[t+1]=!1,e=e.filter((t=>Boolean(t))),t=0);return e[0]}(v)),v=y.textContent)})):1===e?t.addEventListener("click",(()=>{y.textContent.length>0&&(y.textContent=y.textContent.substring(0,y.textContent.length-1),v=y.textContent)})):t.addEventListener("click",(()=>{v+=t.getAttribute("data-value"),y.textContent=v}))}))})();