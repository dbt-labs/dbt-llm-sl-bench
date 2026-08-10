import{s as ct,d as m,i as d,a as De,b as y,c as _,h as ft,e as U,f as Fe,g as Te,j as u,k as j,l as We,m as mt,o as dt,n as pt,p as ht,q as ke,r as _t,t as ut,u as wt}from"../chunks/scheduler.DjHbl-jX.js";import{S as bt,i as yt,d as v,t as w,a as h,c as Ae,m as L,b as M,e as I,g as Ne}from"../chunks/index.DylIKcrZ.js";import{D as gt,e as $t,s as vt,Q as Se,p as Lt,C as be,a as Je,r as Ze,b as Mt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.kER0PSqm.js";import{w as It}from"../chunks/entry.BfpcsIwc.js";import{h as W,p as qt}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{D as et}from"../chunks/Dropdown.DqFeXCn_.js";import{p as Tt}from"../chunks/stores.BXHYO_Ly.js";import{Q as Ce}from"../chunks/QueryViewer.qnA2b7VW.js";import{B as He}from"../chunks/BarChart.CbiNYXBk.js";import{S as je}from"../chunks/ScatterPlot.BGJlhnG6.js";function At(i){let a,o=g.title+"",t;return{c(){a=j("h1"),t=wt(o),this.h()},l(n){a=U(n,"H1",{class:!0});var c=_t(a);t=ut(c,o),c.forEach(m),this.h()},h(){y(a,"class","title")},m(n,c){d(n,a,c),De(a,t)},p:ke,d(n){n&&m(a)}}}function Nt(i){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:ke,p:ke,d:ke}}function St(i){let a,o,t,n,c;return document.title=a=g.title,{c(){o=u(),t=j("meta"),n=u(),c=j("meta"),this.h()},l(r){o=_(r),t=U(r,"META",{property:!0,content:!0}),n=_(r),c=U(r,"META",{name:!0,content:!0}),this.h()},h(){var r,p;y(t,"property","og:title"),y(t,"content",((r=g.og)==null?void 0:r.title)??g.title),y(c,"name","twitter:title"),y(c,"content",((p=g.og)==null?void 0:p.title)??g.title)},m(r,p){d(r,o,p),d(r,t,p),d(r,n,p),d(r,c,p)},p(r,p){p&0&&a!==(a=g.title)&&(document.title=a)},d(r){r&&(m(o),m(t),m(n),m(c))}}}function kt(i){var c,r;let a,o,t=(g.description||((c=g.og)==null?void 0:c.description))&&Ct(),n=((r=g.og)==null?void 0:r.image)&&xt();return{c(){t&&t.c(),a=u(),n&&n.c(),o=Fe()},l(p){t&&t.l(p),a=_(p),n&&n.l(p),o=Fe()},m(p,T){t&&t.m(p,T),d(p,a,T),n&&n.m(p,T),d(p,o,T)},p(p,T){var f,Z;(g.description||(f=g.og)!=null&&f.description)&&t.p(p,T),(Z=g.og)!=null&&Z.image&&n.p(p,T)},d(p){p&&(m(a),m(o)),t&&t.d(p),n&&n.d(p)}}}function Ct(i){let a,o,t,n,c;return{c(){a=j("meta"),o=u(),t=j("meta"),n=u(),c=j("meta"),this.h()},l(r){a=U(r,"META",{name:!0,content:!0}),o=_(r),t=U(r,"META",{property:!0,content:!0}),n=_(r),c=U(r,"META",{name:!0,content:!0}),this.h()},h(){var r,p,T;y(a,"name","description"),y(a,"content",g.description??((r=g.og)==null?void 0:r.description)),y(t,"property","og:description"),y(t,"content",((p=g.og)==null?void 0:p.description)??g.description),y(c,"name","twitter:description"),y(c,"content",((T=g.og)==null?void 0:T.description)??g.description)},m(r,p){d(r,a,p),d(r,o,p),d(r,t,p),d(r,n,p),d(r,c,p)},p:ke,d(r){r&&(m(a),m(o),m(t),m(n),m(c))}}}function xt(i){let a,o,t;return{c(){a=j("meta"),o=u(),t=j("meta"),this.h()},l(n){a=U(n,"META",{property:!0,content:!0}),o=_(n),t=U(n,"META",{name:!0,content:!0}),this.h()},h(){var n,c;y(a,"property","og:image"),y(a,"content",Je((n=g.og)==null?void 0:n.image)),y(t,"name","twitter:image"),y(t,"content",Je((c=g.og)==null?void 0:c.image))},m(n,c){d(n,a,c),d(n,o,c),d(n,t,c)},p:ke,d(n){n&&(m(a),m(o),m(t))}}}function tt(i){let a,o;return a=new Ce({props:{queryID:"available_base_models",queryResult:i[0]}}),{c(){I(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,n){L(a,t,n),o=!0},p(t,n){const c={};n[0]&1&&(c.queryResult=t[0]),a.$set(c)},i(t){o||(h(a.$$.fragment,t),o=!0)},o(t){w(a.$$.fragment,t),o=!1},d(t){v(a,t)}}}function at(i){let a,o;return a=new Ce({props:{queryID:"available_efforts",queryResult:i[1]}}),{c(){I(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,n){L(a,t,n),o=!0},p(t,n){const c={};n[0]&2&&(c.queryResult=t[1]),a.$set(c)},i(t){o||(h(a.$$.fragment,t),o=!0)},o(t){w(a.$$.fragment,t),o=!1},d(t){v(a,t)}}}function ot(i){let a,o;return a=new Ce({props:{queryID:"model_summary",queryResult:i[2]}}),{c(){I(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,n){L(a,t,n),o=!0},p(t,n){const c={};n[0]&4&&(c.queryResult=t[2]),a.$set(c)},i(t){o||(h(a.$$.fragment,t),o=!0)},o(t){w(a.$$.fragment,t),o=!1},d(t){v(a,t)}}}function Rt(i){let a,o,t,n,c,r,p,T,f,Z,N,H,A,D,X,B,Y,F,q,J;return a=new be({props:{id:"Model"}}),t=new be({props:{id:"Effort"}}),c=new be({props:{id:"Method"}}),p=new be({props:{id:"Runs",fmt:"num0"}}),f=new be({props:{id:"Accuracy %",fmt:"num1",contentType:"colorscale",colorScale:["#ff4444","#44bb44"]}}),N=new be({props:{id:"Avg Latency (s)",fmt:"num2"}}),A=new be({props:{id:"Median Latency (s)",fmt:"num2"}}),X=new be({props:{id:"Avg Cost ($)",fmt:"num4"}}),Y=new be({props:{id:"Total Cost ($)",fmt:"num4"}}),q=new be({props:{id:"Correct / $",fmt:"num0"}}),{c(){I(a.$$.fragment),o=u(),I(t.$$.fragment),n=u(),I(c.$$.fragment),r=u(),I(p.$$.fragment),T=u(),I(f.$$.fragment),Z=u(),I(N.$$.fragment),H=u(),I(A.$$.fragment),D=u(),I(X.$$.fragment),B=u(),I(Y.$$.fragment),F=u(),I(q.$$.fragment)},l(s){M(a.$$.fragment,s),o=_(s),M(t.$$.fragment,s),n=_(s),M(c.$$.fragment,s),r=_(s),M(p.$$.fragment,s),T=_(s),M(f.$$.fragment,s),Z=_(s),M(N.$$.fragment,s),H=_(s),M(A.$$.fragment,s),D=_(s),M(X.$$.fragment,s),B=_(s),M(Y.$$.fragment,s),F=_(s),M(q.$$.fragment,s)},m(s,b){L(a,s,b),d(s,o,b),L(t,s,b),d(s,n,b),L(c,s,b),d(s,r,b),L(p,s,b),d(s,T,b),L(f,s,b),d(s,Z,b),L(N,s,b),d(s,H,b),L(A,s,b),d(s,D,b),L(X,s,b),d(s,B,b),L(Y,s,b),d(s,F,b),L(q,s,b),J=!0},p:ke,i(s){J||(h(a.$$.fragment,s),h(t.$$.fragment,s),h(c.$$.fragment,s),h(p.$$.fragment,s),h(f.$$.fragment,s),h(N.$$.fragment,s),h(A.$$.fragment,s),h(X.$$.fragment,s),h(Y.$$.fragment,s),h(q.$$.fragment,s),J=!0)},o(s){w(a.$$.fragment,s),w(t.$$.fragment,s),w(c.$$.fragment,s),w(p.$$.fragment,s),w(f.$$.fragment,s),w(N.$$.fragment,s),w(A.$$.fragment,s),w(X.$$.fragment,s),w(Y.$$.fragment,s),w(q.$$.fragment,s),J=!1},d(s){s&&(m(o),m(n),m(r),m(T),m(Z),m(H),m(D),m(B),m(F)),v(a,s),v(t,s),v(c,s),v(p,s),v(f,s),v(N,s),v(A,s),v(X,s),v(Y,s),v(q,s)}}}function rt(i){let a,o;return a=new Ce({props:{queryID:"accuracy_chart",queryResult:i[3]}}),{c(){I(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,n){L(a,t,n),o=!0},p(t,n){const c={};n[0]&8&&(c.queryResult=t[3]),a.$set(c)},i(t){o||(h(a.$$.fragment,t),o=!0)},o(t){w(a.$$.fragment,t),o=!1},d(t){v(a,t)}}}function lt(i){let a,o;return a=new Ce({props:{queryID:"latency_chart",queryResult:i[4]}}),{c(){I(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,n){L(a,t,n),o=!0},p(t,n){const c={};n[0]&16&&(c.queryResult=t[4]),a.$set(c)},i(t){o||(h(a.$$.fragment,t),o=!0)},o(t){w(a.$$.fragment,t),o=!1},d(t){v(a,t)}}}function st(i){let a,o;return a=new Ce({props:{queryID:"cost_chart",queryResult:i[5]}}),{c(){I(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,n){L(a,t,n),o=!0},p(t,n){const c={};n[0]&32&&(c.queryResult=t[5]),a.$set(c)},i(t){o||(h(a.$$.fragment,t),o=!0)},o(t){w(a.$$.fragment,t),o=!1},d(t){v(a,t)}}}function nt(i){let a,o;return a=new Ce({props:{queryID:"tradeoff",queryResult:i[6]}}),{c(){I(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,n){L(a,t,n),o=!0},p(t,n){const c={};n[0]&64&&(c.queryResult=t[6]),a.$set(c)},i(t){o||(h(a.$$.fragment,t),o=!0)},o(t){w(a.$$.fragment,t),o=!1},d(t){v(a,t)}}}function Et(i){let a,o,t,n,c,r,p='Each model was given 11 insurance-domain questions (claims, policies, premiums) and asked to answer them via two methods: <strong class="markdown">Semantic Layer</strong> (MetricFlow queries) and <strong class="markdown">SQL</strong> (direct SQL generation). Each model/effort combination was run multiple times to account for variance.',T,f,Z='<p class="markdown"><strong class="markdown">Note:</strong> Runs on this page use the schema <strong class="markdown">with modeling</strong> (additional dbt models resolve the &quot;too many hops&quot; limitation, so all 11 questions are answerable by both methods). The <code class="markdown">mcp</code> strategy is excluded from this page.</p>',N,H,A,D,X,B,Y,F,q,J='<a href="#summary">Summary</a>',s,b,$e,O,ce='<a href="#accuracy">Accuracy</a>',fe,me,ee,ve,P,de='<a href="#latency">Latency</a>',pe,he,te,Le,z,ae,K,xe='<a href="#cost">Cost</a>',Me,_e,G,oe,V,Re='<a href="#tradeoffs">Tradeoffs</a>',Ie,re,ue='<em class="markdown">Ideal: top-left corner (high accuracy, low cost/latency)</em>',le,se,ne,qe,ie,$,we,Qe,ye=typeof g<"u"&&g.title&&g.hide_title!==!0&&At();function it(e,l){return typeof g<"u"&&g.title?St:Nt}let Ee=it()(i),ge=typeof g=="object"&&kt(),S=i[0]&&tt(i),k=i[1]&&at(i);D=new et({props:{data:i[0],name:"selected_base_models",value:"base_model",multiple:"true",selectAllByDefault:"true",title:"Select Models"}}),B=new et({props:{data:i[1],name:"selected_efforts",value:"effort",multiple:"true",selectAllByDefault:"true",title:"Select Effort"}});let C=i[2]&&ot(i);b=new gt({props:{data:i[2],search:"true",rows:"all",$$slots:{default:[Rt]},$$scope:{ctx:i}}});let x=i[3]&&rt(i);ee=new He({props:{data:i[3],title:"Accuracy by Model",x:"Model",y:"Accuracy %",series:"Method",type:"grouped",swapXY:"true",sort:"false",yMax:"100",yAxisTitle:"Accuracy %"}});let R=i[4]&&lt(i);te=new He({props:{data:i[4],title:"Average Latency by Model",x:"Model",y:"Avg Latency (s)",series:"Method",type:"grouped",swapXY:"true",sort:"false",yAxisTitle:"Seconds"}}),z=new He({props:{data:i[4],title:"Median Latency by Model",x:"Model",y:"Median Latency (s)",series:"Method",type:"grouped",swapXY:"true",sort:"false",yAxisTitle:"Seconds"}});let E=i[5]&&st(i);G=new He({props:{data:i[5],title:"Average Cost per Query",x:"Model",y:"Avg Cost ($)",series:"Method",type:"grouped",swapXY:"true",sort:"false",yAxisTitle:"Cost ($)"}});let Q=i[6]&&nt(i);return ne=new je({props:{data:i[6],title:"Accuracy vs Cost",x:"Avg Cost ($)",y:"Accuracy %",series:"Method",tooltipTitle:"Config",xAxisTitle:"Avg Cost per Query ($)",yAxisTitle:"Accuracy %",yMax:"100"}}),ie=new je({props:{data:i[6],title:"Accuracy vs Latency",x:"Avg Latency (s)",y:"Accuracy %",series:"Method",tooltipTitle:"Config",xAxisTitle:"Avg Latency (s)",yAxisTitle:"Accuracy %",yMax:"100"}}),we=new je({props:{data:i[6],title:"Cost vs Latency",x:"Avg Latency (s)",y:"Avg Cost ($)",series:"Method",tooltipTitle:"Config",xAxisTitle:"Avg Latency (s)",yAxisTitle:"Avg Cost per Query ($)"}}),{c(){ye&&ye.c(),a=u(),Ee.c(),o=j("meta"),t=j("meta"),ge&&ge.c(),n=Fe(),c=u(),r=j("p"),r.innerHTML=p,T=u(),f=j("blockquote"),f.innerHTML=Z,N=u(),S&&S.c(),H=u(),k&&k.c(),A=u(),I(D.$$.fragment),X=u(),I(B.$$.fragment),Y=u(),C&&C.c(),F=u(),q=j("h2"),q.innerHTML=J,s=u(),I(b.$$.fragment),$e=u(),O=j("h2"),O.innerHTML=ce,fe=u(),x&&x.c(),me=u(),I(ee.$$.fragment),ve=u(),P=j("h2"),P.innerHTML=de,pe=u(),R&&R.c(),he=u(),I(te.$$.fragment),Le=u(),I(z.$$.fragment),ae=u(),K=j("h2"),K.innerHTML=xe,Me=u(),E&&E.c(),_e=u(),I(G.$$.fragment),oe=u(),V=j("h2"),V.innerHTML=Re,Ie=u(),re=j("p"),re.innerHTML=ue,le=u(),Q&&Q.c(),se=u(),I(ne.$$.fragment),qe=u(),I(ie.$$.fragment),$=u(),I(we.$$.fragment),this.h()},l(e){ye&&ye.l(e),a=_(e);const l=ft("svelte-2igo1p",document.head);Ee.l(l),o=U(l,"META",{name:!0,content:!0}),t=U(l,"META",{name:!0,content:!0}),ge&&ge.l(l),n=Fe(),l.forEach(m),c=_(e),r=U(e,"P",{class:!0,"data-svelte-h":!0}),Te(r)!=="svelte-mucjz9"&&(r.innerHTML=p),T=_(e),f=U(e,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Te(f)!=="svelte-1y5wnj1"&&(f.innerHTML=Z),N=_(e),S&&S.l(e),H=_(e),k&&k.l(e),A=_(e),M(D.$$.fragment,e),X=_(e),M(B.$$.fragment,e),Y=_(e),C&&C.l(e),F=_(e),q=U(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Te(q)!=="svelte-y5osc8"&&(q.innerHTML=J),s=_(e),M(b.$$.fragment,e),$e=_(e),O=U(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Te(O)!=="svelte-nhokin"&&(O.innerHTML=ce),fe=_(e),x&&x.l(e),me=_(e),M(ee.$$.fragment,e),ve=_(e),P=U(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Te(P)!=="svelte-51rye2"&&(P.innerHTML=de),pe=_(e),R&&R.l(e),he=_(e),M(te.$$.fragment,e),Le=_(e),M(z.$$.fragment,e),ae=_(e),K=U(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Te(K)!=="svelte-kik5sb"&&(K.innerHTML=xe),Me=_(e),E&&E.l(e),_e=_(e),M(G.$$.fragment,e),oe=_(e),V=U(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Te(V)!=="svelte-1z0aok"&&(V.innerHTML=Re),Ie=_(e),re=U(e,"P",{class:!0,"data-svelte-h":!0}),Te(re)!=="svelte-80ek0m"&&(re.innerHTML=ue),le=_(e),Q&&Q.l(e),se=_(e),M(ne.$$.fragment,e),qe=_(e),M(ie.$$.fragment,e),$=_(e),M(we.$$.fragment,e),this.h()},h(){y(o,"name","twitter:card"),y(o,"content","summary_large_image"),y(t,"name","twitter:site"),y(t,"content","@evidence_dev"),y(r,"class","markdown"),y(f,"class","markdown"),y(q,"class","markdown"),y(q,"id","summary"),y(O,"class","markdown"),y(O,"id","accuracy"),y(P,"class","markdown"),y(P,"id","latency"),y(K,"class","markdown"),y(K,"id","cost"),y(V,"class","markdown"),y(V,"id","tradeoffs"),y(re,"class","markdown")},m(e,l){ye&&ye.m(e,l),d(e,a,l),Ee.m(document.head,null),De(document.head,o),De(document.head,t),ge&&ge.m(document.head,null),De(document.head,n),d(e,c,l),d(e,r,l),d(e,T,l),d(e,f,l),d(e,N,l),S&&S.m(e,l),d(e,H,l),k&&k.m(e,l),d(e,A,l),L(D,e,l),d(e,X,l),L(B,e,l),d(e,Y,l),C&&C.m(e,l),d(e,F,l),d(e,q,l),d(e,s,l),L(b,e,l),d(e,$e,l),d(e,O,l),d(e,fe,l),x&&x.m(e,l),d(e,me,l),L(ee,e,l),d(e,ve,l),d(e,P,l),d(e,pe,l),R&&R.m(e,l),d(e,he,l),L(te,e,l),d(e,Le,l),L(z,e,l),d(e,ae,l),d(e,K,l),d(e,Me,l),E&&E.m(e,l),d(e,_e,l),L(G,e,l),d(e,oe,l),d(e,V,l),d(e,Ie,l),d(e,re,l),d(e,le,l),Q&&Q.m(e,l),d(e,se,l),L(ne,e,l),d(e,qe,l),L(ie,e,l),d(e,$,l),L(we,e,l),Qe=!0},p(e,l){typeof g<"u"&&g.title&&g.hide_title!==!0&&ye.p(e,l),Ee.p(e,l),typeof g=="object"&&ge.p(e,l),e[0]?S?(S.p(e,l),l[0]&1&&h(S,1)):(S=tt(e),S.c(),h(S,1),S.m(H.parentNode,H)):S&&(Ne(),w(S,1,1,()=>{S=null}),Ae()),e[1]?k?(k.p(e,l),l[0]&2&&h(k,1)):(k=at(e),k.c(),h(k,1),k.m(A.parentNode,A)):k&&(Ne(),w(k,1,1,()=>{k=null}),Ae());const Be={};l[0]&1&&(Be.data=e[0]),D.$set(Be);const Oe={};l[0]&2&&(Oe.data=e[1]),B.$set(Oe),e[2]?C?(C.p(e,l),l[0]&4&&h(C,1)):(C=ot(e),C.c(),h(C,1),C.m(F.parentNode,F)):C&&(Ne(),w(C,1,1,()=>{C=null}),Ae());const Ue={};l[0]&4&&(Ue.data=e[2]),l[1]&8388608&&(Ue.$$scope={dirty:l,ctx:e}),b.$set(Ue),e[3]?x?(x.p(e,l),l[0]&8&&h(x,1)):(x=rt(e),x.c(),h(x,1),x.m(me.parentNode,me)):x&&(Ne(),w(x,1,1,()=>{x=null}),Ae());const Pe={};l[0]&8&&(Pe.data=e[3]),ee.$set(Pe),e[4]?R?(R.p(e,l),l[0]&16&&h(R,1)):(R=lt(e),R.c(),h(R,1),R.m(he.parentNode,he)):R&&(Ne(),w(R,1,1,()=>{R=null}),Ae());const Xe={};l[0]&16&&(Xe.data=e[4]),te.$set(Xe);const Ye={};l[0]&16&&(Ye.data=e[4]),z.$set(Ye),e[5]?E?(E.p(e,l),l[0]&32&&h(E,1)):(E=st(e),E.c(),h(E,1),E.m(_e.parentNode,_e)):E&&(Ne(),w(E,1,1,()=>{E=null}),Ae());const ze={};l[0]&32&&(ze.data=e[5]),G.$set(ze),e[6]?Q?(Q.p(e,l),l[0]&64&&h(Q,1)):(Q=nt(e),Q.c(),h(Q,1),Q.m(se.parentNode,se)):Q&&(Ne(),w(Q,1,1,()=>{Q=null}),Ae());const Ge={};l[0]&64&&(Ge.data=e[6]),ne.$set(Ge);const Ke={};l[0]&64&&(Ke.data=e[6]),ie.$set(Ke);const Ve={};l[0]&64&&(Ve.data=e[6]),we.$set(Ve)},i(e){Qe||(h(S),h(k),h(D.$$.fragment,e),h(B.$$.fragment,e),h(C),h(b.$$.fragment,e),h(x),h(ee.$$.fragment,e),h(R),h(te.$$.fragment,e),h(z.$$.fragment,e),h(E),h(G.$$.fragment,e),h(Q),h(ne.$$.fragment,e),h(ie.$$.fragment,e),h(we.$$.fragment,e),Qe=!0)},o(e){w(S),w(k),w(D.$$.fragment,e),w(B.$$.fragment,e),w(C),w(b.$$.fragment,e),w(x),w(ee.$$.fragment,e),w(R),w(te.$$.fragment,e),w(z.$$.fragment,e),w(E),w(G.$$.fragment,e),w(Q),w(ne.$$.fragment,e),w(ie.$$.fragment,e),w(we.$$.fragment,e),Qe=!1},d(e){e&&(m(a),m(c),m(r),m(T),m(f),m(N),m(H),m(A),m(X),m(Y),m(F),m(q),m(s),m($e),m(O),m(fe),m(me),m(ve),m(P),m(pe),m(he),m(Le),m(ae),m(K),m(Me),m(_e),m(oe),m(V),m(Ie),m(re),m(le),m(se),m(qe),m($)),ye&&ye.d(e),Ee.d(e),m(o),m(t),ge&&ge.d(e),m(n),S&&S.d(e),k&&k.d(e),v(D,e),v(B,e),C&&C.d(e),v(b,e),x&&x.d(e),v(ee,e),R&&R.d(e),v(te,e),v(z,e),E&&E.d(e),v(G,e),Q&&Q.d(e),v(ne,e),v(ie,e),v(we,e)}}}const g={title:"Comparing models and thinking effort - With modeling"};function Qt(i,a,o){let t,n;We(i,Tt,$=>o(38,t=$)),We(i,Ze,$=>o(43,n=$));let{data:c}=a,{data:r={},customFormattingSettings:p,__db:T,inputs:f}=c;mt(Ze,n="1d16de2ed6786a207fb39282ecb328c9",n);let Z=$t(It(f));dt(Z.subscribe($=>o(9,f=$))),pt(Mt,{getCustomFormats:()=>p.customFormats||[]});const N=($,we)=>qt(T.query,$,{query_name:we});vt(N),t.params,ht(()=>!0);let H={initialData:void 0,initialError:void 0},A=W`select distinct
  split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
  and is_successful
order by base_model`,D=`select distinct
  split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
  and is_successful
order by base_model`;r.available_base_models_data&&(r.available_base_models_data instanceof Error?H.initialError=r.available_base_models_data:H.initialData=r.available_base_models_data,r.available_base_models_columns&&(H.knownColumns=r.available_base_models_columns));let X,B=!1;const Y=Se.createReactive({callback:$=>{o(0,X=$)},execFn:N},{id:"available_base_models",...H});Y(D,{noResolve:A,...H}),globalThis[Symbol.for("available_base_models")]={get value(){return X}};let F={initialData:void 0,initialError:void 0},q=W`select distinct
  coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
  and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
  and is_successful
order by case effort
    when '-' then 0 when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
  end`,J=`select distinct
  coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
  and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
  and is_successful
order by case effort
    when '-' then 0 when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
  end`;r.available_efforts_data&&(r.available_efforts_data instanceof Error?F.initialError=r.available_efforts_data:F.initialData=r.available_efforts_data,r.available_efforts_columns&&(F.knownColumns=r.available_efforts_columns));let s,b=!1;const $e=Se.createReactive({callback:$=>{o(1,s=$)},execFn:N},{id:"available_efforts",...F});$e(J,{noResolve:q,...F}),globalThis[Symbol.for("available_efforts")]={get value(){return s}};let O={initialData:void 0,initialError:void 0},ce=W`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
)
select
  base_model as "Model",
  effort as "Effort",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  count(*) as "Runs",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 4) as "Total Cost ($)",
  round(sum(is_correct::int) / nullif(sum(cost), 0), 0) as "Correct / $"
