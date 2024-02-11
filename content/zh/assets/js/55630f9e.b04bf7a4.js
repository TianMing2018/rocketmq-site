"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[1484],{95788:(e,t,a)=>{a.d(t,{Iu:()=>s,yg:()=>h});var r=a(11504);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,p=function(e,t){if(null==e)return{};var a,r,p={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var m=r.createContext({}),o=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(m.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,p=e.mdxType,n=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),i=o(a),g=p,h=i["".concat(m,".").concat(g)]||i[g]||u[g]||n;return a?r.createElement(h,l(l({ref:t},s),{},{components:a})):r.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=a.length,l=new Array(n);l[0]=g;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[i]="string"==typeof e?e:p,l[1]=c;for(var o=2;o<n;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4380:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var r=a(45072),p=(a(11504),a(95788));const n={},l="C++ \u5ba2\u6237\u7aef",c={unversionedId:"sdk/03cplusplus",id:"version-5.0/sdk/03cplusplus",title:"C++ \u5ba2\u6237\u7aef",description:"\u7248\u672c\u8bf4\u660e",source:"@site/versioned_docs/version-5.0/13-sdk/03cplusplus.md",sourceDirName:"13-sdk",slug:"/sdk/03cplusplus",permalink:"/zh/docs/sdk/03cplusplus",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/13-sdk/03cplusplus.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Java \u5ba2\u6237\u7aef",permalink:"/zh/docs/sdk/02java"},next:{title:"C# \u5ba2\u6237\u7aef",permalink:"/zh/docs/sdk/04csharp"}},m={},o=[{value:"\u7248\u672c\u8bf4\u660e",id:"\u7248\u672c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],s={toc:o},i="wrapper";function u(e){let{components:t,...a}=e;return(0,p.yg)(i,(0,r.c)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,p.yg)("h1",{id:"c-\u5ba2\u6237\u7aef"},"C++ \u5ba2\u6237\u7aef"),(0,p.yg)("h2",{id:"\u7248\u672c\u8bf4\u660e"},"\u7248\u672c\u8bf4\u660e"),(0,p.yg)("p",null,"\u672c\u7ae0\u8282\u4ecb\u7ecd\u4f7f\u7528 Apache RocketMQ 5.0 gRPC \u534f\u8bae C++ SDK \u6536\u53d1\u6d88\u606f\u3002"),(0,p.yg)("admonition",{type:"info"},(0,p.yg)("ul",{parentName:"admonition"},(0,p.yg)("li",{parentName:"ul"},"\u672c\u793a\u4f8b\u4ee3\u7801\u57fa\u4e8egRPC \u534f\u8bae SDK \u6784\u5efa\uff0c\u56e0\u6b64\u9700\u8981\u670d\u52a1\u7aef\u81f3\u5c11\u5347\u7ea7\u52305.0\u7248\u672c\uff0c\u5e76\u542f\u7528 gRPC Proxy \u624d\u53ef\u517c\u5bb9\u3002\u5173\u4e8eProxy\u7684\u90e8\u7f72\u53c2\u8003",(0,p.yg)("a",{parentName:"li",href:"/zh/docs/quickStart/01quickstart"},"\u5feb\u901f\u6307\u5357"),"\u3002"),(0,p.yg)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Remoting \u534f\u8bae SDK\uff0c\u5efa\u8bae\u53c2\u8003\u4e4b\u524d4.x \u7248\u672c\u7684\u793a\u4f8b\u4ee3\u7801\u5373\u53ef\u8fd0\u884c.\u5982\u4f55\u8bc6\u522b\u60a8\u4f7f\u7528\u7684 SDK \u7c7b\u578b\uff0c\u53c2\u8003",(0,p.yg)("a",{parentName:"li",href:"/zh/docs/sdk/01overview"},"\u6982\u89c8"),"\u3002"))),(0,p.yg)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,p.yg)("p",null,"\u4e0b\u9762\u7ed9\u51fa Apache RocketMQ gRPC \u534f\u8bae C++ SDK\u7684\u6d88\u606f\u6536\u53d1\u793a\u4f8b\u4ee3\u7801\u94fe\u63a5\uff0c\u5b8c\u6574\u4ee3\u7801\u5de5\u7a0b\u548c\u8fd0\u884c\u73af\u5883\uff0c\u53c2\u7167",(0,p.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-clients"},"rocketmq-clients")," \u914d\u7f6e\u8fd0\u884c\u3002"),(0,p.yg)("table",null,(0,p.yg)("thead",{parentName:"table"},(0,p.yg)("tr",{parentName:"thead"},(0,p.yg)("th",{parentName:"tr",align:null},(0,p.yg)("strong",{parentName:"th"},"\u6d88\u606f\u7c7b\u578b")),(0,p.yg)("th",{parentName:"tr",align:null},(0,p.yg)("strong",{parentName:"th"},"\u53d1\u9001\u6d88\u606f\u793a\u4f8b")),(0,p.yg)("th",{parentName:"tr",align:null},(0,p.yg)("strong",{parentName:"th"},"PushConsumer\u6d88\u8d39\u6d88\u606f\u793a\u4f8b")),(0,p.yg)("th",{parentName:"tr",align:null},(0,p.yg)("strong",{parentName:"th"},"SimpleConsumer\u6d88\u8d39\u6d88\u606f\u793a\u4f8b")))),(0,p.yg)("tbody",{parentName:"table"},(0,p.yg)("tr",{parentName:"tbody"},(0,p.yg)("td",{parentName:"tr",align:null},(0,p.yg)("a",{parentName:"td",href:"/zh/docs/featureBehavior/01normalmessage"},"\u666e\u901a\u6d88\u606f")),(0,p.yg)("td",{parentName:"tr",align:null},"\u540c\u6b65\u53d1\u9001\uff1a",(0,p.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/cpp/examples/ExampleProducer.cpp"},"ExampleProducer.cpp"),"  ",(0,p.yg)("br",null),"\u5f02\u6b65\u53d1\u9001\uff1a",(0,p.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/cpp/examples/ExampleProducerWithAsync.cpp"},"ExampleProducerWithAsync.cpp")),(0,p.yg)("td",{parentName:"tr",align:null},(0,p.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/cpp/examples/ExamplePushConsumer.cpp"},"ExamplePushConsumer.cpp")),(0,p.yg)("td",{parentName:"tr",align:null},(0,p.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/cpp/examples/ExampleSimpleConsumer.cpp"},"ExampleSimpleConsumer.cpp"))),(0,p.yg)("tr",{parentName:"tbody"},(0,p.yg)("td",{parentName:"tr",align:null},(0,p.yg)("a",{parentName:"td",href:"/zh/docs/featureBehavior/03fifomessage"},"\u987a\u5e8f\u6d88\u606f")),(0,p.yg)("td",{parentName:"tr",align:null},(0,p.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/cpp/examples/ExampleProducerWithFifoMessage.cpp"},"ExampleProducerWithFifoMessage.cpp")),(0,p.yg)("td",{parentName:"tr",align:null},(0,p.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/cpp/examples/ExamplePushConsumer.cpp"},"ExamplePushConsumer.cpp")),(0,p.yg)("td",{parentName:"tr",align:null},(0,p.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/cpp/examples/ExampleSimpleConsumer.cpp"},"ExampleSimpleConsumer.cpp"))),(0,p.yg)("tr",{parentName:"tbody"},(0,p.yg)("td",{parentName:"tr",align:null},(0,p.yg)("a",{parentName:"td",href:"/zh/docs/featureBehavior/02delaymessage"},"\u5b9a\u65f6/\u5ef6\u65f6\u6d88\u606f")),(0,p.yg)("td",{parentName:"tr",align:null},(0,p.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/cpp/examples/ExampleProducerWithTimedMessage.cpp"},"ExampleProducerWithTimedMessage.cpp")),(0,p.yg)("td",{parentName:"tr",align:null},(0,p.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/cpp/examples/ExamplePushConsumer.cpp"},"ExamplePushConsumer.cpp")),(0,p.yg)("td",{parentName:"tr",align:null},(0,p.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/cpp/examples/ExampleSimpleConsumer.cpp"},"ExampleSimpleConsumer.cpp"))),(0,p.yg)("tr",{parentName:"tbody"},(0,p.yg)("td",{parentName:"tr",align:null},(0,p.yg)("a",{parentName:"td",href:"/zh/docs/featureBehavior/04transactionmessage"},"\u4e8b\u52a1\u6d88\u606f")),(0,p.yg)("td",{parentName:"tr",align:null},(0,p.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/cpp/examples/ExampleProducerWithTransactionalMessage.cpp"},"ExampleProducerWithTransactionalMessage.cpp")),(0,p.yg)("td",{parentName:"tr",align:null},(0,p.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/cpp/examples/ExamplePushConsumer.cpp"},"ExamplePushConsumer.cpp")),(0,p.yg)("td",{parentName:"tr",align:null},(0,p.yg)("a",{parentName:"td",href:"https://github.com/apache/rocketmq-clients/blob/master/cpp/examples/ExampleSimpleConsumer.cpp"},"ExampleSimpleConsumer.cpp"))))))}u.isMDXComponent=!0}}]);