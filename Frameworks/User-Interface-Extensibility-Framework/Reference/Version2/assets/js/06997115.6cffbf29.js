"use strict";(self.webpackChunkuix_2=self.webpackChunkuix_2||[]).push([[7346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>x,frontMatter:()=>y,metadata:()=>_,toc:()=>k});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]},l="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "is_null": false,\n  "type": 15 /* Enum: Datatype */,\n  "data": {\n    "text": "<!< Text.>",\n    "integer": 0,\n    "real_number": 0,\n    "decimal_number": "<!< Fixed precision number.>",\n    "date": { "seconds": 0, "nanos": 0 } /* google.protobuf.Timestamp */,\n    "time": { "seconds": 0, "nanos": 0 } /* google.protobuf.Timestamp */,\n    "timestamp": { "seconds": 0, "nanos": 0 } /* google.protobuf.Timestamp */,\n    "boolean": false,\n    "lookup": {\n      "value_list_item_info": {\n        "obj_id": {\n          "type": 0,\n          "item_id": {\n            "internal_id": 0,\n            "external_repository_id": {\n              "connection": "<!< The external repository connection identifier.>",\n              "item": "<item>"\n            }\n          }\n        },\n        "name": "<!< The name of the item.>",\n        "external_id_status": 5 /* Enum: ExtIDStatus */,\n        "external_id": "<external_id>",\n        "guid": "<!< GUID for the item.>",\n        "options": {\n          "all": false,\n          "is_shortcut": false,\n          "is_deleted": false,\n          "is_accessed_by_valid": false,\n          "has_shared_files": false,\n          "is_conflict_object": false,\n          "is_normal": false,\n          "is_view": false,\n          "has_external_data": false,\n          "is_referred_external_object": false\n        },\n        "external_repository_icon_id": "<!< The ID of the item\'s icon.>"\n      },\n      "version": {\n        "type": 7 /* Enum: ObjVerVersionType */,\n        "internal_version": 0,\n        "external_repository_version": "<external_repository_version>",\n        "external_repository_sort_key": 0\n      }\n    },\n    "multi_select_lookup": {\n      "values": [] /* Array of Lookup */\n    },\n    "integer64": 0,\n    "multi_line_text": "<!< Multi-line text.>",\n    "acl": {\n      "checked_out_to_user": 0,\n      "is_fully_authoritative": false,\n      "custom_component": {\n        "named_acl_id": 0,\n        "has_named_acl": false,\n        "current_user_id": 0,\n        "has_current_user": false,\n        "permissions": [] /* Array of AccessControlEntry */,\n        "overridability_permissions": [] /* Array of AccessControlEntry */,\n        "status": {\n          "all": false,\n          "deleted": false,\n          "source_item_linked_via_pseudo_users": false\n        }\n      },\n      "restrictive_components": [] /* Array of AccessControlListComponentMapEntry */,\n      "secondary_access_control_list": {} /* AccessControlList */,\n      "additive_components": [] /* Array of AccessControlListComponentMapEntry */\n    }\n  }\n}\n')))}s.isMDXComponent=!0;const i={toc:[]},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"is_null")),(0,a.kt)("td",{parentName:"tr",align:null},"Is the value NULL."),(0,a.kt)("td",{parentName:"tr",align:null},"boolean")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"type")),(0,a.kt)("td",{parentName:"tr",align:null},"Data type."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/gRPC/Enums/Datatype"},"Datatype"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"data")),(0,a.kt)("td",{parentName:"tr",align:null},"The value data as a union, if not NULL."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/gRPC/Messages/TypedValueUnion"},"TypedValueUnion"))))))}c.isMDXComponent=!0;const u={toc:[]},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A typed value. Typically used to represent the value of a property or an evaluated expression."))}d.isMDXComponent=!0;const y={},f="TypedValue",_={unversionedId:"gRPC/Messages/TypedValue/index",id:"gRPC/Messages/TypedValue/index",title:"TypedValue",description:"Example",source:"@site/docs/gRPC/Messages/TypedValue/index.mdx",sourceDirName:"gRPC/Messages/TypedValue",slug:"/gRPC/Messages/TypedValue/",permalink:"/gRPC/Messages/TypedValue/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Template",permalink:"/gRPC/Messages/Template/"},next:{title:"TypedValueUnion",permalink:"/gRPC/Messages/TypedValueUnion/"}},g={},k=[{value:"Example",id:"example",level:2}],b={toc:k},v="wrapper";function x(e){let{components:t,...n}=e;return(0,a.kt)(v,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typedvalue"},"TypedValue"),(0,a.kt)(d,{components:n.components,mdxType:"Description"}),(0,a.kt)(c,{components:n.components,mdxType:"Message"}),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(s,{components:n.components,mdxType:"Example"}))}x.isMDXComponent=!0}}]);