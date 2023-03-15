(()=>{"use strict";var e,n,t,r,o,a,c,i,s,u,l,d,p,f,m={426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),c=t.n(a),i=t(667),s=t.n(i),u=new URL(t(7),t.b),l=c()(o()),d=s()(u);l.push([e.id,"*{\n    box-sizing: border-box;\n}\n\nbody{\n    border: 1px solid red;\n\n    margin: 0;\n    padding: 0;\n\n    height: 100vh;\n    height: 100svh;\n    width: 100vw;\n    width: 100svw;\n\n    background-image: url("+d+");\n    background-size:cover;\n    background-position: 50% 50%;\n}\n\n.content{\n    border: 1px solid cyan;\n\n    height: 100%;\n    width: 100%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;    \n}\n\nheader{\n    border: 1px solid black;\n    background-color: rgba(0,0,0,0.9);\n    color: rgb(220,220,220);\n    display: flex;\n    flex-direction: column;\n}\n\nh1 {\n    text-align: center;\n}\n\nnav{\n    border: 1px solid navy;\n    display: flex;\n    justify-content: center;\n    gap: 0.5rem;\n}\n\nbutton {\n    box-sizing: border-box;\n    background-color: black;\n    padding: 1rem 2rem;\n    border: none;\n    color: rgb(220,220,220);\n    transition: 0.125s;\n}\n\nbutton:hover{\n    background-color: grey;\n    transform: scale(110%);\n}\n\nbutton:active{\n    background-color: darkgray;\n}\n\nmain{\n    flex: 1;\n    display: flex;\n    border-top: 1px solid magenta;\n    border-bottom: 1px solid blue;\n    justify-content: center;\n    align-items: center;\n    overflow: scroll;\n}\n\n.subcontent{\n    width: clamp(30rem,70%,60rem);\n    height: clamp(30rem,70%,60rem);\n    background-color: rgba(0,0,0,0.8);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.subcontent > * {\n    color: white;\n}\n\nfooter{\n    text-align: center;\n    background-color: rgba(100,100,100,0.8);\n}\n",""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:d,updater:m,references:1})}c.push(d)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},7:(e,n,t)=>{e.exports=t.p+"5373b999e851736e6089.jpg"}},h={};function b(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return m[e](t,t.exports,b),t.exports}b.m=m,b.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return b.d(n,{a:n}),n},b.d=(e,n)=>{for(var t in n)b.o(n,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;b.g.importScripts&&(e=b.g.location+"");var n=b.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=e})(),b.b=document.baseURI||self.location.href,b.nc=void 0,e=b(379),n=b.n(e),t=b(795),r=b.n(t),o=b(569),a=b.n(o),c=b(565),i=b.n(c),s=b(216),u=b.n(s),l=b(589),d=b.n(l),p=b(426),(f={}).styleTagTransform=d(),f.setAttributes=i(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,function(){const e=document.querySelector(".content");!function(e){const n=document.createElement("header");e.appendChild(n);const t=document.createElement("h1");t.textContent="Restaurant: For Food",n.appendChild(t);const r=document.createElement("nav");n.appendChild(r);const o={home:document.createElement("button"),menu:document.createElement("button"),contact:document.createElement("button")};Object.keys(o).forEach((e=>{o[e].classList.add(e);let n=e;n=n.replace(/^./,n[0].toUpperCase()),o[e].textContent=n,o[e].addEventListener("click",(()=>{!function(e){let n=document.querySelector(".subcontent");n.childNodes.forEach((e=>{e.remove()})),n.appendChild(function(e){let n=document.createElement("div");return n.textContent=`Stuff for the ${e}  to be put here`,n}(e))}(e)})),r.appendChild(o[e])}))}(e),function(e){const n=document.createElement("main");e.appendChild(n);const t=document.createElement("div");t.classList.add("subcontent"),n.appendChild(t)}(e),function(e){const n=document.createElement("footer");e.appendChild(n),n.innerHTML='Made by imHenryMa | Photo by <a href="https://unsplash.com/@vardarious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Volkan Vardar</a> on <a href="https://unsplash.com/photos/1H30uRC1plc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'}(e)}()})();