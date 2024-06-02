"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[5392],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(96540),o=t(20053);const a={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,i),hidden:t},n)}},11470:(e,n,t)=>{t.d(n,{A:()=>q});var r=t(58168),o=t(96540),a=t(20053),i=t(23104),s=t(56347),c=t(57485),l=t(31682),u=t(89466);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}function m(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=m(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,l]=g({queryString:t,groupId:r}),[p,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.Dv)(t);return[r,(0,o.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),f=(()=>{const e=c??p;return d({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),h(e)}),[l,h,a]),tabValues:a}}var f=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:s,selectValue:c,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),m=e=>{const n=e.currentTarget,t=u.indexOf(n),r=l[t].value;r!==s&&(p(n),c(r))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n)},l.map((e=>{let{value:n,label:t,attributes:i}=e;return o.createElement("li",(0,r.A)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,a.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":s===n})}),t??n)})))}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function k(e){const n=h(e);return o.createElement("div",{className:(0,a.A)("tabs-container",y.tabList)},o.createElement(v,(0,r.A)({},e,n)),o.createElement(b,(0,r.A)({},e,n)))}function q(e){const n=(0,f.A)();return o.createElement(k,(0,r.A)({key:String(n)},e))}},27564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=t(58168),o=(t(96540),t(15680)),a=t(11470),i=t(19365);const s={},c="Docker-compose Deployment of RocketMQ",l={unversionedId:"quickStart/03quickstartWithDockercompose",id:"version-5.0/quickStart/03quickstartWithDockercompose",title:"Docker-compose Deployment of RocketMQ",description:"This section introduces how to quickly deploy a single-node, single-replica RocketMQ service using Docker-compose and complete simple message sending and receiving.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/02-quickStart/03quickstartWithDockercompose.md",sourceDirName:"02-quickStart",slug:"/quickStart/03quickstartWithDockercompose",permalink:"/docs/quickStart/03quickstartWithDockercompose",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/02-quickStart/03quickstartWithDockercompose.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Docker \u90e8\u7f72 RocketMQ",permalink:"/docs/quickStart/02quickstartWithDocker"},next:{title:"Domain Model",permalink:"/docs/domainModel/01main"}},u={},p=[{value:"1. Write docker-compose",id:"1-write-docker-compose",level:2},{value:"2.Start RocketMQ cluster",id:"2start-rocketmq-cluster",level:2},{value:"3.Send and Receive Messages with SDK",id:"3send-and-receive-messages-with-sdk",level:2},{value:"4.Stop all services",id:"4stop-all-services",level:2}],m={toc:p},d="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"docker-compose-deployment-of-rocketmq"},"Docker-compose Deployment of RocketMQ"),(0,o.yg)("p",null,"This section introduces how to quickly deploy a single-node, single-replica RocketMQ service using Docker-compose and complete simple message sending and receiving."),(0,o.yg)("admonition",{title:"System Requirements",type:"tip"},(0,o.yg)("ol",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ol"},"64-bit operating system"),(0,o.yg)("li",{parentName:"ol"},"64-bit JDK 1.8+"))),(0,o.yg)("h2",{id:"1-write-docker-compose"},"1. Write docker-compose"),(0,o.yg)("p",null,"To quickly start and run the RocketMQ cluster, you can use the following template to create a docker-compose.yml file by modifying or adding configurations in the environment section."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"version: '3.8'\nservices:\n  namesrv:\n    image: apache/rocketmq:5.2.0\n    container_name: rmqnamesrv\n    ports:\n      - 9876:9876\n    networks:\n      - rocketmq\n    command: sh mqnamesrv\n  broker:\n    image: apache/rocketmq:5.2.0\n    container_name: rmqbroker\n    ports:\n      - 10909:10909\n      - 10911:10911\n      - 10912:10912\n    environment:\n      - NAMESRV_ADDR=rmqnamesrv:9876\n    depends_on:\n      - namesrv\n    networks:\n      - rocketmq\n    command: sh mqbroker\n  proxy:\n    image: apache/rocketmq:5.2.0\n    container_name: rmqproxy\n    networks:\n      - rocketmq\n    depends_on:\n      - broker\n      - namesrv\n    ports:\n      - 8080:8080\n      - 8081:8081\n    restart: on-failure\n    environment:\n      - NAMESRV_ADDR=rmqnamesrv:9876\n    command: sh mqproxy\nnetworks:\n  rocketmq:\n    driver: bridge\n")),(0,o.yg)("h2",{id:"2start-rocketmq-cluster"},"2.Start RocketMQ cluster"),(0,o.yg)("p",null,"tart all defined services according to the docker-compose.yml file."),(0,o.yg)(a.A,{mdxType:"Tabs"},(0,o.yg)(i.A,{value:"Linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-code"},"docker-compose up -d\n"))),(0,o.yg)(i.A,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-code"},"docker-compose -p rockermq_project up -d\n")))),(0,o.yg)("h2",{id:"3send-and-receive-messages-with-sdk"},"3.Send and Receive Messages with SDK"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"After testing with tools, we can try to send and receive messages using the SDK. Here is an example of using the Java SDK for message sending and receiving. More details can be found at ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-clients"},"rocketmq-clients"),".")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Add the following dependency to the pom.xml file to introduce the Java dependency library, replacing ",(0,o.yg)("inlineCode",{parentName:"p"},"rocketmq-client-java-version")," with ",(0,o.yg)("a",{href:"https://search.maven.org/search?q=g:org.apache.rocketmq%20AND%20a:rocketmq-client-java"},"the latest version"),"."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.rocketmq</groupId>\n    <artifactId>rocketmq-client-java</artifactId>\n    <version>${rocketmq-client-java-version}</version>\n</dependency> \n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Enter the broker container and create a Topic using mqadmin."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker exec -it rmqbroker bash\n$ sh mqadmin updatetopic -t TestTopic -c DefaultCluster\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"In the created Java project, create and run a program to send a normal message. The sample code is as follows:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.rocketmq.client.apis.ClientConfiguration;\nimport org.apache.rocketmq.client.apis.ClientConfigurationBuilder;\nimport org.apache.rocketmq.client.apis.ClientException;\nimport org.apache.rocketmq.client.apis.ClientServiceProvider;\nimport org.apache.rocketmq.client.apis.message.Message;\nimport org.apache.rocketmq.client.apis.producer.Producer;\nimport org.apache.rocketmq.client.apis.producer.SendReceipt;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class ProducerExample {\n    private static final Logger logger = LoggerFactory.getLogger(ProducerExample.class);\n\n    public static void main(String[] args) throws ClientException {\n        // Endpoint address, set to the Proxy address and port list, usually xxx:8080;xxx:8081\n        String endpoint = "localhost:8081";\n        // The target Topic name for message sending, which needs to be created in advance.\n        String topic = "TestTopic";\n        ClientServiceProvider provider = ClientServiceProvider.loadService();\n        ClientConfigurationBuilder builder = ClientConfiguration.newBuilder().setEndpoints(endpoint);\n        ClientConfiguration configuration = builder.build();\n        // When initializing Producer, communication configuration and pre-bound Topic need to be set.\n        Producer producer = provider.newProducerBuilder()\n            .setTopics(topic)\n            .setClientConfiguration(configuration)\n            .build();\n        // Sending a normal message.\n        Message message = provider.newMessageBuilder()\n            .setTopic(topic)\n            // Set the message index key, which can be used to accurately find a specific message.\n            .setKeys("messageKey")\n            // Set the message Tag, used by the consumer to filter messages by specified Tag.\n            .setTag("messageTag")\n            // Message body.\n            .setBody("messageBody".getBytes())\n            .build();\n        try {\n            // Send the message, paying attention to the sending result and catching exceptions.\n            SendReceipt sendReceipt = producer.send(message);\n            logger.info("Send message successfully, messageId={}", sendReceipt.getMessageId());\n        } catch (ClientException e) {\n            logger.error("Failed to send message", e);\n        }\n        // producer.close();\n    }\n}\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"In the created Java project, create and run a program to subscribe to normal messages. Apache RocketMQ supports both ",(0,o.yg)("a",{parentName:"p",href:"https://rocketmq.apache.org/zh/docs/featureBehavior/06consumertype"},"SimpleConsumer")," and ",(0,o.yg)("a",{parentName:"p",href:"https://rocketmq.apache.org/zh/docs/featureBehavior/06consumertype"},"PushConsumer")," types of consumers. You can choose either method to subscribe to messages."))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'import java.io.IOException;\nimport java.util.Collections;\nimport org.apache.rocketmq.client.apis.ClientConfiguration;\nimport org.apache.rocketmq.client.apis.ClientException;\nimport org.apache.rocketmq.client.apis.ClientServiceProvider;\nimport org.apache.rocketmq.client.apis.consumer.ConsumeResult;\nimport org.apache.rocketmq.client.apis.consumer.FilterExpression;\nimport org.apache.rocketmq.client.apis.consumer.FilterExpressionType;\nimport org.apache.rocketmq.client.apis.consumer.PushConsumer;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class PushConsumerExample {\n    private static final Logger logger = LoggerFactory.getLogger(PushConsumerExample.class);\n\n    private PushConsumerExample() {\n    }\n\n    public static void main(String[] args) throws ClientException, IOException, InterruptedException {\n        final ClientServiceProvider provider = ClientServiceProvider.loadService();\n        // Endpoint address, set to the Proxy address and port list, usually xxx:8080;xxx:8081\n        String endpoints = "localhost:8081";\n        ClientConfiguration clientConfiguration = ClientConfiguration.newBuilder()\n            .setEndpoints(endpoints)\n            .build();\n        // Subscription message filtering rule, indicating subscription to all Tag messages.\n        String tag = "*";\n        FilterExpression filterExpression = new FilterExpression(tag, FilterExpressionType.TAG);\n        // Specify the consumer group the consumer belongs to, Group needs to be created in advance.\n        String consumerGroup = "YourConsumerGroup";\n        // Specify which target Topic to subscribe to, Topic needs to be created in advance.\n        String topic = "TestTopic";\n        // Initialize PushConsumer\n        PushConsumer pushConsumer = provider.newPushConsumerBuilder()\n            .setClientConfiguration(clientConfiguration)\n            // Set the consumer group.\n            .setConsumerGroup(consumerGroup)\n            // Set pre-bound subscription relationship.\n            .setSubscriptionExpressions(Collections.singletonMap(topic, filterExpression))\n            // Set the message listener.\n            .setMessageListener(messageView -> {\n                // Handle messages and return the consumption result.\n                logger.info("Consume message successfully, messageId={}", messageView.getMessageId());\n                return ConsumeResult.SUCCESS;\n            })\n            .build();\n        Thread.sleep(Long.MAX_VALUE);\n        // If PushConsumer is no longer needed, this instance can be closed.\n        // pushConsumer.close();\n    }\n}\n\n')),(0,o.yg)("h2",{id:"4stop-all-services"},"4.Stop all services"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"docker-compose down\n")))}g.isMDXComponent=!0}}]);