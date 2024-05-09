"use strict";(self.webpackChunkuix_2=self.webpackChunkuix_2||[]).push([[2372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>O,frontMatter:()=>y,metadata:()=>_,toc:()=>b});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "property_def": 0,\n  "property_name": "<!< property name.>",\n  "action_type": {\n    "all": false,\n    "added": false,\n    "removed": false,\n    "changed": false,\n    "retained": false\n  },\n  "added_value": {\n    "is_null": false,\n    "type": 15 /* Enum: Datatype */,\n    "data": {\n      "text": "<!< Text.>",\n      "integer": 0,\n      "real_number": 0,\n      "decimal_number": "<!< Fixed precision number.>",\n      "date": { "seconds": 0, "nanos": 0 } /* google.protobuf.Timestamp */,\n      "time": { "seconds": 0, "nanos": 0 } /* google.protobuf.Timestamp */,\n      "timestamp": { "seconds": 0, "nanos": 0 } /* google.protobuf.Timestamp */,\n      "boolean": false,\n      "lookup": {\n        "value_list_item_info": {\n          "obj_id": {\n            "type": 0,\n            "item_id": {\n              "internal_id": 0,\n              "external_repository_id": {\n                "connection": "<!< The external repository connection identifier.>",\n                "item": "<item>"\n              }\n            }\n          },\n          "name": "<!< The name of the item.>",\n          "external_id_status": 5 /* Enum: ExtIDStatus */,\n          "external_id": "<external_id>",\n          "guid": "<!< GUID for the item.>",\n          "options": {\n            "all": false,\n            "is_shortcut": false,\n            "is_deleted": false,\n            "is_accessed_by_valid": false,\n            "has_shared_files": false,\n            "is_conflict_object": false,\n            "is_normal": false,\n            "is_view": false,\n            "has_external_data": false,\n            "is_referred_external_object": false\n          },\n          "external_repository_icon_id": "<!< The ID of the item\'s icon.>"\n        },\n        "version": {\n          "type": 7 /* Enum: ObjVerVersionType */,\n          "internal_version": 0,\n          "external_repository_version": "<external_repository_version>",\n          "external_repository_sort_key": 0\n        }\n      },\n      "multi_select_lookup": {\n        "values": [] /* Array of Lookup */\n      },\n      "integer64": 0,\n      "multi_line_text": "<!< Multi-line text.>",\n      "acl": {\n        "checked_out_to_user": 0,\n        "is_fully_authoritative": false,\n        "custom_component": {\n          "named_acl_id": 0,\n          "has_named_acl": false,\n          "current_user_id": 0,\n          "has_current_user": false,\n          "permissions": [] /* Array of AccessControlEntry */,\n          "overridability_permissions": [] /* Array of AccessControlEntry */,\n          "status": {\n            "all": false,\n            "deleted": false,\n            "source_item_linked_via_pseudo_users": false\n          }\n        },\n        "restrictive_components": [] /* Array of AccessControlListComponentMapEntry */,\n        "secondary_access_control_list": {} /* AccessControlList */,\n        "additive_components": [] /* Array of AccessControlListComponentMapEntry */\n      }\n    }\n  },\n  "removed_value": {} /* TypedValue */\n}\n')))}l.isMDXComponent=!0;const s={toc:[]},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"property_def")),(0,a.kt)("td",{parentName:"tr",align:null},"Property definition ID."),(0,a.kt)("td",{parentName:"tr",align:null},"number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"property_name")),(0,a.kt)("td",{parentName:"tr",align:null},"property name."),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"action_type")),(0,a.kt)("td",{parentName:"tr",align:null},"The object activity type."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/gRPC/Messages/OBJECTVERSIONPROPERTYACTIVITYFLAGS"},"OBJECTVERSIONPROPERTYACTIVITYFLAGS"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"added_value")),(0,a.kt)("td",{parentName:"tr",align:null},"The added value to the property."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/gRPC/Messages/TypedValue"},"TypedValue"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"removed_value")),(0,a.kt)("td",{parentName:"tr",align:null},"The removed value to the property."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/gRPC/Messages/TypedValue"},"TypedValue"))))))}c.isMDXComponent=!0;const m={toc:[]},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Object version property activity."))}u.isMDXComponent=!0;const y={},f="ObjectVersionPropertyActivity",_={unversionedId:"gRPC/Messages/ObjectVersionPropertyActivity/index",id:"gRPC/Messages/ObjectVersionPropertyActivity/index",title:"ObjectVersionPropertyActivity",description:"Example",source:"@site/docs/gRPC/Messages/ObjectVersionPropertyActivity/index.mdx",sourceDirName:"gRPC/Messages/ObjectVersionPropertyActivity",slug:"/gRPC/Messages/ObjectVersionPropertyActivity/",permalink:"/gRPC/Messages/ObjectVersionPropertyActivity/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ObjectVersionFileActivity",permalink:"/gRPC/Messages/ObjectVersionFileActivity/"},next:{title:"PROPERTYDEFFLAGS",permalink:"/gRPC/Messages/PROPERTYDEFFLAGS/"}},g={},b=[{value:"Example",id:"example",level:2}],v={toc:b},k="wrapper";function O(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"objectversionpropertyactivity"},"ObjectVersionPropertyActivity"),(0,a.kt)(u,{components:n.components,mdxType:"Description"}),(0,a.kt)(c,{components:n.components,mdxType:"Message"}),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(l,{components:n.components,mdxType:"Example"}))}O.isMDXComponent=!0}}]);