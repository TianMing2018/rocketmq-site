"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[8808],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>g});var s=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var n=s.createContext({}),c=function(e){var t=s.useContext(n),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return s.createElement(n.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,n=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(r),m=a,g=h["".concat(n,".").concat(m)]||h[m]||p[m]||o;return r?s.createElement(g,i(i({ref:t},u),{},{components:r})):s.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var n in t)hasOwnProperty.call(t,n)&&(l[n]=t[n]);l.originalType=e,l[h]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36116:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>n,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=r(45072),a=(r(11504),r(95788));const o={title:"Release Notes - Apache RocketMQ - Version 4.7.1",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},i=void 0,l={permalink:"/zh/release-notes/2020/06/29/4.7.1",source:"@site/release-notes/2020-06-29-4.7.1.md",title:"Release Notes - Apache RocketMQ - Version 4.7.1",description:"* Source: rocketmq-all-4.7.1-source-release.zip [PGP] [SHA512]",date:"2020-06-29T00:00:00.000Z",formattedDate:"2020\u5e746\u670829\u65e5",tags:[{label:"Release_Notes",permalink:"/zh/release-notes/tags/release-notes"},{label:"RocketMQ",permalink:"/zh/release-notes/tags/rocket-mq"},{label:"Version",permalink:"/zh/release-notes/tags/version"}],readingTime:2.85,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.7.1",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ Spring - Version 2.1.1",permalink:"/zh/release-notes/2020/07/20/release-notes-rocketmq-spring-2.1.1"},nextItem:{title:"Release Notes - Apache RocketMQ Client CPP- Version 2.2.0",permalink:"/zh/release-notes/2020/04/02/release-notes-rocketmq-client-cpp-2.2.0"}},n={authorsImageUrls:[]},c=[{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2},{value:"Test",id:"test",level:2},{value:"Document and code style improvement",id:"document-and-code-style-improvement",level:2}],u={toc:c},h="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(h,(0,s.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{title:"Download the 4.7.1 release",type:"tip"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"Source: ",(0,a.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-source-release.zip"},"rocketmq-all-4.7.1-source-release.zip")," [",(0,a.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-source-release.zip.asc"},"PGP"),"] [",(0,a.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-source-release.zip.sha512"},"SHA512"),"]"),(0,a.yg)("li",{parentName:"ul"},"Binary: ",(0,a.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-bin-release.zip"},"rocketmq-all-4.7.1-bin-release.zip")," [",(0,a.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-bin-release.zip.asc"},"PGP"),"] [",(0,a.yg)("a",{parentName:"li",href:"https://www.apache.org/dist/rocketmq/4.7.1/rocketmq-all-4.7.1-bin-release.zip.sha512"},"SHA512"),"]"))),(0,a.yg)("p",null,"Below is a summary of the issues addressed in the 4.7.1 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,a.yg)("a",{href:"/docs/quickStart/01quickstart/"},"Quick Start"),"."),(0,a.yg)("h2",{id:"improvement"},"Improvement"),(0,a.yg)("ul",null,(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2088"},"ISSUE-2088"),"] -  Optimize RocketMQ client's stats of RT to make sense."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2085"},"ISSUE-2085"),"] -  Support graceful shutdown for push consumer."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2082"},"ISSUE-2082"),"] -  Use StringBuilder instead of StringBuffer."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2065"},"ISSUE-2065"),"] -  Upgrade fastjson version to prevent RCE problem."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2007"},"ISSUE-2007"),"] -  Upgrade fastjson version to prevent serious security problem."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1992"},"ISSUE-1992"),"] -  Optimize the log output in Broker2Client class."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1988"},"ISSUE-1988"),"] -  Update messageDelay property incorrectly with updateBrokerConfig command."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1976"},"ISSUE-1976"),"] -  Improve the security of the system topic operation."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1912"},"ISSUE-1912"),"] -  Polish the consumer offset commit logic for lite pull consumer."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1895"},"ISSUE-1895"),"] -  Expose the flush disk timeout error to user when sending messages."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1689"},"ISSUE-1689"),"] -  Add interfaces to remove unused statsItem in BrokerStatsManager class.")),(0,a.yg)("h2",{id:"bug"},"Bug"),(0,a.yg)("ul",null,(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2118"},"ISSUE-2118"),"] -  Fix AdminBrokerProcessorTest can not pass when machine's hostname contains illegal characters."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2078"},"ISSUE-2078"),"] -  HmacSHA1 not available when use openjdk."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1901"},"ISSUE-1901"),"] -  Create reply message fail when using request/reply mode."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1906"},"ISSUE-1906"),"] -  BooleanConstantExpression might lead to class loading deadlock."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2044"},"ISSUE-2044"),"] -  DefaultLitePullConsumerImpl may throw null pointer exception."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2042"},"ISSUE-2042"),"] -  Client still connect to the old name server even it is removed from namesrvAddr list."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2036"},"ISSUE-2036"),"] -  Encode null value caused incorrect encoding result."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1978"},"ISSUE-1978"),"] -  The getBornHostString method may throw null pointer exception."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1950"},"ISSUE-1950"),"] -  Residual threads still exist after producer calls shutdown."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1931"},"ISSUE-1931"),"] -  The doAfterRpcHooks method is called twice in processRequestCommand method."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1879"},"ISSUE-1879"),"] -  GroupTransferService may be blocked by ResponseCallback in SYNC_MASTER mode."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1400"},"ISSUE-1400"),"] -  Disk space detection may be blocked when deleting a lot of files."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/729"},"ISSUE-729"),"] -  The wipeWritePermOfBroker method may throw null pointer exception."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/705"},"ISSUE-705"),"] -  The content of waitingThreadTable is not updated in time."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1807"},"ISSUE-1807"),"] -  Fix statistical error about hashSlotCount in index file.")),(0,a.yg)("h2",{id:"test"},"Test"),(0,a.yg)("ul",null,(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1878"},"ISSUE-1878"),"] -  Add unit test about cleaning index file."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1859"},"ISSUE-1859"),"] -  Add codecov report for CI.")),(0,a.yg)("h2",{id:"document-and-code-style-improvement"},"Document and code style improvement"),(0,a.yg)("ul",null,(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2054"},"ISSUE-2054"),"] -  Typo fix in RocketMQ_Example.md."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2053"},"ISSUE-2053"),"] -  Add @Override annotation for RMQOrderListener."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2035"},"ISSUE-2035"),"] -  Typo fix in DefaultMQProducerImpl class."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2034"},"ISSUE-2034"),"] -  Polish the java doc for MessageListenerOrderly class."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2020"},"ISSUE-2020"),"] -  Replace notify code blocks with existing method wakeup in ServiceThread."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2025"},"ISSUE-2025"),"] -  Refactor the code in processSendResponse method."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2011"},"ISSUE-2011"),"] -  Add english README.md document."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2006"},"ISSUE-2006"),"] -  Add request-reply document."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/2003"},"ISSUE-2003"),"] -  Remove useless code in MQClientInstance."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1971"},"ISSUE-1971"),"] -  Polish the comment in ConsumerFilterManager."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1964"},"ISSUE-1964"),"] -  Fix document error about admin tool."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1883"},"ISSUE-1883"),"] -  Fix document error about wipeWritePermSubCommand."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1866"},"ISSUE-1866"),"] -  Fix document error about transaction message."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1857"},"ISSUE-1857"),"] -  Refactor the code in DefaultMQProducerImpl class."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1741"},"ISSUE-1741"),"] -  Typo fix in ConsumeMessageOrderlyService."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1574"},"ISSUE-1574"),"] -  Typo fix in request code."),(0,a.yg)("li",null,"[",(0,a.yg)("a",{href:"https://github.com/apache/rocketmq/issues/1505"},"ISSUE-1505"),"] -  Fix document error about batch sample.")))}p.isMDXComponent=!0}}]);