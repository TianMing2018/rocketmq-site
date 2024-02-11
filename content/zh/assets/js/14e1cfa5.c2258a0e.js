"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[2420],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>c});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y=r.createContext({}),i=function(e){var t=r.useContext(y),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(y.Provider,{value:t},e.children)},o="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,y=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),o=i(n),d=a,c=o["".concat(y,".").concat(d)]||o[d]||u[d]||l;return n?r.createElement(c,g(g({ref:t},p),{},{components:n})):r.createElement(c,g({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,g=new Array(l);g[0]=d;var m={};for(var y in t)hasOwnProperty.call(t,y)&&(m[y]=t[y]);m.originalType=e,m[o]="string"==typeof e?e:a,g[1]=m;for(var i=2;i<l;i++)g[i]=n[i];return r.createElement.apply(null,g)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>i});var r=n(45072),a=(n(11504),n(95788));const l={},g="\u53c2\u6570\u7ea6\u675f\u548c\u5efa\u8bae",m={unversionedId:"introduction/03limits",id:"version-5.0/introduction/03limits",title:"\u53c2\u6570\u7ea6\u675f\u548c\u5efa\u8bae",description:"Apache RocketMQ \u7cfb\u7edf\u4e2d\u5b58\u5728\u5f88\u591a\u81ea\u5b9a\u4e49\u53c2\u6570\u548c\u8d44\u6e90\u547d\u540d\uff0c\u60a8\u5728\u4f7f\u7528 Apache RocketMQ \u65f6\u5efa\u8bae\u53c2\u8003\u5982\u4e0b\u8bf4\u660e\u89c4\u8303\u7cfb\u7edf\u8bbe\u7f6e\uff0c\u907f\u5bf9\u67d0\u4e9b\u5177\u4f53\u53c2\u6570\u8bbe\u7f6e\u4e0d\u5408\u7406\u5bfc\u81f4\u5e94\u7528\u51fa\u73b0\u5f02\u5e38\u3002",source:"@site/versioned_docs/version-5.0/01-introduction/03limits.md",sourceDirName:"01-introduction",slug:"/introduction/03limits",permalink:"/zh/docs/introduction/03limits",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/01-introduction/03limits.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u57fa\u672c\u6982\u5ff5",permalink:"/zh/docs/introduction/02concepts"},next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/quickStart/01quickstart"}},y={},i=[],p={toc:i},o="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(o,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u53c2\u6570\u7ea6\u675f\u548c\u5efa\u8bae"},"\u53c2\u6570\u7ea6\u675f\u548c\u5efa\u8bae"),(0,a.yg)("p",null,"Apache RocketMQ \u7cfb\u7edf\u4e2d\u5b58\u5728\u5f88\u591a\u81ea\u5b9a\u4e49\u53c2\u6570\u548c\u8d44\u6e90\u547d\u540d\uff0c\u60a8\u5728\u4f7f\u7528 Apache RocketMQ \u65f6\u5efa\u8bae\u53c2\u8003\u5982\u4e0b\u8bf4\u660e\u89c4\u8303\u7cfb\u7edf\u8bbe\u7f6e\uff0c\u907f\u5bf9\u67d0\u4e9b\u5177\u4f53\u53c2\u6570\u8bbe\u7f6e\u4e0d\u5408\u7406\u5bfc\u81f4\u5e94\u7528\u51fa\u73b0\u5f02\u5e38\u3002"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.yg)("th",{parentName:"tr",align:null},"\u5efa\u8bae\u8303\u56f4"),(0,a.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Topic\u540d\u79f0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u5efa\u8bae\uff1a\u5b57\u6bcda","~","z\u6216A","~","Z\u3001\u6570\u5b570","~","9\u4ee5\u53ca\u4e0b\u5212\u7ebf\uff08",(0,a.yg)("em",{parentName:"td"},"\uff09\u3001\u77ed\u5212\u7ebf\uff08-\uff09\u548c\u767e\u5206\u53f7\uff08%\uff09\u3002  ",(0,a.yg)("br",null)," \u957f\u5ea6\u5efa\u8bae\uff1a1","~","64\u4e2a\u5b57\u7b26\u3002   ",(0,a.yg)("br",null)," \u7cfb\u7edf\u4fdd\u7559\u5b57\u7b26\uff1aTopic\u540d\u79f0\u4e0d\u5141\u8bb8\u4f7f\u7528\u4ee5\u4e0b\u4fdd\u7559\u5b57\u7b26\u6216\u542b\u6709\u7279\u6b8a\u524d\u7f00\u7684\u5b57\u7b26\u547d\u540d\u3002 ",(0,a.yg)("br",null)," \u4fdd\u7559\u5b57\u7b26: TBW102  ",(0,a.yg)("em",{parentName:"em"}," BenchmarkTest  ")," SELF_TEST_TOPIC  ",(0,a.yg)("em",{parentName:"em"}," OFFSET_MOVED_EVENT  ")," SCHEDULE_TOPIC_XXXX  ",(0,a.yg)("em",{parentName:"em"}," RMQ_SYS_TRANS_HALF_TOPIC  ")," RMQ_SYS_TRACE_TOPIC  ",(0,a.yg)("em",{parentName:"em"}," RMQ_SYS_TRANS_OP_HALF_TOPIC   ",(0,a.yg)("br",null),"  \u7279\u6b8a\u524d\u7f00: ")," rmq_sys"),"   %RETRY%",(0,a.yg)("em",{parentName:"td"},"   %DLQ%"),"   rocketmq-broker-"),(0,a.yg)("td",{parentName:"tr",align:null},"Topic\u547d\u540d\u5e94\u8be5\u5c3d\u91cf\u4f7f\u7528\u7b80\u77ed\u3001\u5e38\u7528\u7684\u5b57\u7b26\uff0c\u907f\u514d\u4f7f\u7528\u7279\u6b8a\u5b57\u7b26\u3002\u7279\u6b8a\u5b57\u7b26\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u89e3\u6790\u51fa\u73b0\u5f02\u5e38\uff0c\u5b57\u7b26\u8fc7\u957f\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6d88\u606f\u6536\u53d1\u88ab\u62d2\u7edd\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ConsumerGroup\u540d\u79f0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u5efa\u8bae\uff1a\u652f\u6301\u5b57\u6bcda","~","z\u6216A","~","Z\u3001\u6570\u5b570","~","9\u4ee5\u53ca\u4e0b\u5212\u7ebf\uff08",(0,a.yg)("em",{parentName:"td"},"\uff09\u3001\u77ed\u5212\u7ebf\uff08-\uff09\u548c\u767e\u5206\u53f7\uff08%\uff09\u3002  ",(0,a.yg)("br",null)," \u957f\u5ea6\u5efa\u8bae\uff1a1","~","64\u4e2a\u5b57\u7b26\u3002   ",(0,a.yg)("br",null)," \u7cfb\u7edf\u4fdd\u7559\u5b57\u7b26\uff1aConsumerGroup\u4e0d\u5141\u8bb8\u4f7f\u7528\u4ee5\u4e0b\u4fdd\u7559\u5b57\u7b26\u6216\u542b\u6709\u7279\u6b8a\u524d\u7f00\u7684\u5b57\u7b26\u547d\u540d\u3002 ",(0,a.yg)("br",null)," \u4fdd\u7559\u5b57\u7b26: ",(0,a.yg)("em",{parentName:"em"}," DEFAULT_CONSUMER  ")," DEFAULT_PRODUCER  ",(0,a.yg)("em",{parentName:"em"}," TOOLS_CONSUMER  ")," FILTERSRV_CONSUMER  ",(0,a.yg)("em",{parentName:"em"}," __MONITOR_CONSUMER  ")," CLIENT_INNER_PRODUCER  ",(0,a.yg)("em",{parentName:"em"}," SELF_TEST_P_GROUP  ")," SELF_TEST_C_GROUP  ",(0,a.yg)("em",{parentName:"em"}," CID_ONS-HTTP-PROXY  ")," CID_ONSAPI_PERMISSION  ",(0,a.yg)("em",{parentName:"em"}," CID_ONSAPI_OWNER  ")," CID_ONSAPI_PULL  ",(0,a.yg)("em",{parentName:"em"}," CID_RMQ_SYS_TRANS    ")," \u7279\u6b8a\u5b57\u7b26 * CID_RMQ_SYS"),"  * CID_HOUSEKEEPING"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ACL Credentials"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u5efa\u8bae\uff1aAK\uff08AccessKey ID\uff09\u3001SK\uff08AccessKey Secret\uff09\u548cToken\u4ec5\u652f\u6301\u5b57\u6bcda","~","z\u6216A","~","Z\u3001\u6570\u5b570","~","9\u3002  ",(0,a.yg)("br",null)," \u957f\u5ea6\u5efa\u8bae\uff1a\u4e0d\u8d85\u8fc71024\u4e2a\u5b57\u7b26\u3002"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a3000\u6beb\u79d2\u3002  ",(0,a.yg)("br",null)," \u53d6\u503c\u8303\u56f4\uff1a\u8be5\u53c2\u6570\u4e3a\u5ba2\u6237\u7aef\u672c\u5730\u884c\u4e3a\uff0c\u53d6\u503c\u8303\u56f4\u5efa\u8bae\u4e0d\u8981\u8d85\u8fc730000\u6beb\u79d2\u3002"),(0,a.yg)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u662f\u5ba2\u6237\u7aef\u672c\u5730\u540c\u6b65\u8c03\u7528\u7684\u7b49\u5f85\u65f6\u95f4\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u5e94\u7528\u8bbe\u7f6e\u5408\u7406\u7684\u53d6\u503c\uff0c\u907f\u514d\u7ebf\u7a0b\u963b\u585e\u65f6\u95f4\u8fc7\u957f\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5927\u5c0f"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a\u4e0d\u8d85\u8fc74 MB\u3002\u4e0d\u6d89\u53ca\u6d88\u606f\u538b\u7f29\uff0c\u4ec5\u8ba1\u7b97\u6d88\u606f\u4f53body\u7684\u5927\u5c0f\u3002   ",(0,a.yg)("br",null),"\u53d6\u503c\u8303\u56f4\uff1a\u5efa\u8bae\u4e0d\u8d85\u8fc74 MB\u3002"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6d88\u606f\u4f20\u8f93\u5e94\u5c3d\u91cf\u538b\u7f29\u548c\u63a7\u5236\u8d1f\u8f7d\u5927\u5c0f\uff0c\u907f\u514d\u8d85\u5927\u6587\u4ef6\u4f20\u8f93\u3002\u82e5\u6d88\u606f\u5927\u5c0f\u4e0d\u6ee1\u8db3\u9650\u5236\u8981\u6c42\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5206\u5272\u6d88\u606f\u6216\u4f7f\u7528OSS\u5b58\u50a8\uff0c\u7528\u6d88\u606f\u4f20\u8f93URL\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u6d88\u606f\u81ea\u5b9a\u4e49\u5c5e\u6027"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u9650\u5236\uff1a\u6240\u6709\u53ef\u89c1\u5b57\u7b26\u3002   ",(0,a.yg)("br",null),"\u957f\u5ea6\u5efa\u8bae\uff1a\u5c5e\u6027\u7684Key\u548cValue\u603b\u957f\u5ea6\u4e0d\u8d85\u8fc716 KB\u3002   ",(0,a.yg)("br",null),"\u7cfb\u7edf\u4fdd\u7559\u5c5e\u6027\uff1a\u4e0d\u5141\u8bb8\u4f7f\u7528\u4ee5\u4e0b\u4fdd\u7559\u5c5e\u6027\u4f5c\u4e3a\u81ea\u5b9a\u4e49\u5c5e\u6027\u7684Key\u3002 \u4fdd\u7559\u5c5e\u6027Key"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"MessageGroup"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u9650\u5236\uff1a\u6240\u6709\u53ef\u89c1\u5b57\u7b26\u3002  ",(0,a.yg)("br",null),"\u957f\u5ea6\u5efa\u8bae\uff1a1","~","64\u5b57\u8282\u3002"),(0,a.yg)("td",{parentName:"tr",align:null},"MessageGroup\u662f\u987a\u5e8f\u6d88\u606f\u7684\u5206\u7ec4\u6807\u8bc6\u3002\u4e00\u822c\u8bbe\u7f6e\u4e3a\u9700\u8981\u4fdd\u8bc1\u987a\u5e8f\u7684\u4e00\u7ec4\u6d88\u606f\u6807\u8bc6\uff0c\u4f8b\u5982\u8ba2\u5355ID\u3001\u7528\u6237ID\u7b49\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u6d88\u606f\u53d1\u9001\u91cd\u8bd5\u6b21\u6570"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a3\u6b21\u3002  ",(0,a.yg)("br",null),"\u53d6\u503c\u8303\u56f4\uff1a\u65e0\u9650\u5236\u3002"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6d88\u606f\u53d1\u9001\u91cd\u8bd5\u662f\u5ba2\u6237\u7aefSDK\u5185\u7f6e\u7684\u91cd\u8bd5\u7b56\u7565\uff0c\u5bf9\u5e94\u7528\u4e0d\u53ef\u89c1\uff0c\u5efa\u8bae\u53d6\u503c\u4e0d\u8981\u8fc7\u5927\uff0c\u907f\u514d\u963b\u585e\u4e1a\u52a1\u7ebf\u7a0b\u3002 \u5982\u679c\u6d88\u606f\u8fbe\u5230\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u540e\u8fd8\u672a\u53d1\u9001\u6210\u529f\uff0c\u5efa\u8bae\u4e1a\u52a1\u4fa7\u505a\u597d\u515c\u5e95\u5904\u7406\uff0c\u4fdd\u8bc1\u6d88\u606f\u53ef\u9760\u6027\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u6d88\u606f\u6d88\u8d39\u91cd\u8bd5\u6b21\u6570"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a16\u6b21\u3002"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u91cd\u8bd5\u6b21\u6570\u5e94\u6839\u636e\u5b9e\u9645\u4e1a\u52a1\u9700\u6c42\u8bbe\u7f6e\u5408\u7406\u7684\u53c2\u6570\u503c\uff0c\u907f\u514d\u4f7f\u7528\u91cd\u8bd5\u8fdb\u884c\u65e0\u9650\u89e6\u53d1\u3002\u91cd\u8bd5\u6b21\u6570\u8fc7\u5927\u5bb9\u6613\u9020\u6210\u7cfb\u7edf\u538b\u529b\u8fc7\u91cf\u589e\u52a0\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u4e8b\u52a1\u5f02\u5e38\u68c0\u67e5\u95f4\u9694"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a60\u79d2\u3002"),(0,a.yg)("td",{parentName:"tr",align:null},"\u4e8b\u52a1\u5f02\u5e38\u68c0\u67e5\u95f4\u9694\u6307\u7684\u662f\uff0c\u534a\u4e8b\u52a1\u6d88\u606f\u56e0\u7cfb\u7edf\u91cd\u542f\u6216\u5f02\u5e38\u60c5\u51b5\u5bfc\u81f4\u6ca1\u6709\u63d0\u4ea4\uff0c\u751f\u4ea7\u8005\u5ba2\u6237\u7aef\u4f1a\u6309\u7167\u8be5\u95f4\u9694\u65f6\u95f4\u8fdb\u884c\u4e8b\u52a1\u72b6\u6001\u56de\u67e5\u3002 \u95f4\u9694\u65f6\u957f\u4e0d\u5efa\u8bae\u8bbe\u7f6e\u8fc7\u77ed\uff0c\u5426\u5219\u9891\u7e41\u7684\u56de\u67e5\u8c03\u7528\u4f1a\u5f71\u54cd\u7cfb\u7edf\u6027\u80fd\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u534a\u4e8b\u52a1\u6d88\u606f\u7b2c\u4e00\u6b21\u56de\u67e5\u65f6\u95f4"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a\u53d6\u503c\u7b49\u4e8e","[","\u4e8b\u52a1\u5f02\u5e38\u68c0\u67e5\u95f4\u9694","]","  * \u6700\u5927\u9650\u5236\uff1a\u4e0d\u8d85\u8fc71\u5c0f\u65f6\u3002"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u534a\u4e8b\u52a1\u6d88\u606f\u6700\u5927\u8d85\u65f6\u65f6\u957f"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a4\u5c0f\u65f6\u3002  * \u53d6\u503c\u8303\u56f4\uff1a\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u4fee\u6539\u3002"),(0,a.yg)("td",{parentName:"tr",align:null},"\u534a\u4e8b\u52a1\u6d88\u606f\u56e0\u7cfb\u7edf\u91cd\u542f\u6216\u5f02\u5e38\u60c5\u51b5\u5bfc\u81f4\u6ca1\u6709\u63d0\u4ea4\uff0c\u751f\u4ea7\u8005\u5ba2\u6237\u7aef\u4f1a\u6309\u7167\u4e8b\u52a1\u5f02\u5e38\u68c0\u67e5\u95f4\u9694\u65f6\u95f4\u8fdb\u884c\u56de\u67e5\uff0c\u82e5\u8d85\u8fc7\u534a\u4e8b\u52a1\u6d88\u606f\u8d85\u65f6\u65f6\u957f\u540e\u6ca1\u6709\u8fd4\u56de\u7ed3\u679c\uff0c\u534a\u4e8b\u52a1\u6d88\u606f\u5c06\u4f1a\u88ab\u5f3a\u5236\u56de\u6eda\u3002 \u60a8\u53ef\u4ee5\u901a\u8fc7\u76d1\u63a7\u8be5\u6307\u6807\u907f\u514d\u5f02\u5e38\u4e8b\u52a1\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"PushConsumer\u672c\u5730\u7f13\u5b58"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.yg)("br",null)," ",(0,a.yg)("em",{parentName:"td"}," \u6700\u5927\u7f13\u5b58\u6570\u91cf\uff1a1024\u6761\u3002  ",(0,a.yg)("br",null))," \u6700\u5927\u7f13\u5b58\u5927\u5c0f\uff1a64 M\u3002    ",(0,a.yg)("br",null),"\u53d6\u503c\u8303\u56f4\uff1a\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u8bbe\u7f6e\uff0c\u65e0\u9650\u5236\u3002"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8005\u7c7b\u578b\u4e3aPushConsumer\u65f6\uff0c\u4e3a\u63d0\u9ad8\u6d88\u8d39\u8005\u541e\u5410\u91cf\u548c\u6027\u80fd\uff0c\u5ba2\u6237\u7aef\u4f1a\u5728SDK\u672c\u5730\u7f13\u5b58\u90e8\u5206\u6d88\u606f\u3002\u7f13\u5b58\u7684\u6d88\u606f\u7684\u6570\u91cf\u548c\u5927\u5c0f\u5e94\u8bbe\u7f6e\u5728\u7cfb\u7edf\u5185\u5b58\u5141\u8bb8\u7684\u8303\u56f4\u5185\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"PushConsumer\u91cd\u8bd5\u95f4\u9694\u65f6\u957f"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.yg)("br",null),(0,a.yg)("em",{parentName:"td"}," \u975e\u987a\u5e8f\u6027\u6295\u9012\uff1a\u95f4\u9694\u65f6\u95f4\u9636\u68af\u53d8\u5316\uff0c\u5177\u4f53\u53d6\u503c\uff0c\u8bf7\u53c2\u89c1PushConsumer\u6d88\u8d39\u91cd\u8bd5\u7b56\u7565\u3002  ",(0,a.yg)("br",null))," \u987a\u5e8f\u6027\u6295\u9012\uff1a3000\u6beb\u79d2\u3002"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"PushConsumer\u6d88\u8d39\u5e76\u53d1\u5ea6"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a20\u4e2a\u7ebf\u7a0b\u3002"),(0,a.yg)("td",{parentName:"tr",align:null},"\u65e0\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6d88\u606f\u6700\u5927\u6279\u6b21"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a32\u6761\u3002"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8005\u4ece\u670d\u52a1\u7aef\u83b7\u53d6\u6d88\u606f\u65f6\uff0c\u4e00\u6b21\u83b7\u53d6\u5230\u6700\u5927\u6d88\u606f\u6761\u6570\u3002\u5efa\u8bae\u6309\u7167\u5b9e\u9645\u4e1a\u52a1\u8bbe\u7f6e\u5408\u7406\u7684\u53c2\u6570\u503c\uff0c\u4e00\u6b21\u83b7\u53d6\u6d88\u606f\u6570\u91cf\u8fc7\u5927\u5bb9\u6613\u5728\u6d88\u8d39\u5931\u8d25\u65f6\u9020\u6210\u5927\u6279\u91cf\u6d88\u606f\u91cd\u590d\u3002")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"SimpleConsumer\u6700\u5927\u4e0d\u53ef\u89c1\u65f6\u95f4"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c\uff1a\u7528\u6237\u5fc5\u586b\u53c2\u6570\uff0c\u65e0\u9ed8\u8ba4\u503c\u3002  ",(0,a.yg)("br",null)," \u53d6\u503c\u8303\u56f4\u5efa\u8bae\uff1a\u6700\u5c0f10\u79d2\uff1b\u6700\u592712\u5c0f\u65f6\u3002"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u4e0d\u53ef\u89c1\u65f6\u95f4\u6307\u7684\u662f\u6d88\u606f\u5904\u7406+\u5931\u8d25\u540e\u91cd\u8bd5\u95f4\u9694\u7684\u603b\u65f6\u957f\uff0c\u5efa\u8bae\u8bbe\u7f6e\u65f6\u53d6\u503c\u6bd4\u5b9e\u9645\u9700\u8981\u8017\u8d39\u7684\u65f6\u95f4\u7a0d\u5fae\u957f\u4e00\u4e9b\u3002")))))}u.isMDXComponent=!0}}]);