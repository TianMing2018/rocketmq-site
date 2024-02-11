"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[873],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>g});var s=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var n=s.createContext({}),l=function(e){var t=s.useContext(n),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return s.createElement(n.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,n=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(r),p=a,g=h["".concat(n,".").concat(p)]||h[p]||m[p]||o;return r?s.createElement(g,i(i({ref:t},u),{},{components:r})):s.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var n in t)hasOwnProperty.call(t,n)&&(c[n]=t[n]);c.originalType=e,c[h]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}p.displayName="MDXCreateElement"},36704:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>n,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=r(45072),a=(r(11504),r(95788));const o={title:"Release Notes - Apache RocketMQ - Version 4.9.1",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},i=void 0,c={permalink:"/release-notes/2021/08/22/4.9.1",source:"@site/release-notes/2021-08-22-4.9.1.md",title:"Release Notes - Apache RocketMQ - Version 4.9.1",description:"* Source: rocketmq-all-4.9.1-source-release.zip [PGP] [SHA512]",date:"2021-08-22T00:00:00.000Z",formattedDate:"August 22, 2021",tags:[{label:"Release_Notes",permalink:"/release-notes/tags/release-notes"},{label:"RocketMQ",permalink:"/release-notes/tags/rocket-mq"},{label:"Version",permalink:"/release-notes/tags/version"}],readingTime:2.865,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.9.1",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ Spring - Version 2.2.1",permalink:"/release-notes/2021/08/31/release-notes-rocketmq-spring-2.2.1"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.9.0",permalink:"/release-notes/2021/06/15/4.9.0"}},n={authorsImageUrls:[]},l=[{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2},{value:"Document and code style improvement",id:"document-and-code-style-improvement",level:2}],u={toc:l},h="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(h,(0,s.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{title:"Download the 4.9.1 release",type:"tip"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"Source: ",(0,a.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.9.1/rocketmq-all-4.9.1-source-release.zip"},"rocketmq-all-4.9.1-source-release.zip")," [",(0,a.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.9.1/rocketmq-all-4.9.1-source-release.zip.asc"},"PGP"),"] [",(0,a.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.9.1/rocketmq-all-4.9.1-source-release.zip.sha512"},"SHA512"),"]"),(0,a.yg)("li",{parentName:"ul"},"Binary: ",(0,a.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.9.1/rocketmq-all-4.9.1-bin-release.zip"},"rocketmq-all-4.9.1-bin-release.zip")," [",(0,a.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.9.1/rocketmq-all-4.9.1-bin-release.zip.asc"},"PGP"),"] [",(0,a.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.9.1/rocketmq-all-4.9.1-bin-release.zip.sha512"},"SHA512"),"]"))),(0,a.yg)("p",null,"Below is a summary of the issues addressed in the 4.9.1 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,a.yg)("a",{href:"/docs/quickStart/01quickstart/"},"Quick Start"),"."),(0,a.yg)("h2",{id:"improvement"},"Improvement"),(0,a.yg)("ul",null,(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3199"},"ISSUE-3199"),"] -  Two timed task for RequestFutureTable."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3196"},"ISSUE-3196"),'] -  Check if "requestHeader" is null before "requestHeader.getTopic()".'),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3185"},"ISSUE-3185"),"] -  Remove the arm machine test in travis ci."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3177"},"ISSUE-3177"),"] -  UpdateAclConfig in all brokers."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3030"},"ISSUE-3030"),"] -  Remove the -Xmn JVM parameter when using G1."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3162"},"ISSUE-3162"),"] -  Add msgTraceEnable config in transaction producer benchmark."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2883"},"ISSUE-2883"),"] -  [Part B]Improve produce performance in M/S mode."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2883"},"ISSUE-2883"),"] -  [Part C]Improve produce performance in M/S mode."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2883"},"ISSUE-2883"),"] -  [Part D]Improve produce performance in M/S mode."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2883"},"ISSUE-2883"),"] -  [Part E]Improve produce performance in M/S mode."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2883"},"ISSUE-2883"),"] -  [Part G] Optimise parse performance for SendMessageRequestHeaderV2."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3128"},"ISSUE-3128"),"] -  Fix the delete global white addresses."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3089"},"ISSUE-3089"),"] -  Fix Print log format is incorrect in NettyRemotingAbstract class."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3099"},"ISSUE-3099"),"] -  Fix the incorrect judegment  'writePos - lastCommittedPosition > commitLeastPages'."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3130"},"ISSUE-3130"),"] -  Add trace format test case."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3123"},"ISSUE-3123"),"] -  Fix namesrv endpoint."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3109"},"ISSUE-3109"),"] -  AdminBrokerProcess do not reply anything in default case."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/603"},"ISSUE-603"),"] -  Log exception stack."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3068"},"ISSUE-3068"),"] -  Remove jaeger tracing dependency in release."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3046"},"ISSUE-3046"),"] -  Polish lite pull consumer code style."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3031"},"ISSUE-3031"),"] -  Upgrade netty-all dependency version to 4.1.65.Final."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3023"},"ISSUE-3023"),"] -  Fix the inconsistency of putMessageDistributeTime statistics."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3021"},"ISSUE-3021"),"] -  Improve the comment of maxReconsumeTimes."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3009"},"ISSUE-3009"),"] -  Test(benchmark): support delay message test."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3004"},"ISSUE-3004"),"] -  Fix AsyncTraceDispatcher unique groupName."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2988"},"ISSUE-2988"),"] -  Fix fail to send trace of last message before shutting down producer."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2883"},"ISSUE-2883"),"] -  [Part F] Improve produce performance in M/S mode."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2873"},"ISSUE-2873"),"] -  Add benchmark for batch message."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2715"},"ISSUE-2715"),"] -  Make netty parameter configure by system property."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2055"},"ISSUE-2055"),"] -  Fix NPE in SendMessageProcessor.handleRetryAndDLQ.")),(0,a.yg)("h2",{id:"bug"},"Bug"),(0,a.yg)("ul",null,(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3175"},"ISSUE-3175"),"] -  UpdateAclConfig cause broker fail to start."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2708"},"ISSUE-2708"),"] -  Fix offset rollback when fetch offset from broker exception."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3066"},"ISSUE-3066"),"] -  Producing a ghost consumer at frequently start and stop consumers in one process."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3118"},"ISSUE-3118"),"] -  Type conversion exception occurs when batch message sending triggers pending full."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3019"},"ISSUE-3019"),"] -  Fixed bug with batch-sent message statistics.")),(0,a.yg)("h2",{id:"document-and-code-style-improvement"},"Document and code style improvement"),(0,a.yg)("ul",null,(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3097"},"ISSUE-3097"),"] -  Docs remove obsolete/error configuration."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3059"},"ISSUE-3059"),"] -  Fix the English version of Example_Transaction.md."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3055"},"ISSUE-3055"),"] -  Add some doc of the API_Reference_DefaultMQProducer of English."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3042"},"ISSUE-3042"),"] -  Add SyncProducer Example."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3037"},"ISSUE-3037"),"] -  Add a Chinese version of Deployment.md."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3063"},"ISSUE-3063"),"] -  Add Chinese version of Example_Delay.md."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3061"},"ISSUE-3061"),"] -  Add different send examples and chinese version of FAQ.md."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3033"},"ISSUE-3033"),"] -  Looking at the Chinese document, I found that the subtraction operation."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2997"},"ISSUE-2997"),"] -  Add a Chinese version of Configuration_System.md."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2990"},"ISSUE-2990"),"] -  Add message tracing switch in sendMessage command of mqadmin, and add document."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3154"},"ISSUE-3154"),"] -  Delete the unuse code."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3144"},"ISSUE-3144"),"] -  Fix spell error."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/3109"},"ISSUE-3110"),"] -  Fix: remove useless code.")))}m.isMDXComponent=!0}}]);