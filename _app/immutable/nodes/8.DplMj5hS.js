import{s as Et,d as i,i as _,a as lt,b as w,c as p,h as Ht,e as P,f as ct,g as Ce,j as g,k as M,l as bt,m as Dt,o as Gt,n as It,p as At,q as tt,r as Nt,t as Ut,u as Xt}from"../chunks/scheduler.Bclb4y6L.js";import{S as Yt,i as jt,d as b,t as f,a as d,c as Le,m as x,b as $,e as q,g as Pe}from"../chunks/index.BwoQS8MT.js";import{D as xt,e as Ot,s as zt,Q as Me,p as Bt,C as Re,a as $t,r as qt,b as Vt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.V3IrnYH-.js";import{w as Kt}from"../chunks/entry.DXWdsfI4.js";import{h as L,p as Jt}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Wt}from"../chunks/stores.DBoSUPFU.js";import{Q as Qe}from"../chunks/QueryViewer.BK5YDewa.js";import{B as je}from"../chunks/BarChart.BoqY4fgG.js";function Zt(l){let r,o=v.title+"",t;return{c(){r=M("h1"),t=Xt(o),this.h()},l(s){r=P(s,"H1",{class:!0});var c=Nt(r);t=Ut(c,o),c.forEach(i),this.h()},h(){w(r,"class","title")},m(s,c){_(s,r,c),lt(r,t)},p:tt,d(s){s&&i(r)}}}function er(l){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:tt,p:tt,d:tt}}function tr(l){let r,o,t,s,c;return document.title=r=v.title,{c(){o=g(),t=M("meta"),s=g(),c=M("meta"),this.h()},l(n){o=p(n),t=P(n,"META",{property:!0,content:!0}),s=p(n),c=P(n,"META",{name:!0,content:!0}),this.h()},h(){var n,m;w(t,"property","og:title"),w(t,"content",((n=v.og)==null?void 0:n.title)??v.title),w(c,"name","twitter:title"),w(c,"content",((m=v.og)==null?void 0:m.title)??v.title)},m(n,m){_(n,o,m),_(n,t,m),_(n,s,m),_(n,c,m)},p(n,m){m&0&&r!==(r=v.title)&&(document.title=r)},d(n){n&&(i(o),i(t),i(s),i(c))}}}function rr(l){var c,n;let r,o,t=(v.description||((c=v.og)==null?void 0:c.description))&&or(),s=((n=v.og)==null?void 0:n.image)&&nr();return{c(){t&&t.c(),r=g(),s&&s.c(),o=ct()},l(m){t&&t.l(m),r=p(m),s&&s.l(m),o=ct()},m(m,k){t&&t.m(m,k),_(m,r,k),s&&s.m(m,k),_(m,o,k)},p(m,k){var u,R;(v.description||(u=v.og)!=null&&u.description)&&t.p(m,k),(R=v.og)!=null&&R.image&&s.p(m,k)},d(m){m&&(i(r),i(o)),t&&t.d(m),s&&s.d(m)}}}function or(l){let r,o,t,s,c;return{c(){r=M("meta"),o=g(),t=M("meta"),s=g(),c=M("meta"),this.h()},l(n){r=P(n,"META",{name:!0,content:!0}),o=p(n),t=P(n,"META",{property:!0,content:!0}),s=p(n),c=P(n,"META",{name:!0,content:!0}),this.h()},h(){var n,m,k;w(r,"name","description"),w(r,"content",v.description??((n=v.og)==null?void 0:n.description)),w(t,"property","og:description"),w(t,"content",((m=v.og)==null?void 0:m.description)??v.description),w(c,"name","twitter:description"),w(c,"content",((k=v.og)==null?void 0:k.description)??v.description)},m(n,m){_(n,r,m),_(n,o,m),_(n,t,m),_(n,s,m),_(n,c,m)},p:tt,d(n){n&&(i(r),i(o),i(t),i(s),i(c))}}}function nr(l){let r,o,t;return{c(){r=M("meta"),o=g(),t=M("meta"),this.h()},l(s){r=P(s,"META",{property:!0,content:!0}),o=p(s),t=P(s,"META",{name:!0,content:!0}),this.h()},h(){var s,c;w(r,"property","og:image"),w(r,"content",$t((s=v.og)==null?void 0:s.image)),w(t,"name","twitter:image"),w(t,"content",$t((c=v.og)==null?void 0:c.image))},m(s,c){_(s,r,c),_(s,o,c),_(s,t,c)},p:tt,d(s){s&&(i(r),i(o),i(t))}}}function vt(l){let r,o;return r=new Qe({props:{queryID:"grouped_benchmark_2023",queryResult:l[0]}}),{c(){q(r.$$.fragment)},l(t){$(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&1&&(c.queryResult=t[0]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){f(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function kt(l){let r,o;return r=new Qe({props:{queryID:"grouped_benchmark_sonnet",queryResult:l[1]}}),{c(){q(r.$$.fragment)},l(t){$(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&2&&(c.queryResult=t[1]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){f(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function St(l){let r,o;return r=new Qe({props:{queryID:"grouped_benchmark_codex",queryResult:l[2]}}),{c(){q(r.$$.fragment)},l(t){$(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&4&&(c.queryResult=t[2]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){f(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function Tt(l){let r,o;return r=new Qe({props:{queryID:"summary_table",queryResult:l[3]}}),{c(){q(r.$$.fragment)},l(t){$(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&8&&(c.queryResult=t[3]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){f(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function ar(l){let r,o,t,s,c,n,m,k,u,R,S,j,Q,F;return r=new Re({props:{id:"Too Many Hops"}}),t=new Re({props:{id:"Text to SQL 2023",fmt:"pct1"}}),c=new Re({props:{id:"Text to SQL Sonnet 4.6",fmt:"pct1"}}),m=new Re({props:{id:"Text to SQL GPT-5.3 Codex",fmt:"pct1"}}),u=new Re({props:{id:"SL 2023",fmt:"pct1"}}),S=new Re({props:{id:"SL Sonnet 4.6",fmt:"pct1"}}),Q=new Re({props:{id:"SL GPT-5.3 Codex",fmt:"pct1"}}),{c(){q(r.$$.fragment),o=g(),q(t.$$.fragment),s=g(),q(c.$$.fragment),n=g(),q(m.$$.fragment),k=g(),q(u.$$.fragment),R=g(),q(S.$$.fragment),j=g(),q(Q.$$.fragment)},l(h){$(r.$$.fragment,h),o=p(h),$(t.$$.fragment,h),s=p(h),$(c.$$.fragment,h),n=p(h),$(m.$$.fragment,h),k=p(h),$(u.$$.fragment,h),R=p(h),$(S.$$.fragment,h),j=p(h),$(Q.$$.fragment,h)},m(h,T){x(r,h,T),_(h,o,T),x(t,h,T),_(h,s,T),x(c,h,T),_(h,n,T),x(m,h,T),_(h,k,T),x(u,h,T),_(h,R,T),x(S,h,T),_(h,j,T),x(Q,h,T),F=!0},p:tt,i(h){F||(d(r.$$.fragment,h),d(t.$$.fragment,h),d(c.$$.fragment,h),d(m.$$.fragment,h),d(u.$$.fragment,h),d(S.$$.fragment,h),d(Q.$$.fragment,h),F=!0)},o(h){f(r.$$.fragment,h),f(t.$$.fragment,h),f(c.$$.fragment,h),f(m.$$.fragment,h),f(u.$$.fragment,h),f(S.$$.fragment,h),f(Q.$$.fragment,h),F=!1},d(h){h&&(i(o),i(s),i(n),i(k),i(R),i(j)),b(r,h),b(t,h),b(c,h),b(m,h),b(u,h),b(S,h),b(Q,h)}}}function Ct(l){let r,o;return r=new Qe({props:{queryID:"sl_comparison_sonnet",queryResult:l[4]}}),{c(){q(r.$$.fragment)},l(t){$(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&16&&(c.queryResult=t[4]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){f(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function Lt(l){let r,o;return r=new Qe({props:{queryID:"sl_comparison_codex",queryResult:l[5]}}),{c(){q(r.$$.fragment)},l(t){$(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&32&&(c.queryResult=t[5]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){f(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function Pt(l){let r,o;return r=new Qe({props:{queryID:"sql_comparison_sonnet",queryResult:l[6]}}),{c(){q(r.$$.fragment)},l(t){$(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&64&&(c.queryResult=t[6]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){f(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function Mt(l){let r,o;return r=new Qe({props:{queryID:"sql_comparison_codex",queryResult:l[7]}}),{c(){q(r.$$.fragment)},l(t){$(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&128&&(c.queryResult=t[7]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){f(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function Rt(l){let r,o;return r=new Qe({props:{queryID:"enhanced_sonnet",queryResult:l[8]}}),{c(){q(r.$$.fragment)},l(t){$(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&256&&(c.queryResult=t[8]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){f(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function Qt(l){let r,o;return r=new Qe({props:{queryID:"enhanced_codex",queryResult:l[9]}}),{c(){q(r.$$.fragment)},l(t){$(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&512&&(c.queryResult=t[9]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){f(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function Ft(l){let r,o;return r=new Qe({props:{queryID:"enhanced_summary",queryResult:l[10]}}),{c(){q(r.$$.fragment)},l(t){$(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&1024&&(c.queryResult=t[10]),r.$set(c)},i(t){o||(d(r.$$.fragment,t),o=!0)},o(t){f(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function sr(l){let r,o,t,s,c,n,m,k;return r=new Re({props:{id:"Model"}}),t=new Re({props:{id:"Method"}}),c=new Re({props:{id:"Accuracy %",fmt:"num1",contentType:"colorscale",colorScale:["#ff4444","#44bb44"]}}),m=new Re({props:{id:"Runs",fmt:"num0"}}),{c(){q(r.$$.fragment),o=g(),q(t.$$.fragment),s=g(),q(c.$$.fragment),n=g(),q(m.$$.fragment)},l(u){$(r.$$.fragment,u),o=p(u),$(t.$$.fragment,u),s=p(u),$(c.$$.fragment,u),n=p(u),$(m.$$.fragment,u)},m(u,R){x(r,u,R),_(u,o,R),x(t,u,R),_(u,s,R),x(c,u,R),_(u,n,R),x(m,u,R),k=!0},p:tt,i(u){k||(d(r.$$.fragment,u),d(t.$$.fragment,u),d(c.$$.fragment,u),d(m.$$.fragment,u),k=!0)},o(u){f(r.$$.fragment,u),f(t.$$.fragment,u),f(c.$$.fragment,u),f(m.$$.fragment,u),k=!1},d(u){u&&(i(o),i(s),i(n)),b(r,u),b(t,u),b(c,u),b(m,u)}}}function lr(l){let r,o,t,s,c,n,m='The benchmark was originally run in November 2023 to test whether LLMs could answer business questions more accurately via a Semantic Layer (MetricFlow) versus generating raw SQL directly. This page re-runs those same 11 questions with modern models in March 2026 to measure how much LLMs have improved — and then shows what changes when additional dbt models are introduced to remove the "too many hops" limitation.',k,u,R='All runs in the first three sections use raw DDL <strong class="markdown">without additional modeling</strong>.',S,j,Q,F,h='<a href="#re-running-the-benchmark">Re-running the benchmark</a>',T,ae,Fe="The first chart shows the original 2023 results per question. The two charts below re-run the same benchmark in Mar 2026 with Sonnet 4.6 and GPT-5.3 Codex respectively. The summary table at the bottom aggregates accuracy across answerable questions, too-many-hops questions, and all questions combined.",se,le,ce,Oe,Ee,O,ie,_e,de,ze,te,He='<a href="#summary">Summary</a>',he,me,fe,Be,re,De='<a href="#semantic-layer-2023-vs-2026">Semantic Layer: 2023 vs 2026</a>',ue,W,rt="Isolating the Semantic Layer method to compare 2023 versus 2026 performance question by question. Note that the too-many-hops questions are included here — the Semantic Layer consistently scores 0% on those regardless of year or model, since it cannot express the required joins without additional modeling.",Ve,Ge,z,pe,ge,ye,Ke,oe,Ie='<a href="#text-to-sql-2023-vs-2026">Text to SQL: 2023 vs 2026</a>',we,Z,ot="Same comparison for the Text to SQL method. Unlike the Semantic Layer, Text to SQL can attempt the too-many-hops questions — it has no built-in awareness that certain joins are problematic — so results on those questions reflect whether the model happened to produce correct SQL, not whether it correctly refused.",Je,Ae,B,be,xe,$e,We,ne,Ne='<a href="#sql-with-modeling--new-sl-models-mar-2026">SQL (with modeling) + New SL Models (Mar 2026)</a>',qe,ee,nt='This section shows the impact of adding dbt models to the project. Two things change: the Semantic Layer gains new models that resolve the "too many hops" limitations (so all 11 questions become answerable), and the Text to SQL generator works against a richer schema. All 11 questions are included here — the too-many-hops questions are no longer a special case.',Ze,Ue,V,ve,ke,Se,et,Xe,K,Te,J=typeof v<"u"&&v.title&&v.hide_title!==!0&&Zt();function at(e,a){return typeof v<"u"&&v.title?tr:er}let Ye=at()(l),y=typeof v=="object"&&rr(),C=l[0]&&vt(l);ce=new je({props:{data:l[0],title:"Nov 2023 benchmark results",x:"challenge_text",y:"Percentage Correct",series:"Method",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let E=l[1]&&kt(l);O=new je({props:{data:l[1],title:"Mar 2026 — Sonnet 4.6",x:"challenge_text",y:"Percentage Correct",series:"Method",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let H=l[2]&&St(l);de=new je({props:{data:l[2],title:"Mar 2026 — GPT-5.3 Codex",x:"challenge_text",y:"Percentage Correct",series:"Method",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let D=l[3]&&Tt(l);fe=new xt({props:{data:l[3],$$slots:{default:[ar]},$$scope:{ctx:l}}});let G=l[4]&&Ct(l);z=new je({props:{data:l[4],title:"Semantic Layer: 2023 vs 2026 Sonnet 4.6",x:"challenge_text",y:"Percentage Correct",series:"Cohort",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let I=l[5]&&Lt(l);ye=new je({props:{data:l[5],title:"Semantic Layer: 2023 vs 2026 GPT-5.3 Codex",x:"challenge_text",y:"Percentage Correct",series:"Cohort",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let A=l[6]&&Pt(l);B=new je({props:{data:l[6],title:"Text to SQL: 2023 vs 2026 Sonnet 4.6",x:"challenge_text",y:"Percentage Correct",series:"Cohort",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let N=l[7]&&Mt(l);$e=new je({props:{data:l[7],title:"Text to SQL: 2023 vs 2026 GPT-5.3 Codex",x:"challenge_text",y:"Percentage Correct",series:"Cohort",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let U=l[8]&&Rt(l);V=new je({props:{data:l[8],title:"Sonnet 4.6 — SL (new models) vs SQL (with modeling)",x:"challenge_text",y:"Percentage Correct",series:"Method",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let X=l[9]&&Qt(l);Se=new je({props:{data:l[9],title:"GPT-5.3 Codex — SL (new models) vs SQL (with modeling)",x:"challenge_text",y:"Percentage Correct",series:"Method",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let Y=l[10]&&Ft(l);return K=new xt({props:{data:l[10],rows:"all",$$slots:{default:[sr]},$$scope:{ctx:l}}}),{c(){J&&J.c(),r=g(),Ye.c(),o=M("meta"),t=M("meta"),y&&y.c(),s=ct(),c=g(),n=M("p"),n.textContent=m,k=g(),u=M("p"),u.innerHTML=R,S=g(),j=M("hr"),Q=g(),F=M("h2"),F.innerHTML=h,T=g(),ae=M("p"),ae.textContent=Fe,se=g(),C&&C.c(),le=g(),q(ce.$$.fragment),Oe=g(),E&&E.c(),Ee=g(),q(O.$$.fragment),ie=g(),H&&H.c(),_e=g(),q(de.$$.fragment),ze=g(),te=M("h3"),te.innerHTML=He,he=g(),D&&D.c(),me=g(),q(fe.$$.fragment),Be=g(),re=M("h2"),re.innerHTML=De,ue=g(),W=M("p"),W.textContent=rt,Ve=g(),G&&G.c(),Ge=g(),q(z.$$.fragment),pe=g(),I&&I.c(),ge=g(),q(ye.$$.fragment),Ke=g(),oe=M("h2"),oe.innerHTML=Ie,we=g(),Z=M("p"),Z.textContent=ot,Je=g(),A&&A.c(),Ae=g(),q(B.$$.fragment),be=g(),N&&N.c(),xe=g(),q($e.$$.fragment),We=g(),ne=M("h2"),ne.innerHTML=Ne,qe=g(),ee=M("p"),ee.textContent=nt,Ze=g(),U&&U.c(),Ue=g(),q(V.$$.fragment),ve=g(),X&&X.c(),ke=g(),q(Se.$$.fragment),et=g(),Y&&Y.c(),Xe=g(),q(K.$$.fragment),this.h()},l(e){J&&J.l(e),r=p(e);const a=Ht("svelte-2igo1p",document.head);Ye.l(a),o=P(a,"META",{name:!0,content:!0}),t=P(a,"META",{name:!0,content:!0}),y&&y.l(a),s=ct(),a.forEach(i),c=p(e),n=P(e,"P",{class:!0,"data-svelte-h":!0}),Ce(n)!=="svelte-1qfocnl"&&(n.textContent=m),k=p(e),u=P(e,"P",{class:!0,"data-svelte-h":!0}),Ce(u)!=="svelte-1g00bj3"&&(u.innerHTML=R),S=p(e),j=P(e,"HR",{class:!0}),Q=p(e),F=P(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ce(F)!=="svelte-oa12a5"&&(F.innerHTML=h),T=p(e),ae=P(e,"P",{class:!0,"data-svelte-h":!0}),Ce(ae)!=="svelte-yngli5"&&(ae.textContent=Fe),se=p(e),C&&C.l(e),le=p(e),$(ce.$$.fragment,e),Oe=p(e),E&&E.l(e),Ee=p(e),$(O.$$.fragment,e),ie=p(e),H&&H.l(e),_e=p(e),$(de.$$.fragment,e),ze=p(e),te=P(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),Ce(te)!=="svelte-12qh9gi"&&(te.innerHTML=He),he=p(e),D&&D.l(e),me=p(e),$(fe.$$.fragment,e),Be=p(e),re=P(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ce(re)!=="svelte-1qj3d7d"&&(re.innerHTML=De),ue=p(e),W=P(e,"P",{class:!0,"data-svelte-h":!0}),Ce(W)!=="svelte-9sg3zt"&&(W.textContent=rt),Ve=p(e),G&&G.l(e),Ge=p(e),$(z.$$.fragment,e),pe=p(e),I&&I.l(e),ge=p(e),$(ye.$$.fragment,e),Ke=p(e),oe=P(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ce(oe)!=="svelte-hauztc"&&(oe.innerHTML=Ie),we=p(e),Z=P(e,"P",{class:!0,"data-svelte-h":!0}),Ce(Z)!=="svelte-t5fm6m"&&(Z.textContent=ot),Je=p(e),A&&A.l(e),Ae=p(e),$(B.$$.fragment,e),be=p(e),N&&N.l(e),xe=p(e),$($e.$$.fragment,e),We=p(e),ne=P(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Ce(ne)!=="svelte-1p8kosz"&&(ne.innerHTML=Ne),qe=p(e),ee=P(e,"P",{class:!0,"data-svelte-h":!0}),Ce(ee)!=="svelte-1930h0q"&&(ee.textContent=nt),Ze=p(e),U&&U.l(e),Ue=p(e),$(V.$$.fragment,e),ve=p(e),X&&X.l(e),ke=p(e),$(Se.$$.fragment,e),et=p(e),Y&&Y.l(e),Xe=p(e),$(K.$$.fragment,e),this.h()},h(){w(o,"name","twitter:card"),w(o,"content","summary_large_image"),w(t,"name","twitter:site"),w(t,"content","@evidence_dev"),w(n,"class","markdown"),w(u,"class","markdown"),w(j,"class","markdown"),w(F,"class","markdown"),w(F,"id","re-running-the-benchmark"),w(ae,"class","markdown"),w(te,"class","markdown"),w(te,"id","summary"),w(re,"class","markdown"),w(re,"id","semantic-layer-2023-vs-2026"),w(W,"class","markdown"),w(oe,"class","markdown"),w(oe,"id","text-to-sql-2023-vs-2026"),w(Z,"class","markdown"),w(ne,"class","markdown"),w(ne,"id","sql-with-modeling--new-sl-models-mar-2026"),w(ee,"class","markdown")},m(e,a){J&&J.m(e,a),_(e,r,a),Ye.m(document.head,null),lt(document.head,o),lt(document.head,t),y&&y.m(document.head,null),lt(document.head,s),_(e,c,a),_(e,n,a),_(e,k,a),_(e,u,a),_(e,S,a),_(e,j,a),_(e,Q,a),_(e,F,a),_(e,T,a),_(e,ae,a),_(e,se,a),C&&C.m(e,a),_(e,le,a),x(ce,e,a),_(e,Oe,a),E&&E.m(e,a),_(e,Ee,a),x(O,e,a),_(e,ie,a),H&&H.m(e,a),_(e,_e,a),x(de,e,a),_(e,ze,a),_(e,te,a),_(e,he,a),D&&D.m(e,a),_(e,me,a),x(fe,e,a),_(e,Be,a),_(e,re,a),_(e,ue,a),_(e,W,a),_(e,Ve,a),G&&G.m(e,a),_(e,Ge,a),x(z,e,a),_(e,pe,a),I&&I.m(e,a),_(e,ge,a),x(ye,e,a),_(e,Ke,a),_(e,oe,a),_(e,we,a),_(e,Z,a),_(e,Je,a),A&&A.m(e,a),_(e,Ae,a),x(B,e,a),_(e,be,a),N&&N.m(e,a),_(e,xe,a),x($e,e,a),_(e,We,a),_(e,ne,a),_(e,qe,a),_(e,ee,a),_(e,Ze,a),U&&U.m(e,a),_(e,Ue,a),x(V,e,a),_(e,ve,a),X&&X.m(e,a),_(e,ke,a),x(Se,e,a),_(e,et,a),Y&&Y.m(e,a),_(e,Xe,a),x(K,e,a),Te=!0},p(e,a){typeof v<"u"&&v.title&&v.hide_title!==!0&&J.p(e,a),Ye.p(e,a),typeof v=="object"&&y.p(e,a),e[0]?C?(C.p(e,a),a[0]&1&&d(C,1)):(C=vt(e),C.c(),d(C,1),C.m(le.parentNode,le)):C&&(Pe(),f(C,1,1,()=>{C=null}),Le());const dt={};a[0]&1&&(dt.data=e[0]),ce.$set(dt),e[1]?E?(E.p(e,a),a[0]&2&&d(E,1)):(E=kt(e),E.c(),d(E,1),E.m(Ee.parentNode,Ee)):E&&(Pe(),f(E,1,1,()=>{E=null}),Le());const ht={};a[0]&2&&(ht.data=e[1]),O.$set(ht),e[2]?H?(H.p(e,a),a[0]&4&&d(H,1)):(H=St(e),H.c(),d(H,1),H.m(_e.parentNode,_e)):H&&(Pe(),f(H,1,1,()=>{H=null}),Le());const mt={};a[0]&4&&(mt.data=e[2]),de.$set(mt),e[3]?D?(D.p(e,a),a[0]&8&&d(D,1)):(D=Tt(e),D.c(),d(D,1),D.m(me.parentNode,me)):D&&(Pe(),f(D,1,1,()=>{D=null}),Le());const it={};a[0]&8&&(it.data=e[3]),a[2]&65536&&(it.$$scope={dirty:a,ctx:e}),fe.$set(it),e[4]?G?(G.p(e,a),a[0]&16&&d(G,1)):(G=Ct(e),G.c(),d(G,1),G.m(Ge.parentNode,Ge)):G&&(Pe(),f(G,1,1,()=>{G=null}),Le());const ft={};a[0]&16&&(ft.data=e[4]),z.$set(ft),e[5]?I?(I.p(e,a),a[0]&32&&d(I,1)):(I=Lt(e),I.c(),d(I,1),I.m(ge.parentNode,ge)):I&&(Pe(),f(I,1,1,()=>{I=null}),Le());const ut={};a[0]&32&&(ut.data=e[5]),ye.$set(ut),e[6]?A?(A.p(e,a),a[0]&64&&d(A,1)):(A=Pt(e),A.c(),d(A,1),A.m(Ae.parentNode,Ae)):A&&(Pe(),f(A,1,1,()=>{A=null}),Le());const pt={};a[0]&64&&(pt.data=e[6]),B.$set(pt),e[7]?N?(N.p(e,a),a[0]&128&&d(N,1)):(N=Mt(e),N.c(),d(N,1),N.m(xe.parentNode,xe)):N&&(Pe(),f(N,1,1,()=>{N=null}),Le());const gt={};a[0]&128&&(gt.data=e[7]),$e.$set(gt),e[8]?U?(U.p(e,a),a[0]&256&&d(U,1)):(U=Rt(e),U.c(),d(U,1),U.m(Ue.parentNode,Ue)):U&&(Pe(),f(U,1,1,()=>{U=null}),Le());const yt={};a[0]&256&&(yt.data=e[8]),V.$set(yt),e[9]?X?(X.p(e,a),a[0]&512&&d(X,1)):(X=Qt(e),X.c(),d(X,1),X.m(ke.parentNode,ke)):X&&(Pe(),f(X,1,1,()=>{X=null}),Le());const wt={};a[0]&512&&(wt.data=e[9]),Se.$set(wt),e[10]?Y?(Y.p(e,a),a[0]&1024&&d(Y,1)):(Y=Ft(e),Y.c(),d(Y,1),Y.m(Xe.parentNode,Xe)):Y&&(Pe(),f(Y,1,1,()=>{Y=null}),Le());const _t={};a[0]&1024&&(_t.data=e[10]),a[2]&65536&&(_t.$$scope={dirty:a,ctx:e}),K.$set(_t)},i(e){Te||(d(C),d(ce.$$.fragment,e),d(E),d(O.$$.fragment,e),d(H),d(de.$$.fragment,e),d(D),d(fe.$$.fragment,e),d(G),d(z.$$.fragment,e),d(I),d(ye.$$.fragment,e),d(A),d(B.$$.fragment,e),d(N),d($e.$$.fragment,e),d(U),d(V.$$.fragment,e),d(X),d(Se.$$.fragment,e),d(Y),d(K.$$.fragment,e),Te=!0)},o(e){f(C),f(ce.$$.fragment,e),f(E),f(O.$$.fragment,e),f(H),f(de.$$.fragment,e),f(D),f(fe.$$.fragment,e),f(G),f(z.$$.fragment,e),f(I),f(ye.$$.fragment,e),f(A),f(B.$$.fragment,e),f(N),f($e.$$.fragment,e),f(U),f(V.$$.fragment,e),f(X),f(Se.$$.fragment,e),f(Y),f(K.$$.fragment,e),Te=!1},d(e){e&&(i(r),i(c),i(n),i(k),i(u),i(S),i(j),i(Q),i(F),i(T),i(ae),i(se),i(le),i(Oe),i(Ee),i(ie),i(_e),i(ze),i(te),i(he),i(me),i(Be),i(re),i(ue),i(W),i(Ve),i(Ge),i(pe),i(ge),i(Ke),i(oe),i(we),i(Z),i(Je),i(Ae),i(be),i(xe),i(We),i(ne),i(qe),i(ee),i(Ze),i(Ue),i(ve),i(ke),i(et),i(Xe)),J&&J.d(e),Ye.d(e),i(o),i(t),y&&y.d(e),i(s),C&&C.d(e),b(ce,e),E&&E.d(e),b(O,e),H&&H.d(e),b(de,e),D&&D.d(e),b(fe,e),G&&G.d(e),b(z,e),I&&I.d(e),b(ye,e),A&&A.d(e),b(B,e),N&&N.d(e),b($e,e),U&&U.d(e),b(V,e),X&&X.d(e),b(Se,e),Y&&Y.d(e),b(K,e)}}}const v={title:"Historical Comparison (2023 vs 2026)"};function cr(l,r,o){let t,s;bt(l,Wt,y=>o(57,t=y)),bt(l,qt,y=>o(63,s=y));let{data:c}=r,{data:n={},customFormattingSettings:m,__db:k,inputs:u}=c;Dt(qt,s="5b1d40a451e6b26d88f727cca1e63f2d",s);let R=Ot(Kt(u));Gt(R.subscribe(y=>u=y)),It(Vt,{getCustomFormats:()=>m.customFormats||[]});const S=(y,C)=>Jt(k.query,y,{query_name:C});zt(S),t.params,At(()=>!0);let j={initialData:void 0,initialError:void 0},Q=L`with data as (
  select
    * from sql_answers where batch_id in (-1)
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'Text to SQL'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"`,F=`with data as (
  select
    * from sql_answers where batch_id in (-1)
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'Text to SQL'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"`;n.grouped_benchmark_2023_data&&(n.grouped_benchmark_2023_data instanceof Error?j.initialError=n.grouped_benchmark_2023_data:j.initialData=n.grouped_benchmark_2023_data,n.grouped_benchmark_2023_columns&&(j.knownColumns=n.grouped_benchmark_2023_columns));let h,T=!1;const ae=Me.createReactive({callback:y=>{o(0,h=y)},execFn:S},{id:"grouped_benchmark_2023",...j});ae(F,{noResolve:Q,...j}),globalThis[Symbol.for("grouped_benchmark_2023")]={get value(){return h}};let Fe={initialData:void 0,initialError:void 0},se=L`with data as (
  select
    * from sql_answers
  where batch_id in (1771947220583)
    and model like '%sonnet%'
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'Text to SQL'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"`,le=`with data as (
  select
    * from sql_answers
  where batch_id in (1771947220583)
    and model like '%sonnet%'
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'Text to SQL'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"`;n.grouped_benchmark_sonnet_data&&(n.grouped_benchmark_sonnet_data instanceof Error?Fe.initialError=n.grouped_benchmark_sonnet_data:Fe.initialData=n.grouped_benchmark_sonnet_data,n.grouped_benchmark_sonnet_columns&&(Fe.knownColumns=n.grouped_benchmark_sonnet_columns));let ce,Oe=!1;const Ee=Me.createReactive({callback:y=>{o(1,ce=y)},execFn:S},{id:"grouped_benchmark_sonnet",...Fe});Ee(le,{noResolve:se,...Fe}),globalThis[Symbol.for("grouped_benchmark_sonnet")]={get value(){return ce}};let O={initialData:void 0,initialError:void 0},ie=L`with data as (
  select
    * from sql_answers
  where batch_id in (1772040337760)
    and model like '%codex%'
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'Text to SQL'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"`,_e=`with data as (
  select
    * from sql_answers
  where batch_id in (1772040337760)
    and model like '%codex%'
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'Text to SQL'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"`;n.grouped_benchmark_codex_data&&(n.grouped_benchmark_codex_data instanceof Error?O.initialError=n.grouped_benchmark_codex_data:O.initialData=n.grouped_benchmark_codex_data,n.grouped_benchmark_codex_columns&&(O.knownColumns=n.grouped_benchmark_codex_columns));let de,ze=!1;const te=Me.createReactive({callback:y=>{o(2,de=y)},execFn:S},{id:"grouped_benchmark_codex",...O});te(_e,{noResolve:ie,...O}),globalThis[Symbol.for("grouped_benchmark_codex")]={get value(){return de}};let He={initialData:void 0,initialError:void 0},he=L`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      when model like '%sonnet%' then '2026 Sonnet 4.6'
      when model like '%codex%' then '2026 GPT-5.3 Codex'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1771947220583, 1772040337760)
)

