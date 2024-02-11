"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3898],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>g});var s=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return n?s.createElement(g,o(o({ref:t},c),{},{components:n})):s.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=n(45072),a=(n(11504),n(95788));const r={},o="Basic Best Practices",i={unversionedId:"bestPractice/01bestpractice",id:"version-5.0/bestPractice/01bestpractice",title:"Basic Best Practices",description:"Producer",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/06-bestPractice/01bestpractice.md",sourceDirName:"06-bestPractice",slug:"/bestPractice/01bestpractice",permalink:"/docs/bestPractice/01bestpractice",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/06-bestPractice/01bestpractice.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Go Client SDK",permalink:"/docs/sdk/05go"},next:{title:"DLedger",permalink:"/docs/bestPractice/02dledger"}},l={},u=[{value:"Producer",id:"producer",level:2},{value:"Precautions for sending messages",id:"precautions-for-sending-messages",level:3},{value:"The use of Tags",id:"the-use-of-tags",level:4},{value:"The use of Keys",id:"the-use-of-keys",level:4},{value:"Printing Logs",id:"printing-logs",level:4},{value:"Handling method for message sending failure",id:"handling-method-for-message-sending-failure",level:3},{value:"Consumer",id:"consumer",level:2},{value:"The consumption process is idempotent",id:"the-consumption-process-is-idempotent",level:3},{value:"A slow process of consumption",id:"a-slow-process-of-consumption",level:3},{value:"Increase consumption parallelism",id:"increase-consumption-parallelism",level:3},{value:"Consumption in bulk",id:"consumption-in-bulk",level:3},{value:"Reset site to skip non-important messages",id:"reset-site-to-skip-non-important-messages",level:3},{value:"Optimize the per-message consumption process",id:"optimize-the-per-message-consumption-process",level:4},{value:"Consumption print log",id:"consumption-print-log",level:3},{value:"Broker",id:"broker",level:2},{value:"Broker Role",id:"broker-role",level:3},{value:"FlushDiskType",id:"flushdisktype",level:3},{value:"Broker Configuration",id:"broker-configuration",level:3}],c={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,s.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"basic-best-practices"},"Basic Best Practices"),(0,a.yg)("h2",{id:"producer"},"Producer"),(0,a.yg)("h3",{id:"precautions-for-sending-messages"},"Precautions for sending messages"),(0,a.yg)("h4",{id:"the-use-of-tags"},"The use of Tags"),(0,a.yg)("p",null,'An application can be identified as a Topic, and message subtypes can be identified as tags. tags can be set freely by the application. Only when the producer sets tags when sending messages, the consumer can use tags to filter messages through the broker when subscribing  messages.\n5.x SDK can call messageBuilder.setTag("messageTag") and historical versions can call message.setTags("messageTag"). '),(0,a.yg)("h4",{id:"the-use-of-keys"},"The use of Keys"),(0,a.yg)("p",null,"At the service level, it is recommended that each message be mapped to a unique service identifier and set to the keys field to locate message loss problems in the future. The server creates an index (hash index) for each message, and the application can query the content of the message by topic and key, and by whom the message was consumed. Since it is a hash index, make sure that the key is as unique as possible to avoid potential hash collisions. Common setup policies use discrete unique identifiers such as order Id, user Id, and request Id."),(0,a.yg)("h4",{id:"printing-logs"},"Printing Logs"),(0,a.yg)("p",null,"If the message is sent successfully or fails, you need to print message logs for troubleshooting services. Send Indicates that the message is sent successfully as long as no exception is thrown."),(0,a.yg)("h3",{id:"handling-method-for-message-sending-failure"},"Handling method for message sending failure"),(0,a.yg)("p",null,"The send method of the Producer itself supports internal retry,5.x Retry logic reference ",(0,a.yg)("a",{parentName:"p",href:"/docs/featureBehavior/05sendretrypolicy"},"Send retry policy"),"\uff1a"),(0,a.yg)("p",null,"The above strategies also guarantee the success of message sending to a certain extent. If the business requires that the message be sent without loss, you still need to cover for possible exceptions, such as when the send synchronization method is called and fails to send, then try to store the message to the db and retry periodically by the background thread to ensure that the message reaches the Broker."),(0,a.yg)("p",null,"The reason why the above DB retry method is not integrated into the MQ client, but requires the application to complete by itself, is mainly based on the following considerations: First, the MQ client is designed as a stateless mode, convenient for arbitrary horizontal expansion, and the consumption of machine resources is only cpu, memory, network. Secondly, if the MQ client is internally integrated with a KV storage module, the data can only be reliable if the synchronous disk fall, and the synchronous disk fall itself has a large performance overhead, so it usually uses asynchronous disk fall, and because the application closure process is not controlled by MQ operation and maintenance personnel, it may often happen kill -9 such violent closure. Resulting in data not timely drop disk and loss. Third, the machine where the Producer resides has low reliability and is generally virtual machines, which are not suitable for storing important data. In summary, it is recommended that the retry process be controlled by the application."),(0,a.yg)("h2",{id:"consumer"},"Consumer"),(0,a.yg)("h3",{id:"the-consumption-process-is-idempotent"},"The consumption process is idempotent"),(0,a.yg)("p",null,"RocketMQ cannot avoid message duplications (Exactly Once), so if the business is very sensitive to consumption duplications, it is important to de-process at the business level.\nThis can be done with the help of relational databases. You first need to determine a unique key for the message, either an msgId or a unique identifying field in the message content, such as an order id.\nDetermine if the unique key exists in the relational database before consumption. If not, insert and consume, otherwise skip. (The actual process should consider the atomicity problem, determine whether there is a primary key conflict, then the insertion failed, directly skip)"),(0,a.yg)("p",null,"MsgId must be a globally unique identifier, but in practice, there may be cases where the same message has two different msgIds (consumer active retransmission, duplication due to client reinvestment mechanism, etc.), which necessitates repeated consumption of business fields."),(0,a.yg)("h3",{id:"a-slow-process-of-consumption"},"A slow process of consumption"),(0,a.yg)("h3",{id:"increase-consumption-parallelism"},"Increase consumption parallelism"),(0,a.yg)("p",null,"The vast majority of message consumption is IO intensive, that is, it may be operating on a database or calling an RPC, and the rate of consumption for this type of consumption depends on the throughput of the back-end database or external system.\nBy increasing consumption parallelism, the total consumption throughput can be improved, but when the parallelism increases to a certain degree, it will decrease.\nTherefore, the application must set a reasonable degree of parallelism. There are several ways to modify consumption parallelism:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"In the same ConsumerGroup, we increase the number of Consumer instances to improve parallelism (note that Consumer instances exceeding the subscription queue are invalid). You can add a machine, or start multiple processes on an existing machine."),(0,a.yg)("li",{parentName:"ul"},"Improve the individual Consumer's consumption parallel threads, 5.x PushConsumer SDK can PushConsumerBuilder.setConsumptionThreadCount() sets the number of threads, SimpleConsumer is free to increase concurrency from business threads, and the underlying thread is safe; The historical SDK PushConsumer can be implemented by modifying parameters consumeThreadMin and consumeThreadMax.")),(0,a.yg)("h3",{id:"consumption-in-bulk"},"Consumption in bulk"),(0,a.yg)("p",null,"If some business processes support bulk consumption, consumption throughput can be greatly improved. For example, the application of order deduction takes 1 s to process one order at a time, and it may only take 2 s to process 10 orders at a time, so the consumption throughput can be greatly improved. It is recommended to use SimpleConsumer from the 5.x SDK, set the batch size per interface call, and pull multiple messages at once."),(0,a.yg)("h3",{id:"reset-site-to-skip-non-important-messages"},"Reset site to skip non-important messages"),(0,a.yg)("p",null,"In case of message pile-up, if the consumption rate cannot keep up with the delivery rate, and if the business is not demanding enough data, you can choose to discard unimportant messages. You are advised to use the reset site function to directly adjust the consumption site to a specified time or location."),(0,a.yg)("h4",{id:"optimize-the-per-message-consumption-process"},"Optimize the per-message consumption process"),(0,a.yg)("p",null,"For example, the consumption process of a message is as follows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Query ","[data 1]"," from DB according to message"),(0,a.yg)("li",{parentName:"ul"},"Query ","[data 2]"," from DB according to message"),(0,a.yg)("li",{parentName:"ul"},"Complex business calculations"),(0,a.yg)("li",{parentName:"ul"},"Insert ","[data 3]"," into DB"),(0,a.yg)("li",{parentName:"ul"},"Insert ","[data 4]"," into DB")),(0,a.yg)("p",null,"There are four interactions with DB during the consumption of this message. If we calculate each interaction as 5ms, the total time is 20ms.\nAssuming that the service computation takes 5ms, the total time is 25ms. Therefore, if the four DB interactions can be optimized to two, the total time can be optimized to 15ms, which means that the overall performance is improved by 40%.\nTherefore, if the application is sensitive to delay, the DB can be deployed on SSD disks. Compared with SCSI disks, the RT of the former is much smaller."),(0,a.yg)("h3",{id:"consumption-print-log"},"Consumption print log"),(0,a.yg)("p",null,"If the number of messages is small, you are advised to print messages in the consumption entry method, which takes a long time to consume."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'   new MessageListener() {\n        @Override\n        public ConsumeResult consume(MessageView messageView) {\n            LOGGER.info("Consume message={}", messageView);\n            //Do your consume process\n            return ConsumeResult.SUCCESS;\n            }\n    }\n')),(0,a.yg)("p",null,"If you can print each message consuming time, it will be more convenient to troubleshoot online problems such as slow consumption."),(0,a.yg)("h2",{id:"broker"},"Broker"),(0,a.yg)("h3",{id:"broker-role"},"Broker Role"),(0,a.yg)("p",null,"Broker roles are classified into ASYNC_MASTER, SYNC_MASTER, and SLAVE.\nIf you have strict requirements on message reliability, deploy SYNC_MASTER plus SLAVE.\nIf message reliability is not required, deploy ASYNC_MASTER plus SLAVE.\nIf testing is only convenient, you can select ASYNC_MASTER only or SYNC_MASTER only deployment."),(0,a.yg)("h3",{id:"flushdisktype"},"FlushDiskType"),(0,a.yg)("p",null,"Compared with ASYNC_FLUSH, SYNC_FLUSH suffers from performance loss but is more reliable. Therefore, the trade-off must be made based on the actual service scenario."),(0,a.yg)("h3",{id:"broker-configuration"},"Broker Configuration"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"listenPort"),(0,a.yg)("td",{parentName:"tr",align:null},"10911"),(0,a.yg)("td",{parentName:"tr",align:null},"A listening port that accepts client connections")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"namesrvAddr"),(0,a.yg)("td",{parentName:"tr",align:null},"null"),(0,a.yg)("td",{parentName:"tr",align:null},"nameServer address")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"brokerIP1"),(0,a.yg)("td",{parentName:"tr",align:null},"The network InetAddress"),(0,a.yg)("td",{parentName:"tr",align:null},"The IP address on which the broker is currently listening")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"brokerIP2"),(0,a.yg)("td",{parentName:"tr",align:null},"same to brokerIP1"),(0,a.yg)("td",{parentName:"tr",align:null},"When a master/slave broker exists, if the brokerIP2 property is configured on the broker master node, the broker slave node will connect to the brokerIP2 configured on the master node for synchronization")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"brokerName"),(0,a.yg)("td",{parentName:"tr",align:null},"null"),(0,a.yg)("td",{parentName:"tr",align:null},"broker name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"brokerClusterName"),(0,a.yg)("td",{parentName:"tr",align:null},"DefaultCluster"),(0,a.yg)("td",{parentName:"tr",align:null},"The Cluser name to which this broker belongs")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"brokerId"),(0,a.yg)("td",{parentName:"tr",align:null},"0"),(0,a.yg)("td",{parentName:"tr",align:null},"broker id 0 indicates master, and other positive integers indicate slave")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"storePathCommitLog"),(0,a.yg)("td",{parentName:"tr",align:null},"$HOME/store/commitlog/"),(0,a.yg)("td",{parentName:"tr",align:null},"Path to store the commit log")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"storePathConsumerQueue"),(0,a.yg)("td",{parentName:"tr",align:null},"$HOME/store/consumequeue/"),(0,a.yg)("td",{parentName:"tr",align:null},"A path that consumes queue is stored")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"mapedFileSizeCommitLog"),(0,a.yg)("td",{parentName:"tr",align:null},"1024 ","*"," 1024 ","*"," 1024(1G)"),(0,a.yg)("td",{parentName:"tr",align:null},"commit log mapping file size")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"deleteWhen"),(0,a.yg)("td",{parentName:"tr",align:null},"04"),(0,a.yg)("td",{parentName:"tr",align:null},"At what time of day should I delete the commit log whose file retention time has exceeded")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"fileReservedTime"),(0,a.yg)("td",{parentName:"tr",align:null},"72"),(0,a.yg)("td",{parentName:"tr",align:null},"File retention time in hours")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"brokerRole"),(0,a.yg)("td",{parentName:"tr",align:null},"ASYNC_MASTER"),(0,a.yg)("td",{parentName:"tr",align:null},"SYNC_MASTER/ASYNC_MASTER/SLAVE")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"flushDiskType"),(0,a.yg)("td",{parentName:"tr",align:null},"ASYNC_FLUSH"),(0,a.yg)("td",{parentName:"tr",align:null},"SYNC_FLUSH/ASYNC_FLUSH The broker in SYNC_FLUSH mode guarantees to flush messages before receiving the acknowledged producer. ASYNC_FLUSH brokers use the flush mode to flush a group of messages for better performance.")))))}p.isMDXComponent=!0}}]);