"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7952],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>m});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),p=a,m=d["".concat(c,".").concat(p)]||d[p]||g[p]||s;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},87768:(e,n,t)=>{t.d(n,{c:()=>o});var r=t(11504),a=t(14971);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.c)(s.tabItem,o),hidden:t},n)}},61268:(e,n,t)=>{t.d(n,{c:()=>T});var r=t(45072),a=t(11504),s=t(14971),o=t(53943),i=t(55592),c=t(10632),l=t(27128),u=t(21148);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function g(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,l.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.Uz)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._M)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=g(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,l]=m({queryString:t,groupId:r}),[d,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.IN)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),y=(()=>{const e=c??d;return p({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),l(e),h(e)}),[l,h,s]),tabValues:s}}var y=t(93664);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:i,selectValue:c,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.MV)(),g=e=>{const n=e.currentTarget,t=u.indexOf(n),r=l[t].value;r!==i&&(d(n),c(r))},p=e=>{let n=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.c)("tabs",{"tabs--block":t},n)},l.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.c)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>u.push(e),onKeyDown:p,onClick:g},o,{className:(0,s.c)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function w(e){const n=h(e);return a.createElement("div",{className:(0,s.c)("tabs-container",f.tabList)},a.createElement(b,(0,r.c)({},e,n)),a.createElement(v,(0,r.c)({},e,n)))}function T(e){const n=(0,y.c)();return a.createElement(w,(0,r.c)({key:String(n)},e))}},71828:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(45072),a=(t(11504),t(95788)),s=t(61268),o=t(87768);const i={},c="Simple Message Sending",l={unversionedId:"producer/02message1",id:"producer/02message1",title:"Simple Message Sending",description:"1.Creating Topic in Cluster",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/02-producer/02message1.md",sourceDirName:"02-producer",slug:"/producer/02message1",permalink:"/docs/4.x/producer/02message1",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/02-producer/02message1.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Core Concept",permalink:"/docs/4.x/producer/01concept1"},next:{title:"Ordered Message Sending",permalink:"/docs/4.x/producer/03message2"}},u={},d=[{value:"1.Creating Topic in Cluster",id:"1creating-topic-in-cluster",level:2},{value:"2.Adding Client-Side Dependency",id:"2adding-client-side-dependency",level:2},{value:"3.Message Sending",id:"3message-sending",level:2},{value:"3.1 Synchronous Sending",id:"31-synchronous-sending",level:3},{value:"3.2 Asynchronous Sending",id:"32-asynchronous-sending",level:3},{value:"3.3 One-Way Sending",id:"33-one-way-sending",level:3}],g={toc:d},p="wrapper";function m(e){let{components:n,...i}=e;return(0,a.yg)(p,(0,r.c)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"simple-message-sending"},"Simple Message Sending"),(0,a.yg)("h2",{id:"1creating-topic-in-cluster"},"1.Creating Topic in Cluster"),(0,a.yg)("p",null,"RocketMQ cluster is enabled by default with ",(0,a.yg)("strong",{parentName:"p"},"autoCreateTopicEnable")," configuration, which will automatically create Topics for the sent messages. If autoCreateTopicEnable is not enabled, you can also use the RocketMQ Admin tool to create the target Topic."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"$ sh bin/mqadmin updateTopic -c DefaultCluster -t TopicTest -n 127.0.0.1:9876\ncreate topic to 127.0.0.1:10911 success.\nTopicConfig [topicName=TopicTest, readQueueNums=8, writeQueueNums=8, perm=RW-, topicFilterType=SINGLE_TAG, topicSysFlag=0, order=false, attributes=null]\n")),(0,a.yg)("p",null,"After executing the command above, 8 queues are created on the Broker machine with the Topic named TopicTest."),(0,a.yg)("h2",{id:"2adding-client-side-dependency"},"2.Adding Client-Side Dependency"),(0,a.yg)("p",null,"Firstly, add RocketMQ client-side dependency to JAVA application."),(0,a.yg)(s.c,{mdxType:"Tabs"},(0,a.yg)(o.c,{value:"Maven",label:"Maven",default:!0,mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"<dependency>\n  <groupId>org.apache.rocketmq</groupId>\n  <artifactId>rocketmq-client</artifactId>\n  <version>4.9.4</version>\n</dependency>\n"))),(0,a.yg)(o.c,{value:"Gradle",label:"Gradle",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"compile 'org.apache.rocketmq:rocketmq-client:4.9.4'\n")))),(0,a.yg)("h2",{id:"3message-sending"},"3.Message Sending"),(0,a.yg)("p",null,"Apache RocketMQ sends messages in three ways: ",(0,a.yg)("strong",{parentName:"p"},"synchronous, asynchronous, and one-way"),". The first two message types are reliable since the response will be returned from the server regardless of whether their messages are successfully sent or not."),(0,a.yg)("h3",{id:"31-synchronous-sending"},"3.1 Synchronous Sending"),(0,a.yg)("p",null,"Synchronous Sending is a communication method in which the message sender sends a message and will send the next message only after receiving a synchronous response from the server. Reliable synchronous transmission is widely used in various scenarios, such as important notification messages, short message notifications, etc."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"\u540c\u6b65\u53d1\u9001",src:t(32392).c,width:"900",height:"939"})),(0,a.yg)("p",null,"The entire code for synchronous sending is as follows: "),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Create a Producer"),". Create a DefaultMQProducer in advance. The Producer should contain the name of the Producer group, which is a collection of Producer, they would send the same type of messages with identical logic."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Set the address of NameServer"),'. Apache RocketMQ is able to set the address of the NameServer (described in the client configuration) in many ways. The following example is set by calling the producer\'s setNamesrvAddr() method in the code, separated by a semicolon if there is more than one NameServer, such as "127.0.0.2:9876;127.0.0.3:9876".'),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Build the message"),". Set the topic, tag, body, and so on. The tag can be understood as a label to categorize the message, and RocketMQ can filter the tag on the Consumer side."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Call the send() method to send the message"),". Ultimately, the send() method will return a SendResult. The SendResut contains the actual send status including SEND_OK (send success), FLUSH_DISK_TIMEOUT (disk flush timeout), FLUSH_SLAVE_TIMEOUT (sync to slave timeout), SLAVE_NOT_AVAILABLE (slave can not be used), and an exception is thrown if it fails.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'public class SyncProducer {\n  public static void main(String[] args) throws Exception {\n    // Initialize a producer and set the Producer group name\n    DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name"); //\uff081\uff09\n    // Set the address of NameServer\n    producer.setNamesrvAddr("localhost:9876");  //\uff082\uff09\n    // Start Producer\n    producer.start();\n    for (int i = 0; i < 100; i++) {\n      // Create a message and set the topic, tag, body and so on. The tag can be understood as a label to categorize the message, and RocketMQ can filter the tag on the consumer side.\n      Message msg = new Message("TopicTest" /* Topic */,\n        "TagA" /* Tag */,\n        ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET) /* Message body */\n        );   //\uff083\uff09\n      // Use the producer to send and wait for the result of sending synchronously\n      SendResult sendResult = producer.send(msg);   //\uff084\uff09\n      System.out.printf("%s%n", sendResult);\n    }\n    // Close the producer once it is no longer in use\n    producer.shutdown();\n  }\n}\n')),(0,a.yg)("h3",{id:"32-asynchronous-sending"},"3.2 Asynchronous Sending"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"\u5f02\u6b65\u53d1\u9001",src:t(29584).c,width:"900",height:"939"})),(0,a.yg)("p",null,"Asynchronous sending is a sending method in which the sender sends messages continuously without waiting for the server to return a response.\nAsynchronous sending requires the implementation of the ",(0,a.yg)("strong",{parentName:"p"},"Asynchronous Send Callback Interface")," (SendCallback)."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Asynchronous sending requires the implementation of the ",(0,a.yg)("strong",{parentName:"p"},"Asynchronous SendCallback Interface"),".")),(0,a.yg)("p",null,"After sending a message, the sender does not need to wait for a response from the server to send the next message. The sender receives the response from the server through the callback interface and handles the result. Asynchronous sending is generally used in time-consuming and response time sensitive business scenarios. For example, the video upload notifies the start of transcoding service, and notifies the push of transcoding result after transcoding is completed."),(0,a.yg)("p",null,"The following is the sample code."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'public class AsyncProducer {\n  public static void main(String[] args) throws Exception {\n    // Initialize a producer and set the Producer group name\n    DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name");\n    // Set the address of NameServer\n    producer.setNamesrvAddr("localhost:9876");\n    // Start Producer\n    producer.start();\n    producer.setRetryTimesWhenSendAsyncFailed(0);\n    int messageCount = 100;\n    final CountDownLatch countDownLatch = new CountDownLatch(messageCount);\n    for (int i = 0; i < messageCount; i++) {\n      try {\n          final int index = i;\n          // Create a message and set the topic, tag, body and so on. The tag can be understood as a label to categorize the message, and RocketMQ can filter the tag on the consumer side.\n          Message msg = new Message("TopicTest",\n            "TagA",\n            "Hello world".getBytes(RemotingHelper.DEFAULT_CHARSET));\n            // Send a message asynchronously, the result is returned to the client by callback\n          producer.send(msg, new SendCallback() {\n            @Override\n            public void onSuccess(SendResult sendResult) {\n              System.out.printf("%-10d OK %s %n", index,\n                sendResult.getMsgId());\n              countDownLatch.countDown();\n            }\n            @Override\n            public void onException(Throwable e) {\n              System.out.printf("%-10d Exception %s %n", index, e);\n              e.printStackTrace();\n              countDownLatch.countDown();\n            }\n          });\n        } catch (Exception e) {\n            e.printStackTrace();\n            countDownLatch.countDown();\n        }\n    }\n    //If reliable transmission is required for asynchronous sending, the logic must not be terminated until a clear result is returned from the callback interface. Otherwise, closing the Producer immediately may result in some messages not being successfully transmitted.\n    countDownLatch.await(5, TimeUnit.SECONDS);\n    // Close the producer once it is no longer in use\n    producer.shutdown();\n  }\n}\n')),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The only difference between asynchronous and synchronous sending methods is the parameters for calling the sending interface. Asynchronous sending does not wait for the return of send() method, instead, it will carry the SendCallback implementation. The SendCallback interface has two methods (onSuccess and onException), indicating that the message is sent successfully or failed.")),(0,a.yg)("h3",{id:"33-one-way-sending"},"3.3 One-Way Sending"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"\u5355\u9879\u6a21\u5f0f\u53d1\u9001",src:t(88148).c,width:"900",height:"641"})),(0,a.yg)("p",null,"The sender is only responsible for sending the message and does not wait for the server to return a response and no callback function is triggered, in other words, it only sends the request and does not wait for the answer. The process of sending messages in this way is very short, usually in the microsecond level. It is suitable for some scenarios where the time consumption is very short, but the reliability requirement is not high, such as log collection."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'public class OnewayProducer {\n  public static void main(String[] args) throws Exception{\n    // Initialize a producer and set the Producer group name\n    DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name");\n    // Set the address of NameServer\n    producer.setNamesrvAddr("localhost:9876");\n    // Start Producer\n    producer.start();\n    for (int i = 0; i < 100; i++) {\n      // Create a message and set the topic, tag, body and so on. The tag can be understood as a label to categorize the message, and RocketMQ can filter the tag on the consumer side.\n      Message msg = new Message("TopicTest" /* Topic */,\n        "TagA" /* Tag */,\n        ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET) /* Message body */\n      );\n      // Since there is no request-answer processing when sending messages in the oneway method, if there is a message sending failure, data will be lost because there is no retry. If data cannot be lost, it is recommended to use the reliable synchronous or reliable asynchronous sending method.\n      producer.sendOneway(msg);\n    }\n     // Close the producer once it is no longer in use\n     producer.shutdown();\n  }\n}\n')),(0,a.yg)("p",null,"One-way mode will call the sendOneway() method, which does not wait or process the returned result."))}m.isMDXComponent=!0},88148:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/Oneway\u53d1\u9001-bc1379bd3b8f382c23ff7abac1e0ed95.png"},32392:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/\u540c\u6b65\u53d1\u9001-6a8c78dae434afe4fbd970a2836f740c.png"},29584:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/\u5f02\u6b65\u53d1\u9001-c05e8e1111d99d8b8b4626e419e9f8e5.png"}}]);