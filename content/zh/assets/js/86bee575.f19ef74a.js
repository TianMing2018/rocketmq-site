"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9952],{95788:(e,t,n)=>{n.d(t,{Iu:()=>g,yg:()=>s});var r=n(11504);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=l,s=p["".concat(u,".").concat(d)]||p[d]||v[d]||i;return n?r.createElement(s,a(a({ref:t},g),{},{components:n})):r.createElement(s,a({ref:t},g))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(45072),l=(n(11504),n(95788));const i={},a="RocketMQ EventBridge \u6838\u5fc3\u6982\u5ff5",o={unversionedId:"eventbridge/01RocketMQEventBridgeConcepts",id:"version-5.0/eventbridge/01RocketMQEventBridgeConcepts",title:"RocketMQ EventBridge \u6838\u5fc3\u6982\u5ff5",description:"\u7406\u89e3EventBridge\u4e2d\u7684\u6838\u5fc3\u6982\u5ff5\uff0c\u80fd\u5e2e\u52a9\u6211\u4eec\u66f4\u597d\u7684\u5206\u6790\u548c\u4f7f\u7528EventBridge\u3002\u672c\u6587\u91cd\u70b9\u4ecb\u7ecd\u4e0bEventBridge\u4e2d\u5305\u542b\u7684\u672f\u8bed\uff1a",source:"@site/versioned_docs/version-5.0/07-eventbridge/01RocketMQEventBridgeConcepts.md",sourceDirName:"07-eventbridge",slug:"/eventbridge/01RocketMQEventBridgeConcepts",permalink:"/zh/docs/eventbridge/01RocketMQEventBridgeConcepts",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/07-eventbridge/01RocketMQEventBridgeConcepts.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",permalink:"/zh/docs/bestPractice/06FAQ"},next:{title:"RocketMQ EventBridge \u6982\u89c8",permalink:"/zh/docs/eventbridge/02RocketMQEventBridgeOverview"}},u={},c=[{value:"EventSource",id:"eventsource",level:2},{value:"EventBus",id:"eventbus",level:2},{value:"EventRule",id:"eventrule",level:2},{value:"FilterPattern",id:"filterpattern",level:2},{value:"Transform",id:"transform",level:2},{value:"EventTarget",id:"eventtarget",level:2}],g={toc:c},p="wrapper";function v(e){let{components:t,...i}=e;return(0,l.yg)(p,(0,r.c)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"rocketmq-eventbridge-\u6838\u5fc3\u6982\u5ff5"},"RocketMQ EventBridge \u6838\u5fc3\u6982\u5ff5"),(0,l.yg)("p",null,"\u7406\u89e3EventBridge\u4e2d\u7684\u6838\u5fc3\u6982\u5ff5\uff0c\u80fd\u5e2e\u52a9\u6211\u4eec\u66f4\u597d\u7684\u5206\u6790\u548c\u4f7f\u7528EventBridge\u3002\u672c\u6587\u91cd\u70b9\u4ecb\u7ecd\u4e0bEventBridge\u4e2d\u5305\u542b\u7684\u672f\u8bed\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"EventSource\uff1a\u4e8b\u4ef6\u6e90\u3002\u7528\u4e8e\u7ba1\u7406\u53d1\u9001\u5230EventBridge\u7684\u4e8b\u4ef6\uff0c\u6240\u6709\u53d1\u9001\u5230EventBridge\u4e2d\u7684\u4e8b\u4ef6\u90fd\u5fc5\u987b\u6807\u6ce8\u4e8b\u4ef6\u6e90\u540d\u79f0\u4fe1\u606f\uff0c\u5bf9\u5e94CloudEvent\u4e8b\u4ef6\u4f53\u4e2d\u7684source\u5b57\u6bb5\u3002"),(0,l.yg)("li",{parentName:"ul"},"EventBus\uff1a\u4e8b\u4ef6\u603b\u7ebf\u3002\u7528\u4e8e\u5b58\u50a8\u53d1\u9001\u5230EventBridge\u7684\u4e8b\u4ef6\u3002"),(0,l.yg)("li",{parentName:"ul"},"EventRule\uff1a\u4e8b\u4ef6\u89c4\u5219\u3002\u5f53\u6d88\u8d39\u8005\u9700\u8981\u8ba2\u9605\u4e8b\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u89c4\u5219\u914d\u7f6e\u8fc7\u6ee4\u548c\u8f6c\u6362\u4fe1\u606f\uff0c\u5c06\u4e8b\u4ef6\u63a8\u9001\u5230\u6307\u5b9a\u7684\u76ee\u6807\u7aef\u3002"),(0,l.yg)("li",{parentName:"ul"},"FilterPattern\uff1a\u4e8b\u4ef6\u8fc7\u6ee4\u6a21\u5f0f\uff0c\u7528\u4e8e\u5728\u89c4\u5219\u4e2d\u914d\u7f6e\u8fc7\u6ee4\u51fa\u76ee\u6807\u7aef\u9700\u8981\u7684\u4e8b\u4ef6\u3002"),(0,l.yg)("li",{parentName:"ul"},"Transform\uff1a\u4e8b\u4ef6\u8f6c\u6362\uff0c\u5c06\u4e8b\u4ef6\u683c\u5f0f\u8f6c\u6362\u6210\u76ee\u6807\u7aef\u9700\u8981\u7684\u6570\u636e\u683c\u5f0f\u3002"),(0,l.yg)("li",{parentName:"ul"},"EventTarget\uff1a\u4e8b\u4ef6\u76ee\u6807\u7aef\uff0c\u5373\u6211\u4eec\u771f\u6b63\u7684\u4e8b\u4ef6\u6d88\u8d39\u8005\u3002")),(0,l.yg)("p",null,"\u4e0b\u9762\uff0c\u6211\u4eec\u5177\u4f53\u5c55\u5f00\uff1a"),(0,l.yg)("h2",{id:"eventsource"},"EventSource"),(0,l.yg)("p",null,"\u4e8b\u4ef6\u6e90\uff0c\u4ee3\u8868\u4e8b\u4ef6\u53d1\u751f\u7684\u6e90\u5934\uff0c\u7528\u6765\u63cf\u8ff0\u4e00\u7c7b\u4e8b\u4ef6\uff0c\u4e00\u822c\u4e0e\u5fae\u670d\u52a1\u7cfb\u7edf\u4e00\u4e00\u5bf9\u5e94\u3002\u6bd4\u5982\uff1a\u4ea4\u6613\u4e8b\u4ef6\u6e90\u3001\u8003\u52e4\u4e8b\u4ef6\u6e90\u7b49\u7b49\u3002\u4e8b\u4ef6\u6e90\uff0c\u662f\u5bf9\u4e8b\u4ef6\u4e00\u4e2a\u5927\u7684\u5206\u7c7b\uff0c\u4e00\u4e2a\u4e8b\u4ef6\u6e90\u4e0b\u9762\uff0c\u5f80\u5f80\u4f1a\u5305\u542b\u591a\u79cd\u4e8b\u4ef6\u7c7b\u578b(type)\uff0c\u6bd4\u5982\u4ea4\u6613\u4e8b\u4ef6\u6e90\u4e0b\u9762\uff0c\u53ef\u80fd\u5305\u542b\uff1a\u4e0b\u5355\u4e8b\u4ef6\u3001\u652f\u4ed8\u4e8b\u4ef6\u3001\u9000\u8d27\u4e8b\u4ef6\u7b49\u7b49\u3002"),(0,l.yg)("p",null,'\u53e6\u5916\uff0c\u9700\u8981\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u4e8b\u4ef6\u6e90\u5e76\u4e0d\u7528\u6765\u63cf\u8ff0\u53d1\u751f\u4e8b\u4ef6\u7684\u5b9e\u4f53\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\uff0c\u5728CloudEvent\u4e2d\uff0c\u6211\u4eec\u4e00\u822c\u9009\u7528subject\u6765\u8868\u793a\u4ea7\u751f\u8fd9\u4e2a\u4e8b\u4ef6\u7684\u5b9e\u4f53\u8d44\u6e90\u3002\u4e8b\u4ef6\u6e90\u6709\u70b9\u50cf\u5e02\u573a\u7ecf\u6d4e\u5927\u5356\u573a\u4e2d\u7684\u5927\u7c7b\u5206\u533a\uff0c\u4f8b\u5982\uff1a\u751f\u9c9c\u533a\u3001\u65e5\u5316\u65e5\u7528\u533a\u3001\u5bb6\u7528\u7535\u5668\u533a\u7b49\u7b49\u3002\u5728\u4e8b\u4ef6\u4e2d\u5fc3\u8fd9\u4e2a"\u5927\u5356\u573a"\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e8b\u4ef6\u6e90\u5feb\u901f\u7684\u627e\u5230\u6211\u4eec\u9700\u8981\u7684\u4e8b\u4ef6\u3002'),(0,l.yg)("h2",{id:"eventbus"},"EventBus"),(0,l.yg)("p",null,"\u4e8b\u4ef6\u603b\u7ebf\u662f\u5b58\u50a8\u4e8b\u4ef6\u7684\u5730\u65b9\uff0c\u5176\u4e0b\u53ef\u4ee5\u6709\u591a\u79cd\u5b9e\u73b0\uff0c\u5305\u62ecLocal\u3001RocketMQ\u3001Kafka\u7b49\u3002"),(0,l.yg)("p",null,"\u4e8b\u4ef6\u751f\u4ea7\u8005\u53d1\u9001\u4e8b\u4ef6\u7684\u65f6\u5019\uff0c\u5fc5\u987b\u6307\u5b9a\u4e8b\u4ef6\u603b\u7ebf\u3002\u4e8b\u4ef6\u603b\u7ebf\u662fEventBridge\u7684\u4e00\u7b49\u516c\u6c11\uff0c\u5176\u4ed6\u6240\u6709\u8d44\u6e90\u90fd\u56f4\u7ed5\u4e8b\u4ef6\u603b\u7ebf\u5f62\u6210\u903b\u8f91\u4e0a\u7684\u9694\u79bb\uff0c\u5373\uff1a\u4e8b\u4ef6\u6e90\u3001\u4e8b\u4ef6\u89c4\u5219\u5fc5\u987b\u90fd\u96b6\u5c5e\u4e8e\u67d0\u4e00\u4e2a\u4e8b\u4ef6\u603b\u7ebf\u4e0b\u3002\u4e0d\u540c\u4e8b\u4ef6\u603b\u7ebf\u4e0b\u7684\u4e8b\u4ef6\u6e90\u548c\u4e8b\u4ef6\u89c4\u5219\u53ef\u4ee5\u91cd\u540d\uff0c\u4f46\u662f\u540c\u4e00\u4e2a\u4e8b\u4ef6\u603b\u7ebf\u4e0b\u7684\u4e8b\u4ef6\u6e90\u548c\u89c4\u5219\u5fc5\u987b\u4e0d\u91cd\u540d\u3002"),(0,l.yg)("h2",{id:"eventrule"},"EventRule"),(0,l.yg)("p",null,"\u5f53\u6d88\u8d39\u8005\u9700\u8981\u8ba2\u9605\u4e8b\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e8b\u4ef6\u89c4\u5219\u914d\u7f6e\u8fc7\u6ee4\u548c\u8f6c\u6362\u4fe1\u606f\uff0c\u5c06\u4e8b\u4ef6\u63a8\u9001\u5230\u6307\u5b9a\u7684\u76ee\u6807\u7aef\u3002\u6240\u4ee5\uff0c\u4e8b\u4ef6\u89c4\u5219\u5305\u542b\u4e09\u90e8\u5206\uff1a\u4e8b\u4ef6\u8fc7\u6ee4+\u4e8b\u4ef6\u8f6c\u6362+\u4e8b\u4ef6\u76ee\u6807\u3002"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"img_1.png",src:n(88532).c,width:"572",height:"360"})),(0,l.yg)("h2",{id:"filterpattern"},"FilterPattern"),(0,l.yg)("p",null,"\u901a\u8fc7\u4e8b\u4ef6\u8fc7\u6ee4\u6a21\u5f0f\uff0c\u6211\u4eec\u53ef\u4ee5\u5bf9\u4e8b\u4ef6\u603b\u7ebf\u4e0a\u7684\u4e8b\u4ef6\u8fdb\u884c\u8fc7\u6ee4\uff0c\u53ea\u5c06\u76ee\u6807\u7aef\u9700\u8981\u7684\u4e8b\u4ef6\u63a8\u9001\u8fc7\u53bb\uff0c\u4ee5\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u5f00\u901a\uff0c\u540c\u65f6\u51cf\u8f7b\u6d88\u8d39\u8005\nTarget\u7aef\u7684\u538b\u529b\u3002\u76ee\u524dEventBridge\u652f\u6301\u7684\u4e8b\u4ef6\u8fc7\u6ee4\u80fd\u529b\u5305\u62ec\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u6307\u5b9a\u503c\u5339\u914d"),(0,l.yg)("li",{parentName:"ul"},"\u524d\u7f00\u5339\u914d"),(0,l.yg)("li",{parentName:"ul"},"\u540e\u7f00\u5339\u914d"),(0,l.yg)("li",{parentName:"ul"},"\u9664\u5916\u5339\u914d"),(0,l.yg)("li",{parentName:"ul"},"\u6570\u503c\u5339\u914d"),(0,l.yg)("li",{parentName:"ul"},"\u6570\u7ec4\u5339\u914d"),(0,l.yg)("li",{parentName:"ul"},"\u4ee5\u53ca\u590d\u6742\u7684\u7ec4\u5408\u903b\u8f91\u5339\u914d")),(0,l.yg)("p",null,"\uff08\u8be6\u7ec6\u4ecb\u7ecd\u5f85\u89c1\u5176\u4ed6\u6587\u7ae0\uff09"),(0,l.yg)("h2",{id:"transform"},"Transform"),(0,l.yg)("p",null,"\u751f\u4ea7\u8005\u7684\u4e8b\u4ef6\u53ef\u80fd\u4f1a\u540c\u65f6\u88ab\u591a\u4e2a\u6d88\u8d39\u8005\u8ba2\u9605\uff0c\u4f46\u4e0d\u540c\u6d88\u8d39\u8005\u9700\u8981\u7684\u6570\u636e\u683c\u5f0f\u5f80\u5f80\u4e0d\u540c\u3002\u8fd9\u4e2a\u65f6\u5019\uff0c\u9700\u8981\u6211\u4eec\u5c06\u751f\u4ea7\u8005\u7684\u4e8b\u4ef6\uff0c\u8f6c\u6362\u6210\u6d88\u8d39\u8005\nTarget\u7aef\u9700\u8981\u7684\u4e8b\u4ef6\u683c\u5f0f\u3002\u76ee\u524dEventBridge\u652f\u6301\u7684\u4e8b\u4ef6\u8f6c\u6362\u80fd\u529b\u5305\u62ec\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5b8c\u6574\u4e8b\u4ef6\uff1a\u4e0d\u505a\u8f6c\u6362\uff0c\u76f4\u63a5\u6295\u9012\u539f\u751f CloudEvents\uff1b"),(0,l.yg)("li",{parentName:"ul"},"\u90e8\u5206\u4e8b\u4ef6\uff1a\u901a\u8fc7 JsonPath \u8bed\u6cd5\u4ece CloudEvents \u4e2d\u63d0\u53d6\u51fa\u9700\u8981\u6295\u9012\u5230\u4e8b\u4ef6\u76ee\u6807\u7684\u5185\u5bb9\uff1b"),(0,l.yg)("li",{parentName:"ul"},"\u5e38\u91cf\uff1a\u4e8b\u4ef6\u53ea\u8d77\u5230\u89e6\u53d1\u5668\u7684\u4f5c\u7528\uff0c\u6295\u9012\u5185\u5bb9\u4e3a\u5e38\u91cf\uff1b"),(0,l.yg)("li",{parentName:"ul"},"\u6a21\u677f\u8f6c\u6362\u5668\uff1a\u901a\u8fc7\u5b9a\u4e49\u6a21\u677f\uff0c\u7075\u6d3b\u5730\u6e32\u67d3\u6295\u9012\u51fa\u53bb\u7684\u4e8b\u4ef6\u683c\u5f0f\uff1b")),(0,l.yg)("p",null,"\uff08\u8be6\u7ec6\u4ecb\u7ecd\u5f85\u89c1\u5176\u4ed6\u6587\u7ae0\uff09"),(0,l.yg)("h2",{id:"eventtarget"},"EventTarget"),(0,l.yg)("p",null,"\u4e8b\u4ef6\u76ee\u6807\u7aef\uff0c\u4e5f\u5373\u6211\u4eec\u7684\u4e8b\u4ef6\u6d88\u8d39\u8005\u3002\u5728EventBridge\u67b6\u6784\u4e2d\uff0c\u6d88\u8d39\u8005\u53ea\u9700\u8981\u6309\u7167\u81ea\u5df1\u7684\u4e1a\u52a1\u9886\u57df\u6a21\u578b\u8bbe\u8ba1\uff0c\u63d0\u4f9b\u4e00\u4e2a\u516c\u5171\u7684API\uff08\u8fd9\u4e2aAPI\u65e2\u53ef\u7528\u6765\u63a5\u6536\u4e8b\u4ef6\uff0c\u540c\u65f6\u4e5f\u7528\u6765\u524d\u53f0\u7ba1\u63a7\u9762\u64cd\u4f5c\uff09\uff0cEventBridge\u5c31\u4f1a\u6309\u7167API\u5b9a\u4e49\u9700\u8981\u7684\u6570\u636e\u683c\u5f0f\uff0c\u5c06\u4e8b\u4ef6\u5b89\u5168\u3001\u53ef\u9760\u7684\u63a8\u9001\u7ed9\nTarget\u6d88\u8d39\u8005\u3002"))}v.isMDXComponent=!0},88532:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/EventRule-c822b08589be43f273884c8b21bcb7de.png"}}]);