from parsed
group by base_model, effort, method
order by "Accuracy %" desc, "Avg Latency (s)" asc`,fe=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
)
select
  base_model as "Model",
  effort as "Effort",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  count(*) as "Runs",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 4) as "Total Cost ($)",
  round(sum(is_correct::int) / nullif(sum(cost), 0), 0) as "Correct / $"
from parsed
group by base_model, effort, method
order by "Accuracy %" desc, "Avg Latency (s)" asc`;r.model_summary_data&&(r.model_summary_data instanceof Error?O.initialError=r.model_summary_data:O.initialData=r.model_summary_data,r.model_summary_columns&&(O.knownColumns=r.model_summary_columns));let me,ee=!1;const ve=Se.createReactive({callback:$=>{o(2,me=$)},execFn:N},{id:"model_summary",...O});ve(fe,{noResolve:ce,...O}),globalThis[Symbol.for("model_summary")]={get value(){return me}};let P={initialData:void 0,initialError:void 0},de=W`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from parsed
group by base_model, effort, method
order by base_model, case effort
    when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
    else 0 end, method`,pe=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from parsed
group by base_model, effort, method
order by base_model, case effort
    when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
    else 0 end, method`;r.accuracy_chart_data&&(r.accuracy_chart_data instanceof Error?P.initialError=r.accuracy_chart_data:P.initialData=r.accuracy_chart_data,r.accuracy_chart_columns&&(P.knownColumns=r.accuracy_chart_columns));let he,te=!1;const Le=Se.createReactive({callback:$=>{o(3,he=$)},execFn:N},{id:"accuracy_chart",...P});Le(pe,{noResolve:de,...P}),globalThis[Symbol.for("accuracy_chart")]={get value(){return he}};let z={initialData:void 0,initialError:void 0},ae=W`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, timing
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)"
from parsed
group by base_model, effort, method
order by base_model, case effort
    when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
    else 0 end, method`,K=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, timing
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)"
from parsed
group by base_model, effort, method
order by base_model, case effort
    when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
    else 0 end, method`;r.latency_chart_data&&(r.latency_chart_data instanceof Error?z.initialError=r.latency_chart_data:z.initialData=r.latency_chart_data,r.latency_chart_columns&&(z.knownColumns=r.latency_chart_columns));let xe,Me=!1;const _e=Se.createReactive({callback:$=>{o(4,xe=$)},execFn:N},{id:"latency_chart",...z});_e(K,{noResolve:ae,...z}),globalThis[Symbol.for("latency_chart")]={get value(){return xe}};let G={initialData:void 0,initialError:void 0},oe=W`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
    and cost is not null
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 4) as "Total Cost ($)"
from parsed
group by base_model, effort, method
order by base_model, case effort
    when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
    else 0 end, method`,V=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
    and cost is not null
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 4) as "Total Cost ($)"
from parsed
group by base_model, effort, method
order by base_model, case effort
    when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
    else 0 end, method`;r.cost_chart_data&&(r.cost_chart_data instanceof Error?G.initialError=r.cost_chart_data:G.initialData=r.cost_chart_data,r.cost_chart_columns&&(G.knownColumns=r.cost_chart_columns));let Re,Ie=!1;const re=Se.createReactive({callback:$=>{o(5,Re=$)},execFn:N},{id:"cost_chart",...G});re(V,{noResolve:oe,...G}),globalThis[Symbol.for("cost_chart")]={get value(){return Re}};let ue={initialData:void 0,initialError:void 0},le=W`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
    and cost is not null
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  base_model || ' (' || effort || ') / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(avg(timing), 1) as "Avg Latency (s)"
from parsed
group by base_model, effort, method`,se=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
    and cost is not null
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  base_model || ' (' || effort || ') / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(avg(timing), 1) as "Avg Latency (s)"
from parsed
group by base_model, effort, method`;r.tradeoff_data&&(r.tradeoff_data instanceof Error?ue.initialError=r.tradeoff_data:ue.initialData=r.tradeoff_data,r.tradeoff_columns&&(ue.knownColumns=r.tradeoff_columns));let ne,qe=!1;const ie=Se.createReactive({callback:$=>{o(6,ne=$)},execFn:N},{id:"tradeoff",...ue});return ie(se,{noResolve:le,...ue}),globalThis[Symbol.for("tradeoff")]={get value(){return ne}},i.$$set=$=>{"data"in $&&o(7,c=$.data)},i.$$.update=()=>{i.$$.dirty[0]&128&&o(8,{data:r={},customFormattingSettings:p,__db:T}=c,r),i.$$.dirty[0]&256&&Lt.set(Object.keys(r).length>0),i.$$.dirty[1]&128&&t.params,i.$$.dirty[0]&15360&&(A||!B?A||(Y(D,{noResolve:A,...H}),o(13,B=!0)):Y(D,{noResolve:A})),i.$$.dirty[0]&512&&o(15,q=W`select distinct
  coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
  and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
  and is_successful
order by case effort
    when '-' then 0 when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
  end`),i.$$.dirty[0]&512&&o(16,J=`select distinct
  coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
  and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
  and is_successful
order by case effort
    when '-' then 0 when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
  end`),i.$$.dirty[0]&245760&&(q||!b?q||($e(J,{noResolve:q,...F}),o(17,b=!0)):$e(J,{noResolve:q})),i.$$.dirty[0]&512&&o(19,ce=W`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
)
select
  base_model as "Model",
  effort as "Effort",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  count(*) as "Runs",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 4) as "Total Cost ($)",
  round(sum(is_correct::int) / nullif(sum(cost), 0), 0) as "Correct / $"
from parsed
group by base_model, effort, method
order by "Accuracy %" desc, "Avg Latency (s)" asc`),i.$$.dirty[0]&512&&o(20,fe=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
)
select
  base_model as "Model",
  effort as "Effort",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  count(*) as "Runs",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 4) as "Total Cost ($)",
  round(sum(is_correct::int) / nullif(sum(cost), 0), 0) as "Correct / $"
