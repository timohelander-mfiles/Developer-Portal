"use strict";(self.webpackChunkuix_2=self.webpackChunkuix_2||[]).push([[9934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,k=u["".concat(o,".").concat(c)]||u[c]||d[c]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:n},t)}},34259:(e,t,n)=>{n(67294),n(51048)},72567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>x,frontMatter:()=>y,metadata:()=>b,toc:()=>C});var r=n(87462),a=(n(67294),n(3905));const l={toc:[{value:"Example",id:"example",level:3}]},i="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"current_version")),(0,a.kt)("td",{parentName:"tr",align:null},"Receives the current version of the value list's data on the server. If this is the same as the one specified by the caller, no data is returned."),(0,a.kt)("td",{parentName:"tr",align:null},"number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"is_delta")),(0,a.kt)("td",{parentName:"tr",align:null},"Set to true if the server returned an appropriate delta to the list (i.e. just the occurred changes to the list)."),(0,a.kt)("td",{parentName:"tr",align:null},"boolean")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"removed_items")),(0,a.kt)("td",{parentName:"tr",align:null},"Receives the removed items. This contains data only when a delta is returned. Otherwise it must be an empty array."),(0,a.kt)("td",{parentName:"tr",align:null},"number[]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"items")),(0,a.kt)("td",{parentName:"tr",align:null},"Receives the items as JSON array (represented by MF_ValueListItem struct). In case of a delta, this specifies the items that were inserted or updated since the client previously contacted the server."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/gRPC/Messages/ValueListItem"},"ValueListItem[]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"item_acls")),(0,a.kt)("td",{parentName:"tr",align:null},"The ACLs of the latest versions as JSON (represented by MF_ACLArray struct)."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/gRPC/Messages/AccessControlList"},"AccessControlList[]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"item_current_user_permissions")),(0,a.kt)("td",{parentName:"tr",align:null},"The permissions of items for current user as JSON array (represented by MF_ObjectPermissionsForClient struct)."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/gRPC/Messages/ObjectPermissionsForClient"},"ObjectPermissionsForClient[]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"has_more_results")),(0,a.kt)("td",{parentName:"tr",align:null},"Receives true if the results were limited."),(0,a.kt)("td",{parentName:"tr",align:null},"boolean")))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "current_version": 0,\n  "is_delta": false,\n  "removed_items": [] /* Array of number */,\n  "items": [] /* Array of ValueListItem */,\n  "item_acls": [] /* Array of AccessControlList */,\n  "item_current_user_permissions": [] /* Array of ObjectPermissionsForClient */,\n  "has_more_results": false\n}\n')))}s.isMDXComponent=!0;const o={toc:[]},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"call_importance")),(0,a.kt)("td",{parentName:"tr",align:null},"The importance level of this call. Typically eciNormal."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/gRPC/Enums/CallImportance"},"CallImportance"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"external_data_source_refresh")),(0,a.kt)("td",{parentName:"tr",align:null},"The type of refresh that is requested in case the value list or object type is external."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/gRPC/Enums/ExtDBRefreshType"},"ExtDBRefreshType"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"value_list")),(0,a.kt)("td",{parentName:"tr",align:null},"The ID of the value list."),(0,a.kt)("td",{parentName:"tr",align:null},"number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"filtering_property_def")),(0,a.kt)("td",{parentName:"tr",align:null},"If not -1, specifies the property definition the filter of which should be applied to the list."),(0,a.kt)("td",{parentName:"tr",align:null},"number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"known_version")),(0,a.kt)("td",{parentName:"tr",align:null},"The version ID of this value list's data currently known by the caller. If the contents of the value list have not been updated since, ","*","pi64CurrentVersionOnServer is set to this same number and no data is returned. Specify zero to force the retrieval of all (first N) values. When this is zero, the server never returns an appropriate delta (changes to the list)."),(0,a.kt)("td",{parentName:"tr",align:null},"number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"allow_delta")),(0,a.kt)("td",{parentName:"tr",align:null},"True if the client allows receiving a delta (changes to the list)."),(0,a.kt)("td",{parentName:"tr",align:null},"boolean")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"resolve_current_user_placeholders")),(0,a.kt)("td",{parentName:"tr",align:null},"Set to true to replace (current user) in ACLForObjects with identity of the caller."),(0,a.kt)("td",{parentName:"tr",align:null},"boolean")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"include_permissions")),(0,a.kt)("td",{parentName:"tr",align:null},"Set to true to include value list permissions."),(0,a.kt)("td",{parentName:"tr",align:null},"boolean")))))}m.isMDXComponent=!0;n(34259);var u=n(18679);const d={toc:[]},c="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(u.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Assumes shellUI has been initialized with IShellUI instance\nconst results =\n  await shellUI.Vault.ValueListsOperations.GetValueListItemsWithPermissions({\n    call_importance: 2 /* Enum: CallImportance */,\n    external_data_source_refresh: 2 /* Enum: ExtDBRefreshType */,\n    value_list: 0,\n    filtering_property_def: 0,\n    known_version: 0,\n    allow_delta: false,\n    resolve_current_user_placeholders: false,\n    include_permissions: false,\n  });\n"))))}k.isMDXComponent=!0;const h={toc:[]},f="wrapper";function N(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Gets items contained in a given value list, the permissions of the items are included."))}N.isMDXComponent=!0;const y={},g="GetValueListItemsWithPermissions",b={unversionedId:"gRPC/Interfaces/ValueListsOperations/GetValueListItemsWithPermissions/index",id:"gRPC/Interfaces/ValueListsOperations/GetValueListItemsWithPermissions/index",title:"GetValueListItemsWithPermissions",description:"Syntax",source:"@site/docs/gRPC/Interfaces/ValueListsOperations/GetValueListItemsWithPermissions/index.mdx",sourceDirName:"gRPC/Interfaces/ValueListsOperations/GetValueListItemsWithPermissions",slug:"/gRPC/Interfaces/ValueListsOperations/GetValueListItemsWithPermissions/",permalink:"/gRPC/Interfaces/ValueListsOperations/GetValueListItemsWithPermissions/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ValueListsOperations",permalink:"/gRPC/Interfaces/ValueListsOperations/"},next:{title:"GetValueLists",permalink:"/gRPC/Interfaces/ValueListsOperations/GetValueLists/"}},v={},C=[{value:"Syntax",id:"syntax",level:2},{value:"Message",id:"message",level:2},{value:"Return type",id:"return-type",level:2}],_={toc:C},O="wrapper";function x(e){let{components:t,...n}=e;return(0,a.kt)(O,(0,r.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getvaluelistitemswithpermissions"},"GetValueListItemsWithPermissions"),(0,a.kt)(N,{components:n.components,mdxType:"Description"}),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)(k,{components:n.components,mdxType:"Syntax"}),(0,a.kt)("h2",{id:"message"},"Message"),(0,a.kt)(m,{components:n.components,mdxType:"Message"}),(0,a.kt)("h2",{id:"return-type"},"Return type"),(0,a.kt)(s,{components:n.components,mdxType:"Returns"}))}x.isMDXComponent=!0}}]);