"use strict";(self.webpackChunkuix_2=self.webpackChunkuix_2||[]).push([[2254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),_=a,u=m["".concat(s,".").concat(_)]||m[_]||d[_]||i;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=_;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:n},t)}},34259:(e,t,n)=>{n(67294),n(51048)},60291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>N,frontMatter:()=>g,metadata:()=>v,toc:()=>O});var r=n(87462),a=(n(67294),n(3905));const i={toc:[{value:"Example",id:"example",level:3}]},o="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(o,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"object_version")),(0,a.kt)("td",{parentName:"tr",align:null},"Information about the latest version of the document after the operation (if ",(0,a.kt)("em",{parentName:"td"},"pbLatestVisible is true) as JSON. ",(0,a.kt)("br",null),"NOT CHANGED: ","[ out ]"," MF_PropertyValueArray_2950")," ppropvalarrLatest, //!","<"," Receives the property values of the latest version of the document after the operation (if ","*","pbLatestVisible is true)."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/gRPC/Messages/ObjectVersionEx"},"ObjectVersionEx"))))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "object_version": {\n    "version_info": {\n      "version": {\n        "type": 7 /* Enum: ObjVerVersionType */,\n        "internal_version": 0,\n        "external_repository_version": "<external_repository_version>",\n        "external_repository_sort_key": 0\n      },\n      "title": "<!< The title of the object.>",\n      "is_single_file_object": false,\n      "has_assignments": false,\n      "last_modified_at_utc": {\n        "seconds": 0,\n        "nanos": 0\n      } /* google.protobuf.Timestamp */,\n      "files": [] /* Array of File */,\n      "object_version_flags": {\n        "all": false,\n        "is_assignment_completed": false,\n        "has_related_objects": false,\n        "is_assignment_rejected": false,\n        "has_file_duplicates": false\n      },\n      "class_id": 0,\n      "version_guid": "<!< GUID of the object version.>",\n      "primary_file": {\n        "type": 3 /* Enum: FileIDType */,\n        "internal_id": 0,\n        "external_repository_id": "<!< External file id.>"\n      }\n    },\n    "object_info": {\n      "obj_id": {\n        "type": 0,\n        "item_id": {\n          "internal_id": 0,\n          "external_repository_id": {\n            "connection": "<!< The external repository connection identifier.>",\n            "item": "<item>"\n          }\n        }\n      },\n      "external_id_status": 5 /* Enum: ExtIDStatus */,\n      "external_id": "<external_id>",\n      "checked_out_version": {} /* ObjVerVersion */,\n      "checked_out_to_user_id": 0,\n      "checked_out_to_user_name": "<checked_out_to_user_name>",\n      "checked_out_to_host_name": "<checked_out_to_host_name>",\n      "checked_out_at_utc": {\n        "seconds": 0,\n        "nanos": 0\n      } /* google.protobuf.Timestamp */,\n      "checked_in_version": {} /* ObjVerVersion */,\n      "created_at_utc": {\n        "seconds": 0,\n        "nanos": 0\n      } /* google.protobuf.Timestamp */,\n      "accessed_by_me_utc": {\n        "seconds": 0,\n        "nanos": 0\n      } /* google.protobuf.Timestamp */,\n      "guid": "<!< Object GUID.>",\n      "options": {\n        "all": false,\n        "is_shortcut": false,\n        "is_deleted": false,\n        "is_accessed_by_valid": false,\n        "has_shared_files": false,\n        "is_conflict_object": false,\n        "is_normal": false,\n        "is_view": false,\n        "has_external_data": false,\n        "is_referred_external_object": false\n      },\n      "original_vault_guid": "<original_vault_guid>",\n      "original_vault_obj_id": {} /* ObjID */,\n      "associated_view_id": {} /* ItemID */,\n      "external_repository_icon_id": "<external_repository_icon_id>",\n      "primary_view_id": {} /* ItemID */,\n      "capabilities": {\n        "all": false,\n        "can_have_history": false,\n        "can_have_relationships": false,\n        "can_edit_old_versions": false,\n        "can_delete": false,\n        "can_destroy": false,\n        "can_undelete": false,\n        "can_rename": false,\n        "can_edit_metadata": false,\n        "can_edit_assignments": false,\n        "can_edit_workflows": false,\n        "can_edit_files": false,\n        "can_edit_version_comments": false,\n        "can_convert_single_multi_file": false,\n        "can_add_and_remove_files": false,\n        "can_change_file_type": false,\n        "can_change_permissions": false\n      }\n    }\n  }\n}\n')))}l.isMDXComponent=!0;const s={toc:[]},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"obj_ver")),(0,a.kt)("td",{parentName:"tr",align:null},"The object version as JSON. (represented by MF_ObjVer struct)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/gRPC/Messages/ObjVer"},"ObjVer"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"file_ver")),(0,a.kt)("td",{parentName:"tr",align:null},"The file to be renamed as JSON. (represented by MF_FileVer struct)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/gRPC/Messages/FileVer"},"FileVer"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"title")),(0,a.kt)("td",{parentName:"tr",align:null},"The new title of the file."),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"extension")),(0,a.kt)("td",{parentName:"tr",align:null},"The new extension of the file, not including the dot (e.g. ",'"',"doc",'"',"). ",(0,a.kt)("br",null),"TRUE: ","[ out ]"," boolean",(0,a.kt)("em",{parentName:"td"}," pbDocumentVisible, //!","<"," True if any version of the document is visible after the operation. ",(0,a.kt)("br",null),"FROM LATEST: ","[ out ]"," MF_DocumentLevelInfo")," pdoclevelinfo, //!","<"," Document-level information (if ",(0,a.kt)("em",{parentName:"td"},"pbDocumentVisible is true). ",(0,a.kt)("br",null),"TRUE: ","[ out ]"," boolean")," pbLatestVisible, //!","<"," True if the latest version of the document is visible after the operation."),(0,a.kt)("td",{parentName:"tr",align:null},"string")))))}p.isMDXComponent=!0;n(34259);var m=n(18679);const d={toc:[]},_="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(_,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(m.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Assumes shellUI has been initialized with IShellUI instance\nconst results = await shellUI.Vault.ObjectOperations.RenameObjectFile({\n  obj_ver: {\n    obj_id: {\n      type: 0,\n      item_id: {\n        internal_id: 0,\n        external_repository_id: {\n          connection: "<!< The external repository connection identifier.>",\n          item: "<item>",\n        },\n      },\n    },\n    version: {\n      type: 7 /* Enum: ObjVerVersionType */,\n      internal_version: 0,\n      external_repository_version: "<external_repository_version>",\n      external_repository_sort_key: 0,\n    },\n  },\n  file_ver: {\n    file_id: {\n      type: 3 /* Enum: FileIDType */,\n      internal_id: 0,\n      external_repository_id: "<!< External file id.>",\n    },\n    type: 3 /* Enum: FileVerType */,\n    internal_version: 0,\n    external_repository_version: "<external_repository_version>",\n    external_repository_sort_key: 0,\n  },\n  title: "<!< The new title of the file.>",\n  extension: "<extension>",\n});\n'))))}u.isMDXComponent=!0;const f={toc:[]},b="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Renames a document file."))}y.isMDXComponent=!0;const g={},k="RenameObjectFile",v={unversionedId:"gRPC/Interfaces/ObjectOperations/RenameObjectFile/index",id:"gRPC/Interfaces/ObjectOperations/RenameObjectFile/index",title:"RenameObjectFile",description:"Syntax",source:"@site/docs/gRPC/Interfaces/ObjectOperations/RenameObjectFile/index.mdx",sourceDirName:"gRPC/Interfaces/ObjectOperations/RenameObjectFile",slug:"/gRPC/Interfaces/ObjectOperations/RenameObjectFile/",permalink:"/gRPC/Interfaces/ObjectOperations/RenameObjectFile/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RemoveObjects",permalink:"/gRPC/Interfaces/ObjectOperations/RemoveObjects/"},next:{title:"SetObjectLevelProperty",permalink:"/gRPC/Interfaces/ObjectOperations/SetObjectLevelProperty/"}},h={},O=[{value:"Syntax",id:"syntax",level:2},{value:"Message",id:"message",level:2},{value:"Return type",id:"return-type",level:2}],j={toc:O},x="wrapper";function N(e){let{components:t,...n}=e;return(0,a.kt)(x,(0,r.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"renameobjectfile"},"RenameObjectFile"),(0,a.kt)(y,{components:n.components,mdxType:"Description"}),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)(u,{components:n.components,mdxType:"Syntax"}),(0,a.kt)("h2",{id:"message"},"Message"),(0,a.kt)(p,{components:n.components,mdxType:"Message"}),(0,a.kt)("h2",{id:"return-type"},"Return type"),(0,a.kt)(l,{components:n.components,mdxType:"Returns"}))}N.isMDXComponent=!0}}]);