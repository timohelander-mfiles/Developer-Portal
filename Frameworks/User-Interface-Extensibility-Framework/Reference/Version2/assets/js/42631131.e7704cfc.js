"use strict";(self.webpackChunkuix_2=self.webpackChunkuix_2||[]).push([[7236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>b,toc:()=>k});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]},l="wrapper";function i(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "all": false,\n  "require_read_access_after_operation": false,\n  "require_edit_access_after_operation": false,\n  "disallow_name_change": false,\n  "require_change_permissions_access_after_operation": false,\n  "require_full_access_after_operation": false,\n  "change_acl_in_all_versions": false\n}\n')))}i.isMDXComponent=!0;const s={toc:[]},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"all")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies all flags set; Including any future flags."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"require_read_access_after_operation")),(0,r.kt)("td",{parentName:"tr",align:null},"Requires read access to the object after the object operation. If available, the operation fails if the user does not have read access to the object after the operation."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"require_edit_access_after_operation")),(0,r.kt)("td",{parentName:"tr",align:null},"Requires edit access to the object after the object operation. If available, the operation fails if the user does not have edit access to the object after the operation."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disallow_name_change")),(0,r.kt)("td",{parentName:"tr",align:null},"If specified, the operation will fail if it causes a change in the object version's name."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"require_change_permissions_access_after_operation")),(0,r.kt)("td",{parentName:"tr",align:null},"Requires security change access to the object after the object operation. If available, the operation fails if the user does not have security change access to the object after the operation."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"require_full_access_after_operation")),(0,r.kt)("td",{parentName:"tr",align:null},"Requires full access to the object after the object operation. If available, the operation fails if the user does not have full access to the object after the operation."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"change_acl_in_all_versions")),(0,r.kt)("td",{parentName:"tr",align:null},"Changes the ACL of all versions of the object. This is currently used to request setting the ACL of all versions of an object, not just a specific version, when calling MF_ChangeSecurity."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")))))}c.isMDXComponent=!0;const u={toc:[]},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Object operation flags."))}d.isMDXComponent=!0;const f={},g="OBJECTOPFLAGS",b={unversionedId:"gRPC/Messages/OBJECTOPFLAGS/index",id:"gRPC/Messages/OBJECTOPFLAGS/index",title:"OBJECTOPFLAGS",description:"Example",source:"@site/docs/gRPC/Messages/OBJECTOPFLAGS/index.mdx",sourceDirName:"gRPC/Messages/OBJECTOPFLAGS",slug:"/gRPC/Messages/OBJECTOPFLAGS/",permalink:"/gRPC/Messages/OBJECTOPFLAGS/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OBJECTDATAREQUESTFLAGS",permalink:"/gRPC/Messages/OBJECTDATAREQUESTFLAGS/"},next:{title:"OBJECTVERSIONACTIVITYCATEGORYFLAGS",permalink:"/gRPC/Messages/OBJECTVERSIONACTIVITYCATEGORYFLAGS/"}},h={},k=[{value:"Example",id:"example",level:2}],y={toc:k},O="wrapper";function N(e){let{components:t,...n}=e;return(0,r.kt)(O,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"objectopflags"},"OBJECTOPFLAGS"),(0,r.kt)(d,{components:n.components,mdxType:"Description"}),(0,r.kt)(c,{components:n.components,mdxType:"Message"}),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(i,{components:n.components,mdxType:"Example"}))}N.isMDXComponent=!0}}]);