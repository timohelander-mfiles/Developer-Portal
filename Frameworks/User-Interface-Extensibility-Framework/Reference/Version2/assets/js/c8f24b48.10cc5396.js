"use strict";(self.webpackChunkuix_2=self.webpackChunkuix_2||[]).push([[9344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,b=s["".concat(p,".").concat(d)]||s[d]||u[d]||o;return n?r.createElement(b,i(i({ref:t},m),{},{components:n})):r.createElement(b,i({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},34259:(e,t,n)=>{n(67294),n(51048)},4633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>g,default:()=>N,frontMatter:()=>x,metadata:()=>v,toc:()=>h});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise < ",(0,a.kt)("inlineCode",{parentName:"td"},"string")," >"),(0,a.kt)("td",{parentName:"tr",align:null})))))}l.isMDXComponent=!0;const p={toc:[]},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"webUrl"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The target url to be opened in new tab.")))))}m.isMDXComponent=!0;n(34259);var s=n(18679);const u={toc:[]},d="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// ICommonFunctions is binded into the MFiles global object\nconst result = await MFiles.OpenExternalWebLink(webUrl);\n"))))}b.isMDXComponent=!0;const k={toc:[]},y="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Open external web link in a tab."))}f.isMDXComponent=!0;const x={},g="OpenExternalWebLink",v={unversionedId:"UIExt2/Interfaces/ICommonFunctions/OpenExternalWebLink/index",id:"UIExt2/Interfaces/ICommonFunctions/OpenExternalWebLink/index",title:"OpenExternalWebLink",description:"Description",source:"@site/docs/UIExt2/Interfaces/ICommonFunctions/OpenExternalWebLink/index.mdx",sourceDirName:"UIExt2/Interfaces/ICommonFunctions/OpenExternalWebLink",slug:"/UIExt2/Interfaces/ICommonFunctions/OpenExternalWebLink/",permalink:"/UIExt2/Interfaces/ICommonFunctions/OpenExternalWebLink/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetWebLink",permalink:"/UIExt2/Interfaces/ICommonFunctions/GetWebLink/"},next:{title:"ReadFromWebStorage",permalink:"/UIExt2/Interfaces/ICommonFunctions/ReadFromWebStorage/"}},O={},h=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return type",id:"return-type",level:2}],I={toc:h},E="wrapper";function N(e){let{components:t,...n}=e;return(0,a.kt)(E,(0,r.Z)({},I,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"openexternalweblink"},"OpenExternalWebLink"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)(f,{components:n.components,mdxType:"Description"}),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)(b,{components:n.components,mdxType:"Syntax"}),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)(m,{components:n.components,mdxType:"Params"}),(0,a.kt)("h2",{id:"return-type"},"Return type"),(0,a.kt)(l,{components:n.components,mdxType:"Returns"}))}N.isMDXComponent=!0}}]);