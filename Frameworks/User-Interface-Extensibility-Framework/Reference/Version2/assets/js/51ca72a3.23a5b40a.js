"use strict";(self.webpackChunkuix_2=self.webpackChunkuix_2||[]).push([[4726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>k,default:()=>T,frontMatter:()=>g,metadata:()=>f,toc:()=>y});var a=n(87462),r=(n(67294),n(3905));const i={toc:[]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "file_ver": {\n    "file_id": {\n      "type": 3 /* Enum: FileIDType */,\n      "internal_id": 0,\n      "external_repository_id": "<!< External file id.>"\n    },\n    "type": 3 /* Enum: FileVerType */,\n    "internal_version": 0,\n    "external_repository_version": "<external_repository_version>",\n    "external_repository_sort_key": 0\n  },\n  "title": "<!< The title of the file.>",\n  "extension": "<extension>",\n  "size": 0,\n  "size_precision": 2 /* Enum: FileSizePrecision */,\n  "created_at_utc": {\n    "seconds": 0,\n    "nanos": 0\n  } /* google.protobuf.Timestamp */,\n  "accessed_at_utc": {\n    "seconds": 0,\n    "nanos": 0\n  } /* google.protobuf.Timestamp */,\n  "written_at_utc": {\n    "seconds": 0,\n    "nanos": 0\n  } /* google.protobuf.Timestamp */,\n  "changed_at_utc": {\n    "seconds": 0,\n    "nanos": 0\n  } /* google.protobuf.Timestamp */,\n  "guid": "<!< GUID of the file.>",\n  "md5_checksum": "<md5_checksum>",\n  "is_missing": false,\n  "is_content_volatile": false\n}\n')))}o.isMDXComponent=!0;const s={toc:[]},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"file_ver")),(0,r.kt)("td",{parentName:"tr",align:null},"The file version."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/gRPC/Messages/FileVer"},"FileVer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"The title of the file."),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extension")),(0,r.kt)("td",{parentName:"tr",align:null},"File extension, not including the dot (e.g. ",'"',"doc",'"',")."),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:null},"The logical size of the file in bytes. The efspSizePrecision value describes how the size information should be understood."),(0,r.kt)("td",{parentName:"tr",align:null},"number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"size_precision")),(0,r.kt)("td",{parentName:"tr",align:null},"The file size precision. If the file size precision is 'exact', the size can be used for reading the file content. If the precision is 'unknown', the size field should not be used at all."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/gRPC/Enums/FileSizePrecision"},"FileSizePrecision"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"created_at_utc")),(0,r.kt)("td",{parentName:"tr",align:null},"The time in UTC the file was originally created."),(0,r.kt)("td",{parentName:"tr",align:null},"google.protobuf.Timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"accessed_at_utc")),(0,r.kt)("td",{parentName:"tr",align:null},"The time in UTC the file was last accessed (e.g. read)."),(0,r.kt)("td",{parentName:"tr",align:null},"google.protobuf.Timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"written_at_utc")),(0,r.kt)("td",{parentName:"tr",align:null},"The time in UTC the file was last written to."),(0,r.kt)("td",{parentName:"tr",align:null},"google.protobuf.Timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"changed_at_utc")),(0,r.kt)("td",{parentName:"tr",align:null},"The time in UTC the file was last written to or its attributes were changed."),(0,r.kt)("td",{parentName:"tr",align:null},"google.protobuf.Timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"guid")),(0,r.kt)("td",{parentName:"tr",align:null},"GUID of the file."),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"md5_checksum")),(0,r.kt)("td",{parentName:"tr",align:null},"MD5 checksum of the file if available. Can be null."),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"is_missing")),(0,r.kt)("td",{parentName:"tr",align:null},"True, if the file is missing."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"is_content_volatile")),(0,r.kt)("td",{parentName:"tr",align:null},"True, if the file physical content is volatile. I.e. the physical content can change without the version number change, as long as the logical content is same. The file content is guaranteed to stay physically consistent within single download session only."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")))))}m.isMDXComponent=!0;const d={toc:[]},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Document file."))}u.isMDXComponent=!0;const g={},k="File",f={unversionedId:"gRPC/Messages/File/index",id:"gRPC/Messages/File/index",title:"File",description:"Example",source:"@site/docs/gRPC/Messages/File/index.mdx",sourceDirName:"gRPC/Messages/File",slug:"/gRPC/Messages/File/",permalink:"/gRPC/Messages/File/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FTSFLAGS",permalink:"/gRPC/Messages/FTSFLAGS/"},next:{title:"FileID",permalink:"/gRPC/Messages/FileID/"}},N={},y=[{value:"Example",id:"example",level:2}],h={toc:y},b="wrapper";function T(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"file"},"File"),(0,r.kt)(u,{components:n.components,mdxType:"Description"}),(0,r.kt)(m,{components:n.components,mdxType:"Message"}),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(o,{components:n.components,mdxType:"Example"}))}T.isMDXComponent=!0}}]);