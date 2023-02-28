(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),a=t.n(r),o=t(645),c=t.n(o),i=t(667),s=t.n(i),d=new URL(t(50),t.b),l=c()(a()),u=s()(d);l.push([e.id,'* {\n  font-family: "Space Mono", monospace;\n}\n\nbody {\n  min-height: 100vh;\n  width: 100vw;\n  background-image: url('+u+");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\nh1 {\n  max-width: 60vw;\n}\n\nnav {\n  background-color: #475569;\n  color: white;\n  width: 100vw;\n}\n\n#content {\n  height: fit-content;\n\n  padding: 5rem;\n}\n\nbutton {\n  all: unset;\n}\n\nimg {\n  object-fit: cover;\n}\n",""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var v=a(f,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:v,references:1})}c.push(u)}return c}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=t(o[c]);n[i].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},50:(e,n,t)=>{e.exports=t.p+"49aad64013ece674768c.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{t(50);const e=e=>{e.innerHTML="";let n=document.createElement("h1");n.textContent="The Perfect Place to Chill",n.classList.add("mt-5","text-black","bg-white"),n.style.width="max-content",e.appendChild(n)},n=t.p+"1abdaaa788d5dad503f5.jpg",r=t.p+"3eab908a5eab431f7eca.jpg",a=t.p+"00f6b9c7e32e558930c9.jpg",o=t.p+"0b47d14b3926aa6e72df.jpg",c=t.p+"1327384e53024502ebad.jpg",i=t.p+"6e1f1bf6d4bc966af55a.jpg";var s=t(379),d=t.n(s),l=t(795),u=t.n(l),p=t(569),f=t.n(p),v=t(565),h=t.n(v),m=t(216),b=t.n(m),g=t(589),y=t.n(g),w=t(28),x={};x.styleTagTransform=y(),x.setAttributes=h(),x.insert=f().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=b(),d()(w.Z,x),w.Z&&w.Z.locals&&w.Z.locals;const T=document.querySelector("#content"),S=document.querySelector("#brand"),E=document.querySelector("#contact"),L=document.querySelector("#menu"),M=document.querySelector("#display-modal");document.querySelector("body"),e(T),S.addEventListener("click",(()=>{e(T)})),L.addEventListener("click",(()=>{!function(e){document.createElement("div").classList.add("container");let t=document.createElement("div");t.classList.add("row","row-cols-1","row-cols-lg-3","gy-5","d-flex","justify-content-around"),[["Latte","$5",a],["Espresso","$3",n],["Mocha","$5",i],["Matcha","$6",o],["Bubble Tea","$7",r],["Green Tea","$3",c]].forEach((e=>{t.appendChild(function(e,n,t){let r=document.createElement("div");return r.classList.add("col"),r.innerHTML=`<div class="card h-100">\n  <img src="${t}" alt="Image of ${e}" class="card-img-top" />\n  <div class="card-header"><h2>${e}</h2></div>\n  <div class="card-body">\n    <h4 class="card-title">${n}</h4>\n    <button class="btn btn-success">Buy</button>\n  </div>`,r}(...e))})),e.innerHTML="",e.appendChild(t)}(T)})),E.addEventListener("click",(e=>{!function(e){let n=document.createElement("div");n.innerHTML='<div class="modal" tabindex="-1" id="modal">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header text-align-center">\n          <h4>Contact Us</h4>\n          <button\n            class="btn-close"\n            data-bs-dismiss="modal"\n            aria-label="Close"\n          ></button>\n        </div>\n        <div class="modal-body">\n          <p>Telephone: +65 1234 5678</p>\n          <p>Address: Singapore, Singapore</p>\n        </div>\n      </div>\n    </div>\n  </div>',e.innerHTML="",e.appendChild(n)}(T),M.click()}))})()})();