"use strict";(self.webpackChunkuix_2=self.webpackChunkuix_2||[]).push([[4286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},m),{},{components:n})):r.createElement(f,s({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>v,frontMatter:()=>f,metadata:()=>g,toc:()=>k});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]},s="wrapper";function i(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "permissions": {\n    "id": 0,\n    "name": "<!< The name of the named ACL.>",\n    "type": 2 /* Enum: NACLType */,\n    "acl_for_objects": {\n      "checked_out_to_user": 0,\n      "is_fully_authoritative": false,\n      "custom_component": {\n        "named_acl_id": 0,\n        "has_named_acl": false,\n        "current_user_id": 0,\n        "has_current_user": false,\n        "permissions": [] /* Array of AccessControlEntry */,\n        "overridability_permissions": [] /* Array of AccessControlEntry */,\n        "status": {\n          "all": false,\n          "deleted": false,\n          "source_item_linked_via_pseudo_users": false\n        }\n      },\n      "restrictive_components": [] /* Array of AccessControlListComponentMapEntry */,\n      "secondary_access_control_list": {} /* AccessControlList */,\n      "additive_components": [] /* Array of AccessControlListComponentMapEntry */\n    },\n    "guid": "<!< GUID for the NACL.>"\n  },\n  "is_default": false,\n  "use_object_permissions": false\n}\n')))}i.isMDXComponent=!0;const c={toc:[]},l="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"permissions")),(0,a.kt)("td",{parentName:"tr",align:null},"The automatic permissions for an object for which the user selects this item."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/gRPC/Messages/NamedACL"},"NamedACL"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"is_default")),(0,a.kt)("td",{parentName:"tr",align:null},"True if these automatic permissions are not private i.e. they are not directly specified for (owned by) this item but they come from somewhere else, e.g. from the default/common automatic permissions of the object type."),(0,a.kt)("td",{parentName:"tr",align:null},"boolean")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"use_object_permissions")),(0,a.kt)("td",{parentName:"tr",align:null},"If true the object/item's own permissions are used as its automatic permissions."),(0,a.kt)("td",{parentName:"tr",align:null},"boolean")))))}m.isMDXComponent=!0;const p={toc:[]},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A struct that describes the automatic permissions for objects specification of a value list item or an object."))}d.isMDXComponent=!0;const f={},y="AutomaticPermissions",g={unversionedId:"gRPC/Messages/AutomaticPermissions/index",id:"gRPC/Messages/AutomaticPermissions/index",title:"AutomaticPermissions",description:"Example",source:"@site/docs/gRPC/Messages/AutomaticPermissions/index.mdx",sourceDirName:"gRPC/Messages/AutomaticPermissions",slug:"/gRPC/Messages/AutomaticPermissions/",permalink:"/gRPC/Messages/AutomaticPermissions/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AutomaticMetadataResult",permalink:"/gRPC/Messages/AutomaticMetadataResult/"},next:{title:"Bytes",permalink:"/gRPC/Messages/Bytes/"}},b={},k=[{value:"Example",id:"example",level:2}],h={toc:k},_="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(_,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"automaticpermissions"},"AutomaticPermissions"),(0,a.kt)(d,{components:n.components,mdxType:"Description"}),(0,a.kt)(m,{components:n.components,mdxType:"Message"}),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(i,{components:n.components,mdxType:"Example"}))}v.isMDXComponent=!0}}]);