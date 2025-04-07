(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  background-color: #484040;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 1.5rem;\n  \n}\n#rain-svg {\n  height: 3rem;\n}\nimg {\n  height: 3rem;\n}\n#gif {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n.img-container{\n    height: calc(380px + 2rem);\n    width: calc(380px + 5rem);\n}\n.main-container{\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-grow: 1;\n  \n  padding-top: 1rem;\n\n}\n\n.result-container{\n  display: flex;\n}\n.temp-info{\n  padding: 1rem 2.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: center;\n  gap: 0.2rem;\n}\n.current-temp{\n  font-size: 3rem;\n}\n.country-name{\n  font-size: 2.2rem;\n}\n.sky-condition{\n  color: skyblue;\n}\n.img-container{\n  padding: 1rem 2.5rem;\n}\n.input-inner-container{\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  padding: 1rem 2.5rem;\n}\n.input-inner-container > input{\n  height: 2.5rem;\n  font-size: 2rem;\n  padding: 0rem 0.2rem;\n  outline: none;\n  width: 300px;\n  margin: 0.5rem 0rem;\n}\nselect{\n  height: 2.5rem;\n  font-size: 1.2rem;\n  width: 300px;\n  outline: none;\n}\n.result-container{\n  height: calc(100vh - 2rem);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.details-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  border: 1px solid white;\n  height: 70%;\n}\nbutton{\n  width: 300px;\n  margin-top: 1rem;\n  height: 2rem;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n.hidden{\n  display: none;\n}\n.alter-text{\n  padding: 1rem 2.5rem;\n}\n.alter-text > *{\n  font-size: 2rem;\n}\n\n.error-text{\n  color: crimson;\n}\n.details-container{\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: space-between;\n  \n}\n.sub-details{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.sub-details > span{\n  font-weight: bold;\n  color: skyblue;\n}\n#details-title{\n  text-align: center;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n",""]);const c=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var m=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),u=0;u<i.length;u++){var l=t(i[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),a=t.n(i),c=t(659),s=t.n(c),u=t(56),l=t.n(u),d=t(540),m=t.n(d),p=t(113),f=t.n(p),h=t(208),y={};y.styleTagTransform=f(),y.setAttributes=l(),y.insert=s().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=m(),o()(h.A,y),h.A&&h.A.locals&&h.A.locals;const g=document.querySelector(".mid-container"),x=(document.querySelector(".mid-container-2"),document.querySelector("#submit")),v=document.querySelector("#checkbox"),b=document.querySelector("#data-input"),w=document.querySelector(".loading-text"),C=document.querySelector(".error-text"),S=document.querySelector(".feelsLike-span"),q=document.querySelector(".humidity-span"),$=document.querySelector(".rain-span"),k=document.querySelector(".uvIndex-span"),j=document.querySelector(".place-name"),A=document.querySelector(".country-name"),T=document.querySelector(".current-temp"),E=document.querySelector(".current-date"),M=document.querySelector(".current-time"),L=document.querySelector(".wind-span"),z=document.querySelector(".sky-condition"),N=document.querySelector("#gif"),_=document.querySelector(".result-container");function I(e,n){_.classList.remove("hidden"),w.classList.add("hidden"),j.textContent=`${e.location.name}`,A.textContent=`${e.location.country}`;const t=`${e.location.localtime}`,[r,o]=t.split(" ");E.textContent=`${r}`,M.textContent=`${o}`,"fahrenheight"===n?(T.textContent=`${Math.floor(e.current.temp_f)}°F`,S.textContent=`${Math.floor(e.current.feelslike_f)}°F`):(T.textContent=`${Math.floor(e.current.temp_c)}°C`,S.textContent=`${Math.floor(e.current.feelslike_c)}°C`),z.textContent=`${e.current.condition.text}`,F(`${e.current.condition.text}`),q.textContent=`${e.current.humidity}`,$.textContent=`${e.current.cloud}%`,k.textContent=`${e.current.uv}`,L.textContent=`${e.current.wind_kph} kph`}async function F(e){try{let n=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=WKTATgG1JvRhkTgmotaV2TqR1AAgrngA&s=${e}`,{mode:"cors"}),t=await n.json();if(!n.ok)throw new Error("Network Connection Error Or Api Expired!!!");if(0===t.data.length)throw new Error(`No images found with the name of ${e} `);g.classList.remove("hidden"),N.src=t.data.images.original.url}catch(e){console.error(e)}}x.addEventListener("click",(e=>{e.preventDefault();let n=b.value.trim(),t=v.value;n?(j.textContent="",E.textContent="",T.textContent="",M.textContent="",j.textContent="",A.textContent="",z.textContent="",C.textContent="",_.classList.add("hidden"),g.classList.remove("hidden"),b.value="",v.value="",F("loading white"),async function(e,n){try{const t=await fetch(`https://api.weatherapi.com/v1/current.json?key=bcc7b80b66cd487c928133157250604&q=${e}&aqi=no`,{mode:"cors"});if(!t.ok)throw new Error(`No Place Found With the name of ${e}`);const r=n;I(await t.json(),r)}catch(e){w.classList.add("hidden"),C.textContent=`${e}`,F("error no data found")}}(n,t)):alert("No name inputed")}))})();