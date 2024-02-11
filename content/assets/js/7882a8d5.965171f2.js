"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9228],{95788:(e,t,n)=>{n.d(t,{Iu:()=>l,yg:()=>p});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,p=u["".concat(c,".").concat(h)]||u[h]||g[h]||s;return n?a.createElement(p,o(o({ref:t},l),{},{components:n})):a.createElement(p,o({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},60120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(45072),r=(n(11504),n(95788));const s={},o="RocketMQ EventBridge Overview",i={unversionedId:"eventbridge/02RocketMQEventBridgeOverview",id:"version-5.0/eventbridge/02RocketMQEventBridgeOverview",title:"RocketMQ EventBridge Overview",description:"RocketMQ EventBridge is dedicated to helping users build high-reliability, low-coupling, and high-performance event-driven architectures. In event-driven architecture, microservices do not need to actively subscribe to external messages, but can instead centralize all entries that trigger changes in the microservice system to the API, and only need to focus on the current microservice's own business domain model definition and design of the API, without having to adapt and parse external service messages through a lot of glue code. EventBridge is responsible for safely and reliably adapting and delivering external service-generated events to the API designed by the current microservice.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/07-eventbridge/02RocketMQEventBridgeOverview.md",sourceDirName:"07-eventbridge",slug:"/eventbridge/02RocketMQEventBridgeOverview",permalink:"/docs/eventbridge/02RocketMQEventBridgeOverview",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/07-eventbridge/02RocketMQEventBridgeOverview.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"RocketMQ EventBridge Core Concept",permalink:"/docs/eventbridge/01RocketMQEventBridgeConcepts"},next:{title:"RocketMQ EventBridge Quick Start",permalink:"/docs/eventbridge/03RocketMQEventBridgeQuickStart"}},c={},d=[{value:"Message &amp; Event",id:"message--event",level:2},{value:"Four characteristics of an event",id:"four-characteristics-of-an-event",level:2},{value:"1. Happened",id:"1-happened",level:3},{value:"2. No expectation",id:"2-no-expectation",level:3},{value:"3. Naturally ordered and unique",id:"3-naturally-ordered-and-unique",level:3},{value:"4. Materialize",id:"4-materialize",level:3},{value:"RocketMQ EventBridge&#39;s typical application scenarios",id:"rocketmq-eventbridges-typical-application-scenarios",level:2},{value:"Scenario 1: Event Notification",id:"scenario-1-event-notification",level:3},{value:"Scenario 2: Inter-system integration",id:"scenario-2-inter-system-integration",level:3},{value:"How RocketMQ EventBridge works?",id:"how-rocketmq-eventbridge-works",level:2}],l={toc:d},u="wrapper";function g(e){let{components:t,...s}=e;return(0,r.yg)(u,(0,a.c)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"rocketmq-eventbridge-overview"},"RocketMQ EventBridge Overview"),(0,r.yg)("p",null,"RocketMQ EventBridge is dedicated to helping users build high-reliability, low-coupling, and high-performance event-driven architectures. In event-driven architecture, microservices do not need to actively subscribe to external messages, but can instead centralize all entries that trigger changes in the microservice system to the API, and only need to focus on the current microservice's own business domain model definition and design of the API, without having to adapt and parse external service messages through a lot of glue code. EventBridge is responsible for safely and reliably adapting and delivering external service-generated events to the API designed by the current microservice."),(0,r.yg)("p",null,"When do we use RocketMQ messages and when do we use EventBridge events? What is the meaning of events, and what is the difference with messages?"),(0,r.yg)("h2",{id:"message--event"},"Message & Event"),(0,r.yg)("p",null,"We have defined events as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"Events refer to things that have already happened, especially important things.\n")),(0,r.yg)("p",null,"The relationship between events and messages is as follows\uff1a"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"image",src:n(54597).c,width:"914",height:"347"})),(0,r.yg)("p",null,"Messages include Command messages and Event messages. Command messages are operation commands sent by external systems to this system (as shown in the left part of the figure); Event messages are events that occur after the system receives a Command operation request and internal changes (as shown in the right part of the figure);"),(0,r.yg)("h2",{id:"four-characteristics-of-an-event"},"Four characteristics of an event"),(0,r.yg)("h3",{id:"1-happened"},"1. Happened"),(0,r.yg)("p",null,'Events are always "already happened." "Already happened" also means they are immutable. This feature is very important, when we process events and analyze events, it means that we can absolutely trust these events, as long as we receive the events, they must be true behaviors of the system.'),(0,r.yg)("p",null,"Command represents an operation request, whether it truly happens or not cannot be known. For example\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"* Turning on the kitchen lights\n* Someone pressed the doorbell\n* Account A received 100,000.\n")),(0,r.yg)("p",null,"An event is a clear occurrence that has already happened, such as"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"* The kitchen light being turned on\n* Someone pressing the doorbell\n* Account A receiving 100,000\n")),(0,r.yg)("h3",{id:"2-no-expectation"},"2. No expectation"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"An event is an objective description of a change in the state or attribute value of a thing, but it does not make any expectations about how to handle the event itself. In contrast, both Command and Query have expectations, they hope the system will make changes or return results, but the Event is just an objective description of a change in the system.\n")),(0,r.yg)("p",null,"For example: the traffic signal, from green to yellow, just describes an objective fact, and there is no objective expectation in itself. In different countries and regions, different expectations are given to this event. For example, in Japan, yellow is equivalent to red, while in Russia, running a yellow light is tolerated."),(0,r.yg)("p",null,"Compared to Command messages\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Events: are a bit like "market economy", goods are produced and placed in the large window of the shopping mall, consumers buy them back if they feel good, if no one buys them, the goods may expire and be wasted.'),(0,r.yg)("li",{parentName:"ul"},'Command message: is a bit like "planned economy", production is based on demand, designated distribution objects, and there is little waste.')),(0,r.yg)("h3",{id:"3-naturally-ordered-and-unique"},"3. Naturally ordered and unique"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"The same entity cannot have both A and B occur at the same time, there must be a temporal relationship; if so, these two events must belong to different event types.\n")),(0,r.yg)("p",null,"For example: for the same traffic light, it can't turn green and red at the same time, it can only turn into one state at a given moment. If we see two events with the same content, then it must have occurred twice and one happened before the other. This is valuable for processing data consistency and system behavior analysis (such as ABA scenarios): we not only see the final result of the system, but also the intermediate process that led to that result."),(0,r.yg)("h3",{id:"4-materialize"},"4. Materialize"),(0,r.yg)("p",null,'Events try to record the "crime scene" as completely as possible, because events do not know how consumers will use them, so they will be as detailed as possible. Including:'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"When did the event occur?\nWho generated it?\nWhat type of event is it?\nWhat is the content of the event? What is the structure of the content?\n... ...\n")),(0,r.yg)("p",null,'Compared to common messages we see, as the upstream and downstream are generally determined, often in order to improve performance and transmission efficiency, messages will be as concise as possible, as long as it meets the consumer\'s needs specified by the "planned economy".'),(0,r.yg)("h2",{id:"rocketmq-eventbridges-typical-application-scenarios"},"RocketMQ EventBridge's typical application scenarios"),(0,r.yg)("h3",{id:"scenario-1-event-notification"},"Scenario 1: Event Notification"),(0,r.yg)("p",null,"In microservices, we often encounter situations where messages produced in one microservice need to be notified to other consumers. Here we compare three ways:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"A: Strong dependency method")),(0,r.yg)("p",null,"The producer actively calls the consumer's microservice and adapts the consumer's API. This design is undoubtedly very bad, the producer is strongly dependent on the consumer, deeply coupled. If a call to a consumer has an exception and no effective isolation is done, it is very likely to cause the entire microservice to hang. It is very poor when new consumers come in."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"B: Semi-decoupling method")),(0,r.yg)("p",null,"The producer sends the message to the message service, and the consumer subscribes to the message service to get the message and converts the message into the data format required by its own business domain model. This method achieved decoupling on the call chain, greatly reducing system risks, but for consumers, they still need to understand and parse the producer's business semantics and convert the message into the format needed for their own business domain. Under this method, when the consumer needs to subscribe to data from multiple producers, a large amount of glue code is needed to adapt to each message produced by the producer. In addition, when the upstream producer's message format changes, there is also a risk and operational cost."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"C: Complete decoupling method")),(0,r.yg)("p",null,"Under this method, consumers do not need to introduce SDK to subscribe to Broker, they only need to design API according to their own business domain model, and the message service will filter and convert upstream"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"image",src:n(96844).c,width:"1832",height:"790"})),(0,r.yg)("h3",{id:"scenario-2-inter-system-integration"},"Scenario 2: Inter-system integration"),(0,r.yg)("p",null,"Scenario 1 mainly focuses on the event communication between microservices within a single product. Scenario 2 mainly focuses on event communication between multiple products. In an enterprise, we often use multiple products, and many of these products may not be developed by ourselves, but are purchased as external SaaS services. In this case, it is difficult to make events flow between different external SaaS products, because these external SaaS products are not developed by ourselves and it is not easy to modify their code. The event center capability provided by EventBridge can help collect events generated by various products and organize and manage them well, just like the goods in a department store window, carefully arranged and equipped with instructions, for consumers to choose from, and also providing home delivery service."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"image",src:n(30340).c,width:"1696",height:"876"})),(0,r.yg)("h2",{id:"how-rocketmq-eventbridge-works"},"How RocketMQ EventBridge works?"),(0,r.yg)("p",null,"In order to address the problems mentioned in the above two scenarios, EventBridge approaches from five aspects:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. Determine event standards:")),(0,r.yg)("p",null," Because events are not for oneself, but for everyone. It has no clear consumer, and all are potential consumers. Therefore, we need to standardize the definition of events, so that everyone can understand, and be easy to understand. Currently, CloudEvent under CNCF has gradually become a widely recognized factual standard, so we choose CloudEvent as our EventBridge event standard."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. Establish event center:")," "),(0,r.yg)("p",null,"The event center contains all the events registered by various systems. This is like the market economy department store we mentioned above, which has a variety of events classified and arranged, and everyone can come in to see which events may be needed, and then buy them back."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3. Define event format:")),(0,r.yg)("p",null," Event format is used to describe the specific contents of events. This is equivalent to a sales contract in a market economy. The event format sent by the producer must be determined and cannot always change; the format in which the consumer receives events must also be determined, otherwise the entire market will be in chaos."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},'4. Subscription "rules":')," "),(0,r.yg)("p",null,"We need to give consumers the ability to deliver events to the target end, and filter and transform events before delivery so that it can adapt to the format of the target end API receiving parameters. We call this process creating a subscription rule."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"5. Event Bus:"),"\nFinally, we also need a place to store events, that is the event bus in the middle of the diagram."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"image",src:n(91976).c,width:"1838",height:"824"})))}g.isMDXComponent=!0},30340:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/EventCenter-850d3b5bbc18655758b155d3e610a73d.png"},91976:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/HowEventBridgeWork-f7ce646f4bfc0d5f26b9261673009ce9.png"},54597:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/MessageWithEvent-e09f120787a45a119bdff9104d391a25.png"},96844:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/ThreeStages-840b209d165587c9fe2e3e5d6b942ead.png"}}]);