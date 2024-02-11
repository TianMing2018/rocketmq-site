"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6240],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>y});var n=r(11504);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(r),m=l,y=g["".concat(c,".").concat(m)]||g[m]||s[m]||i;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[g]="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(45072),l=(r(11504),r(95788));const i={},a="Github\u63d0\u4ea4PR",o={unversionedId:"contributionGuide/03pull-request",id:"contributionGuide/03pull-request",title:"Github\u63d0\u4ea4PR",description:"\u672c\u6587\u5c06\u5f15\u5bfc\u60a8\u901a\u8fc7 Git \u8d21\u732e RocketMQ",source:"@site/docs/11-contributionGuide/03pull-request.md",sourceDirName:"11-contributionGuide",slug:"/contributionGuide/03pull-request",permalink:"/zh/docs/4.x/contributionGuide/03pull-request",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/11-contributionGuide/03pull-request.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"\u4ee3\u7801\u6307\u5357",permalink:"/zh/docs/4.x/contributionGuide/02code-guidelines"},next:{title:"\u53d1\u5e03\u624b\u518c",permalink:"/zh/docs/4.x/contributionGuide/04release-manual"}},c={},p=[{value:"Github \u8fdc\u7a0b\u4ed3\u5e93",id:"github-\u8fdc\u7a0b\u4ed3\u5e93",level:2},{value:"Git \u8d21\u732e\u6307\u5357",id:"git-\u8d21\u732e\u6307\u5357",level:2},{value:"Github \u63d0\u4ea4 PR",id:"github-\u63d0\u4ea4-pr",level:2},{value:"\u5408\u5e76 PR",id:"\u5408\u5e76-pr",level:2},{value:"\u62d2\u7edd PR",id:"\u62d2\u7edd-pr",level:2}],u={toc:p},g="wrapper";function s(e){let{components:t,...i}=e;return(0,l.yg)(g,(0,n.c)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"github\u63d0\u4ea4pr"},"Github\u63d0\u4ea4PR"),(0,l.yg)("p",null,"\u672c\u6587\u5c06\u5f15\u5bfc\u60a8\u901a\u8fc7 Git \u8d21\u732e RocketMQ"),(0,l.yg)("h2",{id:"github-\u8fdc\u7a0b\u4ed3\u5e93"},"Github \u8fdc\u7a0b\u4ed3\u5e93"),(0,l.yg)("p",null,"\u672c\u5c0f\u8282\u4f5c\u4e3a\u524d\u7f6e\u77e5\u8bc6\uff0c\u7b80\u8981\u8bf4\u660e\u4f7f\u7528 Git \u8d21\u732e RocketMQ \u539f\u56e0\uff0c\u6709\u76f8\u5173\u57fa\u7840\u7684\u540c\u5b66\u53ef\u4ee5\u81ea\u884c\u8df3\u8fc7"),(0,l.yg)("p",null,"\u9996\u5148\u60a8\u9700\u8981\u81ea\u884c\u4e86\u89e3 Git \u548c GitHub \u76f8\u5173\u6982\u5ff5"),(0,l.yg)("p",null,"\u601d\u8003\uff1a\u4ece\u5f00\u53d1\u8005\u89d2\u5ea6\uff0c\u5982\u4f55\u4e0e\u4ed6\u4eba\u534f\u4f5c\u5b8c\u6210\u9879\u76ee\uff1f"),(0,l.yg)("p",null,"\u5982\u679c\u60a8\u60f3\u5230\u901a\u8fc7\u6253\u5305\u538b\u7f29\u7136\u540e\u590d\u5236\u7c98\u8d34\u7684\u65b9\u5f0f\uff0c\u90a3\u4e48\u8bf7\u518d\u8bd5\u60f3\u4e00\u4e0b\u6269\u5927\u53c2\u4e0e\u8005\u7684\u8303\u56f4\u81f3 10k+ \u7ea7\u522b"),(0,l.yg)("p",null,"\u8fd9\u5c31\u662f\u8fdc\u7a0b\u4ed3\u5e93\u7684\u610f\u4e49\uff1a\u5f00\u53d1\u8005\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u4ece GitHub \u4e0a\u83b7\u53d6\u4ed3\u5e93\u4ee3\u7801\uff0c\u5e76\u63d0\u4ea4\u5f00\u53d1\u5206\u652f\u5230\u8fdc\u7a0b\u4ed3\u5e93\u4e0e\u4ed6\u4eba\u4ea4\u6d41\u548c\u5171\u4eab"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"1656601484232",src:r(71820).c,width:"1032",height:"480"})),(0,l.yg)("p",null,"\u90a3\u4e48\uff0c\u6709\u4e86\u8fd9\u4e2a\u516c\u5171\u4ed3\u5e93\uff0c\u7136\u540e\u5462\uff1f"),(0,l.yg)("p",null,"\u5982\u4f55\u4e0b\u8f7d\u8fdc\u7a0b\u4ed3\u5e93\u7684\u4ee3\u7801\uff1f"),(0,l.yg)("p",null,"\u5982\u4f55\u63d0\u4ea4\u5f00\u53d1\u5206\u652f\u5230\u8fdc\u7a0b\u4ed3\u5e93\uff1f"),(0,l.yg)("h2",{id:"git-\u8d21\u732e\u6307\u5357"},"Git \u8d21\u732e\u6307\u5357"),(0,l.yg)("p",null,"\u2460 fork ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq"},"apache/rocketmq")," \u4ed3\u5e93\u81f3\u4e2a\u4eba GitHub \u8fdc\u7a0b\u4ed3\u5e93"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"https://github.com/cuser/rocketmq.git # cuser's rocketmq repo[repository] url\n")),(0,l.yg)("p",null,"\u8bf4\u660e\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"cuser")," GitHub\u7528\u6237\u540d\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"Fork")," \u540e\u53ef\u901a\u8fc7\u4e2a\u4eba\u4e3b\u9875 Repositories \uff0c\u627e\u5230\u590d\u523b\u4ed3\u5e93\u5e76\u67e5\u770b\u5730\u5740"),(0,l.yg)("p",null,"\u2461 \u81ea\u884c\u5b89\u88c5 Git \u5e76\u514b\u9686\u5230\u672c\u5730\u4ed3\u5e93"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/cuser/rocketmq.git # git clone [repo url]\n")),(0,l.yg)("p",null,"\u8bf4\u660e\uff1a\u514b\u9686\u5230\u7684\u672c\u5730\u4ed3\u5e93\u4f1a\u4ee5 GitHub \u4ed3\u5e93\u4f5c\u4e3a\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u5e76\u4ee5",(0,l.yg)("inlineCode",{parentName:"p"},"origin"),"\u547d\u540d\u8fdc\u7a0b\u4ed3\u5e93"),(0,l.yg)("p",null,"\u2462 \u83b7\u53d6\u5f00\u53d1\u5206\u652f\u6700\u65b0\u4ee3\u7801"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"$ git rebase origin/develop # git rebase [branch]\n")),(0,l.yg)("p",null,"\u8bf4\u660e\uff1a ",(0,l.yg)("a",{parentName:"p",href:"https://git-scm.com/docs/git-rebase"},"rebase",(0,l.yg)("inlineCode",{parentName:"a"}," <branch>"))," \u57fa\u672c\u8bf4\u6cd5\u662f\u6362\u57fa\uff0c\u53ef\u901a\u8fc7\u94fe\u63a5\u793a\u4f8b\u4e86\u89e3\u8be5\u6b65\u7684\u5fc5\u8981\u6027"),(0,l.yg)("p",null,"\u2463 \u5728\u672c\u5730\u4ed3\u5e93\u6267\u884c\u66f4\u6539"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'$ git checkout -b RocketMQ-Vxx.0 # git checkout [-b] [new-branch]\n$ git add /rocketmq/pom.xml # git add [dir/file]\n$ git commit -a -m "pom"    # git commit [-all] [-msg] [message]\n')),(0,l.yg)("p",null,"\u8bf4\u660e\uff1a \u53c2\u8003",(0,l.yg)("a",{parentName:"p",href:"https://git-scm.com/docs/git-add"},"Git"),"\u4e86\u89e3\u8be6\u60c5\uff0c\u4f7f\u7528\u76f8\u5bf9\u8def\u5f84\u8bf7\u5207\u6362\u81f3 ",(0,l.yg)("inlineCode",{parentName:"p"},".git")," \u540c\u7ea7\u76ee\u5f55"),(0,l.yg)("p",null,"\u2464 \u63a8\u9001\u66f4\u6539\u5230\u8fdc\u7a0b\u4ed3\u5e93"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"$ git push --set-upstream apache RocketMQ-Vxx.0 # push branch to https://github.com/cuser/rocketmq-site.git\n")),(0,l.yg)("h2",{id:"github-\u63d0\u4ea4-pr"},"Github \u63d0\u4ea4 PR"),(0,l.yg)("p",null,"\u5982\u4e0b\uff1a\u4ee5\u63d0\u4ea4 PR \u81f3 ",(0,l.yg)("inlineCode",{parentName:"p"},"new-official-website")," \u5206\u652f\u4e3a\u4f8b\u8bf4\u660e PR \u6d41\u7a0b"),(0,l.yg)("p",null,"\u53c2\u7167",(0,l.yg)("inlineCode",{parentName:"p"},"Git \u8d21\u732e\u6307\u5357"),"\u5728\u672c\u5730\u4ed3\u5e93\u4fee\u6539\u5b8c\u6bd5\uff0c\u5e76\u5c06\u8be5\u5206\u652f\u63a8\u9001\u5230 Github \u8fdc\u7a0b\u4ed3\u5e93"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"$ git checkout new-official-website # git checkout -b new-official-website\n$ git push origin new-official-website  # push to https://github.com/cuser/rocketmq-site.git\n")),(0,l.yg)("p",null,"\u2460 Github \u8fdc\u7a0b\u4ed3\u5e93\u5207\u6362\u81f3\u5f00\u53d1\u5206\u652f new-official-website"),(0,l.yg)("p",null,"\u2461 \u521b\u5efa\u5408\u5e76\u8bf7\u6c42\uff0c\u70b9\u51fb Contribute \u4e0b\u7684 Open pull request"),(0,l.yg)("p",null,"\u2462 compare across forks \u9009\u62e9\u8bf7\u6c42\u5206\u652f\u548c\u5f00\u53d1\u5206\u652f"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"1656580236831",src:r(77880).c,width:"922",height:"69"})),(0,l.yg)("p",null,"base repository / base : \u8bf7\u6c42\u4ed3\u5e93\u53ca\u8bf7\u6c42\u5206\u652f"),(0,l.yg)("p",null,"head repository / compare : \u5f00\u53d1\u4ed3\u5e93\u53ca\u5f00\u53d1\u5206\u652f"),(0,l.yg)("p",null,"\u6ce8\u610f\u8bf7\u52a1\u5fc5\u6b63\u786e\u9009\u62e9\u8bf7\u6c42\u5206\u652f\u4e0e\u5f00\u53d1\u5206\u652f\uff0c\u5e76\u8bf7\u5728\u5f97\u5230\u5206\u652f\u6240\u6709\u8005\u8bb8\u53ef\u540e\u518d\u8bf7\u6c42\u5408\u5165"),(0,l.yg)("p",null,"\u2463 \u586b\u5199\u9996\u5b57\u6bcd\u5927\u5199\u7684 PR \u6458\u8981\uff0c\u5e76\u5728 Write \u6807\u7b7e\u4e0b\u7b80\u8981\u63cf\u8ff0 PR \u5185\u5bb9"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"1656589498318",src:r(35820).c,width:"776",height:"177"})),(0,l.yg)("p",null,"\u200b\t\u63d0\u4ea4 PR \u524d\uff0c\u8bf7\u5148\u505a\u5982\u4e0b\u786e\u8ba4\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u5df2\u521b\u5efa\u4e0e PR \u5bf9\u5e94\u7684 ","[GitHub Issue]","( ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/issues"},"apache/rocketmq: Mirror of Apache RocketMQ (github.com)")," )"),(0,l.yg)("li",{parentName:"ol"},"\u4fee\u6539\u5185\u5bb9\u7b26\u5408 ",(0,l.yg)("a",{parentName:"li",href:"/docs/contributionGuide/02code-guidelines"},"Coding Guidelines")," \u7f16\u7a0b\u89c4\u8303"),(0,l.yg)("li",{parentName:"ol"},"PR \u6458\u8981\u4ee5 ","[ISSUE #XXX]"," \u5f00\u59cb\u5e76\u7b80\u8981\u63cf\u8ff0\u53d8\u66f4\u9700\u6c42"),(0,l.yg)("li",{parentName:"ol"},"\u6982\u8ff0 PR \u53d8\u66f4\u9700\u6c42\uff0c\u53d8\u66f4\u65e5\u5fd7\uff0c\u9a8c\u8bc1\u4fe1\u606f\uff0c\u53ef\u53c2\u8003 ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/pull/152"},"PR Demo")," "),(0,l.yg)("li",{parentName:"ol"},"\u63d0\u4ea4\u5185\u5bb9\u5177\u5907\u5b8c\u6574\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u5e76\u786e\u4fdd\u57fa\u672c\u68c0\u67e5\uff0c\u5355\u5143\u6d4b\u8bd5\uff0c\u96c6\u6210\u6d4b\u8bd5\u901a\u8fc7")),(0,l.yg)("p",null,'\u2464 \u70b9\u51fb "Create pull request" \uff0c\u8bf7\u6c42\u5408\u5e76\u8be5\u5206\u652f'),(0,l.yg)("p",null,"\u2465 \u81f3\u6b64\uff0cPR \u5df2\u7ecf\u5728 apache/rocketmq-site \u8fdc\u7a0b\u4ed3\u5e93\u4e0a\u53ef\u89c1\uff0c\u6240\u6709\u534f\u4f5c\u8005\u90fd\u53ef\u4ee5 Review \u8be5PR \u5e76\u63d0\u4f9b\u5efa\u8bae"),(0,l.yg)("p",null,"\u60a8\u53ef\u4ee5\u6839\u636e\u8bc4\u8bba\u5728\u672c\u5730\u5b8c\u6210\u4fee\u6539\u5e76\u8fdb\u884c\u591a\u6b21\u63d0\u4ea4\u3002\u8bf7\u6c42\u5408\u5e76\u548c\u63d0\u4ea4\u4fee\u6539\u7684\u76f8\u5173\u4fe1\u606f\u4f1a\u540c\u6b65\u5c55\u793a\u5728 PR \u9875\u9762\u3001issue \u5217\u8868\u3001RocketMQ \u7684\u90ae\u4ef6\u5217\u8868\u4e2d\uff0c\u4ee5\u4fbf\u63d0\u9192 committer \u53ca\u65f6\u5ba1\u6838 PR"),(0,l.yg)("h2",{id:"\u5408\u5e76-pr"},"\u5408\u5e76 PR"),(0,l.yg)("p",null,"\u5f00\u6e90\u9879\u76ee\u5f00\u53d1\u5206\u652f\u5408\u5e76\u7531 committer \u5b8c\u6210\u3002"),(0,l.yg)("p",null,"\u2460 \u5408\u5e76 contributor PR"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"$ git checkout develop  # switch to local develop branch\n$ git pull apache develop   # fast-forward to current remote HEAD\n$ git pull --squash https://github.com/cuser/rocketmq.git RocketMQ-Vxx.0  # merge to branch\n")),(0,l.yg)("p",null,"\u62c9\u53d6\u7684\u8bf7\u6c42\u5408\u5e76\u5206\u652f\u53ef\u80fd\u5305\u542b\u591a\u6b21\u63d0\u4ea4\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"--squash")," \u6307\u4ee4\u538b\u7f29\u4e3a\u4e00\u6b21 commit"),(0,l.yg)("p",null,"\u5408\u5e76\u524d\u52a1\u5fc5\u8981\u89e3\u51b3\u5408\u5e76\u51b2\u7a81\uff0c\u5e76\u786e\u4fdd\u5f53\u524d\u5206\u652f\u540c\u6b65\u4e8e\u8fdc\u7a0b\u5206\u652f"),(0,l.yg)("p",null,"\u8bf7\u9605\u8bfb ","[Git pull]","( ",(0,l.yg)("a",{parentName:"p",href:"https://git-scm.com/docs/git-pull"},"Git - git-pull Documentation (git-scm.com)")," ) \u4e86\u89e3 fast-forward \u7b49\u76f8\u5173\u8be6\u60c5"),(0,l.yg)("p",null,"\u2461 \u5408\u5e76 committer PR"),(0,l.yg)("p",null,"\u82e5 committer \u5408\u5e76\u81ea\u5df1\u7684 PR , \u4f7f\u7528 ","[Git merge]","( ",(0,l.yg)("a",{parentName:"p",href:"https://git-scm.com/docs/git-merge"},"Git - git-merge Documentation (git-scm.com)")," ) \u5373\u53ef"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"$ git checkout develop      # switch to local develop branch\n$ git pull apache develop   # fast-forward to current remote HEAD\n$ git merge --squash RocketMQ-Vxx.0 # merge to branch\n")),(0,l.yg)("p",null,"\u2462 \u8fdb\u884c\u5e38\u89c4\u7684\u8865\u4e01\u68c0\u67e5\uff0c\u4f7f\u7528\u5185\u7f6e\u7684\u6d4b\u8bd5\u7528\u4f8b\u6784\u5efa\u9879\u76ee\uff0c\u5e76\u8bf7\u52a1\u5fc5\u4fee\u6539 changelog "),(0,l.yg)("p",null,"\u2463 \u82e5\u4e0a\u8ff0\u5de5\u4f5c\u5747\u5df2\u5b8c\u6210\uff0c\u53ef\u4ee5\u6267\u884c\u4e0b\u9762\u7684\u6307\u4ee4\u63d0\u4ea4\u5408\u5e76\uff0c\u56de\u9988\u5f00\u53d1\u8005\u5206\u652f\u72b6\u6001\uff0c\u5e76\u5173\u95ed PR"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'$ git commit --author="contributor_name <contributor_email>" -a -m "RocketMQ-Vxx.0 description closes apache/rocketmq#ZZ"\n')),(0,l.yg)("p",null,"\u5173\u95ed PR \u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u8003 ",(0,l.yg)("a",{parentName:"p",href:"https://docs.github.com/cn/issues/tracking-your-work-with-issues/closing-an-issue"},"Close PR")," "),(0,l.yg)("p",null,"\u2464 \u5c06\u5408\u5e76\u540e\u7684\u5206\u652f\u63a8\u9001\u5230 apache/rocketmq \u8fdc\u7a0b\u4ed3\u5e93"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"$ git push apache develop\n")),(0,l.yg)("p",null,"\u2465 PR \u88ab\u63d0\u4ea4\u540e\uff0c\u4f1a\u4fdd\u7559\u5230 GitHub \u8fdc\u7a0b\u4ed3\u5e93\uff0c\u4e5f\u53ef\u4ee5\u540c\u6b65\u66f4\u65b0\u4e2a\u4eba GitHub \u4ed3\u5e93"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"$ git push origin develop\n")),(0,l.yg)("p",null,"\u5173\u4e8e\u5408\u5e76\u4fee\u6539\u7684\u5efa\u8bae\uff1asquash \u4f1a\u4e22\u5f03\u5f00\u53d1\u5206\u652f\u7684 commit \u4fe1\u606f"),(0,l.yg)("h2",{id:"\u62d2\u7edd-pr"},"\u62d2\u7edd PR"),(0,l.yg)("p",null,"\u62d2\u7edd PR \uff1a\u610f\u5473\u7740\u5e76\u4e0d\u6267\u884c pull \u6216 merge\uff0c\u800c\u4ec5\u4ec5\u63d0\u4ea4\u62d2\u7edd PR \u4fe1\u606f"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SHELL"},'$ git commit --allow-empty -m "RocketMQ-Vxx.0 closes apache/rocketmq#ZZ *Won\'t fix*"\n$ git push apache develop\n')),(0,l.yg)("p",null,"\u5173\u95ed Github \u4e0a\u7f16\u53f7 #ZZ \u7684 PR"))}s.isMDXComponent=!0},71820:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/1_Github-84c9eac1be749cc78c0570e6e6b4fafe.png"},77880:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/2_compare-e6e43b6f317598e536eb244233a5e50e.png"},35820:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/3_Write-531b30b458285686e95f5f1ad01f2f33.png"}}]);