from parsed
group by base_model, effort, method
order by "Accuracy %" desc, "Avg Latency (s)" asc`),i.$$.dirty[0]&3932160&&(ce||!ee?ce||(ve(fe,{noResolve:ce,...O}),o(21,ee=!0)):ve(fe,{noResolve:ce})),i.$$.dirty[0]&512&&o(23,de=W`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from parsed
group by base_model, effort, method
order by base_model, case effort
    when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
    else 0 end, method`),i.$$.dirty[0]&512&&o(24,pe=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from parsed
group by base_model, effort, method
order by base_model, case effort
    when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
    else 0 end, method`),i.$$.dirty[0]&62914560&&(de||!te?de||(Le(pe,{noResolve:de,...P}),o(25,te=!0)):Le(pe,{noResolve:de})),i.$$.dirty[0]&512&&o(27,ae=W`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, timing
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)"
from parsed
group by base_model, effort, method
order by base_model, case effort
    when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
    else 0 end, method`),i.$$.dirty[0]&512&&o(28,K=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, timing
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)"
from parsed
group by base_model, effort, method
order by base_model, case effort
    when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
    else 0 end, method`),i.$$.dirty[0]&1006632960&&(ae||!Me?ae||(_e(K,{noResolve:ae,...z}),o(29,Me=!0)):_e(K,{noResolve:ae})),i.$$.dirty[0]&512&&o(31,oe=W`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
    and cost is not null
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 4) as "Total Cost ($)"
from parsed
group by base_model, effort, method
order by base_model, case effort
    when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
    else 0 end, method`),i.$$.dirty[0]&512&&o(32,V=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
    and cost is not null
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 4) as "Total Cost ($)"
from parsed
group by base_model, effort, method
order by base_model, case effort
    when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
    else 0 end, method`),i.$$.dirty[0]&1073741824|i.$$.dirty[1]&7&&(oe||!Ie?oe||(re(V,{noResolve:oe,...G}),o(33,Ie=!0)):re(V,{noResolve:oe})),i.$$.dirty[0]&512&&o(35,le=W`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
    and cost is not null
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  base_model || ' (' || effort || ') / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(avg(timing), 1) as "Avg Latency (s)"
from parsed
group by base_model, effort, method`),i.$$.dirty[0]&512&&o(36,se=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${f.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${f.selected_efforts.value}
    and is_successful
    and cost is not null
)
select
  base_model || ' (' || effort || ')' as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  base_model || ' (' || effort || ') / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(avg(timing), 1) as "Avg Latency (s)"
from parsed
group by base_model, effort, method`),i.$$.dirty[1]&120&&(le||!qe?le||(ie(se,{noResolve:le,...ue}),o(37,qe=!0)):ie(se,{noResolve:le}))},o(11,A=W`select distinct
  split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
  and is_successful
order by base_model`),o(12,D=`select distinct
  split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare_with_modeling')
  and is_successful
order by base_model`),[X,s,me,he,xe,Re,ne,c,r,f,H,A,D,B,F,q,J,b,O,ce,fe,ee,P,de,pe,te,z,ae,K,Me,G,oe,V,Ie,ue,le,se,qe,t]}class Gt extends bt{constructor(a){super(),yt(this,a,Qt,Et,ct,{data:7},null,[-1,-1])}}export{Gt as component};
