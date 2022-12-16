"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:6},o="Execution Model",l={unversionedId:"executionmodel",id:"executionmodel",title:"Execution Model",description:"Lifecycle",source:"@site/docs/executionmodel.md",sourceDirName:".",slug:"/executionmodel",permalink:"/Knit/docs/executionmodel",draft:!1,editUrl:"https://github.com/Sleitnick/Knit/edit/master/docs/executionmodel.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Util",permalink:"/Knit/docs/util"},next:{title:"Examples",permalink:"/Knit/docs/examples"}},c={},s=[{value:"Lifecycle",id:"lifecycle",level:2},{value:"Catching KnitInit Errors",id:"catching-knitinit-errors",level:2},{value:"Best Practices",id:"best-practices",level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"execution-model"},"Execution Model"),(0,i.kt)("h2",{id:"lifecycle"},"Lifecycle"),(0,i.kt)("p",null,"The execution model of Knit defines the flow of operations and lifecycle of Knit."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Require the Knit module"),(0,i.kt)("li",{parentName:"ol"},"Create services or controllers"),(0,i.kt)("li",{parentName:"ol"},"Call ",(0,i.kt)("inlineCode",{parentName:"li"},"Knit.Start()"),", which immediately returns a Promise",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"All ",(0,i.kt)("inlineCode",{parentName:"li"},"KnitInit")," methods are invoked at the same time, and waits for all to finish"),(0,i.kt)("li",{parentName:"ol"},"All ",(0,i.kt)("inlineCode",{parentName:"li"},"KnitStart")," methods are invoked at the same time"))),(0,i.kt)("li",{parentName:"ol"},"After all ",(0,i.kt)("inlineCode",{parentName:"li"},"KnitStart")," methods are called, the promise returned by ",(0,i.kt)("inlineCode",{parentName:"li"},"Knit.Start()")," resolves")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lifecycle",src:n(23141).Z,width:"1203",height:"943"})),(0,i.kt)("p",null,"On the server, you should have one Script in ServerScriptService. On the client, you should have one LocalScript in PlayerStarterScripts. Each of these scripts should have a similar layout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local Knit = require(game:GetService("ReplicatedStorage").Packages.Knit)\n\n-- Load services or controllers here\n\nKnit.Start():catch(warn)\n')),(0,i.kt)("p",null,"Once services or controllers are created, they persist forever (until the server shuts down or the player leaves)."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Services and controllers ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"cannot"))," be created after ",(0,i.kt)("inlineCode",{parentName:"p"},"Knit.Start()")," has been called.")),(0,i.kt)("h2",{id:"catching-knitinit-errors"},"Catching KnitInit Errors"),(0,i.kt)("p",null,"Due to the way Promises work, errors that occur within ",(0,i.kt)("inlineCode",{parentName:"p"},"KnitInit")," methods of services or controllers will be caught as a rejected promise. These can be handled by either grabbing the status after using ",(0,i.kt)("inlineCode",{parentName:"p"},"Await")," or using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Catch()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local success, err = Knit.Start():await()\nif (not success) then\n    -- Handle error\n    error(tostring(err))\nend\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Knit.Start():catch(function(err)\n    -- Handle error\n    warn(tostring(err))\nend)\n")),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Only one Script on the server should manage loading services and starting Knit"),(0,i.kt)("li",{parentName:"ul"},"Only one LocalScript on the client should manage loading controllers and starting Knit"),(0,i.kt)("li",{parentName:"ul"},"Split up services and controllers into their own modules"),(0,i.kt)("li",{parentName:"ul"},"Services should be kept in either ServerStorage or ServerScriptService to avoid being exposed to the client"),(0,i.kt)("li",{parentName:"ul"},"Code within ",(0,i.kt)("inlineCode",{parentName:"li"},"KnitInit")," and within the root scope of the ModuleScript should try to finish ASAP, and should avoid yielding if possible"),(0,i.kt)("li",{parentName:"ul"},"Events and methods should never be added to a service's Client table after ",(0,i.kt)("inlineCode",{parentName:"li"},"Knit.Start()")," has been called"),(0,i.kt)("li",{parentName:"ul"},"As shown above in the ",(0,i.kt)("a",{parentName:"li",href:"#catching-knitinit-errors"},"Catching knitInit Errors")," section, handling a failure case of ",(0,i.kt)("inlineCode",{parentName:"li"},"Start")," is the cleanest way to catch errors on startup.")))}d.isMDXComponent=!0},23141:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lifecycle-e82da43cf6f64111c58ce945878817f9.svg"}}]);