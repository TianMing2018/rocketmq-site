"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7980],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=u(r),c=a,m=g["".concat(s,".").concat(c)]||g[c]||d[c]||l;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},91284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(58168),a=(r(96540),r(15680));const l={slug:"/"},o="Why choose RocketMQ",i={unversionedId:"introduction/01whychoose",id:"introduction/01whychoose",title:"Why choose RocketMQ",description:"Why RocketMQ",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/00-introduction/01whychoose.md",sourceDirName:"00-introduction",slug:"/",permalink:"/docs/4.x/",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/00-introduction/01whychoose.md",tags:[],version:"current",frontMatter:{slug:"/"},sidebar:"myAutogeneratedSidebar",next:{title:"What is RocketMQ",permalink:"/docs/4.x/introduction/02whatis"}},s={},u=[{value:"Why RocketMQ",id:"why-rocketmq",level:2},{value:"RocketMQ vs. ActiveMQ vs. Kafka",id:"rocketmq-vs-activemq-vs-kafka",level:2}],p={toc:u},g="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"why-choose-rocketmq"},"Why choose RocketMQ"),(0,a.yg)("h2",{id:"why-rocketmq"},"Why RocketMQ"),(0,a.yg)("p",null,"During Ali's nascent days of RocketMQ, we used it for asynchronous communications, search, social networking activity flows, data pipelines, and trade processes. As our trade business throughput rose, the pressure originating from our messaging cluster became urgent."),(0,a.yg)("p",null,"According to our research, the ActiveMQ IO module reached a bottleneck as queue and virtual topic usage increased. We tried our best to solve this problem by throttling, circuit breaker or downgrading, but the results were not satisfactory. So we tried the popular messaging solution Kafka. unfortunately, Kafka could not meet our requirements, especially in terms of low latency and high reliability, as detailed here. In this case, we decided to invent a new messaging engine to handle a wider range of messaging use cases, covering from traditional pub/sub scenarios to high-volume, real-time, zero-error transaction systems."),(0,a.yg)("p",null,"Since its inception, Apache RocketMQ has been widely adopted by many enterprise developers and cloud vendors for its simple architecture, rich business functionality, and extreme scalability. After more than ten years of large-scale scenario polishing, RocketMQ has become the industry consensus as the preferred solution for financial-grade reliable business messages, and is widely used in business scenarios in Internet, big data, mobile Internet, IoT and other fields."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"The following table shows the comparison between RocketMQ, ActiveMQ and Kafka ")),(0,a.yg)("h2",{id:"rocketmq-vs-activemq-vs-kafka"},"RocketMQ vs. ActiveMQ vs. Kafka"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Messaging Product"),(0,a.yg)("th",{parentName:"tr",align:null},"Client SDK"),(0,a.yg)("th",{parentName:"tr",align:null},"Protocol and Specification"),(0,a.yg)("th",{parentName:"tr",align:null},"Ordered Message"),(0,a.yg)("th",{parentName:"tr",align:null},"Scheduled Message"),(0,a.yg)("th",{parentName:"tr",align:null},"Batched Message"),(0,a.yg)("th",{parentName:"tr",align:null},"BroadCast Message"),(0,a.yg)("th",{parentName:"tr",align:null},"Message Filter"),(0,a.yg)("th",{parentName:"tr",align:null},"Server Triggered Redelivery"),(0,a.yg)("th",{parentName:"tr",align:null},"Message Storage"),(0,a.yg)("th",{parentName:"tr",align:null},"Message Retroactive"),(0,a.yg)("th",{parentName:"tr",align:null},"Message Priority"),(0,a.yg)("th",{parentName:"tr",align:null},"High Availability and Failover"),(0,a.yg)("th",{parentName:"tr",align:null},"Message Track"),(0,a.yg)("th",{parentName:"tr",align:null},"Configuration"),(0,a.yg)("th",{parentName:"tr",align:null},"Management and Operation Tools"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ActiveMQ"),(0,a.yg)("td",{parentName:"tr",align:null},"Java, .NET, C++ etc."),(0,a.yg)("td",{parentName:"tr",align:null},"Push model, support OpenWire, STOMP, AMQP, MQTT, JMS"),(0,a.yg)("td",{parentName:"tr",align:null},"Exclusive Consumer or Exclusive Queues can ensure ordering"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"Not Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"Not Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"Supports very fast persistence using JDBC along with a high performance journal\uff0csuch as levelDB, kahaDB"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported, depending on storage,if using levelDB it requires a ZooKeeper server"),(0,a.yg)("td",{parentName:"tr",align:null},"Not Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"The default configuration is low level, user need to optimize the configuration parameters"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Kafka"),(0,a.yg)("td",{parentName:"tr",align:null},"Java, Scala etc."),(0,a.yg)("td",{parentName:"tr",align:null},"Pull model, support TCP"),(0,a.yg)("td",{parentName:"tr",align:null},"Ensure ordering of messages within a partition"),(0,a.yg)("td",{parentName:"tr",align:null},"Not Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported, with async producer"),(0,a.yg)("td",{parentName:"tr",align:null},"Not Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported, you can use Kafka Streams to filter messages"),(0,a.yg)("td",{parentName:"tr",align:null},"Not Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"High performance file storage"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported offset indicate"),(0,a.yg)("td",{parentName:"tr",align:null},"Not Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported, requires a ZooKeeper server"),(0,a.yg)("td",{parentName:"tr",align:null},"Not Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"Kafka uses key-value pairs format for configuration. These values can be supplied either from a file or programmatically."),(0,a.yg)("td",{parentName:"tr",align:null},"Supported, use terminal command to expose core metrics")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"RocketMQ"),(0,a.yg)("td",{parentName:"tr",align:null},"Java, C++, Go"),(0,a.yg)("td",{parentName:"tr",align:null},"Pull model, support TCP, JMS, OpenMessaging"),(0,a.yg)("td",{parentName:"tr",align:null},"Ensure strict ordering of messages,and can scale out gracefully"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported, with sync mode to avoid message loss"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported, property filter expressions based on SQL92"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"High performance and low latency file storage"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported timestamp and offset two indicates"),(0,a.yg)("td",{parentName:"tr",align:null},"Not Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported, Master-Slave model, without another kit"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported"),(0,a.yg)("td",{parentName:"tr",align:null},"Work out of box,user only need to pay attention to a few configurations"),(0,a.yg)("td",{parentName:"tr",align:null},"Supported, rich web and terminal command to expose core metrics")))))}d.isMDXComponent=!0}}]);