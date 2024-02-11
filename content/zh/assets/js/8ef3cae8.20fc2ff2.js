"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[2136],{95788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>h});var a=r(11504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),g=n,h=u["".concat(l,".").concat(g)]||u[g]||m[g]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},70796:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=r(45072),n=(r(11504),r(95788));const i={title:"Release Notes - Apache RocketMQ - Version 4.0.0-incubating",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},o=void 0,c={permalink:"/zh/release-notes/2017/01/24/4.0.0",source:"@site/release-notes/2017-01-24-4.0.0.md",title:"Release Notes - Apache RocketMQ - Version 4.0.0-incubating",description:"* Source: rocketmq-all-4.0.0-incubating-source-release.zip [PGP] [MD5] [SHA1]",date:"2017-01-24T00:00:00.000Z",formattedDate:"2017\u5e741\u670824\u65e5",tags:[{label:"Release_Notes",permalink:"/zh/release-notes/tags/release-notes"},{label:"RocketMQ",permalink:"/zh/release-notes/tags/rocket-mq"},{label:"Version",permalink:"/zh/release-notes/tags/version"}],readingTime:2.675,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.0.0-incubating",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.1.0-incubating",permalink:"/zh/release-notes/2017/06/02/4.1.0"}},l={authorsImageUrls:[]},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{title:"Download the 4.0.0-incubating release",type:"tip"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"Source: ",(0,n.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.0.0-incubating/rocketmq-all-4.0.0-incubating-source-release.zip"},"rocketmq-all-4.0.0-incubating-source-release.zip")," [",(0,n.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.0.0-incubating/rocketmq-all-4.0.0-incubating-source-release.zip.asc"},"PGP"),"] [",(0,n.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.0.0-incubating/rocketmq-all-4.0.0-incubating-source-release.zip.md5"},"MD5"),"] [",(0,n.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.0.0-incubating/rocketmq-all-4.0.0-incubating-source-release.zip.sha1"},"SHA1"),"]"),(0,n.yg)("li",{parentName:"ul"},"Binary: ",(0,n.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.0.0-incubating/rocketmq-all-4.0.0-incubating-bin-release.zip"},"rocketmq-all-4.0.0-incubating-bin-release.zip")," [",(0,n.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.0.0-incubating/rocketmq-all-4.0.0-incubating-bin-release.zip.asc"},"PGP"),"] [",(0,n.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.0.0-incubating/rocketmq-all-4.0.0-incubating-bin-release.zip.md5"},"MD5"),"] [",(0,n.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.0.0-incubating/rocketmq-all-4.0.0-incubating-bin-release.zip.sha1"},"SHA1"),"]"))))}m.isMDXComponent=!0}}]);