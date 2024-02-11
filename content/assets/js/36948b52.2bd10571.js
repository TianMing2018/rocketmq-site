"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[5144],{95788:(e,t,r)=>{r.d(t,{Iu:()=>s,yg:()=>g});var a=r(11504);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,c=function(e,t){if(null==e)return{};var r,a,c={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,c=e.mdxType,l=e.originalType,i=e.parentName,s=n(e,["components","mdxType","originalType","parentName"]),u=p(r),h=c,g=u["".concat(i,".").concat(h)]||u[h]||m[h]||l;return r?a.createElement(g,o(o({ref:t},s),{},{components:r})):a.createElement(g,o({ref:t},s))}));function g(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=r.length,o=new Array(l);o[0]=h;var n={};for(var i in t)hasOwnProperty.call(t,i)&&(n[i]=t[i]);n.originalType=e,n[u]="string"==typeof e?e:c,o[1]=n;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},10084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>n,toc:()=>p});var a=r(45072),c=(r(11504),r(95788));const l={title:"Release Notes - Apache RocketMQ Client CPP- Version 2.0.0",categories:["Release_Notes"],tags:["RocketMQ_Client_CPP"]},o=void 0,n={permalink:"/release-notes/2020/02/14/release-notes-rocketmq-client-cpp-2.0.0",source:"@site/release-notes/2020-02-14-release-notes-rocketmq-client-cpp-2.0.0.md",title:"Release Notes - Apache RocketMQ Client CPP- Version 2.0.0",description:"* Source: rocketmq-client-cpp-2.0.0-source-release.tar.gz [PGP] [SHA512]",date:"2020-02-14T00:00:00.000Z",formattedDate:"February 14, 2020",tags:[{label:"RocketMQ_Client_CPP",permalink:"/release-notes/tags/rocket-mq-client-cpp"}],readingTime:1.575,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Client CPP- Version 2.0.0",categories:["Release_Notes"],tags:["RocketMQ_Client_CPP"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.7.0",permalink:"/release-notes/2020/03/16/4.7.0"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.6.1",permalink:"/release-notes/2020/2/14/4.6.1"}},i={authorsImageUrls:[]},p=[{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,c.yg)(u,(0,a.c)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.yg)("admonition",{title:"Download",type:"tip"},(0,c.yg)("ul",{parentName:"admonition"},(0,c.yg)("li",{parentName:"ul"},"Source: ",(0,c.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.0.0/rocketmq-client-cpp-2.0.0-source-release.tar.gz"},"rocketmq-client-cpp-2.0.0-source-release.tar.gz")," [",(0,c.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.0.0/rocketmq-client-cpp-2.0.0-source-release.tar.gz.asc"},"PGP"),"] [",(0,c.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.0.0/rocketmq-client-cpp-2.0.0-source-release.tar.gz.sha512"},"SHA512"),"]"),(0,c.yg)("li",{parentName:"ul"},"Binary: ",(0,c.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.0.0/rocketmq-client-cpp-2.0.0-bin-release.tar.gz"},"rocketmq-client-cpp-2.0.0-bin-release.tar.gz")," [",(0,c.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.0.0/rocketmq-client-cpp-2.0.0-bin-release.tar.gz.asc"},"PGP"),"] [",(0,c.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/rocketmq-client-cpp/2.0.0/rocketmq-client-cpp-2.0.0-bin-release.tar.gz.sha512"},"SHA512"),"]"))),(0,c.yg)("p",null,"Below is a summary of the issues addressed in the version 2.0.0 release of RocketMQ Client CPP. For full documentation of the release, a guide to get started, please refer to ",(0,c.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-client-cpp"},"Quick Start"),"."),(0,c.yg)("h2",{id:"improvement"},"Improvement"),(0,c.yg)("ul",null,(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/206"},"ISSUE-206"),"] -  refactor(rebalance): use smart_ptr to manage pullrequest and refactor rebalancing process."),(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/207"},"ISSUE-207"),"] -  feat(namespace): add namespace support."),(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/214"},"ISSUE-214"),"] -  test(unittest): refactor some unitests."),(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/222"},"ISSUE-222"),"] -  refactor(client): add timer to clean the offline brokers and and test case for it."),(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/225"},"ISSUE-225"),"] -  feat(protocol): try to use command v2 to send messages."),(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/227"},"ISSUE-227"),"] -  refactor(memleak): remove mem leak in the factory schedule task."),(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/230"},"ISSUE-230"),"] -  feat(version): add maxConsumerTimes to support higher client version."),(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/232"},"ISSUE-232"),"] -  feat(callback): use start pointer to manager callbacks."),(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/233"},"ISSUE-233"),"] -  refactor(consumer): remove event if consumer service shutdown."),(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/235"},"ISSUE-235"),"] -  feat(interface): remove boost in header file and examples."),(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/236"},"ISSUE-236"),"] -  style(apis): remove unnessary comments in the CPP head files."),(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/238"},"ISSUE-238"),"] -  feat(package): add rpm build and dpkg build script.")),(0,c.yg)("h2",{id:"bug"},"Bug"),(0,c.yg)("ul",null,(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/209"},"ISSUE-209"),"] -  fix(consumer): fix the issue that message will be lost if sent back to broker failed."),(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/210"},"ISSUE-210"),"] -  fix(consumer): the message was sent back to broker error when it be consumed failed."),(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/213"},"ISSUE-213"),"] -  fix(producer): fix the issue that it will coredump in DestroyProducer function when the producer shutdown."),(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/220"},"ISSUE-220"),"] -  chore(notice): update the year to 2020 in notice file."),(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/223"},"ISSUE-223"),"] -  style(protocol): remove unnessary printing in the protocol decode file and add some test cases for it."),(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/228"},"ISSUE-228"),"] -  style(protocol): feat(libevent): update libevent to v2.1.11 to avoid get mutex time out."),(0,c.yg)("li",null,"[",(0,c.yg)("a",{href:"https://github.com/apache/rocketmq-client-cpp/pull/237"},"ISSUE-237"),"] -  fix(build): fix variable in build script.")))}m.isMDXComponent=!0}}]);