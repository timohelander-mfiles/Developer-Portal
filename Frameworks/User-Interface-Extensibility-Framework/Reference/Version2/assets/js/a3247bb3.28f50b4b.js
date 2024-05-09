"use strict";(self.webpackChunkuix_2=self.webpackChunkuix_2||[]).push([[1728],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(m,".").concat(c)]||u[c]||s[c]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38009:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>N});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]},i="wrapper";function o(t){let{components:e,...n}=t;return(0,r.kt)(i,(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.CheckOut")),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Checkout the active selection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.CheckIn")),(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"Checkin the active selection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.UndoCheckOut")),(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"Undo the checkout for the selected object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.ConvertToSFD")),(0,r.kt)("td",{parentName:"tr",align:null},"31"),(0,r.kt)("td",{parentName:"tr",align:null},"Converts the selection into single-file document.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.ConvertToMFD")),(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"Converts the selection into multi-file document. This commands works for only one selected object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.ReplaceWithFile")),(0,r.kt)("td",{parentName:"tr",align:null},"33"),(0,r.kt)("td",{parentName:"tr",align:null},"Triggers the file selection dialog for the currenly selected object and replaces that file with the selected file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.Delete")),(0,r.kt)("td",{parentName:"tr",align:null},"76"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete the current selected object. Shows a modal dialog for confirmation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.NewObject")),(0,r.kt)("td",{parentName:"tr",align:null},"87"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a new Object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.RollBack")),(0,r.kt)("td",{parentName:"tr",align:null},"89"),(0,r.kt)("td",{parentName:"tr",align:null},"Rollback command. The rollbacked object is either command argument provided as ObjVer or the current selection in the Listing View.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.CheckOutForCoauthoring")),(0,r.kt)("td",{parentName:"tr",align:null},"129"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks out the object for co-authoring.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.ViewInMFDesktop")),(0,r.kt)("td",{parentName:"tr",align:null},"174"),(0,r.kt)("td",{parentName:"tr",align:null},"Open the selected file in the desktop application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.DownloadFile")),(0,r.kt)("td",{parentName:"tr",align:null},"175"),(0,r.kt)("td",{parentName:"tr",align:null},"Downloads the selected file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.OpenFile")),(0,r.kt)("td",{parentName:"tr",align:null},"176"),(0,r.kt)("td",{parentName:"tr",align:null},"Open the selected file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.AddPersonalTab")),(0,r.kt)("td",{parentName:"tr",align:null},"180"),(0,r.kt)("td",{parentName:"tr",align:null},"Add personal tab and send request to server to store related information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.RemovePersonalTab")),(0,r.kt)("td",{parentName:"tr",align:null},"181"),(0,r.kt)("td",{parentName:"tr",align:null},"Remove personal tab and send request to server to store related information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.RemoveFromThisView")),(0,r.kt)("td",{parentName:"tr",align:null},"182"),(0,r.kt)("td",{parentName:"tr",align:null},"Remove object from recent tab and send request to server to update related information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.OpenInDesktopApp")),(0,r.kt)("td",{parentName:"tr",align:null},"183"),(0,r.kt)("td",{parentName:"tr",align:null},"Open file in Native Desktop application using web Companion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.OpenInBrowser")),(0,r.kt)("td",{parentName:"tr",align:null},"184"),(0,r.kt)("td",{parentName:"tr",align:null},"Opens the currently selected object via online office editor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.Follow")),(0,r.kt)("td",{parentName:"tr",align:null},"185"),(0,r.kt)("td",{parentName:"tr",align:null},"Starts following the specified object. While the object is being followed, the current user will be notified if the object changes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.Unfollow")),(0,r.kt)("td",{parentName:"tr",align:null},"186"),(0,r.kt)("td",{parentName:"tr",align:null},"Stop following the specified object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MFiles.BuiltinCommand.LaunchDefaultApp")),(0,r.kt)("td",{parentName:"tr",align:null},"187"),(0,r.kt)("td",{parentName:"tr",align:null},"Open the file in associated application in desktop environment (DesktopNext).")))))}o.isMDXComponent=!0;const m={toc:[]},d="wrapper";function p(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The BuiltinCommand enumeration contains all the ids of the builtin commands that can be hidden,\nshown, disabled or enabled from the menus. This enumeration is used in conjunction with the SetCommandState method."))}p.isMDXComponent=!0;const u={},s="BuiltinCommand",c={unversionedId:"UIExt2/Enums/BuiltinCommand/index",id:"UIExt2/Enums/BuiltinCommand/index",title:"BuiltinCommand",description:"",source:"@site/docs/UIExt2/Enums/BuiltinCommand/index.mdx",sourceDirName:"UIExt2/Enums/BuiltinCommand",slug:"/UIExt2/Enums/BuiltinCommand/",permalink:"/UIExt2/Enums/BuiltinCommand/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Enums",permalink:"/UIExt2/Enums/"},next:{title:"CommandLocation",permalink:"/UIExt2/Enums/CommandLocation/"}},k={},N=[],g={toc:N},b="wrapper";function f(t){let{components:e,...n}=t;return(0,r.kt)(b,(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"builtincommand"},"BuiltinCommand"),(0,r.kt)(p,{components:n.components,mdxType:"Description"}),(0,r.kt)(o,{components:n.components,mdxType:"Values"}))}f.isMDXComponent=!0}}]);