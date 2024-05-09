"use strict";(self.webpackChunkuix_2=self.webpackChunkuix_2||[]).push([[2763],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=u(n),k=r,N=d["".concat(o,".").concat(k)]||d[k]||c[k]||l;return n?a.createElement(N,p(p({ref:e},m),{},{components:n})):a.createElement(N,p({ref:e},m))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[d]="string"==typeof t?t:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},86294:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]},p="wrapper";function i(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATATYPE_UNINITIALIZED"),(0,r.kt)("td",{parentName:"tr",align:null},"Unknown type (not initialized to any type)."),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATATYPE_TEXT"),(0,r.kt)("td",{parentName:"tr",align:null},"Text."),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATATYPE_INTEGER"),(0,r.kt)("td",{parentName:"tr",align:null},"32-bit integer"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATATYPE_REAL_NUMBER"),(0,r.kt)("td",{parentName:"tr",align:null},"Double-precision floating point."),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATATYPE_DECIMAL_NUMBER"),(0,r.kt)("td",{parentName:"tr",align:null},"Fixed-precision number."),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATATYPE_DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"Date."),(0,r.kt)("td",{parentName:"tr",align:null},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATATYPE_TIME"),(0,r.kt)("td",{parentName:"tr",align:null},"Time."),(0,r.kt)("td",{parentName:"tr",align:null},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATATYPE_TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp."),(0,r.kt)("td",{parentName:"tr",align:null},"7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATATYPE_BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean."),(0,r.kt)("td",{parentName:"tr",align:null},"8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATATYPE_LOOKUP"),(0,r.kt)("td",{parentName:"tr",align:null},"Lookup (from a value list)."),(0,r.kt)("td",{parentName:"tr",align:null},"9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATATYPE_MULTI_SELECT_LOOKUP"),(0,r.kt)("td",{parentName:"tr",align:null},"Multiple selection from a value list."),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATATYPE_INTEGER64"),(0,r.kt)("td",{parentName:"tr",align:null},"64-bit integer. Not used in document properties."),(0,r.kt)("td",{parentName:"tr",align:null},"11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATATYPE_MULTI_LINE_TEXT"),(0,r.kt)("td",{parentName:"tr",align:null},"Multi-line text."),(0,r.kt)("td",{parentName:"tr",align:null},"13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATATYPE_ACL"),(0,r.kt)("td",{parentName:"tr",align:null},"Access Control List."),(0,r.kt)("td",{parentName:"tr",align:null},"14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATATYPE_BINARY"),(0,r.kt)("td",{parentName:"tr",align:null},"Byte array."),(0,r.kt)("td",{parentName:"tr",align:null},"15")))))}i.isMDXComponent=!0;const o={},u="Datatype",m={unversionedId:"gRPC/Enums/Datatype/index",id:"gRPC/Enums/Datatype/index",title:"Datatype",description:"Datatype enumeration.",source:"@site/docs/gRPC/Enums/Datatype/index.mdx",sourceDirName:"gRPC/Enums/Datatype",slug:"/gRPC/Enums/Datatype/",permalink:"/gRPC/Enums/Datatype/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DataFunction",permalink:"/gRPC/Enums/DataFunction/"},next:{title:"EventType",permalink:"/gRPC/Enums/EventType/"}},d={},c=[],k={toc:c},N="wrapper";function g(t){let{components:e,...n}=t;return(0,r.kt)(N,(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datatype"},"Datatype"),(0,r.kt)("p",null,"Datatype enumeration."),(0,r.kt)(i,{components:n.components,mdxType:"Values"}))}g.isMDXComponent=!0}}]);