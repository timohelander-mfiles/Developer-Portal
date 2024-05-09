"use strict";(self.webpackChunkuix_2=self.webpackChunkuix_2||[]).push([[9247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>h,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var r=n(87462),a=(n(67294),n(3905));const l={toc:[]},i="wrapper";function o(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "<!< The title of the template file.>",\n  "title_resource": "<title_resource>",\n  "file_template_id": "<file_template_id>",\n  "obj_id": {\n    "type": 0,\n    "item_id": {\n      "internal_id": 0,\n      "external_repository_id": {\n        "connection": "<!< The external repository connection identifier.>",\n        "item": "<item>"\n      }\n    }\n  },\n  "class_id": 0,\n  "icon": 0 /*Uint8Array*/,\n  "restricted_to_classes": [] /* Array of number */\n}\n')))}o.isMDXComponent=!0;const p={toc:[]},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"title")),(0,a.kt)("td",{parentName:"tr",align:null},"The title of the template file."),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"title_resource")),(0,a.kt)("td",{parentName:"tr",align:null},"The resource key for the title of the template file. It will be available only for blank template file."),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"file_template_id")),(0,a.kt)("td",{parentName:"tr",align:null},"The file ID of the template file. It will be available only for blank templates."),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"obj_id")),(0,a.kt)("td",{parentName:"tr",align:null},"The template object ID. It will be available only for User defined templates."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/gRPC/Messages/ObjID"},"ObjID"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"class_id")),(0,a.kt)("td",{parentName:"tr",align:null},"The class of the object version. For blank templates it will be always 0, For user defined templates the class id of the object will be available."),(0,a.kt)("td",{parentName:"tr",align:null},"number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"icon")),(0,a.kt)("td",{parentName:"tr",align:null},"The icon for the template file. Currently it is not carrying any data. It will be implemented in future."),(0,a.kt)("td",{parentName:"tr",align:null},"Uint8Array")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"restricted_to_classes")),(0,a.kt)("td",{parentName:"tr",align:null},"The array of restrict to class IDs. Currently it is not carrying any data. It will be implemented in future."),(0,a.kt)("td",{parentName:"tr",align:null},"number[]")))))}s.isMDXComponent=!0;const c={toc:[]},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Struct for Template information.\n! TODO Introduce TemplateType, Union Struct."))}d.isMDXComponent=!0;const f={},y="Template",g={unversionedId:"gRPC/Messages/Template/index",id:"gRPC/Messages/Template/index",title:"Template",description:"Example",source:"@site/docs/gRPC/Messages/Template/index.mdx",sourceDirName:"gRPC/Messages/Template",slug:"/gRPC/Messages/Template/",permalink:"/gRPC/Messages/Template/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"StateTransitionBasic",permalink:"/gRPC/Messages/StateTransitionBasic/"},next:{title:"TypedValue",permalink:"/gRPC/Messages/TypedValue/"}},k={},b=[{value:"Example",id:"example",level:2}],N={toc:b},T="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(T,(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"template"},"Template"),(0,a.kt)(d,{components:n.components,mdxType:"Description"}),(0,a.kt)(s,{components:n.components,mdxType:"Message"}),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(o,{components:n.components,mdxType:"Example"}))}h.isMDXComponent=!0}}]);