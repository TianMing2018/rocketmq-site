"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9940],{95788:(e,a,r)=>{r.d(a,{Iu:()=>c,yg:()=>m});var t=r(11504);function i(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function n(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){i(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,t,i=function(e,a){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||(i[r]=e[r]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),p=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):n(n({},a),e)),r},c=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(r),h=i,m=g["".concat(l,".").concat(h)]||g[h]||u[h]||s;return r?t.createElement(m,n(n({ref:a},c),{},{components:r})):t.createElement(m,n({ref:a},c))}));function m(e,a){var r=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var s=r.length,n=new Array(s);n[0]=h;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[g]="string"==typeof e?e:i,n[1]=o;for(var p=2;p<s;p++)n[p]=r[p];return t.createElement.apply(null,n)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},38968:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var t=r(45072),i=(r(11504),r(95788));const s={title:"Release Notes - Apache RocketMQ - Version 4.1.0-incubating",categories:["Release_Notes"]},n=void 0,o={permalink:"/release-notes/2017/06/02/4.1.0",source:"@site/release-notes/2017-06-02-4.1.0.md",title:"Release Notes - Apache RocketMQ - Version 4.1.0-incubating",description:"* Source: rocketmq-all-4.1.0-incubating-source-release.zip [PGP] [MD5] [SHA1]",date:"2017-06-02T00:00:00.000Z",formattedDate:"June 2, 2017",tags:[],readingTime:2.61,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.1.0-incubating",categories:["Release_Notes"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.2.0",permalink:"/release-notes/2017/12/13/4.2.0"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.0.0-incubating",permalink:"/release-notes/2017/01/24/4.0.0"}},l={authorsImageUrls:[]},p=[{value:"New Feature",id:"new-feature",level:2},{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],c={toc:p},g="wrapper";function u(e){let{components:a,...r}=e;return(0,i.yg)(g,(0,t.c)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("admonition",{title:"Download the 4.1.0-incubating release",type:"tip"},(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"Source: ",(0,i.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.1.0-incubating/rocketmq-all-4.1.0-incubating-source-release.zip"},"rocketmq-all-4.1.0-incubating-source-release.zip")," [",(0,i.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.1.0-incubating/rocketmq-all-4.1.0-incubating-source-release.zip.asc"},"PGP"),"] [",(0,i.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.1.0-incubating/rocketmq-all-4.1.0-incubating-source-release.zip.md5"},"MD5"),"] [",(0,i.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.1.0-incubating/rocketmq-all-4.1.0-incubating-source-release.zip.sha1"},"SHA1"),"]"),(0,i.yg)("li",{parentName:"ul"},"Binary: ",(0,i.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.1.0-incubating/rocketmq-all-4.1.0-incubating-bin-release.zip"},"rocketmq-all-4.1.0-incubating-bin-release.zip")," [",(0,i.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.1.0-incubating/rocketmq-all-4.1.0-incubating-bin-release.zip.asc"},"PGP"),"] [",(0,i.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.1.0-incubating/rocketmq-all-4.1.0-incubating-bin-release.zip.md5"},"MD5"),"] [",(0,i.yg)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.1.0-incubating/rocketmq-all-4.1.0-incubating-bin-release.zip.sha1"},"SHA1"),"]"))),(0,i.yg)("h2",{id:"new-feature"},"New Feature"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-80"},"ROCKETMQ-80"),"] - Add batch feature"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-121"},"ROCKETMQ-121"),"] - Support message filtering based on SQL92"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-194"},"ROCKETMQ-194"),"] - log appender using rocketmq"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-186"},"ROCKETMQ-186"),"] - Implement the OpenMessaging specification 0.1.0-alpha version")),(0,i.yg)("h2",{id:"improvement"},"Improvement"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-67"},"ROCKETMQ-67"),"] - Consistent Hash allocate strategy support"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-99"},"ROCKETMQ-99"),"] - Add scripts for Windows platform"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-36"},"ROCKETMQ-36"),"] - Improve broker's GC logs storing"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-39"},"ROCKETMQ-39"),"] - Duplicated codes in both filtersrv and namesrv modules"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-86"},"ROCKETMQ-86"),"] - Polish the release file format"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-88"},"ROCKETMQ-88"),"] - Polish the developer list in pom.xml"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-90"},"ROCKETMQ-90"),"] - Include client IP per message queue of consumer progress command output"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-114"},"ROCKETMQ-114"),"] - Add javadoc to codebase"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-138"},"ROCKETMQ-138"),"] - Add AuthenticationException class to remove hard coded Aliyun authentication class"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-139"},"ROCKETMQ-139"),"] - Degrade the client related modules' JDK version to 1.6"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-144"},"ROCKETMQ-144"),"] - Aggregate distribution specific files to a new module"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-154"},"ROCKETMQ-154"),"] - Add a newline after help info"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-160"},"ROCKETMQ-160"),"] - SendHeartBeart log may not be triggered in the same expected period"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-161"},"ROCKETMQ-161"),"] - Update runbroker.sh and runserver.sh to support user defined jvm memory flag"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-168"},"ROCKETMQ-168"),"] - Duplicated calls of life cycle in Maven."),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-172"},"ROCKETMQ-172"),"] - log improvement for rocketmq client"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-176"},"ROCKETMQ-176"),"] - Improvement the Maven Central Badge in readme"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-187"},"ROCKETMQ-187"),"] - Measure the code coverage for Integration Tests"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-148"},"ROCKETMQ-148"),"] - Migrate all relevant docs from the old Github project's wiki to the ASF site"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-218"},"ROCKETMQ-218"),"] - Add IT test for Filter By SQL 92"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-219"},"ROCKETMQ-219"),"] - Add Batch Example"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-220"},"ROCKETMQ-220"),"] - README.md update, remove some github links")),(0,i.yg)("h2",{id:"bug"},"Bug"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-77"},"ROCKETMQ-77"),"] - ","[TEST]"," org.apache.rocketmq.tools.* have NPEs"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-89"},"ROCKETMQ-89"),"] - WS_DOMAIN_NAME, SUBGROUP default values overrides custom values passed by java options"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-95"},"ROCKETMQ-95"),"] - The config files of client log have been damaged"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-98"},"ROCKETMQ-98"),"] - Risk of unable to release putMessage Lock forever"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-101"},"ROCKETMQ-101"),"] - Possible NullPointerException when retry in send Async way"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-107"},"ROCKETMQ-107"),"] - Access ServiceState is not thread safe when start() or shutdown()"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-119"},"ROCKETMQ-119"),"] - Shutdown PullMessageService properly"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-140"},"ROCKETMQ-140"),"] - Register higher version broker against old name servers"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-143"},"ROCKETMQ-143"),"] - Update fastjson from 1.2.12 to 1.2.29"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-145"},"ROCKETMQ-145"),"] - Hit ConcurrentModificationException in doWaitTransfer which happens very offen"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-153"},"ROCKETMQ-153"),"] - Fetch name server address dynamically"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-155"},"ROCKETMQ-155"),"] - Fix typo in ClientConfig"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-165"},"ROCKETMQ-165"),"] - Maximum pull batch size hard-coded restricted"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-175"},"ROCKETMQ-175"),"] - Consumer may miss messages because of inconsistent subscription"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-178"},"ROCKETMQ-178"),"] - Broker -m -p options are broken"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-179"},"ROCKETMQ-179"),"] - Fix errors of test cases"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-188"},"ROCKETMQ-188"),"] - RemotingExecption is not consistent between invoke async and invoke oneway"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-189"},"ROCKETMQ-189"),"] - Misleading tip on consumeTimestamp and wrong consumeTimestamp exception message"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-191"},"ROCKETMQ-191"),"] - Fix incorret socket option"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-199"},"ROCKETMQ-199"),"] - consumers can not receive stock information."),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-200"},"ROCKETMQ-200"),"] - Cluster name is always missing when fetch ClusterInfo from name server"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-206"},"ROCKETMQ-206"),"] - Load JSON config file error if non-1byte character exists"),(0,i.yg)("li",{parentName:"ul"},"[",(0,i.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/ROCKETMQ-208"},"ROCKETMQ-208"),"] - incompatibility problem found in enviroment of JDK 1.7 when running client")))}u.isMDXComponent=!0}}]);