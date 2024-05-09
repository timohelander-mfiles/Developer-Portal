"use strict";(self.webpackChunkuix_2=self.webpackChunkuix_2||[]).push([[5956],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={toc:[]},o="wrapper";function i(e){let{components:t,...n}=e;return(0,a.kt)(o,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CALL_IMPORTANCE_DEFAULT"),(0,a.kt)("td",{parentName:"tr",align:null},"Call importance not set. Usually defaults to eciNormal."),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CALL_IMPORTANCE_NORMAL"),(0,a.kt)("td",{parentName:"tr",align:null},"Normal call. Calls of this type are never rejected. Multiple concurrent calls are served by concurrent threads in MFServer. Most calls should specify this importance level."),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CALL_IMPORTANCE_CAN_BE_REJECTED"),(0,a.kt)("td",{parentName:"tr",align:null},"A less important call, e.g. cache prefilling. This type of calls can be rejected by the server if it is currently too busy (e.g. servicing too many other calls). If MFServer rejects a call, E_MFILES_CALL_REJECTED is returned."),(0,a.kt)("td",{parentName:"tr",align:null},"2")))))}i.isMDXComponent=!0;const c={},p="CallImportance",s={unversionedId:"gRPC/Enums/CallImportance/index",id:"gRPC/Enums/CallImportance/index",title:"CallImportance",description:"Used by MFServer to distinguish between incoming calls of different",source:"@site/docs/gRPC/Enums/CallImportance/index.mdx",sourceDirName:"gRPC/Enums/CallImportance",slug:"/gRPC/Enums/CallImportance/",permalink:"/gRPC/Enums/CallImportance/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AutomaticValueType",permalink:"/gRPC/Enums/AutomaticValueType/"},next:{title:"ConditionType",permalink:"/gRPC/Enums/ConditionType/"}},u={},m=[],d={toc:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"callimportance"},"CallImportance"),(0,a.kt)("p",null,"Used by MFServer to distinguish between incoming calls of different\nimportance levels. For example, less important calls may be rejected\nif the server is busy."),(0,a.kt)(i,{components:n.components,mdxType:"Values"}))}y.isMDXComponent=!0}}]);