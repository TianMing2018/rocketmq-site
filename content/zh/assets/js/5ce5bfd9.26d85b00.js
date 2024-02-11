"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[2384],{95788:(e,r,t)=>{t.d(r,{Iu:()=>p,yg:()=>d});var n=t(11504);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),g=o,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||a;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},48436:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(45072),o=(t(11504),t(95788));const a={},i="\u5feb\u901f\u5f00\u59cb",c={unversionedId:"introduction/02quickstart",id:"introduction/02quickstart",title:"\u5feb\u901f\u5f00\u59cb",description:"\u8fd9\u4e00\u8282\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u90e8\u7f72\u4e00\u4e2a\u5355 Master RocketMQ \u96c6\u7fa4\uff0c\u5e76\u5b8c\u6210\u7b80\u5355\u7684\u6d88\u606f\u6536\u53d1\u3002",source:"@site/docs/01-introduction/02quickstart.md",sourceDirName:"01-introduction",slug:"/introduction/02quickstart",permalink:"/zh/docs/4.x/introduction/02quickstart",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/01-introduction/02quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"\u4e3a\u4ec0\u4e48\u9009\u62e9RocketMQ",permalink:"/zh/docs/4.x/"},next:{title:"\u521d\u8bc6RocketMQ",permalink:"/zh/docs/4.x/introduction/03whatis"}},l={},s=[{value:"1.\u4e0b\u8f7d\u5b89\u88c5Apache RocketMQ",id:"1\u4e0b\u8f7d\u5b89\u88c5apache-rocketmq",level:2},{value:"2. \u542f\u52a8NameServer",id:"2-\u542f\u52a8nameserver",level:2},{value:"3. \u542f\u52a8Broker",id:"3-\u542f\u52a8broker",level:2},{value:"4. \u6d88\u606f\u6536\u53d1",id:"4-\u6d88\u606f\u6536\u53d1",level:2},{value:"5. \u5173\u95ed\u670d\u52a1\u5668",id:"5-\u5173\u95ed\u670d\u52a1\u5668",level:2}],p={toc:s},m="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(m,(0,n.c)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,o.yg)("p",null,"\u8fd9\u4e00\u8282\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u90e8\u7f72\u4e00\u4e2a\u5355 Master RocketMQ \u96c6\u7fa4\uff0c\u5e76\u5b8c\u6210\u7b80\u5355\u7684\u6d88\u606f\u6536\u53d1\u3002"),(0,o.yg)("admonition",{title:"\u7cfb\u7edf\u8981\u6c42",type:"tip"},(0,o.yg)("ol",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ol"},"64\u4f4d\u64cd\u4f5c\u7cfb\u7edf\uff0c\u63a8\u8350 Linux/Unix/macOS"),(0,o.yg)("li",{parentName:"ol"},"64\u4f4d JDK 1.8+"))),(0,o.yg)("h2",{id:"1\u4e0b\u8f7d\u5b89\u88c5apache-rocketmq"},"1.\u4e0b\u8f7d\u5b89\u88c5Apache RocketMQ"),(0,o.yg)("admonition",{title:"RocketMQ\u4e0b\u8f7d",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"RocketMQ \u7684\u5b89\u88c5\u5305\u5206\u4e3a\u4e24\u79cd\uff0c\u4e8c\u8fdb\u5236\u5305\u548c\u6e90\u7801\u5305\u3002"),(0,o.yg)("p",{parentName:"admonition"},"\u70b9\u51fb",(0,o.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/rocketmq/4.9.4/rocketmq-all-4.9.4-source-release.zip"},"\u8fd9\u91cc")," \u4e0b\u8f7d Apache RocketMQ 4.9.4\u7684\u6e90\u7801\u5305\u3002\u4f60\u4e5f\u53ef\u4ee5\u4ece",(0,o.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/rocketmq/4.9.4/rocketmq-all-4.9.4-bin-release.zip"},"\u8fd9\u91cc")," \u4e0b\u8f7d\u5230\u4e8c\u8fdb\u5236\u5305\u3002\u4e8c\u8fdb\u5236\u5305\u662f\u5df2\u7ecf\u7f16\u8bd1\u5b8c\u6210\u540e\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u7684\uff0c\u6e90\u7801\u5305\u662f\u9700\u8981\u7f16\u8bd1\u540e\u8fd0\u884c\u7684\uff0c")),(0,o.yg)("p",null,"\u8fd9\u91cc\u4ee5\u5728Linux\u73af\u5883\u4e3a\u4f8b\uff0c\u4ecb\u7ecdRocketMQ\u5b89\u88c5\u8fc7\u7a0b\u3002"),(0,o.yg)("p",null,"\u89e3\u538b\u4e0b\u8f7d\u7684\u6e90\u7801\u5305\u5e76\u7f16\u8bd1\u6784\u5efa\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"$ mvn -Prelease-all -DskipTests -Dspotbugs.skip=true clean install -U\n$ cd distribution/target/rocketmq-4.9.4/rocketmq-4.9.4\n")),(0,o.yg)("h2",{id:"2-\u542f\u52a8nameserver"},"2. \u542f\u52a8NameServer"),(0,o.yg)("p",null,"\u5b89\u88c5\u5b8cRocketMQ\u5305\u540e\uff0c\u6211\u4eec\u542f\u52a8NameServer"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"### \u542f\u52a8namesrv\n$ nohup sh bin/mqnamesrv &\n \n### \u9a8c\u8bc1namesrv\u662f\u5426\u542f\u52a8\u6210\u529f\n$ tail -f ~/logs/rocketmqlogs/namesrv.log\nThe Name Server boot success...\n")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"\u6211\u4eec\u53ef\u4ee5\u5728namesrv.log \u4e2d\u770b\u5230 ",(0,o.yg)("strong",{parentName:"p"},"'The Name Server boot success..'\uff0c")," \u8868\u793aNameServer \u5df2\u6210\u529f\u542f\u52a8\u3002")),(0,o.yg)("h2",{id:"3-\u542f\u52a8broker"},"3. \u542f\u52a8Broker"),(0,o.yg)("p",null,"NameServer\u6210\u529f\u542f\u52a8\u540e\uff0c\u6211\u4eec\u542f\u52a8Broker"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"### \u5148\u542f\u52a8broker\n$ nohup sh bin/mqbroker -n localhost:9876 &\n\n### \u9a8c\u8bc1broker\u662f\u5426\u542f\u52a8\u6210\u529f, \u6bd4\u5982, broker\u7684ip\u662f192.168.1.2 \u7136\u540e\u540d\u5b57\u662fbroker-a\n$ tail -f ~/logs/rocketmqlogs/Broker.log \nThe broker[broker-a,192.169.1.2:10911] boot success...\n")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"\u6211\u4eec\u53ef\u4ee5\u5728 Broker.log \u4e2d\u770b\u5230\u201cThe broker","[brokerName,ip:port]"," boot success..\u201d\uff0c\u8fd9\u8868\u660e broker \u5df2\u6210\u529f\u542f\u52a8\u3002")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"\u81f3\u6b64\uff0c\u4e00\u4e2a\u5355Master\u7684RocketMQ\u96c6\u7fa4\u5df2\u7ecf\u90e8\u7f72\u8d77\u6765\u4e86\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u811a\u672c\u8fdb\u884c\u7b80\u5355\u7684\u6d88\u606f\u6536\u53d1\u3002")),(0,o.yg)("h2",{id:"4-\u6d88\u606f\u6536\u53d1"},"4. \u6d88\u606f\u6536\u53d1"),(0,o.yg)("p",null,"\u5728\u8fdb\u884c\u6d88\u606f\u6536\u53d1\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u544a\u8bc9\u5ba2\u6237\u7aefNameServer\u7684\u5730\u5740\uff0cRocketMQ\u6709\u591a\u79cd\u65b9\u5f0f\u5728\u5ba2\u6237\u7aef\u4e2d\u8bbe\u7f6eNameServer\u5730\u5740\uff0c\u8fd9\u91cc\u6211\u4eec\u5229\u7528\u73af\u5883\u53d8\u91cf",(0,o.yg)("inlineCode",{parentName:"p"},"NAMESRV_ADDR")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"$ export NAMESRV_ADDR=localhost:9876\n$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer\n SendResult [sendStatus=SEND_OK, msgId= ...\n\n$ sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer\n ConsumeMessageThread_%d Receive New Messages: [MessageExt...\n")),(0,o.yg)("h2",{id:"5-\u5173\u95ed\u670d\u52a1\u5668"},"5. \u5173\u95ed\u670d\u52a1\u5668"),(0,o.yg)("p",null,"\u5b8c\u6210\u5b9e\u9a8c\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5173\u95ed\u670d\u52a1"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"$ sh bin/mqshutdown broker\nThe mqbroker(36695) is running...\nSend shutdown request to mqbroker(36695) OK\n\n$ sh bin/mqshutdown namesrv\nThe mqnamesrv(36664) is running...\nSend shutdown request to mqnamesrv(36664) OK\n")))}u.isMDXComponent=!0}}]);