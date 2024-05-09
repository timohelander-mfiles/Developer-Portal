"use strict";(self.webpackChunkuix_2=self.webpackChunkuix_2||[]).push([[2836],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63037:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>u,default:()=>E,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={toc:[]},i="wrapper";function o(t){let{components:e,...n}=t;return(0,a.kt)(i,(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EXT_IDSTATUS_UNKNOWN"),(0,a.kt)("td",{parentName:"tr",align:null},"Unknown."),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EXT_IDSTATUS_EXTERNAL"),(0,a.kt)("td",{parentName:"tr",align:null},"A real external ID that was received from an external database."),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EXT_IDSTATUS_INTERNAL"),(0,a.kt)("td",{parentName:"tr",align:null},"No real ExtID yet. The item has been created in M-Files and does not yet know its identification in an external database (or there is no external database)."),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EXT_IDSTATUS_DISCARDED"),(0,a.kt)("td",{parentName:"tr",align:null},"A corresponding item in the external database was not found and this item was discarded without receiving a real ExtID."),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EXT_IDSTATUS_NOT_AVAILABLE"),(0,a.kt)("td",{parentName:"tr",align:null},"ExtID is not yet available. This value is returned for external objects whose ExtIDStatus is eExtIDStatusNoRealExtIDYet in the database. The purpose of this value is used to separate internal and external objects whose ExtIDStatus is eExtIDStatusRealExtID for display and indexing purposes. NOTE: This value never appears in the database."),(0,a.kt)("td",{parentName:"tr",align:null},"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EXT_IDSTATUS_EXTERNAL_REDUCED"),(0,a.kt)("td",{parentName:"tr",align:null},"A real ExtID is set but the item itself is in the reduced state. This value is used when importing missing items for which the content package provides an ExtID. External object refresh can promote these values to full external objects."),(0,a.kt)("td",{parentName:"tr",align:null},"5")))))}o.isMDXComponent=!0;const s={},u="ExtIDStatus",p={unversionedId:"gRPC/Enums/ExtIDStatus/index",id:"gRPC/Enums/ExtIDStatus/index",title:"ExtIDStatus",description:"ExtID status enumeration.",source:"@site/docs/gRPC/Enums/ExtIDStatus/index.mdx",sourceDirName:"gRPC/Enums/ExtIDStatus",slug:"/gRPC/Enums/ExtIDStatus/",permalink:"/gRPC/Enums/ExtIDStatus/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ExtDBRefreshType",permalink:"/gRPC/Enums/ExtDBRefreshType/"},next:{title:"FileIDType",permalink:"/gRPC/Enums/FileIDType/"}},c={},m=[],d={toc:m},f="wrapper";function E(t){let{components:e,...n}=t;return(0,a.kt)(f,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"extidstatus"},"ExtIDStatus"),(0,a.kt)("p",null,"ExtID status enumeration."),(0,a.kt)(o,{components:n.components,mdxType:"Values"}))}E.isMDXComponent=!0}}]);