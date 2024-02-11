"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6732],{95788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>f});var a=r(11504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(r),h=n,f=m["".concat(c,".").concat(h)]||m[h]||u[h]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},69752:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=r(45072),n=(r(11504),r(95788));const o={title:"Release Notes - Apache RocketMQ - Version 4.9.6",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},l=void 0,s={permalink:"/zh/release-notes/2023/05/18/4.9.6",source:"@site/release-notes/2023-05-18-4.9.6.md",title:"Release Notes - Apache RocketMQ - Version 4.9.6",description:"- Source: rocketmq-all-4.9.6-source-release.zip [PGP] [SHA512]",date:"2023-05-18T00:00:00.000Z",formattedDate:"2023\u5e745\u670818\u65e5",tags:[{label:"Release_Notes",permalink:"/zh/release-notes/tags/release-notes"},{label:"RocketMQ",permalink:"/zh/release-notes/tags/rocket-mq"},{label:"Version",permalink:"/zh/release-notes/tags/version"}],readingTime:.42,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.9.6",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 5.1.2",permalink:"/zh/release-notes/2023/06/12/5.1.2"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 5.1.1",permalink:"/zh/release-notes/2023/05/15/5.1.1"}},c={authorsImageUrls:[]},i=[],p={toc:i},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{title:"Download the 4.9.6 release",type:"tip"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"Source: ",(0,n.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.9.6/rocketmq-all-4.9.6-source-release.zip"},"rocketmq-all-4.9.6-source-release.zip")," [",(0,n.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.9.6/rocketmq-all-4.9.6-source-release.zip.asc"},"PGP"),"] [",(0,n.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.9.6/rocketmq-all-4.9.6-source-release.zip.sha512"},"SHA512"),"]"),(0,n.yg)("li",{parentName:"ul"},"Binary: ",(0,n.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.9.6/rocketmq-all-4.9.6-bin-release.zip"},"rocketmq-all-4.9.6-bin-release.zip")," [",(0,n.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.9.6/rocketmq-all-4.9.6-bin-release.zip.asc"},"PGP"),"] [",(0,n.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.9.6/rocketmq-all-4.9.6-bin-release.zip.sha512"},"SHA512"),"]"))))}u.isMDXComponent=!0}}]);