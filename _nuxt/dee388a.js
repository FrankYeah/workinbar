(window.webpackJsonp=window.webpackJsonp||[]).push([[20,3,4,6,10],{629:function(t,e,r){var content=r(633);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("b2b3508c",content,!0,{sourceMap:!1})},630:function(t,e,r){var content=r(637);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("0c9b0cc3",content,!0,{sourceMap:!1})},632:function(t,e,r){"use strict";r(629)},633:function(t,e,r){var o=r(23)(!1);o.push([t.i,".box[data-v-4423a8d4]{max-width:1100px;margin:100px auto}@media(max-width:1023px){.box[data-v-4423a8d4]{max-width:500px;margin:70px auto 30px}}",""]),t.exports=o},634:function(t,e,r){"use strict";r.r(e);var o={components:{},props:{},data:function(){return{}},computed:{},methods:{},watch:{}},n=(r(632),r(26)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"box"},[t._t("default")],2)}),[],!1,null,"4423a8d4",null);e.default=component.exports},635:function(t,e,r){var content=r(645);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("3ec1ede2",content,!0,{sourceMap:!1})},636:function(t,e,r){"use strict";r(630)},637:function(t,e,r){var o=r(23)(!1);o.push([t.i,".contactB[data-v-c3397ac2],.contactB-box[data-v-c3397ac2]{text-align:center}.contactB-box[data-v-c3397ac2]{width:250px;padding:16px 0;border:1px solid #005caf;border-radius:4px;font-size:22px;color:#005caf;cursor:pointer;-webkit-transition:.6s;transition:.6s}.contactB-box[data-v-c3397ac2]:hover{color:#fff;background-color:#005caf}.contactB-box-mini[data-v-c3397ac2]{width:150px;padding:10px 0;font-size:18px}@media(max-width:1023px){.contactB-box[data-v-c3397ac2]{width:140PX;padding:8px 0;font-size:18px}.contactB-box-mini[data-v-c3397ac2]{width:100px;padding:6px 0;font-size:15px}}",""]),t.exports=o},640:function(t,e,r){"use strict";r.r(e);var o={components:{},props:{text:String,mini:{type:Boolean,default:!1}},data:function(){return{}},computed:{},methods:{},watch:{}},n=(r(636),r(26)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["contactB"]},[r("button",{class:["contactB-box",{"contactB-box-mini":t.mini}]},[t._v("\n    "+t._s(t.text)+"\n  ")])])}),[],!1,null,"c3397ac2",null);e.default=component.exports},642:function(t,e,r){var content=r(648);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("5eb4bdbd",content,!0,{sourceMap:!1})},644:function(t,e,r){"use strict";r(635)},645:function(t,e,r){var o=r(23)(!1);o.push([t.i,".pre[data-v-d5dceafa]{margin-bottom:-1px;padding-top:120px;background-color:#f0f0f0;color:#000}@media(max-width:1023px){.pre[data-v-d5dceafa]{padding-top:80px}}",""]),t.exports=o},646:function(t,e,r){"use strict";r.r(e);var o={components:{},props:{ch:String,en:String},data:function(){return{}},computed:{},methods:{},watch:{}},n=(r(644),r(26)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"pre"},[t._t("default")],2)}),[],!1,null,"d5dceafa",null);e.default=component.exports},647:function(t,e,r){"use strict";r(642)},648:function(t,e,r){var o=r(23)(!1);o.push([t.i,".head[data-v-5fe8913b]{text-align:center}.head-text-ch[data-v-5fe8913b]{font-size:34px;letter-spacing:8px}.head-text-en[data-v-5fe8913b]{margin-top:18px;font-size:20px;letter-spacing:2px}.head-line[data-v-5fe8913b]{width:30px;height:1px;background-color:#005caf;margin:20px auto 0}@media(max-width:1023px){.head-text-ch[data-v-5fe8913b]{font-size:24px;line-height:1.4}.head-text-en[data-v-5fe8913b]{font-size:16px;margin-top:12px}.head-line[data-v-5fe8913b]{width:20px;margin:16px auto 0}}",""]),t.exports=o},655:function(t,e,r){"use strict";r.r(e);var o={components:{},props:{ch:String,en:String},data:function(){return{}},computed:{},methods:{},watch:{}},n=(r(647),r(26)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"head"},[r("h1",{staticClass:"head-text-ch"},[t._v(t._s(t.ch))]),t._v(" "),r("h1",{staticClass:"head-text-en"},[t._v(t._s(t.en))]),t._v(" "),r("div",{staticClass:"head-line"})])}),[],!1,null,"5fe8913b",null);e.default=component.exports},656:function(t,e,r){"use strict";const o=r(657),n=r(658),c=r(659),d=r(660),l=Symbol("encodeFragmentIdentifier");function f(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(t,e){return e.encode?e.strict?o(t):encodeURIComponent(t):t}function x(t,e){return e.decode?n(t):t}function h(input){return Array.isArray(input)?input.sort():"object"==typeof input?h(Object.keys(input)).sort(((a,b)=>Number(a)-Number(b))).map((t=>input[t])):input}function v(input){const t=input.indexOf("#");return-1!==t&&(input=input.slice(0,t)),input}function y(input){const t=(input=v(input)).indexOf("?");return-1===t?"":input.slice(t+1)}function w(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function k(t,e){f((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);const r=function(t){let e;switch(t.arrayFormat){case"index":return(t,r,o)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===o[t]&&(o[t]={}),o[t][e[1]]=r):o[t]=r};case"bracket":return(t,r,o)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==o[t]?o[t]=[].concat(o[t],r):o[t]=[r]:o[t]=r};case"colon-list-separator":return(t,r,o)=>{e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),e?void 0!==o[t]?o[t]=[].concat(o[t],r):o[t]=[r]:o[t]=r};case"comma":case"separator":return(e,r,o)=>{const n="string"==typeof r&&r.includes(t.arrayFormatSeparator),c="string"==typeof r&&!n&&x(r,t).includes(t.arrayFormatSeparator);r=c?x(r,t):r;const d=n||c?r.split(t.arrayFormatSeparator).map((e=>x(e,t))):null===r?r:x(r,t);o[e]=d};case"bracket-separator":return(e,r,o)=>{const n=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),!n)return void(o[e]=r?x(r,t):r);const c=null===r?[]:r.split(t.arrayFormatSeparator).map((e=>x(e,t)));void 0!==o[e]?o[e]=[].concat(o[e],c):o[e]=c};default:return(t,e,r)=>{void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),o=Object.create(null);if("string"!=typeof t)return o;if(!(t=t.trim().replace(/^[?#&]/,"")))return o;for(const param of t.split("&")){if(""===param)continue;let[t,n]=c(e.decode?param.replace(/\+/g," "):param,"=");n=void 0===n?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?n:x(n,e),r(x(t,e),n,o)}for(const t of Object.keys(o)){const r=o[t];if("object"==typeof r&&null!==r)for(const t of Object.keys(r))r[t]=w(r[t],e);else o[t]=w(r,e)}return!1===e.sort?o:(!0===e.sort?Object.keys(o).sort():Object.keys(o).sort(e.sort)).reduce(((t,e)=>{const r=o[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=h(r):t[e]=r,t}),Object.create(null))}e.extract=y,e.parse=k,e.stringify=(object,t)=>{if(!object)return"";f((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const e=e=>t.skipNull&&null==object[e]||t.skipEmptyString&&""===object[e],r=function(t){switch(t.arrayFormat){case"index":return e=>(r,o)=>{const n=r.length;return void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?r:null===o?[...r,[m(e,t),"[",n,"]"].join("")]:[...r,[m(e,t),"[",m(n,t),"]=",m(o,t)].join("")]};case"bracket":return e=>(r,o)=>void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?r:null===o?[...r,[m(e,t),"[]"].join("")]:[...r,[m(e,t),"[]=",m(o,t)].join("")];case"colon-list-separator":return e=>(r,o)=>void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?r:null===o?[...r,[m(e,t),":list="].join("")]:[...r,[m(e,t),":list=",m(o,t)].join("")];case"comma":case"separator":case"bracket-separator":{const e="bracket-separator"===t.arrayFormat?"[]=":"=";return r=>(o,n)=>void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?o:(n=null===n?"":n,0===o.length?[[m(r,t),e,m(n,t)].join("")]:[[o,m(n,t)].join(t.arrayFormatSeparator)])}default:return e=>(r,o)=>void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?r:null===o?[...r,m(e,t)]:[...r,[m(e,t),"=",m(o,t)].join("")]}}(t),o={};for(const t of Object.keys(object))e(t)||(o[t]=object[t]);const n=Object.keys(o);return!1!==t.sort&&n.sort(t.sort),n.map((e=>{const o=object[e];return void 0===o?"":null===o?m(e,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?m(e,t)+"[]":o.reduce(r(e),[]).join("&"):m(e,t)+"="+m(o,t)})).filter((t=>t.length>0)).join("&")},e.parseUrl=(t,e)=>{e=Object.assign({decode:!0},e);const[r,o]=c(t,"#");return Object.assign({url:r.split("?")[0]||"",query:k(y(t),e)},e&&e.parseFragmentIdentifier&&o?{fragmentIdentifier:x(o,e)}:{})},e.stringifyUrl=(object,t)=>{t=Object.assign({encode:!0,strict:!0,[l]:!0},t);const r=v(object.url).split("?")[0]||"",o=e.extract(object.url),n=e.parse(o,{sort:!1}),c=Object.assign(n,object.query);let d=e.stringify(c,t);d&&(d=`?${d}`);let f=function(t){let e="";const r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(object.url);return object.fragmentIdentifier&&(f=`#${t[l]?m(object.fragmentIdentifier,t):object.fragmentIdentifier}`),`${r}${d}${f}`},e.pick=(input,filter,t)=>{t=Object.assign({parseFragmentIdentifier:!0,[l]:!1},t);const{url:r,query:o,fragmentIdentifier:n}=e.parseUrl(input,t);return e.stringifyUrl({url:r,query:d(o,filter),fragmentIdentifier:n},t)},e.exclude=(input,filter,t)=>{const r=Array.isArray(filter)?t=>!filter.includes(t):(t,e)=>!filter(t,e);return e.pick(input,r,t)}},657:function(t,e,r){"use strict";t.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,(t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`))},658:function(t,e,r){"use strict";var o="%[a-f0-9]{2}",n=new RegExp(o,"gi"),c=new RegExp("("+o+")+","gi");function d(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),o=t.slice(e);return Array.prototype.concat.call([],d(r),d(o))}function l(input){try{return decodeURIComponent(input)}catch(e){for(var t=input.match(n),i=1;i<t.length;i++)t=(input=d(t,i).join("")).match(n);return input}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(input){for(var t={"%FE%FF":"��","%FF%FE":"��"},e=c.exec(input);e;){try{t[e[0]]=decodeURIComponent(e[0])}catch(o){var r=l(e[0]);r!==e[0]&&(t[e[0]]=r)}e=c.exec(input)}t["%C2"]="�";for(var o=Object.keys(t),i=0;i<o.length;i++){var n=o[i];input=input.replace(new RegExp(n,"g"),t[n])}return input}(t)}}},659:function(t,e,r){"use strict";t.exports=(t,e)=>{if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];const r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},660:function(t,e,r){"use strict";t.exports=function(t,e){for(var r={},o=Object.keys(t),n=Array.isArray(e),i=0;i<o.length;i++){var c=o[i],d=t[c];(n?-1!==e.indexOf(c):e(c,d,t))&&(r[c]=d)}return r}},674:function(t,e,r){var content=r(694);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("6ddd2c4a",content,!0,{sourceMap:!1})},693:function(t,e,r){"use strict";r(674)},694:function(t,e,r){var o=r(23)(!1);o.push([t.i,".contact-intro[data-v-014ac3e6]{margin:0 auto}.contact-info[data-v-014ac3e6]{margin:50px auto 0;color:#000}.contact-info-box[data-v-014ac3e6]{width:700px;line-height:1.6;text-align:center;font-size:18px;border:1px solid #caccd7;padding:50px;margin:auto}.contact-info-title[data-v-014ac3e6]{font-size:18px}.contact-info-text a[data-v-014ac3e6]{color:#005caf;text-decoration:underline}.contact-info-text a[data-v-014ac3e6]:hover{opacity:.8}.contact-form[data-v-014ac3e6]{max-width:800px;margin:50px auto 100px}.contact-form-empty[data-v-014ac3e6]{position:absolute;left:0;top:0;visibility:hidden;height:1px}.contact-form-outer[data-v-014ac3e6]{border:1px solid #caccd7;max-width:650px;margin:0 auto;padding:50px 100px;border-radius:4px}.contact-form-title[data-v-014ac3e6]{text-align:center;font-size:20px;margin-bottom:50px}.contact-form-box[data-v-014ac3e6]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:70px}.contact-form-head[data-v-014ac3e6]{font-size:16px}.contact-form-input[data-v-014ac3e6]{width:450px;font-size:16px;padding:15px 10px;border:1px solid rgba(0,0,0,.4);background-color:transparent;border-radius:4px}.contact-form-input[data-v-014ac3e6]::-webkit-input-placeholder{opacity:.6}.contact-form-input[data-v-014ac3e6]::-moz-placeholder{opacity:.6}.contact-form-input[data-v-014ac3e6]:-ms-input-placeholder{opacity:.6}.contact-form-input[data-v-014ac3e6]::-ms-input-placeholder{opacity:.6}.contact-form-input[data-v-014ac3e6]::placeholder{opacity:.6}.contact-form-textarea[data-v-014ac3e6]{width:450px;height:100px;padding:15px 10px;line-height:1.4;font-size:16px;border:1px solid rgba(0,0,0,.4);border-radius:4px;background-color:transparent}.contact-form-textarea[data-v-014ac3e6]::-webkit-input-placeholder{opacity:.6}.contact-form-textarea[data-v-014ac3e6]::-moz-placeholder{opacity:.6}.contact-form-textarea[data-v-014ac3e6]:-ms-input-placeholder{opacity:.6}.contact-form-textarea[data-v-014ac3e6]::-ms-input-placeholder{opacity:.6}.contact-form-textarea[data-v-014ac3e6]::placeholder{opacity:.6}.contact-form-error[data-v-014ac3e6]{color:red;font-size:16px;margin:10px 0 0 128px}.contact-form-error-line[data-v-014ac3e6]{border:1px solid red}.contact-form-btn[data-v-014ac3e6]{margin-top:60px}@media(max-width:1023px){.contact[data-v-014ac3e6]{padding:80px 20px 0}.contact-info-box[data-v-014ac3e6]{width:calc(100% - 40px);padding:30px 20px}.contact-info-text[data-v-014ac3e6],.contact-info-title[data-v-014ac3e6]{font-size:15px}.contact-info-text a[data-v-014ac3e6]{font-size:14px}.contact-form[data-v-014ac3e6]{max-width:500px;margin:50px auto 70px}.contact-form-outer[data-v-014ac3e6]{max-width:calc(100% - 40px);padding:40px 20px}.contact-form-box[data-v-014ac3e6],.contact-form-title[data-v-014ac3e6]{margin-bottom:40px}.contact-form-head[data-v-014ac3e6]{margin-bottom:10px}.contact-form-input[data-v-014ac3e6]{width:100%;padding:12px 8px;font-size:15px}.contact-form-error[data-v-014ac3e6]{margin:10px 0 0}.contact-form-btn[data-v-014ac3e6]{margin-top:40px}}",""]),t.exports=o},785:function(t,e,r){"use strict";r.r(e);r(34);var o={head:{title:"聯絡 - 西打藍官方網站 Siddharam Official Website",meta:[{name:"keywords",content:"西打藍, 西打藍官方網站, 自由工作者, 自由接案, 前端工程師, 文字工作者, 網站開發, 網站架設, 軟體工程師"}]},layout:"default",components:{boxContent:r(634).default,preBox:r(646).default,headText:r(655).default,contactBtn:r(640).default},props:{},data:function(){return{form:{name:"",mail:"",msg:"",assure:""},isForm:{name:!0,mail:!0,msg:!0,assure:!0},isEmpty:!1}},computed:{},methods:{focusInput:function(t){"name"==t?this.isForm.name=!0:"mail"==t?this.isForm.mail=!0:"msg"==t?this.isForm.msg=!0:"assure"==t&&(this.isForm.assure=!0)},handleSubmit:function(){if(this.form.name||(this.isForm.name=!1),this.form.mail||(this.isForm.mail=!1),this.form.msg||(this.isForm.msg=!1),this.form.assure||(this.isForm.assure=!1),"西打藍"!=this.form.assure&&(this.isForm.assure=!1),this.form.name&&this.form.mail&&this.form.msg&&this.form.assure&&"西打藍"==this.form.assure){var q=r(656).stringifyUrl({url:"https://docs.google.com/forms/u/0/d/e/1FAIpQLSfd6NNOtLe5hhKNlVD7gt6QxASHqKbKOyBsVdnpargTeTuk9A/formResponse",query:{"entry.1757970004":this.form.name,"entry.739774615":this.form.mail,"entry.1914748398":this.form.msg}});this.$axios.post(q).then((function(t){})).catch((function(t){})),window.scroll(0,0),this.isEmpty=!0}}},watch:{}},n=(r(693),r(26)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("preBox",{staticClass:"contact"},[r("headText",{attrs:{ch:"聯絡西打藍",en:"CONTACT"}}),t._v(" "),r("boxContent",{staticClass:"contact-info"},[r("div",{staticClass:"contact-info-box"},[r("div",{staticClass:"contact-info-title"},[t._v("有邀約、合作、聯絡事宜，歡迎使用以下聯繫方式")]),t._v(" "),r("div",{staticClass:"contact-info-text"},[t._v("郵件：frank@siddharam.com")]),t._v(" "),r("div",{staticClass:"contact-info-text"},[r("a",{attrs:{href:"https://m.me/104806204464269",target:"_blank"}},[t._v("FB")]),t._v("\n        、\n        "),r("a",{attrs:{href:"https://www.instagram.com/sidd.blue/",target:"_blank"}},[t._v("IG")]),t._v("\n        、\n        "),r("a",{attrs:{href:"https://page.line.me/siddblue",target:"_blank"}},[t._v("LINE")]),t._v(" "),t._v("\n        、\n        "),r("a",{attrs:{href:"https://forms.gle/8Y2pGN7j86ksVaFG6",target:"_blank"}},[t._v("表單")])])])])],1)}),[],!1,null,"014ac3e6",null);e.default=component.exports}}]);