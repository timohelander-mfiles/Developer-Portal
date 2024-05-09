"use strict";(self.webpackChunkuix_2=self.webpackChunkuix_2||[]).push([[2304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),h=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=h(n),d=r,u=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var h=2;h<i;h++)l[h]=n[h];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71788:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34274);function i(e){let{children:t}=e;return a.createElement("div",{className:r.Z.filetitle},t)}},69030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(71788);const l={sidebar_position:3},s="Events",o={unversionedId:"Overview/Events",id:"Overview/Events",title:"Events",description:"The UI Extension Application has different kinds of event handlers:",source:"@site/docs/Overview/Events.mdx",sourceDirName:"Overview",slug:"/Overview/Events",permalink:"/Overview/Events",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/Overview/Modules"},next:{title:"Dashboards",permalink:"/Overview/Dashboards"}},h={},p=[{value:"Module Startup",id:"module-startup",level:2},{value:"Dashboard Startup",id:"dashboard-startup",level:2},{value:"Interface Events",id:"interface-events",level:2},{value:"Unregistering an Event Handler",id:"unregistering-an-event-handler",level:3},{value:"Cancelling built-in events",id:"cancelling-built-in-events",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=c("Tabs"),d=c("TabItem"),u={toc:p},f="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events"},"Events"),(0,r.kt)("p",null,"The UI Extension Application has different kinds of event handlers:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#module-startup"},(0,r.kt)("strong",{parentName:"a"},"Module"))," or ",(0,r.kt)("a",{parentName:"li",href:"#dashboard-startup"},(0,r.kt)("strong",{parentName:"a"},"Dashboard Startup"))," ",(0,r.kt)("strong",{parentName:"li"},"handlers"),". These functions are called once when the module or dashboard starts and are considered entry points to your application."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#interface-events"},(0,r.kt)("strong",{parentName:"a"},"Interface events"))," which are are specific to the UI Extension API Interfaces. For example: you can react to an event which is fired whenever the user selects an object in a listing."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"../Commands"},(0,r.kt)("strong",{parentName:"a"},"Custom Command"))," events.  These are raised when a custom command - such as a context-menu item - is clicked by the user."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Built-in commands"),", which you can listen by registering to listen to ",(0,r.kt)("inlineCode",{parentName:"li"},"MFiles.Event.BuiltinCommand")," for the IShellFrame.")),(0,r.kt)("h2",{id:"module-startup"},"Module Startup"),(0,r.kt)("p",null,"Global function ",(0,r.kt)("inlineCode",{parentName:"p"},"OnNewShellUI")," is the first function called inside the module. This function gets the new ",(0,r.kt)("a",{parentName:"p",href:"../../UIExt2/Interfaces/IShellUI"},"IShellUI")," as parameter"),(0,r.kt)(i.Z,{mdxType:"FileTitle"},"main.js"),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(d,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\nfunction OnNewShellUI( shellUI )\n{\n    // Called during the initialization\n}\n\n")))),(0,r.kt)("p",null,"For many Extension the most important object you can get from the ",(0,r.kt)("inlineCode",{parentName:"p"},"IShellUI")," is the  ",(0,r.kt)("a",{parentName:"p",href:"../../UIExt2/Interfaces/IShellFrame"},"IShellFrame")," instance. For that you have to listen for two events:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"MFiles.Event.NewShellFrame")," event is fired by the  ",(0,r.kt)("inlineCode",{parentName:"li"},"IShellUI")," instance when the ",(0,r.kt)("a",{parentName:"li",href:"../../UIExt2/Interfaces/IShellFrame"},"IShellFrame")," instance is available."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"MFiles.Event.Started")," event is fired by the ",(0,r.kt)("a",{parentName:"li",href:"../../UIExt2/Interfaces/IShellFrame"},"IShellFrame")," instance when that instance is ready to be used.")),(0,r.kt)("p",null,"Sample code to illustrate the event sequence in the module to get both IShellFrame and IShellUI instances."),(0,r.kt)(i.Z,{mdxType:"FileTitle"},"main.js"),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(d,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\n// This function which handles UI Extension initialization phase.\nfunction OnNewShellUI( shellUI )\n{\n    // Wait for the ShellFrame to be created and started\n    shellUI.Events.Register(\n        MFiles.Event.NewShellFrame,\n        shellFrame => {\n            shellFrame.Events.Register(\n                MFiles.Event.Started,\n                () => {\n                    Start( shellUI, shellFrame )\n                });\n    });\n}\n\n// Main application\nasync function Start( shellUI, shellFrame ) {\n    // TODO: write the UI Extension code here.\n}\n\n")))),(0,r.kt)("h2",{id:"dashboard-startup"},"Dashboard Startup"),(0,r.kt)("p",null,"The startup events are fired only once per module. The function handlers must be named functions binded to the\nglobal ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," object inside the dashboard."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OnNewDashboard")," gets instance of ",(0,r.kt)("a",{parentName:"p",href:"../../UIExt2/Interfaces/IDashboard/"},"IDashboard")," as a parameter. The most common Interfaces\nlike ",(0,r.kt)("strong",{parentName:"p"},"IShellFrame")," and ",(0,r.kt)("strong",{parentName:"p"},"IShellUI")," are accessible through that interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Dashboard bootstrap function\nfunction OnNewDashboard( newDashboard ) {\n\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The argument of the ",(0,r.kt)("inlineCode",{parentName:"p"},"OnNewDashboard")," function is instance of UIDashboard which has the ",(0,r.kt)("strong",{parentName:"p"},"ShellFrame")," property, which is one of the most important interfaces for the UI Extensions: ",(0,r.kt)("a",{parentName:"p",href:"../../UIExt2/Interfaces/IShellFrame/"},"IShellFrame"),"."),(0,r.kt)("p",{parentName:"admonition"},"ShellFrame has ShellUI property which links to the ",(0,r.kt)("a",{parentName:"p",href:"../../UIExt2/Interfaces/IShellUI/"},"IShellUI"),", which is another very important interface, because it contains the Vault property, which allows you to access the ",(0,r.kt)("a",{parentName:"p",href:"../../gRPC/"},"Vault API"))),(0,r.kt)("h2",{id:"interface-events"},"Interface Events"),(0,r.kt)("p",null,"Each interface object has ",(0,r.kt)("strong",{parentName:"p"},"Event")," property which is instance of ",(0,r.kt)("a",{parentName:"p",href:"../../UIExt2/Interfaces/IEvents/"},"IEvents"),". This interface has two methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Register")," which is used to register a new event handler for a given Event. This function returns a handle, which can be used to unregister the event handler."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unregister")," which takes the handler returned by the ",(0,r.kt)("em",{parentName:"li"},"Register")," function as parameter.")),(0,r.kt)("p",null,"Example of registering an event handler which listens to the IShellListing  ",(0,r.kt)("a",{parentName:"p",href:"../../UIExt2/Events#selectionchanged"},"Selection Changed")," event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// shellListing is of type IShellListing\nconst eventHandle = await shellListing.Events.Register(\n  MFiles.Event.SelectionChanged, \n  items => {\n    // When the event fires you get the IShellItems object \n  }\n);\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Notice that the ",(0,r.kt)("strong",{parentName:"p"},"Register")," methods return value is a Promise. You have to either ",(0,r.kt)("em",{parentName:"p"},"await")," that in the ",(0,r.kt)("em",{parentName:"p"},"async")," function or resolve the promise using ",(0,r.kt)("inlineCode",{parentName:"p"},".then( eventHandle => {  ]})"))),(0,r.kt)("p",null,"To see which Interface events are available for each UI Extension Interface see the ",(0,r.kt)("a",{parentName:"p",href:"../../UIExt2/Events"},"API Reference Guide for events")),(0,r.kt)("h3",{id:"unregistering-an-event-handler"},"Unregistering an Event Handler"),(0,r.kt)("p",null,"To unregister an event handler simply pass the handle returned by the ",(0,r.kt)("strong",{parentName:"p"},"Register")," method to the ",(0,r.kt)("strong",{parentName:"p"},"Unregister")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"shellListing.Events.Unregister(eventHandle);\n")),(0,r.kt)("h3",{id:"cancelling-built-in-events"},"Cancelling built-in events"),(0,r.kt)("p",null,"Built-in events can be cancelled by returning ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," from the attached handler.  This can be useful if the handler itself overrides the default behavior:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'shellFrame.Commands.Events.Register(\n    MFiles.Event.BuiltinCommand,\n    (cmdId: number, objectType: number) => {\n        // If the user has clicked to create a document then override the behavior.\n        if (cmdId === MFiles.BuiltinCommand.NewObject && objectType === 0) {\n            shellFrame.ShowMessage("BuiltinCommand as Cancelled by Event handler");\n            return false;\n        }\n    }\n)\n')))}v.isMDXComponent=!0},34274:(e,t,n)=>{n.d(t,{Z:()=>a});const a={note:"note_XMqZ",idea:"idea_NLbw",highlight:"highlight_NFmx",filetitle:"filetitle_Jrus"}}}]);