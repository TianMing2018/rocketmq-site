"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7268],{95788:(e,a,n)=>{n.d(a,{Iu:()=>m,yg:()=>N});var t=n(11504);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function g(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),y=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):g(g({},a),e)),n},m=function(e){var a=y(e.components);return t.createElement(i.Provider,{value:a},e.children)},o="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},s=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),o=y(n),s=r,N=o["".concat(i,".").concat(s)]||o[s]||u[s]||l;return n?t.createElement(N,g(g({ref:a},m),{},{components:n})):t.createElement(N,g({ref:a},m))}));function N(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,g=new Array(l);g[0]=s;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[o]="string"==typeof e?e:r,g[1]=p;for(var y=2;y<l;y++)g[y]=n[y];return t.createElement.apply(null,g)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},29440:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>g,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>y});var t=n(45072),r=(n(11504),n(95788));const l={},g="\u6d88\u606f\u8fc7\u6ee4",p={unversionedId:"featureBehavior/07messagefilter",id:"version-5.0/featureBehavior/07messagefilter",title:"\u6d88\u606f\u8fc7\u6ee4",description:"\u6d88\u8d39\u8005\u8ba2\u9605\u4e86\u67d0\u4e2a\u4e3b\u9898\u540e\uff0cApache RocketMQ \u4f1a\u5c06\u8be5\u4e3b\u9898\u4e2d\u7684\u6240\u6709\u6d88\u606f\u6295\u9012\u7ed9\u6d88\u8d39\u8005\u3002\u82e5\u6d88\u8d39\u8005\u53ea\u9700\u8981\u5173\u6ce8\u90e8\u5206\u6d88\u606f\uff0c\u53ef\u901a\u8fc7\u8bbe\u7f6e\u8fc7\u6ee4\u6761\u4ef6\u5728 Apache RocketMQ \u670d\u52a1\u7aef\u8fdb\u884c\u8fc7\u6ee4\uff0c\u53ea\u83b7\u53d6\u5230\u9700\u8981\u5173\u6ce8\u7684\u6d88\u606f\u5b50\u96c6\uff0c\u907f\u514d\u63a5\u6536\u5230\u5927\u91cf\u65e0\u6548\u7684\u6d88\u606f\u3002\u672c\u6587\u4ecb\u7ecd\u6d88\u606f\u8fc7\u6ee4\u7684\u5b9a\u4e49\u3001\u539f\u7406\u3001\u5206\u7c7b\u53ca\u4e0d\u540c\u8fc7\u6ee4\u65b9\u5f0f\u7684\u4f7f\u7528\u65b9\u6cd5\u3001\u914d\u7f6e\u793a\u4f8b\u7b49\u3002",source:"@site/versioned_docs/version-5.0/04-featureBehavior/07messagefilter.md",sourceDirName:"04-featureBehavior",slug:"/featureBehavior/07messagefilter",permalink:"/zh/docs/featureBehavior/07messagefilter",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/04-featureBehavior/07messagefilter.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u6d88\u8d39\u8005\u5206\u7c7b",permalink:"/zh/docs/featureBehavior/06consumertype"},next:{title:"\u6d88\u8d39\u8005\u8d1f\u8f7d\u5747\u8861",permalink:"/zh/docs/featureBehavior/08consumerloadbalance"}},i={},y=[{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"\u529f\u80fd\u6982\u8ff0",id:"\u529f\u80fd\u6982\u8ff0",level:2},{value:"\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\u6027",id:"\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\u6027",level:2},{value:"Tag\u6807\u7b7e\u8fc7\u6ee4",id:"tag\u6807\u7b7e\u8fc7\u6ee4",level:2},{value:"SQL\u5c5e\u6027\u8fc7\u6ee4",id:"sql\u5c5e\u6027\u8fc7\u6ee4",level:2},{value:"\u4f7f\u7528\u5efa\u8bae",id:"\u4f7f\u7528\u5efa\u8bae",level:2}],m={toc:y},o="wrapper";function u(e){let{components:a,...l}=e;return(0,r.yg)(o,(0,t.c)({},m,l,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u6d88\u606f\u8fc7\u6ee4"},"\u6d88\u606f\u8fc7\u6ee4"),(0,r.yg)("p",null,"\u6d88\u8d39\u8005\u8ba2\u9605\u4e86\u67d0\u4e2a\u4e3b\u9898\u540e\uff0cApache RocketMQ \u4f1a\u5c06\u8be5\u4e3b\u9898\u4e2d\u7684\u6240\u6709\u6d88\u606f\u6295\u9012\u7ed9\u6d88\u8d39\u8005\u3002\u82e5\u6d88\u8d39\u8005\u53ea\u9700\u8981\u5173\u6ce8\u90e8\u5206\u6d88\u606f\uff0c\u53ef\u901a\u8fc7\u8bbe\u7f6e\u8fc7\u6ee4\u6761\u4ef6\u5728 Apache RocketMQ \u670d\u52a1\u7aef\u8fdb\u884c\u8fc7\u6ee4\uff0c\u53ea\u83b7\u53d6\u5230\u9700\u8981\u5173\u6ce8\u7684\u6d88\u606f\u5b50\u96c6\uff0c\u907f\u514d\u63a5\u6536\u5230\u5927\u91cf\u65e0\u6548\u7684\u6d88\u606f\u3002\u672c\u6587\u4ecb\u7ecd\u6d88\u606f\u8fc7\u6ee4\u7684\u5b9a\u4e49\u3001\u539f\u7406\u3001\u5206\u7c7b\u53ca\u4e0d\u540c\u8fc7\u6ee4\u65b9\u5f0f\u7684\u4f7f\u7528\u65b9\u6cd5\u3001\u914d\u7f6e\u793a\u4f8b\u7b49\u3002"),(0,r.yg)("h2",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,r.yg)("p",null,"Apache RocketMQ \u4f5c\u4e3a\u53d1\u5e03\u8ba2\u9605\u6a21\u578b\u7684\u6d88\u606f\u4e2d\u95f4\u4ef6\u5e7f\u6cdb\u5e94\u7528\u4e8e\u4e0a\u4e0b\u6e38\u4e1a\u52a1\u96c6\u6210\u573a\u666f\u3002\u5728\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u540c\u4e00\u4e2a\u4e3b\u9898\u4e0b\u7684\u6d88\u606f\u5f80\u5f80\u4f1a\u88ab\u591a\u4e2a\u4e0d\u540c\u7684\u4e0b\u6e38\u4e1a\u52a1\u65b9\u5904\u7406\uff0c\u5404\u4e0b\u6e38\u7684\u5904\u7406\u903b\u8f91\u4e0d\u540c\uff0c\u53ea\u5173\u6ce8\u81ea\u8eab\u903b\u8f91\u9700\u8981\u7684\u6d88\u606f\u5b50\u96c6\u3002"),(0,r.yg)("p",null,"\u4f7f\u7528 Apache RocketMQ \u7684\u6d88\u606f\u8fc7\u6ee4\u529f\u80fd\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6d88\u8d39\u8005\u66f4\u9ad8\u6548\u5730\u8fc7\u6ee4\u81ea\u5df1\u9700\u8981\u7684\u6d88\u606f\u96c6\u5408\uff0c\u907f\u514d\u5927\u91cf\u65e0\u6548\u6d88\u606f\u6295\u9012\u7ed9\u6d88\u8d39\u8005\uff0c\u964d\u4f4e\u4e0b\u6e38\u7cfb\u7edf\u5904\u7406\u538b\u529b\u3002"),(0,r.yg)("p",null,"Apache RocketMQ \u4e3b\u8981\u89e3\u51b3\u7684\u5355\u4e2a\u4e1a\u52a1\u57df\u5373\u540c\u4e00\u4e2a\u4e3b\u9898\u5185\u4e0d\u540c\u6d88\u606f\u5b50\u96c6\u7684\u8fc7\u6ee4\u95ee\u9898\uff0c\u4e00\u822c\u662f\u57fa\u4e8e\u540c\u4e00\u4e1a\u52a1\u4e0b\u66f4\u5177\u4f53\u7684\u5206\u7c7b\u8fdb\u884c\u8fc7\u6ee4\u5339\u914d\u3002\u5982\u679c\u662f\u9700\u8981\u5bf9\u4e0d\u540c\u4e1a\u52a1\u57df\u7684\u6d88\u606f\u8fdb\u884c\u62c6\u5206\uff0c\u5efa\u8bae\u4f7f\u7528\u4e0d\u540c\u4e3b\u9898\u5904\u7406\u4e0d\u540c\u4e1a\u52a1\u57df\u7684\u6d88\u606f\u3002"),(0,r.yg)("h2",{id:"\u529f\u80fd\u6982\u8ff0"},"\u529f\u80fd\u6982\u8ff0"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6d88\u606f\u8fc7\u6ee4\u5b9a\u4e49")),(0,r.yg)("p",null,"\u8fc7\u6ee4\u7684\u542b\u4e49\u6307\u7684\u662f\u5c06\u7b26\u5408\u6761\u4ef6\u7684\u6d88\u606f\u6295\u9012\u7ed9\u6d88\u8d39\u8005\uff0c\u800c\u4e0d\u662f\u5c06\u5339\u914d\u5230\u7684\u6d88\u606f\u8fc7\u6ee4\u6389\u3002"),(0,r.yg)("p",null,"Apache RocketMQ \u7684\u6d88\u606f\u8fc7\u6ee4\u529f\u80fd\u901a\u8fc7\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u5bf9\u6d88\u606f\u7684\u5c5e\u6027\u3001\u6807\u7b7e\u8fdb\u884c\u5b9a\u4e49\uff0c\u5e76\u5728 Apache RocketMQ \u670d\u52a1\u7aef\u6839\u636e\u8fc7\u6ee4\u6761\u4ef6\u8fdb\u884c\u7b5b\u9009\u5339\u914d\uff0c\u5c06\u7b26\u5408\u6761\u4ef6\u7684\u6d88\u606f\u6295\u9012\u7ed9\u6d88\u8d39\u8005\u8fdb\u884c\u6d88\u8d39\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6d88\u606f\u8fc7\u6ee4\u539f\u7406"),"\n",(0,r.yg)("img",{alt:"\u6d88\u606f\u8fc7\u6ee4",src:n(87420).c,width:"1377",height:"687"})),(0,r.yg)("p",null,"\u6d88\u606f\u8fc7\u6ee4\u4e3b\u8981\u901a\u8fc7\u4ee5\u4e0b\u51e0\u4e2a\u5173\u952e\u6d41\u7a0b\u5b9e\u73b0\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u751f\u4ea7\u8005\uff1a\u751f\u4ea7\u8005\u5728\u521d\u59cb\u5316\u6d88\u606f\u65f6\u9884\u5148\u4e3a\u6d88\u606f\u8bbe\u7f6e\u4e00\u4e9b\u5c5e\u6027\u548c\u6807\u7b7e\uff0c\u7528\u4e8e\u540e\u7eed\u6d88\u8d39\u65f6\u6307\u5b9a\u8fc7\u6ee4\u76ee\u6807\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6d88\u8d39\u8005\uff1a\u6d88\u8d39\u8005\u5728\u521d\u59cb\u5316\u53ca\u540e\u7eed\u6d88\u8d39\u6d41\u7a0b\u4e2d\u901a\u8fc7\u8c03\u7528\u8ba2\u9605\u5173\u7cfb\u6ce8\u518c\u63a5\u53e3\uff0c\u5411\u670d\u52a1\u7aef\u4e0a\u62a5\u9700\u8981\u8ba2\u9605\u6307\u5b9a\u4e3b\u9898\u7684\u54ea\u4e9b\u6d88\u606f\uff0c\u5373\u8fc7\u6ee4\u6761\u4ef6\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u670d\u52a1\u7aef\uff1a\u6d88\u8d39\u8005\u83b7\u53d6\u6d88\u606f\u65f6\u4f1a\u89e6\u53d1\u670d\u52a1\u7aef\u7684\u52a8\u6001\u8fc7\u6ee4\u8ba1\u7b97\uff0cApache RocketMQ \u670d\u52a1\u7aef\u6839\u636e\u6d88\u8d39\u8005\u4e0a\u62a5\u7684\u8fc7\u6ee4\u6761\u4ef6\u7684\u8868\u8fbe\u5f0f\u8fdb\u884c\u5339\u914d\uff0c\u5e76\u5c06\u7b26\u5408\u6761\u4ef6\u7684\u6d88\u606f\u6295\u9012\u7ed9\u6d88\u8d39\u8005\u3002"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6d88\u606f\u8fc7\u6ee4\u5206\u7c7b")),(0,r.yg)("p",null,"Apache RocketMQ \u652f\u6301Tag\u6807\u7b7e\u8fc7\u6ee4\u548cSQL\u5c5e\u6027\u8fc7\u6ee4\uff0c\u8fd9\u4e24\u79cd\u8fc7\u6ee4\u65b9\u5f0f\u5bf9\u6bd4\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u5bf9\u6bd4\u9879"),(0,r.yg)("th",{parentName:"tr",align:null},"Tag\u6807\u7b7e\u8fc7\u6ee4"),(0,r.yg)("th",{parentName:"tr",align:null},"SQL\u5c5e\u6027\u8fc7\u6ee4"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u8fc7\u6ee4\u76ee\u6807"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6d88\u606f\u7684Tag\u6807\u7b7e\u3002"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6d88\u606f\u7684\u5c5e\u6027\uff0c\u5305\u62ec\u7528\u6237\u81ea\u5b9a\u4e49\u5c5e\u6027\u4ee5\u53ca\u7cfb\u7edf\u5c5e\u6027\uff08Tag\u662f\u4e00\u79cd\u7cfb\u7edf\u5c5e\u6027\uff09\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u8fc7\u6ee4\u80fd\u529b"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7cbe\u51c6\u5339\u914d\u3002"),(0,r.yg)("td",{parentName:"tr",align:null},"SQL\u8bed\u6cd5\u5339\u914d\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u9002\u7528\u573a\u666f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7b80\u5355\u8fc7\u6ee4\u573a\u666f\u3001\u8ba1\u7b97\u903b\u8f91\u7b80\u5355\u8f7b\u91cf\u3002"),(0,r.yg)("td",{parentName:"tr",align:null},"\u590d\u6742\u8fc7\u6ee4\u573a\u666f\u3001\u8ba1\u7b97\u903b\u8f91\u8f83\u590d\u6742\u3002")))),(0,r.yg)("p",null,"\u5177\u4f53\u7684\u4f7f\u7528\u65b9\u5f0f\u53ca\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1\u4e0b\u6587\u7684Tag\u6807\u7b7e\u8fc7\u6ee4\u548cSQL\u5c5e\u6027\u8fc7\u6ee4\u3002"),(0,r.yg)("h2",{id:"\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\u6027"},"\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4\u6027"),(0,r.yg)("p",null,"\u8fc7\u6ee4\u8868\u8fbe\u5f0f\u5c5e\u4e8e\u8ba2\u9605\u5173\u7cfb\u7684\u4e00\u90e8\u5206\uff0cApache RocketMQ \u7684\u9886\u57df\u6a21\u578b\u89c4\u5b9a\uff0c\u540c\u4e00\u6d88\u8d39\u8005\u5206\u7ec4\u5185\u7684\u591a\u4e2a\u6d88\u8d39\u8005\u7684\u8ba2\u9605\u5173\u7cfb\u5305\u62ec\u8fc7\u6ee4\u8868\u8fbe\u5f0f\uff0c\u5fc5\u987b\u4fdd\u6301\u4e00\u81f4\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u5bfc\u81f4\u90e8\u5206\u6d88\u606f\u6d88\u8d39\u4e0d\u5230\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/domainModel/09subscription"},"\u8ba2\u9605\u5173\u7cfb\uff08Subscription\uff09"),"\u3002"),(0,r.yg)("h2",{id:"tag\u6807\u7b7e\u8fc7\u6ee4"},"Tag\u6807\u7b7e\u8fc7\u6ee4"),(0,r.yg)("p",null,"Tag\u6807\u7b7e\u8fc7\u6ee4\u65b9\u5f0f\u662f Apache RocketMQ \u63d0\u4f9b\u7684\u57fa\u7840\u6d88\u606f\u8fc7\u6ee4\u80fd\u529b\uff0c\u57fa\u4e8e\u751f\u4ea7\u8005\u4e3a\u6d88\u606f\u8bbe\u7f6e\u7684Tag\u6807\u7b7e\u8fdb\u884c\u5339\u914d\u3002\u751f\u4ea7\u8005\u5728\u53d1\u9001\u6d88\u606f\u65f6\uff0c\u8bbe\u7f6e\u6d88\u606f\u7684Tag\u6807\u7b7e\uff0c\u6d88\u8d39\u8005\u9700\u6307\u5b9a\u5df2\u6709\u7684Tag\u6807\u7b7e\u6765\u8fdb\u884c\u5339\u914d\u8ba2\u9605\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u573a\u666f\u793a\u4f8b")),(0,r.yg)("p",null,"\u4ee5\u4e0b\u56fe\u7535\u5546\u4ea4\u6613\u573a\u666f\u4e3a\u4f8b\uff0c\u4ece\u5ba2\u6237\u4e0b\u5355\u5230\u6536\u5230\u5546\u54c1\u8fd9\u4e00\u8fc7\u7a0b\u4f1a\u751f\u4ea7\u4e00\u7cfb\u5217\u6d88\u606f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8ba2\u5355\u6d88\u606f")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u652f\u4ed8\u6d88\u606f")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7269\u6d41\u6d88\u606f"))),(0,r.yg)("p",null,"\u8fd9\u4e9b\u6d88\u606f\u4f1a\u53d1\u9001\u5230\u540d\u79f0\u4e3aTrade_Topic\u7684Topic\u4e2d\uff0c\u88ab\u5404\u4e2a\u4e0d\u540c\u7684\u4e0b\u6e38\u7cfb\u7edf\u6240\u8ba2\u9605\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u652f\u4ed8\u7cfb\u7edf\uff1a\u53ea\u9700\u8ba2\u9605\u652f\u4ed8\u6d88\u606f\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7269\u6d41\u7cfb\u7edf\uff1a\u53ea\u9700\u8ba2\u9605\u7269\u6d41\u6d88\u606f\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4ea4\u6613\u6210\u529f\u7387\u5206\u6790\u7cfb\u7edf\uff1a\u9700\u8ba2\u9605\u8ba2\u5355\u548c\u652f\u4ed8\u6d88\u606f\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5b9e\u65f6\u8ba1\u7b97\u7cfb\u7edf\uff1a\u9700\u8981\u8ba2\u9605\u6240\u6709\u548c\u4ea4\u6613\u76f8\u5173\u7684\u6d88\u606f\u3002"))),(0,r.yg)("p",null,"\u8fc7\u6ee4\u6548\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,r.yg)("img",{alt:"Tag\u8fc7\u6ee4",src:n(52036).c,width:"1724",height:"1185"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Tag\u6807\u7b7e\u8bbe\u7f6e")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Tag\u7531\u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f\u65f6\u8bbe\u7f6e\uff0c\u6bcf\u6761\u6d88\u606f\u5141\u8bb8\u8bbe\u7f6e\u4e00\u4e2aTag\u6807\u7b7e\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Tag\u4f7f\u7528\u53ef\u89c1\u5b57\u7b26\uff0c\u5efa\u8bae\u957f\u5ea6\u4e0d\u8d85\u8fc7128\u5b57\u7b26\u3002"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Tag\u6807\u7b7e\u8fc7\u6ee4\u89c4\u5219")),(0,r.yg)("p",null,"Tag\u6807\u7b7e\u8fc7\u6ee4\u4e3a\u7cbe\u51c6\u5b57\u7b26\u4e32\u5339\u914d\uff0c\u8fc7\u6ee4\u89c4\u5219\u8bbe\u7f6e\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5355Tag\u5339\u914d\uff1a\u8fc7\u6ee4\u8868\u8fbe\u5f0f\u4e3a\u76ee\u6807Tag\u3002\u8868\u793a\u53ea\u6709\u6d88\u606f\u6807\u7b7e\u4e3a\u6307\u5b9a\u76ee\u6807Tag\u7684\u6d88\u606f\u7b26\u5408\u5339\u914d\u6761\u4ef6\uff0c\u4f1a\u88ab\u53d1\u9001\u7ed9\u6d88\u8d39\u8005\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u591aTag\u5339\u914d\uff1a\u591a\u4e2aTag\u4e4b\u95f4\u4e3a\u6216\u7684\u5173\u7cfb\uff0c\u4e0d\u540cTag\u95f4\u4f7f\u7528\u4e24\u4e2a\u7ad6\u7ebf\uff08","|","|","\uff09\u9694\u5f00\u3002\u4f8b\u5982\uff0cTag1","|","|","Tag2","|","|","Tag3\uff0c\u8868\u793a\u6807\u7b7e\u4e3aTag1\u6216Tag2\u6216Tag3\u7684\u6d88\u606f\u90fd\u6ee1\u8db3\u5339\u914d\u6761\u4ef6\uff0c\u90fd\u4f1a\u88ab\u53d1\u9001\u7ed9\u6d88\u8d39\u8005\u8fdb\u884c\u6d88\u8d39\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5168\u90e8\u5339\u914d\uff1a\u4f7f\u7528\u661f\u53f7\uff08","*","\uff09\u4f5c\u4e3a\u5168\u5339\u914d\u8868\u8fbe\u5f0f\u3002\u8868\u793a\u4e3b\u9898\u4e0b\u7684\u6240\u6709\u6d88\u606f\u90fd\u5c06\u88ab\u53d1\u9001\u7ed9\u6d88\u8d39\u8005\u8fdb\u884c\u6d88\u8d39\u3002"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u4f7f\u7528\u793a\u4f8b")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u53d1\u9001\u6d88\u606f\uff0c\u8bbe\u7f6eTag\u6807\u7b7e\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'Message message = messageBuilder.setTopic("topic")\n//\u8bbe\u7f6e\u6d88\u606f\u7d22\u5f15\u952e\uff0c\u53ef\u6839\u636e\u5173\u952e\u5b57\u7cbe\u786e\u67e5\u627e\u67d0\u6761\u6d88\u606f\u3002\n.setKeys("messageKey")\n//\u8bbe\u7f6e\u6d88\u606fTag\uff0c\u7528\u4e8e\u6d88\u8d39\u7aef\u6839\u636e\u6307\u5b9aTag\u8fc7\u6ee4\u6d88\u606f\u3002\n//\u8be5\u793a\u4f8b\u8868\u793a\u6d88\u606f\u7684Tag\u8bbe\u7f6e\u4e3a"TagA"\u3002\n.setTag("TagA")\n//\u6d88\u606f\u4f53\u3002\n.setBody("messageBody".getBytes())\n.build();\n')))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8ba2\u9605\u6d88\u606f\uff0c\u5339\u914d\u5355\u4e2aTag\u6807\u7b7e\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'String topic = "Your Topic";\n//\u53ea\u8ba2\u9605\u6d88\u606f\u6807\u7b7e\u4e3a"TagA"\u7684\u6d88\u606f\u3002\nFilterExpression filterExpression = new FilterExpression("TagA", FilterExpressionType.TAG);\npushConsumer.subscribe(topic, filterExpression);\n')))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8ba2\u9605\u6d88\u606f\uff0c\u5339\u914d\u591a\u4e2aTag\u6807\u7b7e\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'String topic = "Your Topic";\n//\u53ea\u8ba2\u9605\u6d88\u606f\u6807\u7b7e\u4e3a"TagA"\u3001"TagB"\u6216"TagC"\u7684\u6d88\u606f\u3002\nFilterExpression filterExpression = new FilterExpression("TagA||TagB||TagC", FilterExpressionType.TAG);\npushConsumer.subscribe(topic, filterExpression);\n')))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8ba2\u9605\u6d88\u606f\uff0c\u5339\u914dTopic\u4e2d\u7684\u6240\u6709\u6d88\u606f\uff0c\u4e0d\u8fdb\u884c\u8fc7\u6ee4\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'String topic = "Your Topic";\n//\u4f7f\u7528Tag\u6807\u7b7e\u8fc7\u6ee4\u6d88\u606f\uff0c\u8ba2\u9605\u6240\u6709\u6d88\u606f\u3002\nFilterExpression filterExpression = new FilterExpression("*", FilterExpressionType.TAG);\npushConsumer.subscribe(topic, filterExpression);\n')))),(0,r.yg)("h2",{id:"sql\u5c5e\u6027\u8fc7\u6ee4"},"SQL\u5c5e\u6027\u8fc7\u6ee4"),(0,r.yg)("p",null,"SQL\u5c5e\u6027\u8fc7\u6ee4\u662f Apache RocketMQ \u63d0\u4f9b\u7684\u9ad8\u7ea7\u6d88\u606f\u8fc7\u6ee4\u65b9\u5f0f\uff0c\u901a\u8fc7\u751f\u4ea7\u8005\u4e3a\u6d88\u606f\u8bbe\u7f6e\u7684\u5c5e\u6027\uff08Key\uff09\u53ca\u5c5e\u6027\u503c\uff08Value\uff09\u8fdb\u884c\u5339\u914d\u3002\u751f\u4ea7\u8005\u5728\u53d1\u9001\u6d88\u606f\u65f6\u53ef\u8bbe\u7f6e\u591a\u4e2a\u5c5e\u6027\uff0c\u6d88\u8d39\u8005\u8ba2\u9605\u65f6\u53ef\u8bbe\u7f6eSQL\u8bed\u6cd5\u7684\u8fc7\u6ee4\u8868\u8fbe\u5f0f\u8fc7\u6ee4\u591a\u4e2a\u5c5e\u6027\u3002"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Tag\u662f\u4e00\u79cd\u7cfb\u7edf\u5c5e\u6027\uff0c\u6240\u4ee5SQL\u8fc7\u6ee4\u65b9\u5f0f\u4e5f\u517c\u5bb9Tag\u6807\u7b7e\u8fc7\u6ee4\u3002\u5728SQL\u8bed\u6cd5\u4e2d\uff0cTag\u7684\u5c5e\u6027\u540d\u79f0\u4e3aTAGS\u3002")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u573a\u666f\u793a\u4f8b")),(0,r.yg)("p",null,"\u4ee5\u4e0b\u56fe\u7535\u5546\u4ea4\u6613\u573a\u666f\u4e3a\u4f8b\uff0c\u4ece\u5ba2\u6237\u4e0b\u5355\u5230\u6536\u5230\u5546\u54c1\u8fd9\u4e00\u8fc7\u7a0b\u4f1a\u751f\u4ea7\u4e00\u7cfb\u5217\u6d88\u606f\uff0c\u6309\u7167\u7c7b\u578b\u5c06\u6d88\u606f\u5206\u4e3a\u8ba2\u5355\u6d88\u606f\u548c\u7269\u6d41\u6d88\u606f\uff0c\u5176\u4e2d\u7ed9\u7269\u6d41\u6d88\u606f\u5b9a\u4e49\u5730\u57df\u5c5e\u6027\uff0c\u6309\u7167\u5730\u57df\u5206\u4e3a\u676d\u5dde\u548c\u4e0a\u6d77\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8ba2\u5355\u6d88\u606f")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7269\u6d41\u6d88\u606f"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7269\u6d41\u6d88\u606f\u4e14\u5730\u57df\u4e3a\u676d\u5dde")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7269\u6d41\u6d88\u606f\u4e14\u5730\u57df\u4e3a\u4e0a\u6d77"))))),(0,r.yg)("p",null,"\u8fd9\u4e9b\u6d88\u606f\u4f1a\u53d1\u9001\u5230\u540d\u79f0\u4e3aTrade_Topic\u7684Topic\u4e2d\uff0c\u88ab\u5404\u4e2a\u4e0d\u540c\u7684\u7cfb\u7edf\u6240\u8ba2\u9605\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7269\u6d41\u7cfb\u7edf1\uff1a\u53ea\u9700\u8ba2\u9605\u7269\u6d41\u6d88\u606f\u4e14\u6d88\u606f\u5730\u57df\u4e3a\u676d\u5dde\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7269\u6d41\u7cfb\u7edf2\uff1a\u53ea\u9700\u8ba2\u9605\u7269\u6d41\u6d88\u606f\u4e14\u6d88\u606f\u5730\u57df\u4e3a\u676d\u5dde\u6216\u4e0a\u6d77\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8ba2\u5355\u8ddf\u8e2a\u7cfb\u7edf\uff1a\u53ea\u9700\u8ba2\u9605\u8ba2\u5355\u6d88\u606f\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5b9e\u65f6\u8ba1\u7b97\u7cfb\u7edf\uff1a\u9700\u8981\u8ba2\u9605\u6240\u6709\u548c\u4ea4\u6613\u76f8\u5173\u7684\u6d88\u606f\u3002"))),(0,r.yg)("p",null,"\u8fc7\u6ee4\u6548\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,r.yg)("img",{alt:"sql\u8fc7\u6ee4",src:n(31628).c,width:"1977",height:"1252"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6d88\u606f\u5c5e\u6027\u8bbe\u7f6e")),(0,r.yg)("p",null,"\u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f\u65f6\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6d88\u606f\u5c5e\u6027\uff0c\u6bcf\u4e2a\u5c5e\u6027\u90fd\u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u952e\u503c\u5bf9\uff08Key-Value\uff09\u3002"),(0,r.yg)("p",null,"\u6bcf\u6761\u6d88\u606f\u652f\u6301\u8bbe\u7f6e\u591a\u4e2a\u5c5e\u6027\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"SQL\u5c5e\u6027\u8fc7\u6ee4\u89c4\u5219")),(0,r.yg)("p",null,"SQL\u5c5e\u6027\u8fc7\u6ee4\u4f7f\u7528SQL92\u8bed\u6cd5\u4f5c\u4e3a\u8fc7\u6ee4\u89c4\u5219\u8868\u8fbe\u5f0f\uff0c\u8bed\u6cd5\u89c4\u8303\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u8bed\u6cd5"),(0,r.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.yg)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"IS NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5224\u65ad\u5c5e\u6027\u4e0d\u5b58\u5728\u3002"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"a IS NULL")," \uff1a\u5c5e\u6027a\u4e0d\u5b58\u5728\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"IS NOT NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5224\u65ad\u5c5e\u6027\u5b58\u5728\u3002"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"a IS NOT NULL"),"\uff1a\u5c5e\u6027a\u5b58\u5728\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"}," ",">","  ")," ",">","=  ",(0,r.yg)("em",{parentName:"td"},"  <  "),"  <="),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6bd4\u8f83\u6570\u5b57\uff0c\u4e0d\u80fd\u7528\u4e8e\u6bd4\u8f83\u5b57\u7b26\u4e32\uff0c\u5426\u5219\u6d88\u8d39\u8005\u5ba2\u6237\u7aef\u542f\u52a8\u65f6\u4f1a\u62a5\u9519\u3002 ",(0,r.yg)("strong",{parentName:"td"},"\u8bf4\u660e")," \u53ef\u8f6c\u5316\u4e3a\u6570\u5b57\u7684\u5b57\u7b26\u4e32\u4e5f\u88ab\u8ba4\u4e3a\u662f\u6570\u5b57\u3002"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"}," ",(0,r.yg)("inlineCode",{parentName:"em"},"a IS NOT NULL AND a > 100"),"\uff1a\u5c5e\u6027a\u5b58\u5728\u4e14\u5c5e\u6027a\u7684\u503c\u5927\u4e8e100\u3002  ")," ",(0,r.yg)("inlineCode",{parentName:"td"},"a IS NOT NULL AND a > 'abc'"),"\uff1a\u9519\u8bef\u793a\u4f8b\uff0cabc\u4e3a\u5b57\u7b26\u4e32\uff0c\u4e0d\u80fd\u7528\u4e8e\u6bd4\u8f83\u5927\u5c0f\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BETWEEN xxx AND xxx"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6bd4\u8f83\u6570\u5b57\uff0c\u4e0d\u80fd\u7528\u4e8e\u6bd4\u8f83\u5b57\u7b26\u4e32\uff0c\u5426\u5219\u6d88\u8d39\u8005\u5ba2\u6237\u7aef\u542f\u52a8\u65f6\u4f1a\u62a5\u9519\u3002\u7b49\u4ef7\u4e8e",">","= xxx AND \\<= xxx\u3002\u8868\u793a\u5c5e\u6027\u503c\u5728\u4e24\u4e2a\u6570\u5b57\u4e4b\u95f4\u3002"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"a IS NOT NULL AND (a BETWEEN 10 AND 100)"),"\uff1a\u5c5e\u6027a\u5b58\u5728\u4e14\u5c5e\u6027a\u7684\u503c\u5927\u4e8e\u7b49\u4e8e10\u4e14\u5c0f\u4e8e\u7b49\u4e8e100\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NOT BETWEEN xxx AND xxx"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6bd4\u8f83\u6570\u5b57\uff0c\u4e0d\u80fd\u7528\u4e8e\u6bd4\u8f83\u5b57\u7b26\u4e32\uff0c\u5426\u5219\u6d88\u8d39\u8005\u5ba2\u6237\u7aef\u542f\u52a8\u4f1a\u62a5\u9519\u3002\u7b49\u4ef7\u4e8e\\< xxx OR ",">"," xxx\uff0c\u8868\u793a\u5c5e\u6027\u503c\u5728\u4e24\u4e2a\u503c\u7684\u533a\u95f4\u4e4b\u5916\u3002"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"a IS NOT NULL AND (a NOT BETWEEN 10 AND 100)"),"\uff1a\u5c5e\u6027a\u5b58\u5728\u4e14\u5c5e\u6027a\u7684\u503c\u5c0f\u4e8e10\u6216\u5927\u4e8e100\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"IN (xxx, xxx)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u793a\u5c5e\u6027\u7684\u503c\u5728\u67d0\u4e2a\u96c6\u5408\u5185\u3002\u96c6\u5408\u7684\u5143\u7d20\u53ea\u80fd\u662f\u5b57\u7b26\u4e32\u3002"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"a IS NOT NULL AND (a IN ('abc', 'def'))"),"\uff1a\u5c5e\u6027a\u5b58\u5728\u4e14\u5c5e\u6027a\u7684\u503c\u4e3aabc\u6216def\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"}," =  "),"  <",">"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7b49\u4e8e\u548c\u4e0d\u7b49\u4e8e\u3002\u53ef\u7528\u4e8e\u6bd4\u8f83\u6570\u5b57\u548c\u5b57\u7b26\u4e32\u3002"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"a IS NOT NULL AND (a = 'abc' OR a<>'def')"),"\uff1a\u5c5e\u6027a\u5b58\u5728\u4e14\u5c5e\u6027a\u7684\u503c\u4e3aabc\u6216a\u7684\u503c\u4e0d\u4e3adef\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("em",{parentName:"td"}," AND  ")," OR"),(0,r.yg)("td",{parentName:"tr",align:null},"\u903b\u8f91\u4e0e\u3001\u903b\u8f91\u6216\u3002\u53ef\u7528\u4e8e\u7ec4\u5408\u4efb\u610f\u7b80\u5355\u7684\u903b\u8f91\u5224\u65ad\uff0c\u9700\u8981\u5c06\u6bcf\u4e2a\u903b\u8f91\u5224\u65ad\u5185\u5bb9\u653e\u5165\u62ec\u53f7\u5185\u3002"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"a IS NOT NULL AND (a > 100) OR (b IS NULL)"),"\uff1a\u5c5e\u6027a\u5b58\u5728\u4e14\u5c5e\u6027a\u7684\u503c\u5927\u4e8e100\u6216\u5c5e\u6027b\u4e0d\u5b58\u5728\u3002")))),(0,r.yg)("p",null,"\u7531\u4e8eSQL\u5c5e\u6027\u8fc7\u6ee4\u662f\u751f\u4ea7\u8005\u5b9a\u4e49\u6d88\u606f\u5c5e\u6027\uff0c\u6d88\u8d39\u8005\u8bbe\u7f6eSQL\u8fc7\u6ee4\u6761\u4ef6\uff0c\u56e0\u6b64\u8fc7\u6ee4\u6761\u4ef6\u7684\u8ba1\u7b97\u7ed3\u679c\u5177\u6709\u4e0d\u786e\u5b9a\u6027\uff0c\u670d\u52a1\u7aef\u7684\u5904\u7406\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5f02\u5e38\u60c5\u51b5\u5904\u7406\uff1a\u5982\u679c\u8fc7\u6ee4\u6761\u4ef6\u7684\u8868\u8fbe\u5f0f\u8ba1\u7b97\u629b\u5f02\u5e38\uff0c\u6d88\u606f\u9ed8\u8ba4\u88ab\u8fc7\u6ee4\uff0c\u4e0d\u4f1a\u88ab\u6295\u9012\u7ed9\u6d88\u8d39\u8005\u3002\u4f8b\u5982\u6bd4\u8f83\u6570\u5b57\u548c\u975e\u6570\u5b57\u7c7b\u578b\u7684\u503c\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7a7a\u503c\u60c5\u51b5\u5904\u7406\uff1a\u5982\u679c\u8fc7\u6ee4\u6761\u4ef6\u7684\u8868\u8fbe\u5f0f\u8ba1\u7b97\u503c\u4e3anull\u6216\u4e0d\u662f\u5e03\u5c14\u7c7b\u578b\uff08true\u548cfalse\uff09\uff0c\u5219\u6d88\u606f\u9ed8\u8ba4\u88ab\u8fc7\u6ee4\uff0c\u4e0d\u4f1a\u88ab\u6295\u9012\u7ed9\u6d88\u8d39\u8005\u3002\u4f8b\u5982\u53d1\u9001\u6d88\u606f\u65f6\u672a\u5b9a\u4e49\u67d0\u4e2a\u5c5e\u6027\uff0c\u5728\u8ba2\u9605\u65f6\u8fc7\u6ee4\u6761\u4ef6\u4e2d\u76f4\u63a5\u4f7f\u7528\u8be5\u5c5e\u6027\uff0c\u5219\u8fc7\u6ee4\u6761\u4ef6\u7684\u8868\u8fbe\u5f0f\u8ba1\u7b97\u7ed3\u679c\u4e3anull\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6570\u503c\u7c7b\u578b\u4e0d\u7b26\u5904\u7406\uff1a\u5982\u679c\u6d88\u606f\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e3a\u6d6e\u70b9\u578b\uff0c\u4f46\u8fc7\u6ee4\u6761\u4ef6\u4e2d\u4f7f\u7528\u6574\u6570\u8fdb\u884c\u5224\u65ad\uff0c\u5219\u6d88\u606f\u9ed8\u8ba4\u88ab\u8fc7\u6ee4\uff0c\u4e0d\u4f1a\u88ab\u6295\u9012\u7ed9\u6d88\u8d39\u8005\u3002"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u4f7f\u7528\u793a\u4f8b")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u53d1\u9001\u6d88\u606f\uff0c\u540c\u65f6\u8bbe\u7f6e\u6d88\u606fTag\u6807\u7b7e\u548c\u81ea\u5b9a\u4e49\u5c5e\u6027\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'Message message = messageBuilder.setTopic("topic")\n//\u8bbe\u7f6e\u6d88\u606f\u7d22\u5f15\u952e\uff0c\u53ef\u6839\u636e\u5173\u952e\u5b57\u7cbe\u786e\u67e5\u627e\u67d0\u6761\u6d88\u606f\u3002\n.setKeys("messageKey")\n//\u8bbe\u7f6e\u6d88\u606fTag\uff0c\u7528\u4e8e\u6d88\u8d39\u7aef\u6839\u636e\u6307\u5b9aTag\u8fc7\u6ee4\u6d88\u606f\u3002\n//\u8be5\u793a\u4f8b\u8868\u793a\u6d88\u606f\u7684Tag\u8bbe\u7f6e\u4e3a"messageTag"\u3002\n.setTag("messageTag")\n//\u6d88\u606f\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u7684\u5206\u7c7b\u5c5e\u6027\uff0c\u4f8b\u5982\u73af\u5883\u6807\u7b7e\u3001\u5730\u57df\u3001\u903b\u8f91\u5206\u652f\u3002\n//\u8be5\u793a\u4f8b\u8868\u793a\u4e3a\u6d88\u606f\u81ea\u5b9a\u4e49\u4e00\u4e2a\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u4e3a\u5730\u57df\uff0c\u5c5e\u6027\u503c\u4e3a\u676d\u5dde\u3002\n.addProperty("Region", "Hangzhou")\n//\u6d88\u606f\u4f53\u3002\n.setBody("messageBody".getBytes())\n.build();\n')))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8ba2\u9605\u6d88\u606f\uff0c\u6839\u636e\u5355\u4e2a\u81ea\u5b9a\u4e49\u5c5e\u6027\u5339\u914d\u6d88\u606f\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'String topic = "topic";\n//\u53ea\u8ba2\u9605\u5730\u57df\u5c5e\u6027\u4e3a\u676d\u5dde\u7684\u6d88\u606f\u3002\nFilterExpression filterExpression = new FilterExpression("Region IS NOT NULL AND Region=\'Hangzhou\'", FilterExpressionType.SQL92);\nsimpleConsumer.subscribe(topic, filterExpression);\n')))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8ba2\u9605\u6d88\u606f\uff0c\u540c\u65f6\u6839\u636e\u591a\u4e2a\u81ea\u5b9a\u4e49\u5c5e\u6027\u5339\u914d\u6d88\u606f\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'String topic = "topic";\n//\u53ea\u8ba2\u9605\u5730\u57df\u5c5e\u6027\u4e3a\u676d\u5dde\u4e14\u4ef7\u683c\u5c5e\u6027\u5927\u4e8e30\u7684\u6d88\u606f\u3002\nFilterExpression filterExpression = new FilterExpression("Region IS NOT NULL AND price IS NOT NULL AND Region = \'Hangzhou\' AND price > 30", FilterExpressionType.SQL92);\nsimpleConsumer.subscribe(topic, filterExpression);\n')))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8ba2\u9605\u6d88\u606f\uff0c\u5339\u914dTopic\u4e2d\u7684\u6240\u6709\u6d88\u606f\uff0c\u4e0d\u8fdb\u884c\u8fc7\u6ee4\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'String topic = "topic";\n//\u8ba2\u9605\u6240\u6709\u6d88\u606f\u3002\nFilterExpression filterExpression = new FilterExpression("True", FilterExpressionType.SQL92);\nsimpleConsumer.subscribe(topic, filterExpression);\n')))),(0,r.yg)("h2",{id:"\u4f7f\u7528\u5efa\u8bae"},"\u4f7f\u7528\u5efa\u8bae"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u5408\u7406\u5212\u5206\u4e3b\u9898\u548cTag\u6807\u7b7e")),(0,r.yg)("p",null,"\u4ece\u6d88\u606f\u7684\u8fc7\u6ee4\u673a\u5236\u548c\u4e3b\u9898\u7684\u539f\u7406\u673a\u5236\u53ef\u4ee5\u770b\u51fa\uff0c\u4e1a\u52a1\u6d88\u606f\u7684\u62c6\u5206\u53ef\u4ee5\u57fa\u4e8e\u4e3b\u9898\u8fdb\u884c\u7b5b\u9009\uff0c\u4e5f\u53ef\u4ee5\u57fa\u4e8e\u4e3b\u9898\u5185\u6d88\u606f\u7684Tag\u6807\u7b7e\u53ca\u5c5e\u6027\u8fdb\u884c\u7b5b\u9009\u3002\u5173\u4e8e\u62c6\u5206\u65b9\u5f0f\u7684\u9009\u62e9\uff0c\u5e94\u9075\u5faa\u4ee5\u4e0b\u539f\u5219\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6d88\u606f\u7c7b\u578b\u662f\u5426\u4e00\u81f4\uff1a\u4e0d\u540c\u7c7b\u578b\u7684\u6d88\u606f\uff0c\u5982\u987a\u5e8f\u6d88\u606f\u548c\u666e\u901a\u6d88\u606f\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7684\u4e3b\u9898\u8fdb\u884c\u62c6\u5206\uff0c\u65e0\u6cd5\u901a\u8fc7Tag\u6807\u7b7e\u8fdb\u884c\u5206\u7c7b\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4e1a\u52a1\u57df\u662f\u5426\u76f8\u540c\uff1a\u4e0d\u540c\u4e1a\u52a1\u57df\u548c\u90e8\u95e8\u7684\u6d88\u606f\u5e94\u8be5\u62c6\u5206\u4e0d\u540c\u7684\u4e3b\u9898\u3002\u4f8b\u5982\u7269\u6d41\u6d88\u606f\u548c\u652f\u4ed8\u6d88\u606f\u5e94\u8be5\u4f7f\u7528\u4e24\u4e2a\u4e0d\u540c\u7684\u4e3b\u9898\uff1b\u540c\u6837\u662f\u4e00\u4e2a\u4e3b\u9898\u5185\u7684\u7269\u6d41\u6d88\u606f\uff0c\u666e\u901a\u7269\u6d41\u6d88\u606f\u548c\u52a0\u6025\u7269\u6d41\u6d88\u606f\u5219\u53ef\u4ee5\u901a\u8fc7\u4e0d\u540c\u7684Tag\u8fdb\u884c\u533a\u5206\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6d88\u606f\u91cf\u7ea7\u548c\u91cd\u8981\u6027\u662f\u5426\u4e00\u81f4\uff1a\u5982\u679c\u6d88\u606f\u7684\u91cf\u7ea7\u89c4\u6a21\u5b58\u5728\u5de8\u5927\u5dee\u5f02\uff0c\u6216\u8005\u8bf4\u6d88\u606f\u7684\u94fe\u8def\u91cd\u8981\u7a0b\u5ea6\u5b58\u5728\u5dee\u5f02\uff0c\u5219\u5e94\u8be5\u4f7f\u7528\u4e0d\u540c\u7684\u4e3b\u9898\u8fdb\u884c\u9694\u79bb\u62c6\u5206\u3002"))))}u.isMDXComponent=!0},52036:(e,a,n)=>{n.d(a,{c:()=>t});const t=n.p+"assets/images/messagefilter-09e82bf396d7c4100ed742e8d0d2c185.png"},87420:(e,a,n)=>{n.d(a,{c:()=>t});const t=n.p+"assets/images/messagefilter0-ad2c8360f54b9a622238f8cffea12068.png"},31628:(e,a,n)=>{n.d(a,{c:()=>t});const t=n.p+"assets/images/messagefilter2-dbf55cf4a63ac6d3b9c5f02603ce92ce.png"}}]);