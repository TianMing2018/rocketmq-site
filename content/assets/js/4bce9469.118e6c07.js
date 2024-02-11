"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9972],{95788:(e,a,t)=>{t.d(a,{Iu:()=>g,yg:()=>d});var s=t(11504);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,s,n=function(e,a){if(null==e)return{};var t,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=s.createContext({}),m=function(e){var a=s.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},g=function(e){var a=m(e.components);return s.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},c=s.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=m(t),c=n,d=p["".concat(l,".").concat(c)]||p[c]||u[c]||r;return t?s.createElement(d,i(i({ref:a},g),{},{components:t})):s.createElement(d,i({ref:a},g))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var m=2;m<r;m++)i[m]=t[m];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}c.displayName="MDXCreateElement"},18924:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var s=t(45072),n=(t(11504),t(95788));const r={},i="Message",o={unversionedId:"domainModel/04message",id:"version-5.0/domainModel/04message",title:"Message",description:"This section describes the definition, model relationship, internal attributes, and behavior constraints of messages in Apache RocketMQ. This topic also provides usage notes for messages.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/03-domainModel/04message.md",sourceDirName:"03-domainModel",slug:"/domainModel/04message",permalink:"/docs/domainModel/04message",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/03-domainModel/04message.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Message Queue",permalink:"/docs/domainModel/03messagequeue"},next:{title:"Producer",permalink:"/docs/domainModel/04producer"}},l={},m=[{value:"Definition",id:"definition",level:2},{value:"Model relationship",id:"model-relationship",level:2},{value:"Internal attributes",id:"internal-attributes",level:2},{value:"Behavior constraints",id:"behavior-constraints",level:2},{value:"Usage notes",id:"usage-notes",level:2}],g={toc:m},p="wrapper";function u(e){let{components:a,...r}=e;return(0,n.yg)(p,(0,s.c)({},g,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"message"},"Message"),(0,n.yg)("p",null,"This section describes the definition, model relationship, internal attributes, and behavior constraints of messages in Apache RocketMQ. This topic also provides usage notes for messages."),(0,n.yg)("h2",{id:"definition"},"Definition"),(0,n.yg)("p",null,"A message is the smallest unit of data transmission in Apache RocketMQ. A producer encapsulates the load and extended attributes of business data into messages and sends the messages to a Apache RocketMQ broker. Then, the broker delivers the messages to the consumer based on the relevant semantics."),(0,n.yg)("p",null,"The characteristics of the message model in Apache RocketMQ are:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Immutability"),": A message is an event that is generated. After the message is generated, the content of the message does not change. Even if the message passes through a transmission channel, the content of the message remains the same. The messages that consumers obtain are read-only messages.")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Persistence"),": By default, Apache RocketMQ persists messages. The received messages are stored in the storage file of the Apache RocketMQ broker to ensure that the messages can be traced and restored if system failures occur.")),(0,n.yg)("h2",{id:"model-relationship"},"Model relationship"),(0,n.yg)("p",null,"The following figure shows the position of messages in the domain model of Apache RocketMQ.",(0,n.yg)("img",{alt:"\u6d88\u606f",src:t(58600).c,width:"2358",height:"920"})),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Messages are initialized by producers and are sent to the Apache RocketMQ broker.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Messages are stored in queues in the order in which the messages are received on the Apache RocketMQ broker.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Consumers obtain and consume messages from the Apache RocketMQ broker based on the specified subscriptions."))),(0,n.yg)("h2",{id:"internal-attributes"},"Internal attributes"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"System retention attributes")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Topic name")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Definition: the name of the topic to which a message belongs. The topic name is globally unique in a cluster. For more information, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/domainModel/02topic"},"Topic"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Values: obtained from the SDK of the client."))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Message type")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Definition: the type of a message.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Values: obtained from the SDK of the client. Apache RocketMQ supports the following message types:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Normal: ",(0,n.yg)("a",{parentName:"p",href:"/docs/featureBehavior/01normalmessage"},"Normal messages"),". A normal message does not require special semantics and is not correlated with other normal messages.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"FIFO: ",(0,n.yg)("a",{parentName:"p",href:"/docs/featureBehavior/03fifomessage"},"Fifo messages"),". Apache RocketMQ uses a message group to determine the order of a specified set of messages. The messages are delivered in the order in which they are sent.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Delay: ",(0,n.yg)("a",{parentName:"p",href:"/docs/featureBehavior/02delaymessage"},"Delayed messages"),". You can specify a delay to make messages available to consumers only after the delay has elapsed, instead of delivering messages immediately when they are produced.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Transaction: ",(0,n.yg)("a",{parentName:"p",href:"/docs/featureBehavior/04transactionmessage"},"Transaction messages"),". Apache RocketMQ supports distributed transaction messages and ensures transaction consistency of database updates and message calls."))))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Message queue")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Definition: the queue to which a message belongs. For more information, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/domainModel/03messagequeue"},"Message queues"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Values: specified and populated by the broker."))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Message offset")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Definition: the location where the current message is stored in the queue. For more information, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/featureBehavior/09consumerprogress"},"Working mechanism"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Values: specified and populated by the broker. Valid values: 0 to Long.Max."))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Message ID")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Definition: the unique identifier of a message. The ID of each message is globally unique in the cluster.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Values: automatically generated by the producer client. A message ID is a string of 32 characters that consists of digits and uppercase letters."))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"(Optional) Message keys")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Definition: the list of index keys for messages. You can configure different keys to distinguish between messages and quickly find messages.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Values: defined by the producer client."))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"(Optional) Message tag")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Definition: the tag that is used to filter messages. Consumers can filter messages by tags and receive only messages that contain specified tags.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Values: defined by the producer client.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Constraint: Only one tag can be specified for each message."))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"(Optional) Scheduled time")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Definition: the millisecond-level timestamp that is used when a message triggers delayed delivery in a scheduled time scenario. For more information, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/featureBehavior/02delaymessage"},"Delayed messages"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Values: defined by the message producer.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Constraint: The maximum duration is 40 days."))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Message sending time")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Definition: the local millisecond-level timestamp of the producer client when the message is sent.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Values: populated by the producer client.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Note: The client time may be different from the broker time. In this case, the message sending time is based on the client time."))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Message store timestamp")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Definition: the local millisecond-level timestamp of the Apache RocketMQ broker when the message is stored."),(0,n.yg)("p",{parentName:"li"},"For delay messages and transaction messages, the message retention time is the broker time that is displayed for the consumer when the message takes effect.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Values: populated by the broker.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Note: The client time may be different from the broker time. In this case, the message retention time is based on the broker time."))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Retry times")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Definition: the number of times that the Apache RocketMQ broker redelivers a message after the message fails to be consumed. After each retry, the maximum number of retries is increased by one. For more information, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/featureBehavior/10consumerretrypolicy"},"Consumption retry"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Values: labeled by the broker. The first time that a message is consumed, the number of retries is zero. The first time that a message fails to be consumed, the number of retries is one."))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Custom attributes for messages")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Custom attributes")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Definition: the extended information that can be specified by the producer.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Values: specified by the producer based on key-value pairs from a string."))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Message load")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Message load")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Definition: the actual message data of the service message.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Values: serialized by the producer and transmitted in binary bytes.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Constraints: see ",(0,n.yg)("a",{parentName:"p",href:"/docs/introduction/03limits"},"Parameter limits"),"."))),(0,n.yg)("h2",{id:"behavior-constraints"},"Behavior constraints"),(0,n.yg)("p",null,"The size of a message cannot exceed the upper limit. If the size of a message exceeds the corresponding upper limit, the message fails to be sent."),(0,n.yg)("p",null,"The following describes the default limits for messages:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"max size of message: 4 MB")),(0,n.yg)("h2",{id:"usage-notes"},"Usage notes"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Overloaded transmission is not recommended for a single message.")),(0,n.yg)("p",null,"Apache RocketMQ is a messaging middleware that transmits data for business events. If the size of a message is large, the network transmission layer may be overloaded. This affects retries upon errors and throttling. We recommend that you limit the data size of a single message event."),(0,n.yg)("p",null,"If an overloaded transmission is required in the production environment, we recommend that you split the message based on a fixed size or use the file storage method."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Immutability of messages")),(0,n.yg)("p",null,"Messages cannot be modified in Apache RocketMQ broker versions 5.x and the messages that consumers obtain are read-only messages. No strong constraints related to immutability are imposed on versions 3.x and 4.x. We recommend that you re-initialize messages if you want to transmit messages."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Correct example:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"Message m = Consumer.receive();\nMessage m2= MessageBuilder.buildFrom(m);\nProducer.send(m2);\n")))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Incorrect example\uff1a"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-java"},"Message m = Consumer.receive();\nm.update()\uff1b\nProducer.send(m);\n")))))}u.isMDXComponent=!0},58600:(e,a,t)=>{t.d(a,{c:()=>s});const s=t.p+"assets/images/archiforqueue-dd6788b33bf2fc96b4a1dab83a1b0d71.png"}}]);