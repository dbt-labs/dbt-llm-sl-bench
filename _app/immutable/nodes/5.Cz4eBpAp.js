import{s as pt,d,i as p,a as Ue,b,c as u,h as _t,e as U,f as Oe,g as Ie,j as w,k as O,l as at,m as ht,o as ut,n as wt,p as bt,q as Ae,r as yt,t as $t,u as gt}from"../chunks/scheduler.DjHbl-jX.js";import{S as vt,i as qt,d as y,t as h,a as _,c as Te,m as $,b as g,e as v,g as Ne}from"../chunks/index.DylIKcrZ.js";import{D as Lt,e as Mt,s as It,Q as Se,p as At,C as he,a as ot,r as rt,b as Tt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.DYYDJhI9.js";import{w as Nt}from"../chunks/entry.BHYSYjLM.js";import{h as te,p as St}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{D as je,a as Pe}from"../chunks/Dropdown.7m9v8OAT.js";import{p as kt}from"../chunks/stores.DzXMm9yD.js";import{Q as ke}from"../chunks/QueryViewer.uWexFzNM.js";import{B as Fe}from"../chunks/BarChart.Cb2JQxVj.js";import{S as Xe}from"../chunks/ScatterPlot.Bz5vIuVU.js";function Ct(c){let o,r=q.title+"",t;return{c(){o=O("h1"),t=gt(r),this.h()},l(i){o=U(i,"H1",{class:!0});var f=yt(o);t=$t(f,r),f.forEach(d),this.h()},h(){b(o,"class","title")},m(i,f){p(i,o,f),Ue(o,t)},p:Ae,d(i){i&&d(o)}}}function xt(c){return{c(){this.h()},l(o){this.h()},h(){document.title="Evidence"},m:Ae,p:Ae,d:Ae}}function Rt(c){let o,r,t,i,f;return document.title=o=q.title,{c(){r=w(),t=O("meta"),i=w(),f=O("meta"),this.h()},l(l){r=u(l),t=U(l,"META",{property:!0,content:!0}),i=u(l),f=U(l,"META",{name:!0,content:!0}),this.h()},h(){var l,m;b(t,"property","og:title"),b(t,"content",((l=q.og)==null?void 0:l.title)??q.title),b(f,"name","twitter:title"),b(f,"content",((m=q.og)==null?void 0:m.title)??q.title)},m(l,m){p(l,r,m),p(l,t,m),p(l,i,m),p(l,f,m)},p(l,m){m&0&&o!==(o=q.title)&&(document.title=o)},d(l){l&&(d(r),d(t),d(i),d(f))}}}function Et(c){var f,l;let o,r,t=(q.description||((f=q.og)==null?void 0:f.description))&&Qt(),i=((l=q.og)==null?void 0:l.image)&&Ht();return{c(){t&&t.c(),o=w(),i&&i.c(),r=Oe()},l(m){t&&t.l(m),o=u(m),i&&i.l(m),r=Oe()},m(m,L){t&&t.m(m,L),p(m,o,L),i&&i.m(m,L),p(m,r,L)},p(m,L){var a,re;(q.description||(a=q.og)!=null&&a.description)&&t.p(m,L),(re=q.og)!=null&&re.image&&i.p(m,L)},d(m){m&&(d(o),d(r)),t&&t.d(m),i&&i.d(m)}}}function Qt(c){let o,r,t,i,f;return{c(){o=O("meta"),r=w(),t=O("meta"),i=w(),f=O("meta"),this.h()},l(l){o=U(l,"META",{name:!0,content:!0}),r=u(l),t=U(l,"META",{property:!0,content:!0}),i=u(l),f=U(l,"META",{name:!0,content:!0}),this.h()},h(){var l,m,L;b(o,"name","description"),b(o,"content",q.description??((l=q.og)==null?void 0:l.description)),b(t,"property","og:description"),b(t,"content",((m=q.og)==null?void 0:m.description)??q.description),b(f,"name","twitter:description"),b(f,"content",((L=q.og)==null?void 0:L.description)??q.description)},m(l,m){p(l,o,m),p(l,r,m),p(l,t,m),p(l,i,m),p(l,f,m)},p:Ae,d(l){l&&(d(o),d(r),d(t),d(i),d(f))}}}function Ht(c){let o,r,t;return{c(){o=O("meta"),r=w(),t=O("meta"),this.h()},l(i){o=U(i,"META",{property:!0,content:!0}),r=u(i),t=U(i,"META",{name:!0,content:!0}),this.h()},h(){var i,f;b(o,"property","og:image"),b(o,"content",ot((i=q.og)==null?void 0:i.image)),b(t,"name","twitter:image"),b(t,"content",ot((f=q.og)==null?void 0:f.image))},m(i,f){p(i,o,f),p(i,r,f),p(i,t,f)},p:Ae,d(i){i&&(d(o),d(r),d(t))}}}function lt(c){let o,r;return o=new ke({props:{queryID:"available_base_models",queryResult:c[0]}}),{c(){v(o.$$.fragment)},l(t){g(o.$$.fragment,t)},m(t,i){$(o,t,i),r=!0},p(t,i){const f={};i[0]&1&&(f.queryResult=t[0]),o.$set(f)},i(t){r||(_(o.$$.fragment,t),r=!0)},o(t){h(o.$$.fragment,t),r=!1},d(t){y(o,t)}}}function st(c){let o,r;return o=new ke({props:{queryID:"available_efforts",queryResult:c[1]}}),{c(){v(o.$$.fragment)},l(t){g(o.$$.fragment,t)},m(t,i){$(o,t,i),r=!0},p(t,i){const f={};i[0]&2&&(f.queryResult=t[1]),o.$set(f)},i(t){r||(_(o.$$.fragment,t),r=!0)},o(t){h(o.$$.fragment,t),r=!1},d(t){y(o,t)}}}function Dt(c){let o,r,t,i,f,l;return o=new Pe({props:{value:"answerable",valueLabel:"Answerable Only"}}),t=new Pe({props:{value:"all",valueLabel:"All Questions"}}),f=new Pe({props:{value:"hops",valueLabel:"Too-Many-Hops Only"}}),{c(){v(o.$$.fragment),r=w(),v(t.$$.fragment),i=w(),v(f.$$.fragment)},l(m){g(o.$$.fragment,m),r=u(m),g(t.$$.fragment,m),i=u(m),g(f.$$.fragment,m)},m(m,L){$(o,m,L),p(m,r,L),$(t,m,L),p(m,i,L),$(f,m,L),l=!0},p:Ae,i(m){l||(_(o.$$.fragment,m),_(t.$$.fragment,m),_(f.$$.fragment,m),l=!0)},o(m){h(o.$$.fragment,m),h(t.$$.fragment,m),h(f.$$.fragment,m),l=!1},d(m){m&&(d(r),d(i)),y(o,m),y(t,m),y(f,m)}}}function nt(c){let o,r;return o=new ke({props:{queryID:"model_summary",queryResult:c[2]}}),{c(){v(o.$$.fragment)},l(t){g(o.$$.fragment,t)},m(t,i){$(o,t,i),r=!0},p(t,i){const f={};i[0]&4&&(f.queryResult=t[2]),o.$set(f)},i(t){r||(_(o.$$.fragment,t),r=!0)},o(t){h(o.$$.fragment,t),r=!1},d(t){y(o,t)}}}function Ft(c){let o,r,t,i,f,l,m,L,a,re,T,D,A,F,P,B,X,N,S,j;return o=new he({props:{id:"Model"}}),t=new he({props:{id:"Effort"}}),f=new he({props:{id:"Method"}}),m=new he({props:{id:"Runs",fmt:"num0"}}),a=new he({props:{id:"Accuracy %",fmt:"num1",contentType:"colorscale",colorScale:["#ff4444","#44bb44"]}}),T=new he({props:{id:"Avg Latency (s)",fmt:"num2"}}),A=new he({props:{id:"Median Latency (s)",fmt:"num2"}}),P=new he({props:{id:"Avg Cost ($)",fmt:"num4"}}),X=new he({props:{id:"Total Cost ($)",fmt:"num4"}}),S=new he({props:{id:"Correct / $",fmt:"num0"}}),{c(){v(o.$$.fragment),r=w(),v(t.$$.fragment),i=w(),v(f.$$.fragment),l=w(),v(m.$$.fragment),L=w(),v(a.$$.fragment),re=w(),v(T.$$.fragment),D=w(),v(A.$$.fragment),F=w(),v(P.$$.fragment),B=w(),v(X.$$.fragment),N=w(),v(S.$$.fragment)},l(n){g(o.$$.fragment,n),r=u(n),g(t.$$.fragment,n),i=u(n),g(f.$$.fragment,n),l=u(n),g(m.$$.fragment,n),L=u(n),g(a.$$.fragment,n),re=u(n),g(T.$$.fragment,n),D=u(n),g(A.$$.fragment,n),F=u(n),g(P.$$.fragment,n),B=u(n),g(X.$$.fragment,n),N=u(n),g(S.$$.fragment,n)},m(n,I){$(o,n,I),p(n,r,I),$(t,n,I),p(n,i,I),$(f,n,I),p(n,l,I),$(m,n,I),p(n,L,I),$(a,n,I),p(n,re,I),$(T,n,I),p(n,D,I),$(A,n,I),p(n,F,I),$(P,n,I),p(n,B,I),$(X,n,I),p(n,N,I),$(S,n,I),j=!0},p:Ae,i(n){j||(_(o.$$.fragment,n),_(t.$$.fragment,n),_(f.$$.fragment,n),_(m.$$.fragment,n),_(a.$$.fragment,n),_(T.$$.fragment,n),_(A.$$.fragment,n),_(P.$$.fragment,n),_(X.$$.fragment,n),_(S.$$.fragment,n),j=!0)},o(n){h(o.$$.fragment,n),h(t.$$.fragment,n),h(f.$$.fragment,n),h(m.$$.fragment,n),h(a.$$.fragment,n),h(T.$$.fragment,n),h(A.$$.fragment,n),h(P.$$.fragment,n),h(X.$$.fragment,n),h(S.$$.fragment,n),j=!1},d(n){n&&(d(r),d(i),d(l),d(L),d(re),d(D),d(F),d(B),d(N)),y(o,n),y(t,n),y(f,n),y(m,n),y(a,n),y(T,n),y(A,n),y(P,n),y(X,n),y(S,n)}}}function it(c){let o,r;return o=new ke({props:{queryID:"accuracy_chart",queryResult:c[3]}}),{c(){v(o.$$.fragment)},l(t){g(o.$$.fragment,t)},m(t,i){$(o,t,i),r=!0},p(t,i){const f={};i[0]&8&&(f.queryResult=t[3]),o.$set(f)},i(t){r||(_(o.$$.fragment,t),r=!0)},o(t){h(o.$$.fragment,t),r=!1},d(t){y(o,t)}}}function ct(c){let o,r;return o=new ke({props:{queryID:"latency_chart",queryResult:c[4]}}),{c(){v(o.$$.fragment)},l(t){g(o.$$.fragment,t)},m(t,i){$(o,t,i),r=!0},p(t,i){const f={};i[0]&16&&(f.queryResult=t[4]),o.$set(f)},i(t){r||(_(o.$$.fragment,t),r=!0)},o(t){h(o.$$.fragment,t),r=!1},d(t){y(o,t)}}}function ft(c){let o,r;return o=new ke({props:{queryID:"cost_chart",queryResult:c[5]}}),{c(){v(o.$$.fragment)},l(t){g(o.$$.fragment,t)},m(t,i){$(o,t,i),r=!0},p(t,i){const f={};i[0]&32&&(f.queryResult=t[5]),o.$set(f)},i(t){r||(_(o.$$.fragment,t),r=!0)},o(t){h(o.$$.fragment,t),r=!1},d(t){y(o,t)}}}function mt(c){let o,r;return o=new ke({props:{queryID:"tradeoff",queryResult:c[6]}}),{c(){v(o.$$.fragment)},l(t){g(o.$$.fragment,t)},m(t,i){$(o,t,i),r=!0},p(t,i){const f={};i[0]&64&&(f.queryResult=t[6]),o.$set(f)},i(t){r||(_(o.$$.fragment,t),r=!0)},o(t){h(o.$$.fragment,t),r=!1},d(t){y(o,t)}}}function Ut(c){let o,r,t,i,f,l,m='Each model was given 11 insurance-domain questions (claims, policies, premiums) and asked to answer them via two methods: <strong class="markdown">Semantic Layer</strong> (MetricFlow queries) and <strong class="markdown">SQL</strong> (direct SQL generation). Each model/effort combination was run 5 times to account for variance. 3 of the 11 questions are &quot;too many hops&quot; — they require joins the Semantic Layer cannot express, testing whether models correctly refuse or fail gracefully.',L,a,re='<p class="markdown"><strong class="markdown">Note:</strong> SQL runs on this page use the schema <strong class="markdown">without modeling</strong> (no additional dbt models, raw DDL only).</p>',T,D,A,F,P,B,X,N,S,j,n,I='<a href="#summary">Summary</a>',be,Y,le,z,Ce='<a href="#accuracy">Accuracy</a>',ye,me,G,se,W,xe='<a href="#latency">Latency</a>',$e,de,K,ne,J,ge,ae,Re='<a href="#cost">Cost</a>',ie,Z,ee,ve,oe,Ee='<a href="#tradeoffs">Tradeoffs</a>',ce,V,qe='<em class="markdown">Ideal: top-left corner (high accuracy, low cost/latency)</em>',Le,pe,fe,M,_e,He,Me,De,ue=typeof q<"u"&&q.title&&q.hide_title!==!0&&Ct();function dt(e,s){return typeof q<"u"&&q.title?Rt:xt}let Qe=dt()(c),we=typeof q=="object"&&Et(),k=c[0]&&lt(c),C=c[1]&&st(c);F=new je({props:{data:c[0],name:"selected_base_models",value:"base_model",multiple:"true",selectAllByDefault:"true",title:"Select Models"}}),B=new je({props:{data:c[1],name:"selected_efforts",value:"effort",multiple:"true",selectAllByDefault:"true",title:"Select Effort"}}),N=new je({props:{name:"question_filter",title:"Questions",$$slots:{default:[Dt]},$$scope:{ctx:c}}});let x=c[2]&&nt(c);Y=new Lt({props:{data:c[2],search:"true",rows:"all",$$slots:{default:[Ft]},$$scope:{ctx:c}}});let R=c[3]&&it(c);G=new Fe({props:{data:c[3],title:"Accuracy by Model",x:"Model",y:"Accuracy %",series:"Method",type:"grouped",swapXY:"true",sort:"false",yMax:"100",yAxisTitle:"Accuracy %"}});let E=c[4]&&ct(c);K=new Fe({props:{data:c[4],title:"Average Latency by Model",x:"Model",y:"Avg Latency (s)",series:"Method",type:"grouped",swapXY:"true",sort:"false",yAxisTitle:"Seconds"}}),J=new Fe({props:{data:c[4],title:"Median Latency by Model",x:"Model",y:"Median Latency (s)",series:"Method",type:"grouped",swapXY:"true",sort:"false",yAxisTitle:"Seconds"}});let Q=c[5]&&ft(c);ee=new Fe({props:{data:c[5],title:"Average Cost per Query",x:"Model",y:"Avg Cost ($)",series:"Method",type:"grouped",swapXY:"true",sort:"false",yAxisTitle:"Cost ($)"}});let H=c[6]&&mt(c);return fe=new Xe({props:{data:c[6],title:"Accuracy vs Cost",x:"Avg Cost ($)",y:"Accuracy %",series:"Method",tooltipTitle:"Config",xAxisTitle:"Avg Cost per Query ($)",yAxisTitle:"Accuracy %",yMax:"100"}}),_e=new Xe({props:{data:c[6],title:"Accuracy vs Latency",x:"Avg Latency (s)",y:"Accuracy %",series:"Method",tooltipTitle:"Config",xAxisTitle:"Avg Latency (s)",yAxisTitle:"Accuracy %",yMax:"100"}}),Me=new Xe({props:{data:c[6],title:"Cost vs Latency",x:"Avg Latency (s)",y:"Avg Cost ($)",series:"Method",tooltipTitle:"Config",xAxisTitle:"Avg Latency (s)",yAxisTitle:"Avg Cost per Query ($)"}}),{c(){ue&&ue.c(),o=w(),Qe.c(),r=O("meta"),t=O("meta"),we&&we.c(),i=Oe(),f=w(),l=O("p"),l.innerHTML=m,L=w(),a=O("blockquote"),a.innerHTML=re,T=w(),k&&k.c(),D=w(),C&&C.c(),A=w(),v(F.$$.fragment),P=w(),v(B.$$.fragment),X=w(),v(N.$$.fragment),S=w(),x&&x.c(),j=w(),n=O("h2"),n.innerHTML=I,be=w(),v(Y.$$.fragment),le=w(),z=O("h2"),z.innerHTML=Ce,ye=w(),R&&R.c(),me=w(),v(G.$$.fragment),se=w(),W=O("h2"),W.innerHTML=xe,$e=w(),E&&E.c(),de=w(),v(K.$$.fragment),ne=w(),v(J.$$.fragment),ge=w(),ae=O("h2"),ae.innerHTML=Re,ie=w(),Q&&Q.c(),Z=w(),v(ee.$$.fragment),ve=w(),oe=O("h2"),oe.innerHTML=Ee,ce=w(),V=O("p"),V.innerHTML=qe,Le=w(),H&&H.c(),pe=w(),v(fe.$$.fragment),M=w(),v(_e.$$.fragment),He=w(),v(Me.$$.fragment),this.h()},l(e){ue&&ue.l(e),o=u(e);const s=_t("svelte-2igo1p",document.head);Qe.l(s),r=U(s,"META",{name:!0,content:!0}),t=U(s,"META",{name:!0,content:!0}),we&&we.l(s),i=Oe(),s.forEach(d),f=u(e),l=U(e,"P",{class:!0,"data-svelte-h":!0}),Ie(l)!=="svelte-1n4ed47"&&(l.innerHTML=m),L=u(e),a=U(e,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Ie(a)!=="svelte-1k8s2r6"&&(a.innerHTML=re),T=u(e),k&&k.l(e),D=u(e),C&&C.l(e),A=u(e),g(F.$$.fragment,e),P=u(e),g(B.$$.fragment,e),X=u(e),g(N.$$.fragment,e),S=u(e),x&&x.l(e),j=u(e),n=U(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ie(n)!=="svelte-y5osc8"&&(n.innerHTML=I),be=u(e),g(Y.$$.fragment,e),le=u(e),z=U(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ie(z)!=="svelte-nhokin"&&(z.innerHTML=Ce),ye=u(e),R&&R.l(e),me=u(e),g(G.$$.fragment,e),se=u(e),W=U(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ie(W)!=="svelte-51rye2"&&(W.innerHTML=xe),$e=u(e),E&&E.l(e),de=u(e),g(K.$$.fragment,e),ne=u(e),g(J.$$.fragment,e),ge=u(e),ae=U(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ie(ae)!=="svelte-kik5sb"&&(ae.innerHTML=Re),ie=u(e),Q&&Q.l(e),Z=u(e),g(ee.$$.fragment,e),ve=u(e),oe=U(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ie(oe)!=="svelte-1z0aok"&&(oe.innerHTML=Ee),ce=u(e),V=U(e,"P",{class:!0,"data-svelte-h":!0}),Ie(V)!=="svelte-80ek0m"&&(V.innerHTML=qe),Le=u(e),H&&H.l(e),pe=u(e),g(fe.$$.fragment,e),M=u(e),g(_e.$$.fragment,e),He=u(e),g(Me.$$.fragment,e),this.h()},h(){b(r,"name","twitter:card"),b(r,"content","summary_large_image"),b(t,"name","twitter:site"),b(t,"content","@evidence_dev"),b(l,"class","markdown"),b(a,"class","markdown"),b(n,"class","markdown"),b(n,"id","summary"),b(z,"class","markdown"),b(z,"id","accuracy"),b(W,"class","markdown"),b(W,"id","latency"),b(ae,"class","markdown"),b(ae,"id","cost"),b(oe,"class","markdown"),b(oe,"id","tradeoffs"),b(V,"class","markdown")},m(e,s){ue&&ue.m(e,s),p(e,o,s),Qe.m(document.head,null),Ue(document.head,r),Ue(document.head,t),we&&we.m(document.head,null),Ue(document.head,i),p(e,f,s),p(e,l,s),p(e,L,s),p(e,a,s),p(e,T,s),k&&k.m(e,s),p(e,D,s),C&&C.m(e,s),p(e,A,s),$(F,e,s),p(e,P,s),$(B,e,s),p(e,X,s),$(N,e,s),p(e,S,s),x&&x.m(e,s),p(e,j,s),p(e,n,s),p(e,be,s),$(Y,e,s),p(e,le,s),p(e,z,s),p(e,ye,s),R&&R.m(e,s),p(e,me,s),$(G,e,s),p(e,se,s),p(e,W,s),p(e,$e,s),E&&E.m(e,s),p(e,de,s),$(K,e,s),p(e,ne,s),$(J,e,s),p(e,ge,s),p(e,ae,s),p(e,ie,s),Q&&Q.m(e,s),p(e,Z,s),$(ee,e,s),p(e,ve,s),p(e,oe,s),p(e,ce,s),p(e,V,s),p(e,Le,s),H&&H.m(e,s),p(e,pe,s),$(fe,e,s),p(e,M,s),$(_e,e,s),p(e,He,s),$(Me,e,s),De=!0},p(e,s){typeof q<"u"&&q.title&&q.hide_title!==!0&&ue.p(e,s),Qe.p(e,s),typeof q=="object"&&we.p(e,s),e[0]?k?(k.p(e,s),s[0]&1&&_(k,1)):(k=lt(e),k.c(),_(k,1),k.m(D.parentNode,D)):k&&(Ne(),h(k,1,1,()=>{k=null}),Te()),e[1]?C?(C.p(e,s),s[0]&2&&_(C,1)):(C=st(e),C.c(),_(C,1),C.m(A.parentNode,A)):C&&(Ne(),h(C,1,1,()=>{C=null}),Te());const Ye={};s[0]&1&&(Ye.data=e[0]),F.$set(Ye);const Ge={};s[0]&2&&(Ge.data=e[1]),B.$set(Ge);const Ke={};s[1]&8388608&&(Ke.$$scope={dirty:s,ctx:e}),N.$set(Ke),e[2]?x?(x.p(e,s),s[0]&4&&_(x,1)):(x=nt(e),x.c(),_(x,1),x.m(j.parentNode,j)):x&&(Ne(),h(x,1,1,()=>{x=null}),Te());const Be={};s[0]&4&&(Be.data=e[2]),s[1]&8388608&&(Be.$$scope={dirty:s,ctx:e}),Y.$set(Be),e[3]?R?(R.p(e,s),s[0]&8&&_(R,1)):(R=it(e),R.c(),_(R,1),R.m(me.parentNode,me)):R&&(Ne(),h(R,1,1,()=>{R=null}),Te());const Ve={};s[0]&8&&(Ve.data=e[3]),G.$set(Ve),e[4]?E?(E.p(e,s),s[0]&16&&_(E,1)):(E=ct(e),E.c(),_(E,1),E.m(de.parentNode,de)):E&&(Ne(),h(E,1,1,()=>{E=null}),Te());const ze={};s[0]&16&&(ze.data=e[4]),K.$set(ze);const We={};s[0]&16&&(We.data=e[4]),J.$set(We),e[5]?Q?(Q.p(e,s),s[0]&32&&_(Q,1)):(Q=ft(e),Q.c(),_(Q,1),Q.m(Z.parentNode,Z)):Q&&(Ne(),h(Q,1,1,()=>{Q=null}),Te());const Je={};s[0]&32&&(Je.data=e[5]),ee.$set(Je),e[6]?H?(H.p(e,s),s[0]&64&&_(H,1)):(H=mt(e),H.c(),_(H,1),H.m(pe.parentNode,pe)):H&&(Ne(),h(H,1,1,()=>{H=null}),Te());const Ze={};s[0]&64&&(Ze.data=e[6]),fe.$set(Ze);const et={};s[0]&64&&(et.data=e[6]),_e.$set(et);const tt={};s[0]&64&&(tt.data=e[6]),Me.$set(tt)},i(e){De||(_(k),_(C),_(F.$$.fragment,e),_(B.$$.fragment,e),_(N.$$.fragment,e),_(x),_(Y.$$.fragment,e),_(R),_(G.$$.fragment,e),_(E),_(K.$$.fragment,e),_(J.$$.fragment,e),_(Q),_(ee.$$.fragment,e),_(H),_(fe.$$.fragment,e),_(_e.$$.fragment,e),_(Me.$$.fragment,e),De=!0)},o(e){h(k),h(C),h(F.$$.fragment,e),h(B.$$.fragment,e),h(N.$$.fragment,e),h(x),h(Y.$$.fragment,e),h(R),h(G.$$.fragment,e),h(E),h(K.$$.fragment,e),h(J.$$.fragment,e),h(Q),h(ee.$$.fragment,e),h(H),h(fe.$$.fragment,e),h(_e.$$.fragment,e),h(Me.$$.fragment,e),De=!1},d(e){e&&(d(o),d(f),d(l),d(L),d(a),d(T),d(D),d(A),d(P),d(X),d(S),d(j),d(n),d(be),d(le),d(z),d(ye),d(me),d(se),d(W),d($e),d(de),d(ne),d(ge),d(ae),d(ie),d(Z),d(ve),d(oe),d(ce),d(V),d(Le),d(pe),d(M),d(He)),ue&&ue.d(e),Qe.d(e),d(r),d(t),we&&we.d(e),d(i),k&&k.d(e),C&&C.d(e),y(F,e),y(B,e),y(N,e),x&&x.d(e),y(Y,e),R&&R.d(e),y(G,e),E&&E.d(e),y(K,e),y(J,e),Q&&Q.d(e),y(ee,e),H&&H.d(e),y(fe,e),y(_e,e),y(Me,e)}}}const q={title:"Comparing models and thinking effort - Without modeling"};function Ot(c,o,r){let t,i;at(c,kt,M=>r(38,t=M)),at(c,rt,M=>r(43,i=M));let{data:f}=o,{data:l={},customFormattingSettings:m,__db:L,inputs:a}=f;ht(rt,i="bce48180c1771c011270e21088b8448b",i);let re=Mt(Nt(a));ut(re.subscribe(M=>r(9,a=M))),wt(Tt,{getCustomFormats:()=>m.customFormats||[]});const T=(M,_e)=>St(L.query,M,{query_name:_e});It(T),t.params,bt(()=>!0);let D={initialData:void 0,initialError:void 0},A=te`select distinct
  split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare')
  and is_successful
order by base_model`,F=`select distinct
  split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare')
  and is_successful
order by base_model`;l.available_base_models_data&&(l.available_base_models_data instanceof Error?D.initialError=l.available_base_models_data:D.initialData=l.available_base_models_data,l.available_base_models_columns&&(D.knownColumns=l.available_base_models_columns));let P,B=!1;const X=Se.createReactive({callback:M=>{r(0,P=M)},execFn:T},{id:"available_base_models",...D});X(F,{noResolve:A,...D}),globalThis[Symbol.for("available_base_models")]={get value(){return P}};let N={initialData:void 0,initialError:void 0},S=te`select distinct
  coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare')
  and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
  and is_successful
order by case effort
    when '-' then 0 when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
  end`,j=`select distinct
  coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare')
  and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
  and is_successful
order by case effort
    when '-' then 0 when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
  end`;l.available_efforts_data&&(l.available_efforts_data instanceof Error?N.initialError=l.available_efforts_data:N.initialData=l.available_efforts_data,l.available_efforts_columns&&(N.knownColumns=l.available_efforts_columns));let n,I=!1;const be=Se.createReactive({callback:M=>{r(1,n=M)},execFn:T},{id:"available_efforts",...N});be(j,{noResolve:S,...N}),globalThis[Symbol.for("available_efforts")]={get value(){return n}};let Y={initialData:void 0,initialError:void 0},le=te`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
order by "Accuracy %" desc, "Avg Latency (s)" asc`,z=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
order by "Accuracy %" desc, "Avg Latency (s)" asc`;l.model_summary_data&&(l.model_summary_data instanceof Error?Y.initialError=l.model_summary_data:Y.initialData=l.model_summary_data,l.model_summary_columns&&(Y.knownColumns=l.model_summary_columns));let Ce,ye=!1;const me=Se.createReactive({callback:M=>{r(2,Ce=M)},execFn:T},{id:"model_summary",...Y});me(z,{noResolve:le,...Y}),globalThis[Symbol.for("model_summary")]={get value(){return Ce}};let G={initialData:void 0,initialError:void 0},se=te`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
    else 0 end, method`,W=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
    else 0 end, method`;l.accuracy_chart_data&&(l.accuracy_chart_data instanceof Error?G.initialError=l.accuracy_chart_data:G.initialData=l.accuracy_chart_data,l.accuracy_chart_columns&&(G.knownColumns=l.accuracy_chart_columns));let xe,$e=!1;const de=Se.createReactive({callback:M=>{r(3,xe=M)},execFn:T},{id:"accuracy_chart",...G});de(W,{noResolve:se,...G}),globalThis[Symbol.for("accuracy_chart")]={get value(){return xe}};let K={initialData:void 0,initialError:void 0},ne=te`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, timing
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
    else 0 end, method`,J=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, timing
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
    else 0 end, method`;l.latency_chart_data&&(l.latency_chart_data instanceof Error?K.initialError=l.latency_chart_data:K.initialData=l.latency_chart_data,l.latency_chart_columns&&(K.knownColumns=l.latency_chart_columns));let ge,ae=!1;const Re=Se.createReactive({callback:M=>{r(4,ge=M)},execFn:T},{id:"latency_chart",...K});Re(J,{noResolve:ne,...K}),globalThis[Symbol.for("latency_chart")]={get value(){return ge}};let ie={initialData:void 0,initialError:void 0},Z=te`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
    else 0 end, method`,ee=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
    else 0 end, method`;l.cost_chart_data&&(l.cost_chart_data instanceof Error?ie.initialError=l.cost_chart_data:ie.initialData=l.cost_chart_data,l.cost_chart_columns&&(ie.knownColumns=l.cost_chart_columns));let ve,oe=!1;const Ee=Se.createReactive({callback:M=>{r(5,ve=M)},execFn:T},{id:"cost_chart",...ie});Ee(ee,{noResolve:Z,...ie}),globalThis[Symbol.for("cost_chart")]={get value(){return ve}};let ce={initialData:void 0,initialError:void 0},V=te`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
group by base_model, effort, method`,qe=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
group by base_model, effort, method`;l.tradeoff_data&&(l.tradeoff_data instanceof Error?ce.initialError=l.tradeoff_data:ce.initialData=l.tradeoff_data,l.tradeoff_columns&&(ce.knownColumns=l.tradeoff_columns));let Le,pe=!1;const fe=Se.createReactive({callback:M=>{r(6,Le=M)},execFn:T},{id:"tradeoff",...ce});return fe(qe,{noResolve:V,...ce}),globalThis[Symbol.for("tradeoff")]={get value(){return Le}},c.$$set=M=>{"data"in M&&r(7,f=M.data)},c.$$.update=()=>{c.$$.dirty[0]&128&&r(8,{data:l={},customFormattingSettings:m,__db:L}=f,l),c.$$.dirty[0]&256&&At.set(Object.keys(l).length>0),c.$$.dirty[1]&128&&t.params,c.$$.dirty[0]&15360&&(A||!B?A||(X(F,{noResolve:A,...D}),r(13,B=!0)):X(F,{noResolve:A})),c.$$.dirty[0]&512&&r(15,S=te`select distinct
  coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare')
  and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
  and is_successful
order by case effort
    when '-' then 0 when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
  end`),c.$$.dirty[0]&512&&r(16,j=`select distinct
  coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare')
  and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
  and is_successful
order by case effort
    when '-' then 0 when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
  end`),c.$$.dirty[0]&245760&&(S||!I?S||(be(j,{noResolve:S,...N}),r(17,I=!0)):be(j,{noResolve:S})),c.$$.dirty[0]&512&&r(19,le=te`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
order by "Accuracy %" desc, "Avg Latency (s)" asc`),c.$$.dirty[0]&512&&r(20,z=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
order by "Accuracy %" desc, "Avg Latency (s)" asc`),c.$$.dirty[0]&3932160&&(le||!ye?le||(me(z,{noResolve:le,...Y}),r(21,ye=!0)):me(z,{noResolve:le})),c.$$.dirty[0]&512&&r(23,se=te`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
    else 0 end, method`),c.$$.dirty[0]&512&&r(24,W=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
    else 0 end, method`),c.$$.dirty[0]&62914560&&(se||!$e?se||(de(W,{noResolve:se,...G}),r(25,$e=!0)):de(W,{noResolve:se})),c.$$.dirty[0]&512&&r(27,ne=te`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, timing
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
    else 0 end, method`),c.$$.dirty[0]&512&&r(28,J=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, timing
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
    else 0 end, method`),c.$$.dirty[0]&1006632960&&(ne||!ae?ne||(Re(J,{noResolve:ne,...K}),r(29,ae=!0)):Re(J,{noResolve:ne})),c.$$.dirty[0]&512&&r(31,Z=te`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
    else 0 end, method`),c.$$.dirty[0]&512&&r(32,ee=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
    else 0 end, method`),c.$$.dirty[0]&1073741824|c.$$.dirty[1]&7&&(Z||!oe?Z||(Ee(ee,{noResolve:Z,...ie}),r(33,oe=!0)):Ee(ee,{noResolve:Z})),c.$$.dirty[0]&512&&r(35,V=te`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
group by base_model, effort, method`),c.$$.dirty[0]&512&&r(36,qe=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${a.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${a.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${a.question_filter.value}' = 'all'
      or ('${a.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${a.question_filter.value}' = 'hops' and too_many_hops)
    )
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
group by base_model, effort, method`),c.$$.dirty[1]&120&&(V||!pe?V||(fe(qe,{noResolve:V,...ce}),r(37,pe=!0)):fe(qe,{noResolve:V}))},r(11,A=te`select distinct
  split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare')
  and is_successful
order by base_model`),r(12,F=`select distinct
  split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare')
  and is_successful
order by base_model`),[P,n,Ce,xe,ge,ve,Le,f,l,a,D,A,F,B,N,S,j,I,Y,le,z,ye,G,se,W,$e,K,ne,J,ae,ie,Z,ee,oe,ce,V,qe,pe,t]}class Zt extends vt{constructor(o){super(),qt(this,o,Ot,Ut,pt,{data:7},null,[-1,-1])}}export{Zt as component};
