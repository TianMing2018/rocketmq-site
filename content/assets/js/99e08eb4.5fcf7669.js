"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[5908],{95788:(e,n,t)=>{t.d(n,{Iu:()=>m,yg:()=>g});var o=t(11504);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=l(t),d=s,g=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return t?o.createElement(g,i(i({ref:n},m),{},{components:t})):o.createElement(g,i({ref:n},m))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=d;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[u]="string"==typeof e?e:s,i[1]=r;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78225:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=t(45072),s=(t(11504),t(95788));const a={},i="Domain Model",r={unversionedId:"domainModel/01main",id:"version-5.0/domainModel/01main",title:"Domain Model",description:"This section describes the domain model of Apache RocketMQ.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/03-domainModel/01main.md",sourceDirName:"03-domainModel",slug:"/domainModel/01main",permalink:"/docs/domainModel/01main",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/03-domainModel/01main.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Quick Start",permalink:"/docs/quickStart/01quickstart"},next:{title:"Topic",permalink:"/docs/domainModel/02topic"}},c={},l=[{value:"Domain model of Apache RocketMQ",id:"domain-model-of-apache-rocketmq",level:2},{value:"Communication model",id:"communication-model",level:2},{value:"Message transmission model",id:"message-transmission-model",level:2}],m={toc:l},u="wrapper";function p(e){let{components:n,...a}=e;return(0,s.yg)(u,(0,o.c)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"domain-model"},"Domain Model"),(0,s.yg)("p",null,"This section describes the domain model of Apache RocketMQ."),(0,s.yg)("p",null,"Apache RocketMQ is a distributed middleware service that adopts an asynchronous communication model and a publish/subscribe message transmission model."),(0,s.yg)("p",null,"For more information about the communication model and transmission model, see ",(0,s.yg)("strong",{parentName:"p"},"Communication model")," and ",(0,s.yg)("strong",{parentName:"p"},"Message transmission model"),"."),(0,s.yg)("p",null,"The asynchronous communication model of Apache RocketMQ features simple system topology and weak upstream-downstream coupling. Apache RocketMQ is used in asynchronous decoupling and load shifting scenarios."),(0,s.yg)("h2",{id:"domain-model-of-apache-rocketmq"},"Domain model of Apache RocketMQ"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"\u9886\u57df\u6a21\u578b",src:t(5236).c,width:"2333",height:"856"})),(0,s.yg)("p",null,"As shown in the preceding figure, the lifecycle of a Apache RocketMQ message consists of three stages: production, storage, and consumption."),(0,s.yg)("p",null,"A producer generates a message and sends it to a Apache RocketMQ broker. The message is stored in a topic on the broker. A consumer subscribes to the topic to consume the message."),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Message production")),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"/docs/domainModel/04producer"},"Producer"),"\uff1a"),(0,s.yg)("p",null,"The running entity that is used to generate messages in Apache RocketMQ. Producers are the upstream parts of business call links. Producers are lightweight, anonymous, and do not have identities."),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Message storage")),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/domainModel/02topic"},"Topic"),"\uff1a"),(0,s.yg)("p",{parentName:"li"},"The grouping container that is used for message transmission and storage in Apache RocketMQ. A topic consists of multiple message queues, which are used to store messages and scale out the topic.")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/domainModel/03messagequeue"},"MessageQueue"),"\uff1a"),(0,s.yg)("p",{parentName:"li"},"The unit container that is used for message transmission and storage in Apache RocketMQ. Message queues are similar to partitions in Kafka. Apache RocketMQ stores messages in a streaming manner based on an infinite queue structure. Messages are stored in order in a queue.")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/domainModel/04message"},"Message"),"\uff1a"),(0,s.yg)("p",{parentName:"li"},"The minimum unit of data transmission in Apache RocketMQ. Messages are immutable after they are initialized and stored."))),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Message consumption")),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/domainModel/07consumergroup"},"ConsumerGroup"),"\uff1a"),(0,s.yg)("p",{parentName:"li"},"An independent group of consumption identities defined in the publish/subscribe model of Apache RocketMQ. A consumer group is used to centrally manage consumers that run at the bottom layer. Consumers in the same group must maintain the same consumption logic and configurations with each other, and consume the messages subscribed by the group together to scale out the consumption capacity of the group.")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/domainModel/08consumer"},"Consumer"),"\uff1a"),(0,s.yg)("p",{parentName:"li"},"The running entity that is used to consume messages in Apache RocketMQ. Consumers are the downstream parts of business call links, A consumer must belong to a specific consumer group.")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/domainModel/09subscription"},"Subscription"),"\uff1a"),(0,s.yg)("p",{parentName:"li"},"The collection of configurations in the publish/subscribe model of Apache RocketMQ. The configurations include message filtering, retry, and consumer progress Subscriptions are managed at the consumer group level. You use consumer groups to specify subscriptions to manage how consumers in the group filter messages, retry consumption, and restore a consumer offset."),(0,s.yg)("p",{parentName:"li"},"The configurations in a Apache RocketMQ subscription are all persistent, except for filter expressions. Subscriptions are unchanged regardless of whether the broker restarts or the connection is closed."))),(0,s.yg)("h2",{id:"communication-model"},"Communication model"),(0,s.yg)("p",null,"According to the concept of distributed system architecture, a complex system can be split into multiple independent modules, such as microservice modules. Remote communication between the modules must be ensured in the system. There are two typical communication models for this purpose: RPC-based synchronous communication model and middleware-based asynchronous communication model."),(0,s.yg)("p",null,"RPC-based synchronous model"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Synchronous invocation",src:t(93016).c,width:"1258",height:"856"})),(0,s.yg)("p",null,"In this model, remote systems communicate with each other directly. Each request is sent directly from the caller to the callee, and the callee returns the call result immediately to the caller.\n",(0,s.yg)("strong",{parentName:"p"},"Notice"),' The word "synchronous" does not refer to the mode of the programming interface. RPC also supports the programming mode of asynchronous non-blocking calls, in which case the caller still expects a direct response from the callee within a specified period.'),(0,s.yg)("p",null,"Asynchronous communication model\n",(0,s.yg)("img",{alt:"Asynchronous invocation",src:t(57300).c,width:"1435",height:"856"})),(0,s.yg)("p",null,"In this model, subsystems are not connected in a tightly coupled manner. The caller needs only to convert a request into an asynchronous event, or message, and send it to the agent. As long as the message is sent, the call is considered complete. The agent delivers the message to the called downstream subsystem and ensures that the task is accomplished. The role of agent is typically assumed by a message middleware."),(0,s.yg)("p",null,"Asynchronous communication provides the following benefits:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Simple system topology. Because the caller and callee both communicate only with the agent, the system works in a star structure that is easy to maintain and manage.")),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Weak upstream and downstream coupling. Weak coupling enables the system structure to be more flexible. The agent performs buffering and asynchronous recovery. Systems deployed at the upstream and downstream can be upgraded and changed independently without affecting each other.")),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Load shifting. Message-oriented agents typically provide a large traffic buffer and powerful traffic shaping capability. This prevents traffic peaks from drowning downstream systems.")),(0,s.yg)("h2",{id:"message-transmission-model"},"Message transmission model"),(0,s.yg)("p",null,"Message middleware services have two common transmission models: the point-to-point model and the publish/subscribe model."),(0,s.yg)("p",null,"Point-to-point model\n",(0,s.yg)("img",{alt:"Point-to-point model",src:t(26860).c,width:"1162",height:"514"})),(0,s.yg)("p",null,"The point-to-point model, also known as the queue model, has the following characteristics:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},"Consumer anonymity: The queue is the only identity used during upstream-downstream communication. Downstream consumers cannot declare an identity when they obtain messages from the queue.")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},"One-to-one communication: Consumers do not have identities. All consumers in a consumer group consume the subscribed messages together. Each message can be consumed only by one specific consumer. For this reason, this model supports only one-to-one communication."))),(0,s.yg)("p",null,"Publish/subscribe model\n",(0,s.yg)("img",{alt:"Publish/subscribe model",src:t(99496).c,width:"1220",height:"520"})),(0,s.yg)("p",null,"This model has the following characteristics:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},"Independent consumption: In this model, consumers use the identity of a consumer group, or a subscription, to receive and consume messages. Consumer groups are independent of each other.")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},"One-to-many communication: Based on the design of independent identity, this model allows a topic to be subscribed to by multiple consumer groups, each having full access to all the messages. Therefore, the publish/subscribe model supports one-to-many communication."))),(0,s.yg)("p",null,"Comparison between transmission models"),(0,s.yg)("p",null,"The point-to-point model is simpler in structure, while the publish/subscribe model offers better scalability. Apache RocketMQ uses and has the same high scalability as the publish/subscribe model."))}p.isMDXComponent=!0},57300:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/asyncarchi-e7ee18dd77aca472fb80bb2238d9528b.png"},5236:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/mainarchi-9b036e7ff5133d050950f25838367a17.png"},26860:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/p2pmode-fefdc2fbe4792e757e26befc0b3acbff.png"},99496:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/pubsub-042a4e5e5d76806943bd7dcfb730c5d5.png"},93016:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/syncarchi-ebbd41e1afd6adf432792ee2d7a91748.png"}}]);