, calc as (
  select
    too_many_hops,
    cohort,
    "method",
    avg(case when is_correct then 1.0 else 0.0 end) as percentage_correct
  from data
  group by too_many_hops, cohort, "method"
)

, calc_all as (
  select
    null as too_many_hops,
    cohort,
    "method",
    avg(case when is_correct then 1.0 else 0.0 end) as percentage_correct
  from data
  group by cohort, "method"
)

, combined as (
  select * from calc
  union all
  select * from calc_all
)

, pivoted as (
  pivot combined
  on cohort, "method"
  using avg(percentage_correct) as pct
  group by too_many_hops
)

select
  case
    when too_many_hops is null then 'All'
    when too_many_hops then 'True'
    else 'False'
  end as "Too Many Hops",
  "2023_sql_pct" as "Text to SQL 2023",
  "2026 Sonnet 4.6_sql_pct" as "Text to SQL Sonnet 4.6",
  "2026 GPT-5.3 Codex_sql_pct" as "Text to SQL GPT-5.3 Codex",
  "2023_semantic_layer_pct" as "SL 2023",
  "2026 Sonnet 4.6_semantic_layer_pct" as "SL Sonnet 4.6",
  "2026 GPT-5.3 Codex_semantic_layer_pct" as "SL GPT-5.3 Codex"
