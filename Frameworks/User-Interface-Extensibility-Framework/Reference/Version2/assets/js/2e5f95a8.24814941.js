"use strict";(self.webpackChunkuix_2=self.webpackChunkuix_2||[]).push([[8153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),i=p(n),d=a,y=i["".concat(c,".").concat(d)]||i[d]||u[d]||o;return n?r.createElement(y,m(m({ref:t},s),{},{components:n})):r.createElement(y,m({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,m=new Array(o);m[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[i]="string"==typeof e?e:a,m[1]=l;for(var p=2;p<o;p++)m[p]=n[p];return r.createElement.apply(null,m)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function m(e){let{children:t,hidden:n,className:m}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,m),hidden:n},t)}},34259:(e,t,n)=>{n(67294),n(51048)},75210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>N,frontMatter:()=>C,metadata:()=>x,toc:()=>g});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]},m="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Promise < void >"),(0,a.kt)("td",{parentName:"tr",align:null},"Method does not return a value")))))}l.isMDXComponent=!0;const c={toc:[]},p="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"customCommand"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The command id to delete. The command must be a custom command.")))))}s.isMDXComponent=!0;n(34259);var i=n(18679);const u={toc:[]},d="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// shellFrame points here into the IShellFrame interface\nawait shellFrame.Commands.DeleteCustomCommand(customCommand);\n"))))}y.isMDXComponent=!0;const f={toc:[]},b="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Deletes a custom command. The command is automatically removed."))}k.isMDXComponent=!0;const C={},v="DeleteCustomCommand",x={unversionedId:"UIExt2/Interfaces/ICommands/DeleteCustomCommand/index",id:"UIExt2/Interfaces/ICommands/DeleteCustomCommand/index",title:"DeleteCustomCommand",description:"Description",source:"@site/docs/UIExt2/Interfaces/ICommands/DeleteCustomCommand/index.mdx",sourceDirName:"UIExt2/Interfaces/ICommands/DeleteCustomCommand",slug:"/UIExt2/Interfaces/ICommands/DeleteCustomCommand/",permalink:"/UIExt2/Interfaces/ICommands/DeleteCustomCommand/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CreateSubMenuItem",permalink:"/UIExt2/Interfaces/ICommands/CreateSubMenuItem/"},next:{title:"ExecuteCommand",permalink:"/UIExt2/Interfaces/ICommands/ExecuteCommand/"}},h={},g=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return type",id:"return-type",level:2}],D={toc:g},I="wrapper";function N(e){let{components:t,...n}=e;return(0,a.kt)(I,(0,r.Z)({},D,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deletecustomcommand"},"DeleteCustomCommand"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)(k,{components:n.components,mdxType:"Description"}),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)(y,{components:n.components,mdxType:"Syntax"}),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)(s,{components:n.components,mdxType:"Params"}),(0,a.kt)("h2",{id:"return-type"},"Return type"),(0,a.kt)(l,{components:n.components,mdxType:"Returns"}))}N.isMDXComponent=!0}}]);