from pivoted
order by
  case when too_many_hops is null then 2 else 0 end,
  too_many_hops`,me=`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      when model like '%sonnet%' then '2026 Sonnet 4.6'
      when model like '%codex%' then '2026 GPT-5.3 Codex'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1771947220583, 1772040337760)
)

, calc as (
  select
    too_many_hops,
    cohort,
    "method",
    avg(case when is_correct then 1.0 else 0.0 end) as percentage_correct
  from data
  group by too_many_hops, cohort, "method"
)

, calc_all as (
  select
    null as too_many_hops,
    cohort,
    "method",
    avg(case when is_correct then 1.0 else 0.0 end) as percentage_correct
  from data
  group by cohort, "method"
)

, combined as (
  select * from calc
  union all
  select * from calc_all
)

, pivoted as (
  pivot combined
  on cohort, "method"
  using avg(percentage_correct) as pct
  group by too_many_hops
)

select
  case
    when too_many_hops is null then 'All'
    when too_many_hops then 'True'
    else 'False'
  end as "Too Many Hops",
  "2023_sql_pct" as "Text to SQL 2023",
  "2026 Sonnet 4.6_sql_pct" as "Text to SQL Sonnet 4.6",
  "2026 GPT-5.3 Codex_sql_pct" as "Text to SQL GPT-5.3 Codex",
  "2023_semantic_layer_pct" as "SL 2023",
  "2026 Sonnet 4.6_semantic_layer_pct" as "SL Sonnet 4.6",
  "2026 GPT-5.3 Codex_semantic_layer_pct" as "SL GPT-5.3 Codex"
from pivoted
order by
  case when too_many_hops is null then 2 else 0 end,
  too_many_hops`;n.summary_table_data&&(n.summary_table_data instanceof Error?He.initialError=n.summary_table_data:He.initialData=n.summary_table_data,n.summary_table_columns&&(He.knownColumns=n.summary_table_columns));let fe,Be=!1;const re=Me.createReactive({callback:y=>{o(3,fe=y)},execFn:S},{id:"summary_table",...He});re(me,{noResolve:he,...He}),globalThis[Symbol.for("summary_table")]={get value(){return fe}};let De={initialData:void 0,initialError:void 0},ue=L`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 Sonnet'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1771947220583)
    and "method" = 'semantic_layer'
    and (batch_id = -1 or model like '%sonnet%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort`,W=`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 Sonnet'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1771947220583)
    and "method" = 'semantic_layer'
    and (batch_id = -1 or model like '%sonnet%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort`;n.sl_comparison_sonnet_data&&(n.sl_comparison_sonnet_data instanceof Error?De.initialError=n.sl_comparison_sonnet_data:De.initialData=n.sl_comparison_sonnet_data,n.sl_comparison_sonnet_columns&&(De.knownColumns=n.sl_comparison_sonnet_columns));let rt,Ve=!1;const Ge=Me.createReactive({callback:y=>{o(4,rt=y)},execFn:S},{id:"sl_comparison_sonnet",...De});Ge(W,{noResolve:ue,...De}),globalThis[Symbol.for("sl_comparison_sonnet")]={get value(){return rt}};let z={initialData:void 0,initialError:void 0},pe=L`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 GPT-5.3 Codex'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1772040337760)
    and "method" = 'semantic_layer'
    and (batch_id = -1 or model like '%codex%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort`,ge=`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 GPT-5.3 Codex'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1772040337760)
    and "method" = 'semantic_layer'
    and (batch_id = -1 or model like '%codex%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort`;n.sl_comparison_codex_data&&(n.sl_comparison_codex_data instanceof Error?z.initialError=n.sl_comparison_codex_data:z.initialData=n.sl_comparison_codex_data,n.sl_comparison_codex_columns&&(z.knownColumns=n.sl_comparison_codex_columns));let ye,Ke=!1;const oe=Me.createReactive({callback:y=>{o(5,ye=y)},execFn:S},{id:"sl_comparison_codex",...z});oe(ge,{noResolve:pe,...z}),globalThis[Symbol.for("sl_comparison_codex")]={get value(){return ye}};let Ie={initialData:void 0,initialError:void 0},we=L`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 Sonnet'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1771947220583)
    and "method" = 'sql'
    and (batch_id = -1 or model like '%sonnet%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort`,Z=`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 Sonnet'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1771947220583)
    and "method" = 'sql'
    and (batch_id = -1 or model like '%sonnet%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort`;n.sql_comparison_sonnet_data&&(n.sql_comparison_sonnet_data instanceof Error?Ie.initialError=n.sql_comparison_sonnet_data:Ie.initialData=n.sql_comparison_sonnet_data,n.sql_comparison_sonnet_columns&&(Ie.knownColumns=n.sql_comparison_sonnet_columns));let ot,Je=!1;const Ae=Me.createReactive({callback:y=>{o(6,ot=y)},execFn:S},{id:"sql_comparison_sonnet",...Ie});Ae(Z,{noResolve:we,...Ie}),globalThis[Symbol.for("sql_comparison_sonnet")]={get value(){return ot}};let B={initialData:void 0,initialError:void 0},be=L`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 GPT-5.3 Codex'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1772040337760)
    and "method" = 'sql'
    and (batch_id = -1 or model like '%codex%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort`,xe=`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 GPT-5.3 Codex'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1772040337760)
    and "method" = 'sql'
    and (batch_id = -1 or model like '%codex%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort`;n.sql_comparison_codex_data&&(n.sql_comparison_codex_data instanceof Error?B.initialError=n.sql_comparison_codex_data:B.initialData=n.sql_comparison_codex_data,n.sql_comparison_codex_columns&&(B.knownColumns=n.sql_comparison_codex_columns));let $e,We=!1;const ne=Me.createReactive({callback:y=>{o(7,$e=y)},execFn:S},{id:"sql_comparison_codex",...B});ne(xe,{noResolve:be,...B}),globalThis[Symbol.for("sql_comparison_codex")]={get value(){return $e}};let Ne={initialData:void 0,initialError:void 0},qe=L`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1771950920101
  and model like '%sonnet%'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`,ee=`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1771950920101
  and model like '%sonnet%'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`;n.enhanced_sonnet_data&&(n.enhanced_sonnet_data instanceof Error?Ne.initialError=n.enhanced_sonnet_data:Ne.initialData=n.enhanced_sonnet_data,n.enhanced_sonnet_columns&&(Ne.knownColumns=n.enhanced_sonnet_columns));let nt,Ze=!1;const Ue=Me.createReactive({callback:y=>{o(8,nt=y)},execFn:S},{id:"enhanced_sonnet",...Ne});Ue(ee,{noResolve:qe,...Ne}),globalThis[Symbol.for("enhanced_sonnet")]={get value(){return nt}};let V={initialData:void 0,initialError:void 0},ve=L`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1772035331932
  and model like '%codex%'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`,ke=`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1772035331932
  and model like '%codex%'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`;n.enhanced_codex_data&&(n.enhanced_codex_data instanceof Error?V.initialError=n.enhanced_codex_data:V.initialData=n.enhanced_codex_data,n.enhanced_codex_columns&&(V.knownColumns=n.enhanced_codex_columns));let Se,et=!1;const Xe=Me.createReactive({callback:y=>{o(9,Se=y)},execFn:S},{id:"enhanced_codex",...V});Xe(ke,{noResolve:ve,...V}),globalThis[Symbol.for("enhanced_codex")]={get value(){return Se}};let K={initialData:void 0,initialError:void 0},Te=L`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  round(100.0 * avg(case when is_correct then 1.0 else 0.0 end), 1) as "Accuracy %",
  count(*) as "Runs"
from sql_answers
where batch_id in (1771950920101, 1772035331932)
  and model not like '%gpt-5.2%'
group by model, "method"
order by model, "method"`,J=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  round(100.0 * avg(case when is_correct then 1.0 else 0.0 end), 1) as "Accuracy %",
  count(*) as "Runs"
from sql_answers
where batch_id in (1771950920101, 1772035331932)
  and model not like '%gpt-5.2%'
group by model, "method"
order by model, "method"`;n.enhanced_summary_data&&(n.enhanced_summary_data instanceof Error?K.initialError=n.enhanced_summary_data:K.initialData=n.enhanced_summary_data,n.enhanced_summary_columns&&(K.knownColumns=n.enhanced_summary_columns));let at,st=!1;const Ye=Me.createReactive({callback:y=>{o(10,at=y)},execFn:S},{id:"enhanced_summary",...K});return Ye(J,{noResolve:Te,...K}),globalThis[Symbol.for("enhanced_summary")]={get value(){return at}},l.$$set=y=>{"data"in y&&o(11,c=y.data)},l.$$.update=()=>{l.$$.dirty[0]&2048&&o(12,{data:n={},customFormattingSettings:m,__db:k}=c,n),l.$$.dirty[0]&4096&&Bt.set(Object.keys(n).length>0),l.$$.dirty[1]&67108864&&t.params,l.$$.dirty[0]&122880&&(Q||!T?Q||(ae(F,{noResolve:Q,...j}),o(16,T=!0)):ae(F,{noResolve:Q})),l.$$.dirty[0]&1966080&&(se||!Oe?se||(Ee(le,{noResolve:se,...Fe}),o(20,Oe=!0)):Ee(le,{noResolve:se})),l.$$.dirty[0]&31457280&&(ie||!ze?ie||(te(_e,{noResolve:ie,...O}),o(24,ze=!0)):te(_e,{noResolve:ie})),l.$$.dirty[0]&503316480&&(he||!Be?he||(re(me,{noResolve:he,...He}),o(28,Be=!0)):re(me,{noResolve:he})),l.$$.dirty[0]&1610612736|l.$$.dirty[1]&3&&(ue||!Ve?ue||(Ge(W,{noResolve:ue,...De}),o(32,Ve=!0)):Ge(W,{noResolve:ue})),l.$$.dirty[1]&60&&(pe||!Ke?pe||(oe(ge,{noResolve:pe,...z}),o(36,Ke=!0)):oe(ge,{noResolve:pe})),l.$$.dirty[1]&960&&(we||!Je?we||(Ae(Z,{noResolve:we,...Ie}),o(40,Je=!0)):Ae(Z,{noResolve:we})),l.$$.dirty[1]&15360&&(be||!We?be||(ne(xe,{noResolve:be,...B}),o(44,We=!0)):ne(xe,{noResolve:be})),l.$$.dirty[1]&245760&&(qe||!Ze?qe||(Ue(ee,{noResolve:qe,...Ne}),o(48,Ze=!0)):Ue(ee,{noResolve:qe})),l.$$.dirty[1]&3932160&&(ve||!et?ve||(Xe(ke,{noResolve:ve,...V}),o(52,et=!0)):Xe(ke,{noResolve:ve})),l.$$.dirty[1]&62914560&&(Te||!st?Te||(Ye(J,{noResolve:Te,...K}),o(56,st=!0)):Ye(J,{noResolve:Te}))},o(14,Q=L`with data as (
  select
    * from sql_answers where batch_id in (-1)
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'Text to SQL'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"`),o(15,F=`with data as (
  select
    * from sql_answers where batch_id in (-1)
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'Text to SQL'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"`),o(18,se=L`with data as (
  select
    * from sql_answers
  where batch_id in (1771947220583)
    and model like '%sonnet%'
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'Text to SQL'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"`),o(19,le=`with data as (
  select
    * from sql_answers
  where batch_id in (1771947220583)
    and model like '%sonnet%'
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'Text to SQL'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"`),o(22,ie=L`with data as (
  select
    * from sql_answers
  where batch_id in (1772040337760)
    and model like '%codex%'
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'Text to SQL'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"`),o(23,_e=`with data as (
  select
    * from sql_answers
  where batch_id in (1772040337760)
    and model like '%codex%'
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'Text to SQL'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, "method"
order by sort_order, "method"`),o(26,he=L`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      when model like '%sonnet%' then '2026 Sonnet 4.6'
      when model like '%codex%' then '2026 GPT-5.3 Codex'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1771947220583, 1772040337760)
)

, calc as (
  select
    too_many_hops,
    cohort,
    "method",
    avg(case when is_correct then 1.0 else 0.0 end) as percentage_correct
  from data
  group by too_many_hops, cohort, "method"
)

, calc_all as (
  select
    null as too_many_hops,
    cohort,
    "method",
    avg(case when is_correct then 1.0 else 0.0 end) as percentage_correct
  from data
  group by cohort, "method"
)

, combined as (
  select * from calc
  union all
  select * from calc_all
)

, pivoted as (
  pivot combined
  on cohort, "method"
  using avg(percentage_correct) as pct
  group by too_many_hops
)

select
  case
    when too_many_hops is null then 'All'
    when too_many_hops then 'True'
    else 'False'
  end as "Too Many Hops",
  "2023_sql_pct" as "Text to SQL 2023",
  "2026 Sonnet 4.6_sql_pct" as "Text to SQL Sonnet 4.6",
  "2026 GPT-5.3 Codex_sql_pct" as "Text to SQL GPT-5.3 Codex",
  "2023_semantic_layer_pct" as "SL 2023",
  "2026 Sonnet 4.6_semantic_layer_pct" as "SL Sonnet 4.6",
  "2026 GPT-5.3 Codex_semantic_layer_pct" as "SL GPT-5.3 Codex"
from pivoted
order by
  case when too_many_hops is null then 2 else 0 end,
  too_many_hops`),o(27,me=`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      when model like '%sonnet%' then '2026 Sonnet 4.6'
      when model like '%codex%' then '2026 GPT-5.3 Codex'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1771947220583, 1772040337760)
)

, calc as (
  select
    too_many_hops,
    cohort,
    "method",
    avg(case when is_correct then 1.0 else 0.0 end) as percentage_correct
  from data
  group by too_many_hops, cohort, "method"
)

, calc_all as (
  select
    null as too_many_hops,
    cohort,
    "method",
    avg(case when is_correct then 1.0 else 0.0 end) as percentage_correct
  from data
  group by cohort, "method"
)

, combined as (
  select * from calc
  union all
  select * from calc_all
)

, pivoted as (
  pivot combined
  on cohort, "method"
  using avg(percentage_correct) as pct
  group by too_many_hops
)

select
  case
    when too_many_hops is null then 'All'
    when too_many_hops then 'True'
    else 'False'
  end as "Too Many Hops",
  "2023_sql_pct" as "Text to SQL 2023",
  "2026 Sonnet 4.6_sql_pct" as "Text to SQL Sonnet 4.6",
  "2026 GPT-5.3 Codex_sql_pct" as "Text to SQL GPT-5.3 Codex",
  "2023_semantic_layer_pct" as "SL 2023",
  "2026 Sonnet 4.6_semantic_layer_pct" as "SL Sonnet 4.6",
  "2026 GPT-5.3 Codex_semantic_layer_pct" as "SL GPT-5.3 Codex"
from pivoted
order by
  case when too_many_hops is null then 2 else 0 end,
  too_many_hops`),o(30,ue=L`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 Sonnet'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1771947220583)
    and "method" = 'semantic_layer'
    and (batch_id = -1 or model like '%sonnet%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort`),o(31,W=`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 Sonnet'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1771947220583)
    and "method" = 'semantic_layer'
    and (batch_id = -1 or model like '%sonnet%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort`),o(34,pe=L`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 GPT-5.3 Codex'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1772040337760)
    and "method" = 'semantic_layer'
    and (batch_id = -1 or model like '%codex%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort`),o(35,ge=`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 GPT-5.3 Codex'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1772040337760)
    and "method" = 'semantic_layer'
    and (batch_id = -1 or model like '%codex%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort`),o(38,we=L`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 Sonnet'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1771947220583)
    and "method" = 'sql'
    and (batch_id = -1 or model like '%sonnet%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort`),o(39,Z=`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 Sonnet'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1771947220583)
    and "method" = 'sql'
    and (batch_id = -1 or model like '%sonnet%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort`),o(42,be=L`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 GPT-5.3 Codex'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1772040337760)
    and "method" = 'sql'
    and (batch_id = -1 or model like '%codex%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort`),o(43,xe=`with data as (
  select
    *,
    case
      when batch_id = -1 then '2023'
      else '2026 GPT-5.3 Codex'
    end as cohort
  from sql_answers
  where batch_id in (-1, 1772040337760)
    and "method" = 'sql'
    and (batch_id = -1 or model like '%codex%')
)

select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  cohort as "Cohort",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from data
group by challenge_text, sort_order, cohort
order by sort_order, cohort`),o(46,qe=L`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1771950920101
  and model like '%sonnet%'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`),o(47,ee=`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1771950920101
  and model like '%sonnet%'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`),o(50,ve=L`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1772035331932
  and model like '%codex%'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`),o(51,ke=`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1772035331932
  and model like '%codex%'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`),o(54,Te=L`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  round(100.0 * avg(case when is_correct then 1.0 else 0.0 end), 1) as "Accuracy %",
  count(*) as "Runs"
from sql_answers
where batch_id in (1771950920101, 1772035331932)
  and model not like '%gpt-5.2%'
group by model, "method"
order by model, "method"`),o(55,J=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  round(100.0 * avg(case when is_correct then 1.0 else 0.0 end), 1) as "Accuracy %",
  count(*) as "Runs"
from sql_answers
where batch_id in (1771950920101, 1772035331932)
  and model not like '%gpt-5.2%'
group by model, "method"
order by model, "method"`),[h,ce,de,fe,rt,ye,ot,$e,nt,Se,at,c,n,j,Q,F,T,Fe,se,le,Oe,O,ie,_e,ze,He,he,me,Be,De,ue,W,Ve,z,pe,ge,Ke,Ie,we,Z,Je,B,be,xe,We,Ne,qe,ee,Ze,V,ve,ke,et,K,Te,J,st,t]}class gr extends Yt{constructor(r){super(),jt(this,r,cr,lr,Et,{data:11},null,[-1,-1,-1])}}export{gr as component};
