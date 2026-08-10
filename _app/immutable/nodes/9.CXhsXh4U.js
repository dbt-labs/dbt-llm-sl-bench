import{s as _r,d as i,i as d,a as Pt,b as y,c as m,h as mr,e as C,f as Rt,g as re,j as f,k as L,l as Bt,m as fr,o as ur,n as gr,p as pr,q as kt,r as wr,t as yr,u as br}from"../chunks/scheduler.DjHbl-jX.js";import{S as xr,i as qr,d as b,t as _,a as h,c as de,m as x,b as q,e as $,g as he}from"../chunks/index.DylIKcrZ.js";import{D as zt,e as $r,s as vr,Q as _e,p as kr,C as ze,a as Vt,r as Wt,b as Sr}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BnSQppJk.js";import{w as Tr}from"../chunks/entry.LXkAnjc2.js";import{h as T,p as Cr}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Lr}from"../chunks/stores.DRsw3kRm.js";import{Q as me}from"../chunks/QueryViewer.CwaFA9XF.js";import{B as Oe}from"../chunks/BarChart.PxuT-zRW.js";function Mr(l){let r,o=v.title+"",t;return{c(){r=L("h1"),t=br(o),this.h()},l(s){r=C(s,"H1",{class:!0});var c=wr(r);t=yr(c,o),c.forEach(i),this.h()},h(){y(r,"class","title")},m(s,c){d(s,r,c),Pt(r,t)},p:kt,d(s){s&&i(r)}}}function Pr(l){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:kt,p:kt,d:kt}}function Rr(l){let r,o,t,s,c;return document.title=r=v.title,{c(){o=f(),t=L("meta"),s=f(),c=L("meta"),this.h()},l(a){o=m(a),t=C(a,"META",{property:!0,content:!0}),s=m(a),c=C(a,"META",{name:!0,content:!0}),this.h()},h(){var a,g;y(t,"property","og:title"),y(t,"content",((a=v.og)==null?void 0:a.title)??v.title),y(c,"name","twitter:title"),y(c,"content",((g=v.og)==null?void 0:g.title)??v.title)},m(a,g){d(a,o,g),d(a,t,g),d(a,s,g),d(a,c,g)},p(a,g){g&0&&r!==(r=v.title)&&(document.title=r)},d(a){a&&(i(o),i(t),i(s),i(c))}}}function Qr(l){var c,a;let r,o,t=(v.description||((c=v.og)==null?void 0:c.description))&&Fr(),s=((a=v.og)==null?void 0:a.image)&&Er();return{c(){t&&t.c(),r=f(),s&&s.c(),o=Rt()},l(g){t&&t.l(g),r=m(g),s&&s.l(g),o=Rt()},m(g,k){t&&t.m(g,k),d(g,r,k),s&&s.m(g,k),d(g,o,k)},p(g,k){var p,P;(v.description||(p=v.og)!=null&&p.description)&&t.p(g,k),(P=v.og)!=null&&P.image&&s.p(g,k)},d(g){g&&(i(r),i(o)),t&&t.d(g),s&&s.d(g)}}}function Fr(l){let r,o,t,s,c;return{c(){r=L("meta"),o=f(),t=L("meta"),s=f(),c=L("meta"),this.h()},l(a){r=C(a,"META",{name:!0,content:!0}),o=m(a),t=C(a,"META",{property:!0,content:!0}),s=m(a),c=C(a,"META",{name:!0,content:!0}),this.h()},h(){var a,g,k;y(r,"name","description"),y(r,"content",v.description??((a=v.og)==null?void 0:a.description)),y(t,"property","og:description"),y(t,"content",((g=v.og)==null?void 0:g.description)??v.description),y(c,"name","twitter:description"),y(c,"content",((k=v.og)==null?void 0:k.description)??v.description)},m(a,g){d(a,r,g),d(a,o,g),d(a,t,g),d(a,s,g),d(a,c,g)},p:kt,d(a){a&&(i(r),i(o),i(t),i(s),i(c))}}}function Er(l){let r,o,t;return{c(){r=L("meta"),o=f(),t=L("meta"),this.h()},l(s){r=C(s,"META",{property:!0,content:!0}),o=m(s),t=C(s,"META",{name:!0,content:!0}),this.h()},h(){var s,c;y(r,"property","og:image"),y(r,"content",Vt((s=v.og)==null?void 0:s.image)),y(t,"name","twitter:image"),y(t,"content",Vt((c=v.og)==null?void 0:c.image))},m(s,c){d(s,r,c),d(s,o,c),d(s,t,c)},p:kt,d(s){s&&(i(r),i(o),i(t))}}}function Kt(l){let r,o;return r=new me({props:{queryID:"enhanced_summary",queryResult:l[0]}}),{c(){$(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&1&&(c.queryResult=t[0]),r.$set(c)},i(t){o||(h(r.$$.fragment,t),o=!0)},o(t){_(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function Hr(l){let r,o,t,s,c,a,g,k;return r=new ze({props:{id:"Model"}}),t=new ze({props:{id:"Method"}}),c=new ze({props:{id:"Accuracy %",fmt:"num1",contentType:"colorscale",colorScale:["#ff4444","#44bb44"]}}),g=new ze({props:{id:"Runs",fmt:"num0"}}),{c(){$(r.$$.fragment),o=f(),$(t.$$.fragment),s=f(),$(c.$$.fragment),a=f(),$(g.$$.fragment)},l(p){q(r.$$.fragment,p),o=m(p),q(t.$$.fragment,p),s=m(p),q(c.$$.fragment,p),a=m(p),q(g.$$.fragment,p)},m(p,P){x(r,p,P),d(p,o,P),x(t,p,P),d(p,s,P),x(c,p,P),d(p,a,P),x(g,p,P),k=!0},p:kt,i(p){k||(h(r.$$.fragment,p),h(t.$$.fragment,p),h(c.$$.fragment,p),h(g.$$.fragment,p),k=!0)},o(p){_(r.$$.fragment,p),_(t.$$.fragment,p),_(c.$$.fragment,p),_(g.$$.fragment,p),k=!1},d(p){p&&(i(o),i(s),i(a)),b(r,p),b(t,p),b(c,p),b(g,p)}}}function Jt(l){let r,o;return r=new me({props:{queryID:"enhanced_sonnet",queryResult:l[1]}}),{c(){$(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&2&&(c.queryResult=t[1]),r.$set(c)},i(t){o||(h(r.$$.fragment,t),o=!0)},o(t){_(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function Zt(l){let r,o;return r=new me({props:{queryID:"enhanced_codex",queryResult:l[2]}}),{c(){$(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&4&&(c.queryResult=t[2]),r.$set(c)},i(t){o||(h(r.$$.fragment,t),o=!0)},o(t){_(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function er(l){let r,o;return r=new me({props:{queryID:"enhanced_sonnet5",queryResult:l[3]}}),{c(){$(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&8&&(c.queryResult=t[3]),r.$set(c)},i(t){o||(h(r.$$.fragment,t),o=!0)},o(t){_(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function tr(l){let r,o;return r=new me({props:{queryID:"enhanced_terra",queryResult:l[4]}}),{c(){$(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&16&&(c.queryResult=t[4]),r.$set(c)},i(t){o||(h(r.$$.fragment,t),o=!0)},o(t){_(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function rr(l){let r,o;return r=new me({props:{queryID:"enhanced_sol",queryResult:l[5]}}),{c(){$(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&32&&(c.queryResult=t[5]),r.$set(c)},i(t){o||(h(r.$$.fragment,t),o=!0)},o(t){_(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function or(l){let r,o;return r=new me({props:{queryID:"grouped_benchmark_2023",queryResult:l[6]}}),{c(){$(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&64&&(c.queryResult=t[6]),r.$set(c)},i(t){o||(h(r.$$.fragment,t),o=!0)},o(t){_(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function nr(l){let r,o;return r=new me({props:{queryID:"grouped_benchmark_sonnet",queryResult:l[7]}}),{c(){$(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&128&&(c.queryResult=t[7]),r.$set(c)},i(t){o||(h(r.$$.fragment,t),o=!0)},o(t){_(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function ar(l){let r,o;return r=new me({props:{queryID:"grouped_benchmark_codex",queryResult:l[8]}}),{c(){$(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&256&&(c.queryResult=t[8]),r.$set(c)},i(t){o||(h(r.$$.fragment,t),o=!0)},o(t){_(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function sr(l){let r,o;return r=new me({props:{queryID:"summary_table",queryResult:l[9]}}),{c(){$(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&512&&(c.queryResult=t[9]),r.$set(c)},i(t){o||(h(r.$$.fragment,t),o=!0)},o(t){_(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function Gr(l){let r,o,t,s,c,a,g,k,p,P,S,z,R,Q;return r=new ze({props:{id:"Too Many Hops"}}),t=new ze({props:{id:"Text to SQL 2023",fmt:"pct1"}}),c=new ze({props:{id:"Text to SQL Sonnet 4.6",fmt:"pct1"}}),g=new ze({props:{id:"Text to SQL GPT-5.3 Codex",fmt:"pct1"}}),p=new ze({props:{id:"SL 2023",fmt:"pct1"}}),S=new ze({props:{id:"SL Sonnet 4.6",fmt:"pct1"}}),R=new ze({props:{id:"SL GPT-5.3 Codex",fmt:"pct1"}}),{c(){$(r.$$.fragment),o=f(),$(t.$$.fragment),s=f(),$(c.$$.fragment),a=f(),$(g.$$.fragment),k=f(),$(p.$$.fragment),P=f(),$(S.$$.fragment),z=f(),$(R.$$.fragment)},l(u){q(r.$$.fragment,u),o=m(u),q(t.$$.fragment,u),s=m(u),q(c.$$.fragment,u),a=m(u),q(g.$$.fragment,u),k=m(u),q(p.$$.fragment,u),P=m(u),q(S.$$.fragment,u),z=m(u),q(R.$$.fragment,u)},m(u,M){x(r,u,M),d(u,o,M),x(t,u,M),d(u,s,M),x(c,u,M),d(u,a,M),x(g,u,M),d(u,k,M),x(p,u,M),d(u,P,M),x(S,u,M),d(u,z,M),x(R,u,M),Q=!0},p:kt,i(u){Q||(h(r.$$.fragment,u),h(t.$$.fragment,u),h(c.$$.fragment,u),h(g.$$.fragment,u),h(p.$$.fragment,u),h(S.$$.fragment,u),h(R.$$.fragment,u),Q=!0)},o(u){_(r.$$.fragment,u),_(t.$$.fragment,u),_(c.$$.fragment,u),_(g.$$.fragment,u),_(p.$$.fragment,u),_(S.$$.fragment,u),_(R.$$.fragment,u),Q=!1},d(u){u&&(i(o),i(s),i(a),i(k),i(P),i(z)),b(r,u),b(t,u),b(c,u),b(g,u),b(p,u),b(S,u),b(R,u)}}}function lr(l){let r,o;return r=new me({props:{queryID:"sl_comparison_sonnet",queryResult:l[10]}}),{c(){$(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&1024&&(c.queryResult=t[10]),r.$set(c)},i(t){o||(h(r.$$.fragment,t),o=!0)},o(t){_(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function cr(l){let r,o;return r=new me({props:{queryID:"sl_comparison_codex",queryResult:l[11]}}),{c(){$(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&2048&&(c.queryResult=t[11]),r.$set(c)},i(t){o||(h(r.$$.fragment,t),o=!0)},o(t){_(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function ir(l){let r,o;return r=new me({props:{queryID:"sql_comparison_sonnet",queryResult:l[12]}}),{c(){$(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&4096&&(c.queryResult=t[12]),r.$set(c)},i(t){o||(h(r.$$.fragment,t),o=!0)},o(t){_(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function dr(l){let r,o;return r=new me({props:{queryID:"sql_comparison_codex",queryResult:l[13]}}),{c(){$(r.$$.fragment)},l(t){q(r.$$.fragment,t)},m(t,s){x(r,t,s),o=!0},p(t,s){const c={};s[0]&8192&&(c.queryResult=t[13]),r.$set(c)},i(t){o||(h(r.$$.fragment,t),o=!0)},o(t){_(r.$$.fragment,t),o=!1},d(t){b(r,t)}}}function Ar(l){let r,o,t,s,c,a,g='The benchmark was originally run in November 2023 to test whether LLMs could answer business questions more accurately via a Semantic Layer (MetricFlow) versus generating raw SQL directly. This page re-runs those same 11 questions with modern models to measure how much LLMs have improved over time — first in <strong class="markdown">March 2026</strong>, then again in <strong class="markdown">August 2026</strong> — and shows what changes when additional dbt models are introduced to remove the &quot;too many hops&quot; limitation.',k,p,P='The section directly below leads with the latest <strong class="markdown">with modeling</strong> results across both 2026 checkpoints. The remaining sections dig into the original March 2026 <strong class="markdown">without modeling</strong> comparison against the 2023 baseline in more detail.',S,z,R,Q,u='<a href="#with-modeling-mar-2026--aug-2026">With modeling: Mar 2026 → Aug 2026</a>',M,ge,Ve='This section shows the impact of adding dbt models to the project. Two things change: the Semantic Layer gains new models that resolve the "too many hops" limitations (so all 11 questions become answerable), and the Text to SQL generator works against a richer schema. All 11 questions are included here — the too-many-hops questions are no longer a special case.',pe,oe,St='The Aug 2026 models (Claude Sonnet 5, GPT-5.6 Terra, GPT-5.6 Sol) were each swept across multiple thinking-effort levels; the table and charts below show each at its single best-performing effort, for a fair one-row-per-model comparison against the Mar 2026 models (which only have one data point each). See <a href="/dbt-llm-sl-bench/compare-with-modeling" class="markdown">Comparing models and thinking effort - With modeling</a> for the full effort breakdown.',lt,fe,We='<a href="#summary">Summary</a>',we,ye,be,ct,ue,Ke='<a href="#per-question-detail">Per-question detail</a>',xe,qe,$e,it,Je,Z,ve,ke,Se,dt,Ze,ee,Te,Ce,Le,ht,at,Me,V,_t='<a href="#re-running-the-benchmark-without-modeling">Re-running the benchmark (without modeling)</a>',mt,Pe,Tt='All runs in this section and the two below it use raw DDL <strong class="markdown">without additional modeling</strong> — this is the original March 2026 checkpoint, shown here for the detailed 2023-vs-2026 narrative.',Re,te,ft="The first chart shows the original 2023 results per question. The two charts below re-run the same benchmark in Mar 2026 with Sonnet 4.6 and GPT-5.3 Codex respectively. The summary table at the bottom aggregates accuracy across answerable questions, too-many-hops questions, and all questions combined.",ut,et,Qe,Fe,ne,ae,gt,tt,Ee,He,W,pt='<a href="#summary-1">Summary</a>',wt,rt,Ge,Ae,K,yt='<a href="#semantic-layer-2023-vs-2026">Semantic Layer: 2023 vs 2026</a>',bt,De,Ct="Isolating the Semantic Layer method to compare 2023 versus 2026 performance question by question. Note that the too-many-hops questions are included here — the Semantic Layer consistently scores 0% on those regardless of year or model, since it cannot express the required joins without additional modeling.",Ie,se,le,xt,ot,Ne,Ue,J,qt='<a href="#text-to-sql-2023-vs-2026">Text to SQL: 2023 vs 2026</a>',$t,Xe,Lt="Same comparison for the Text to SQL method. Unlike the Semantic Layer, Text to SQL can attempt the too-many-hops questions — it has no built-in awareness that certain joins are problematic — so results on those questions reflect whether the model happened to produce correct SQL, not whether it correctly refused.",Ye,ce,ie,vt,nt,je,w,Be=typeof v<"u"&&v.title&&v.hide_title!==!0&&Mr();function hr(e,n){return typeof v<"u"&&v.title?Rr:Pr}let Mt=hr()(l),st=typeof v=="object"&&Qr(),F=l[0]&&Kt(l);be=new zt({props:{data:l[0],rows:"all",$$slots:{default:[Hr]},$$scope:{ctx:l}}});let E=l[1]&&Jt(l);$e=new Oe({props:{data:l[1],title:"Sonnet 4.6 (Mar 2026) — SL (new models) vs SQL (with modeling)",x:"challenge_text",y:"Percentage Correct",series:"Method",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let H=l[2]&&Zt(l);Z=new Oe({props:{data:l[2],title:"GPT-5.3 Codex (Mar 2026) — SL (new models) vs SQL (with modeling)",x:"challenge_text",y:"Percentage Correct",series:"Method",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let G=l[3]&&er(l);Se=new Oe({props:{data:l[3],title:"Claude Sonnet 5 (Aug 2026, max effort) — SL (new models) vs SQL (with modeling)",x:"challenge_text",y:"Percentage Correct",series:"Method",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let A=l[4]&&tr(l);ee=new Oe({props:{data:l[4],title:"GPT-5.6 Terra (Aug 2026, max effort) — SL (new models) vs SQL (with modeling)",x:"challenge_text",y:"Percentage Correct",series:"Method",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let D=l[5]&&rr(l);Le=new Oe({props:{data:l[5],title:"GPT-5.6 Sol (Aug 2026, high effort) — SL (new models) vs SQL (with modeling)",x:"challenge_text",y:"Percentage Correct",series:"Method",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let I=l[6]&&or(l);Qe=new Oe({props:{data:l[6],title:"Nov 2023 benchmark results",x:"challenge_text",y:"Percentage Correct",series:"Method",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let N=l[7]&&nr(l);ae=new Oe({props:{data:l[7],title:"Mar 2026 — Sonnet 4.6",x:"challenge_text",y:"Percentage Correct",series:"Method",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let U=l[8]&&ar(l);Ee=new Oe({props:{data:l[8],title:"Mar 2026 — GPT-5.3 Codex",x:"challenge_text",y:"Percentage Correct",series:"Method",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let X=l[9]&&sr(l);Ge=new zt({props:{data:l[9],$$slots:{default:[Gr]},$$scope:{ctx:l}}});let Y=l[10]&&lr(l);le=new Oe({props:{data:l[10],title:"Semantic Layer: 2023 vs 2026 Sonnet 4.6",x:"challenge_text",y:"Percentage Correct",series:"Cohort",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let j=l[11]&&cr(l);Ne=new Oe({props:{data:l[11],title:"Semantic Layer: 2023 vs 2026 GPT-5.3 Codex",x:"challenge_text",y:"Percentage Correct",series:"Cohort",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let O=l[12]&&ir(l);ie=new Oe({props:{data:l[12],title:"Text to SQL: 2023 vs 2026 Sonnet 4.6",x:"challenge_text",y:"Percentage Correct",series:"Cohort",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}});let B=l[13]&&dr(l);return je=new Oe({props:{data:l[13],title:"Text to SQL: 2023 vs 2026 GPT-5.3 Codex",x:"challenge_text",y:"Percentage Correct",series:"Cohort",type:"grouped",sort:"false",yFmt:"pct0",yMax:"1",yAxisTitle:"Percentage correct",swapXY:"true"}}),{c(){Be&&Be.c(),r=f(),Mt.c(),o=L("meta"),t=L("meta"),st&&st.c(),s=Rt(),c=f(),a=L("p"),a.innerHTML=g,k=f(),p=L("p"),p.innerHTML=P,S=f(),z=L("hr"),R=f(),Q=L("h2"),Q.innerHTML=u,M=f(),ge=L("p"),ge.textContent=Ve,pe=f(),oe=L("p"),oe.innerHTML=St,lt=f(),fe=L("h3"),fe.innerHTML=We,we=f(),F&&F.c(),ye=f(),$(be.$$.fragment),ct=f(),ue=L("h3"),ue.innerHTML=Ke,xe=f(),E&&E.c(),qe=f(),$($e.$$.fragment),it=f(),H&&H.c(),Je=f(),$(Z.$$.fragment),ve=f(),G&&G.c(),ke=f(),$(Se.$$.fragment),dt=f(),A&&A.c(),Ze=f(),$(ee.$$.fragment),Te=f(),D&&D.c(),Ce=f(),$(Le.$$.fragment),ht=f(),at=L("hr"),Me=f(),V=L("h2"),V.innerHTML=_t,mt=f(),Pe=L("p"),Pe.innerHTML=Tt,Re=f(),te=L("p"),te.textContent=ft,ut=f(),I&&I.c(),et=f(),$(Qe.$$.fragment),Fe=f(),N&&N.c(),ne=f(),$(ae.$$.fragment),gt=f(),U&&U.c(),tt=f(),$(Ee.$$.fragment),He=f(),W=L("h3"),W.innerHTML=pt,wt=f(),X&&X.c(),rt=f(),$(Ge.$$.fragment),Ae=f(),K=L("h2"),K.innerHTML=yt,bt=f(),De=L("p"),De.textContent=Ct,Ie=f(),Y&&Y.c(),se=f(),$(le.$$.fragment),xt=f(),j&&j.c(),ot=f(),$(Ne.$$.fragment),Ue=f(),J=L("h2"),J.innerHTML=qt,$t=f(),Xe=L("p"),Xe.textContent=Lt,Ye=f(),O&&O.c(),ce=f(),$(ie.$$.fragment),vt=f(),B&&B.c(),nt=f(),$(je.$$.fragment),this.h()},l(e){Be&&Be.l(e),r=m(e);const n=mr("svelte-2igo1p",document.head);Mt.l(n),o=C(n,"META",{name:!0,content:!0}),t=C(n,"META",{name:!0,content:!0}),st&&st.l(n),s=Rt(),n.forEach(i),c=m(e),a=C(e,"P",{class:!0,"data-svelte-h":!0}),re(a)!=="svelte-1dcom0o"&&(a.innerHTML=g),k=m(e),p=C(e,"P",{class:!0,"data-svelte-h":!0}),re(p)!=="svelte-wui3e9"&&(p.innerHTML=P),S=m(e),z=C(e,"HR",{class:!0}),R=m(e),Q=C(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),re(Q)!=="svelte-daprsc"&&(Q.innerHTML=u),M=m(e),ge=C(e,"P",{class:!0,"data-svelte-h":!0}),re(ge)!=="svelte-1930h0q"&&(ge.textContent=Ve),pe=m(e),oe=C(e,"P",{class:!0,"data-svelte-h":!0}),re(oe)!=="svelte-kboo3g"&&(oe.innerHTML=St),lt=m(e),fe=C(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),re(fe)!=="svelte-12qh9gi"&&(fe.innerHTML=We),we=m(e),F&&F.l(e),ye=m(e),q(be.$$.fragment,e),ct=m(e),ue=C(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),re(ue)!=="svelte-1yytktx"&&(ue.innerHTML=Ke),xe=m(e),E&&E.l(e),qe=m(e),q($e.$$.fragment,e),it=m(e),H&&H.l(e),Je=m(e),q(Z.$$.fragment,e),ve=m(e),G&&G.l(e),ke=m(e),q(Se.$$.fragment,e),dt=m(e),A&&A.l(e),Ze=m(e),q(ee.$$.fragment,e),Te=m(e),D&&D.l(e),Ce=m(e),q(Le.$$.fragment,e),ht=m(e),at=C(e,"HR",{class:!0}),Me=m(e),V=C(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),re(V)!=="svelte-xouyl1"&&(V.innerHTML=_t),mt=m(e),Pe=C(e,"P",{class:!0,"data-svelte-h":!0}),re(Pe)!=="svelte-u3jfr7"&&(Pe.innerHTML=Tt),Re=m(e),te=C(e,"P",{class:!0,"data-svelte-h":!0}),re(te)!=="svelte-yngli5"&&(te.textContent=ft),ut=m(e),I&&I.l(e),et=m(e),q(Qe.$$.fragment,e),Fe=m(e),N&&N.l(e),ne=m(e),q(ae.$$.fragment,e),gt=m(e),U&&U.l(e),tt=m(e),q(Ee.$$.fragment,e),He=m(e),W=C(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),re(W)!=="svelte-b2thdm"&&(W.innerHTML=pt),wt=m(e),X&&X.l(e),rt=m(e),q(Ge.$$.fragment,e),Ae=m(e),K=C(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),re(K)!=="svelte-1qj3d7d"&&(K.innerHTML=yt),bt=m(e),De=C(e,"P",{class:!0,"data-svelte-h":!0}),re(De)!=="svelte-9sg3zt"&&(De.textContent=Ct),Ie=m(e),Y&&Y.l(e),se=m(e),q(le.$$.fragment,e),xt=m(e),j&&j.l(e),ot=m(e),q(Ne.$$.fragment,e),Ue=m(e),J=C(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),re(J)!=="svelte-hauztc"&&(J.innerHTML=qt),$t=m(e),Xe=C(e,"P",{class:!0,"data-svelte-h":!0}),re(Xe)!=="svelte-t5fm6m"&&(Xe.textContent=Lt),Ye=m(e),O&&O.l(e),ce=m(e),q(ie.$$.fragment,e),vt=m(e),B&&B.l(e),nt=m(e),q(je.$$.fragment,e),this.h()},h(){y(o,"name","twitter:card"),y(o,"content","summary_large_image"),y(t,"name","twitter:site"),y(t,"content","@evidence_dev"),y(a,"class","markdown"),y(p,"class","markdown"),y(z,"class","markdown"),y(Q,"class","markdown"),y(Q,"id","with-modeling-mar-2026--aug-2026"),y(ge,"class","markdown"),y(oe,"class","markdown"),y(fe,"class","markdown"),y(fe,"id","summary"),y(ue,"class","markdown"),y(ue,"id","per-question-detail"),y(at,"class","markdown"),y(V,"class","markdown"),y(V,"id","re-running-the-benchmark-without-modeling"),y(Pe,"class","markdown"),y(te,"class","markdown"),y(W,"class","markdown"),y(W,"id","summary-1"),y(K,"class","markdown"),y(K,"id","semantic-layer-2023-vs-2026"),y(De,"class","markdown"),y(J,"class","markdown"),y(J,"id","text-to-sql-2023-vs-2026"),y(Xe,"class","markdown")},m(e,n){Be&&Be.m(e,n),d(e,r,n),Mt.m(document.head,null),Pt(document.head,o),Pt(document.head,t),st&&st.m(document.head,null),Pt(document.head,s),d(e,c,n),d(e,a,n),d(e,k,n),d(e,p,n),d(e,S,n),d(e,z,n),d(e,R,n),d(e,Q,n),d(e,M,n),d(e,ge,n),d(e,pe,n),d(e,oe,n),d(e,lt,n),d(e,fe,n),d(e,we,n),F&&F.m(e,n),d(e,ye,n),x(be,e,n),d(e,ct,n),d(e,ue,n),d(e,xe,n),E&&E.m(e,n),d(e,qe,n),x($e,e,n),d(e,it,n),H&&H.m(e,n),d(e,Je,n),x(Z,e,n),d(e,ve,n),G&&G.m(e,n),d(e,ke,n),x(Se,e,n),d(e,dt,n),A&&A.m(e,n),d(e,Ze,n),x(ee,e,n),d(e,Te,n),D&&D.m(e,n),d(e,Ce,n),x(Le,e,n),d(e,ht,n),d(e,at,n),d(e,Me,n),d(e,V,n),d(e,mt,n),d(e,Pe,n),d(e,Re,n),d(e,te,n),d(e,ut,n),I&&I.m(e,n),d(e,et,n),x(Qe,e,n),d(e,Fe,n),N&&N.m(e,n),d(e,ne,n),x(ae,e,n),d(e,gt,n),U&&U.m(e,n),d(e,tt,n),x(Ee,e,n),d(e,He,n),d(e,W,n),d(e,wt,n),X&&X.m(e,n),d(e,rt,n),x(Ge,e,n),d(e,Ae,n),d(e,K,n),d(e,bt,n),d(e,De,n),d(e,Ie,n),Y&&Y.m(e,n),d(e,se,n),x(le,e,n),d(e,xt,n),j&&j.m(e,n),d(e,ot,n),x(Ne,e,n),d(e,Ue,n),d(e,J,n),d(e,$t,n),d(e,Xe,n),d(e,Ye,n),O&&O.m(e,n),d(e,ce,n),x(ie,e,n),d(e,vt,n),B&&B.m(e,n),d(e,nt,n),x(je,e,n),w=!0},p(e,n){typeof v<"u"&&v.title&&v.hide_title!==!0&&Be.p(e,n),Mt.p(e,n),typeof v=="object"&&st.p(e,n),e[0]?F?(F.p(e,n),n[0]&1&&h(F,1)):(F=Kt(e),F.c(),h(F,1),F.m(ye.parentNode,ye)):F&&(he(),_(F,1,1,()=>{F=null}),de());const Qt={};n[0]&1&&(Qt.data=e[0]),n[3]&8&&(Qt.$$scope={dirty:n,ctx:e}),be.$set(Qt),e[1]?E?(E.p(e,n),n[0]&2&&h(E,1)):(E=Jt(e),E.c(),h(E,1),E.m(qe.parentNode,qe)):E&&(he(),_(E,1,1,()=>{E=null}),de());const Et={};n[0]&2&&(Et.data=e[1]),$e.$set(Et),e[2]?H?(H.p(e,n),n[0]&4&&h(H,1)):(H=Zt(e),H.c(),h(H,1),H.m(Je.parentNode,Je)):H&&(he(),_(H,1,1,()=>{H=null}),de());const Ht={};n[0]&4&&(Ht.data=e[2]),Z.$set(Ht),e[3]?G?(G.p(e,n),n[0]&8&&h(G,1)):(G=er(e),G.c(),h(G,1),G.m(ke.parentNode,ke)):G&&(he(),_(G,1,1,()=>{G=null}),de());const Gt={};n[0]&8&&(Gt.data=e[3]),Se.$set(Gt),e[4]?A?(A.p(e,n),n[0]&16&&h(A,1)):(A=tr(e),A.c(),h(A,1),A.m(Ze.parentNode,Ze)):A&&(he(),_(A,1,1,()=>{A=null}),de());const At={};n[0]&16&&(At.data=e[4]),ee.$set(At),e[5]?D?(D.p(e,n),n[0]&32&&h(D,1)):(D=rr(e),D.c(),h(D,1),D.m(Ce.parentNode,Ce)):D&&(he(),_(D,1,1,()=>{D=null}),de());const Dt={};n[0]&32&&(Dt.data=e[5]),Le.$set(Dt),e[6]?I?(I.p(e,n),n[0]&64&&h(I,1)):(I=or(e),I.c(),h(I,1),I.m(et.parentNode,et)):I&&(he(),_(I,1,1,()=>{I=null}),de());const It={};n[0]&64&&(It.data=e[6]),Qe.$set(It),e[7]?N?(N.p(e,n),n[0]&128&&h(N,1)):(N=nr(e),N.c(),h(N,1),N.m(ne.parentNode,ne)):N&&(he(),_(N,1,1,()=>{N=null}),de());const Nt={};n[0]&128&&(Nt.data=e[7]),ae.$set(Nt),e[8]?U?(U.p(e,n),n[0]&256&&h(U,1)):(U=ar(e),U.c(),h(U,1),U.m(tt.parentNode,tt)):U&&(he(),_(U,1,1,()=>{U=null}),de());const Ut={};n[0]&256&&(Ut.data=e[8]),Ee.$set(Ut),e[9]?X?(X.p(e,n),n[0]&512&&h(X,1)):(X=sr(e),X.c(),h(X,1),X.m(rt.parentNode,rt)):X&&(he(),_(X,1,1,()=>{X=null}),de());const Ft={};n[0]&512&&(Ft.data=e[9]),n[3]&8&&(Ft.$$scope={dirty:n,ctx:e}),Ge.$set(Ft),e[10]?Y?(Y.p(e,n),n[0]&1024&&h(Y,1)):(Y=lr(e),Y.c(),h(Y,1),Y.m(se.parentNode,se)):Y&&(he(),_(Y,1,1,()=>{Y=null}),de());const Xt={};n[0]&1024&&(Xt.data=e[10]),le.$set(Xt),e[11]?j?(j.p(e,n),n[0]&2048&&h(j,1)):(j=cr(e),j.c(),h(j,1),j.m(ot.parentNode,ot)):j&&(he(),_(j,1,1,()=>{j=null}),de());const Yt={};n[0]&2048&&(Yt.data=e[11]),Ne.$set(Yt),e[12]?O?(O.p(e,n),n[0]&4096&&h(O,1)):(O=ir(e),O.c(),h(O,1),O.m(ce.parentNode,ce)):O&&(he(),_(O,1,1,()=>{O=null}),de());const jt={};n[0]&4096&&(jt.data=e[12]),ie.$set(jt),e[13]?B?(B.p(e,n),n[0]&8192&&h(B,1)):(B=dr(e),B.c(),h(B,1),B.m(nt.parentNode,nt)):B&&(he(),_(B,1,1,()=>{B=null}),de());const Ot={};n[0]&8192&&(Ot.data=e[13]),je.$set(Ot)},i(e){w||(h(F),h(be.$$.fragment,e),h(E),h($e.$$.fragment,e),h(H),h(Z.$$.fragment,e),h(G),h(Se.$$.fragment,e),h(A),h(ee.$$.fragment,e),h(D),h(Le.$$.fragment,e),h(I),h(Qe.$$.fragment,e),h(N),h(ae.$$.fragment,e),h(U),h(Ee.$$.fragment,e),h(X),h(Ge.$$.fragment,e),h(Y),h(le.$$.fragment,e),h(j),h(Ne.$$.fragment,e),h(O),h(ie.$$.fragment,e),h(B),h(je.$$.fragment,e),w=!0)},o(e){_(F),_(be.$$.fragment,e),_(E),_($e.$$.fragment,e),_(H),_(Z.$$.fragment,e),_(G),_(Se.$$.fragment,e),_(A),_(ee.$$.fragment,e),_(D),_(Le.$$.fragment,e),_(I),_(Qe.$$.fragment,e),_(N),_(ae.$$.fragment,e),_(U),_(Ee.$$.fragment,e),_(X),_(Ge.$$.fragment,e),_(Y),_(le.$$.fragment,e),_(j),_(Ne.$$.fragment,e),_(O),_(ie.$$.fragment,e),_(B),_(je.$$.fragment,e),w=!1},d(e){e&&(i(r),i(c),i(a),i(k),i(p),i(S),i(z),i(R),i(Q),i(M),i(ge),i(pe),i(oe),i(lt),i(fe),i(we),i(ye),i(ct),i(ue),i(xe),i(qe),i(it),i(Je),i(ve),i(ke),i(dt),i(Ze),i(Te),i(Ce),i(ht),i(at),i(Me),i(V),i(mt),i(Pe),i(Re),i(te),i(ut),i(et),i(Fe),i(ne),i(gt),i(tt),i(He),i(W),i(wt),i(rt),i(Ae),i(K),i(bt),i(De),i(Ie),i(se),i(xt),i(ot),i(Ue),i(J),i($t),i(Xe),i(Ye),i(ce),i(vt),i(nt)),Be&&Be.d(e),Mt.d(e),i(o),i(t),st&&st.d(e),i(s),F&&F.d(e),b(be,e),E&&E.d(e),b($e,e),H&&H.d(e),b(Z,e),G&&G.d(e),b(Se,e),A&&A.d(e),b(ee,e),D&&D.d(e),b(Le,e),I&&I.d(e),b(Qe,e),N&&N.d(e),b(ae,e),U&&U.d(e),b(Ee,e),X&&X.d(e),b(Ge,e),Y&&Y.d(e),b(le,e),j&&j.d(e),b(Ne,e),O&&O.d(e),b(ie,e),B&&B.d(e),b(je,e)}}}const v={title:"Historical Comparison (2023 → 2026)"};function Dr(l,r,o){let t,s;Bt(l,Lr,w=>o(72,t=w)),Bt(l,Wt,w=>o(78,s=w));let{data:c}=r,{data:a={},customFormattingSettings:g,__db:k,inputs:p}=c;fr(Wt,s="5b1d40a451e6b26d88f727cca1e63f2d",s);let P=$r(Tr(p));ur(P.subscribe(w=>p=w)),gr(Sr,{getCustomFormats:()=>g.customFormats||[]});const S=(w,Be)=>Cr(k.query,w,{query_name:Be});vr(S),t.params,pr(()=>!0);let z={initialData:void 0,initialError:void 0},R=T`select
  case
    when model like '%sonnet-4-6%' then 'Claude Sonnet 4.6 (Mar 2026)'
    when model like '%gpt-5.3-codex%' then 'GPT-5.3 Codex (Mar 2026)'
    when model like '%claude-sonnet-5%' then 'Claude Sonnet 5 (Aug 2026, max)'
    when model like '%gpt-5.6-terra%' then 'GPT-5.6 Terra (Aug 2026, max)'
    when model like '%gpt-5.6-sol%' then 'GPT-5.6 Sol (Aug 2026, high)'
  end as "Model",
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  round(100.0 * avg(case when is_correct then 1.0 else 0.0 end), 1) as "Accuracy %",
  count(*) as "Runs"
from sql_answers
where (
    batch_id in (1771950920101, 1772035331932)
    and model not like '%gpt-5.2%'
  )
  or (
    batch_id = 1786382627626
    and model in (
      'anthropic:claude-sonnet-5:effort=max',
      'openai:gpt-5.6-terra:effort=max',
      'openai:gpt-5.6-sol:effort=high'
    )
  )
group by model, "method"
order by
  case when model like '%Mar 2026%' then 0 else 1 end,
  "Model", "Method"`,Q=`select
  case
    when model like '%sonnet-4-6%' then 'Claude Sonnet 4.6 (Mar 2026)'
    when model like '%gpt-5.3-codex%' then 'GPT-5.3 Codex (Mar 2026)'
    when model like '%claude-sonnet-5%' then 'Claude Sonnet 5 (Aug 2026, max)'
    when model like '%gpt-5.6-terra%' then 'GPT-5.6 Terra (Aug 2026, max)'
    when model like '%gpt-5.6-sol%' then 'GPT-5.6 Sol (Aug 2026, high)'
  end as "Model",
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  round(100.0 * avg(case when is_correct then 1.0 else 0.0 end), 1) as "Accuracy %",
  count(*) as "Runs"
from sql_answers
where (
    batch_id in (1771950920101, 1772035331932)
    and model not like '%gpt-5.2%'
  )
  or (
    batch_id = 1786382627626
    and model in (
      'anthropic:claude-sonnet-5:effort=max',
      'openai:gpt-5.6-terra:effort=max',
      'openai:gpt-5.6-sol:effort=high'
    )
  )
group by model, "method"
order by
  case when model like '%Mar 2026%' then 0 else 1 end,
  "Model", "Method"`;a.enhanced_summary_data&&(a.enhanced_summary_data instanceof Error?z.initialError=a.enhanced_summary_data:z.initialData=a.enhanced_summary_data,a.enhanced_summary_columns&&(z.knownColumns=a.enhanced_summary_columns));let u,M=!1;const ge=_e.createReactive({callback:w=>{o(0,u=w)},execFn:S},{id:"enhanced_summary",...z});ge(Q,{noResolve:R,...z}),globalThis[Symbol.for("enhanced_summary")]={get value(){return u}};let Ve={initialData:void 0,initialError:void 0},pe=T`select
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
order by sort_order, "method"`,oe=`select
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
order by sort_order, "method"`;a.enhanced_sonnet_data&&(a.enhanced_sonnet_data instanceof Error?Ve.initialError=a.enhanced_sonnet_data:Ve.initialData=a.enhanced_sonnet_data,a.enhanced_sonnet_columns&&(Ve.knownColumns=a.enhanced_sonnet_columns));let St,lt=!1;const fe=_e.createReactive({callback:w=>{o(1,St=w)},execFn:S},{id:"enhanced_sonnet",...Ve});fe(oe,{noResolve:pe,...Ve}),globalThis[Symbol.for("enhanced_sonnet")]={get value(){return St}};let We={initialData:void 0,initialError:void 0},we=T`select
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
order by sort_order, "method"`,ye=`select
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
order by sort_order, "method"`;a.enhanced_codex_data&&(a.enhanced_codex_data instanceof Error?We.initialError=a.enhanced_codex_data:We.initialData=a.enhanced_codex_data,a.enhanced_codex_columns&&(We.knownColumns=a.enhanced_codex_columns));let be,ct=!1;const ue=_e.createReactive({callback:w=>{o(2,be=w)},execFn:S},{id:"enhanced_codex",...We});ue(ye,{noResolve:we,...We}),globalThis[Symbol.for("enhanced_codex")]={get value(){return be}};let Ke={initialData:void 0,initialError:void 0},xe=T`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1786382627626
  and model = 'anthropic:claude-sonnet-5:effort=max'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`,qe=`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1786382627626
  and model = 'anthropic:claude-sonnet-5:effort=max'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`;a.enhanced_sonnet5_data&&(a.enhanced_sonnet5_data instanceof Error?Ke.initialError=a.enhanced_sonnet5_data:Ke.initialData=a.enhanced_sonnet5_data,a.enhanced_sonnet5_columns&&(Ke.knownColumns=a.enhanced_sonnet5_columns));let $e,it=!1;const Je=_e.createReactive({callback:w=>{o(3,$e=w)},execFn:S},{id:"enhanced_sonnet5",...Ke});Je(qe,{noResolve:xe,...Ke}),globalThis[Symbol.for("enhanced_sonnet5")]={get value(){return $e}};let Z={initialData:void 0,initialError:void 0},ve=T`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1786382627626
  and model = 'openai:gpt-5.6-terra:effort=max'
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
where batch_id = 1786382627626
  and model = 'openai:gpt-5.6-terra:effort=max'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`;a.enhanced_terra_data&&(a.enhanced_terra_data instanceof Error?Z.initialError=a.enhanced_terra_data:Z.initialData=a.enhanced_terra_data,a.enhanced_terra_columns&&(Z.knownColumns=a.enhanced_terra_columns));let Se,dt=!1;const Ze=_e.createReactive({callback:w=>{o(4,Se=w)},execFn:S},{id:"enhanced_terra",...Z});Ze(ke,{noResolve:ve,...Z}),globalThis[Symbol.for("enhanced_terra")]={get value(){return Se}};let ee={initialData:void 0,initialError:void 0},Te=T`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1786382627626
  and model = 'openai:gpt-5.6-sol:effort=high'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`,Ce=`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1786382627626
  and model = 'openai:gpt-5.6-sol:effort=high'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`;a.enhanced_sol_data&&(a.enhanced_sol_data instanceof Error?ee.initialError=a.enhanced_sol_data:ee.initialData=a.enhanced_sol_data,a.enhanced_sol_columns&&(ee.knownColumns=a.enhanced_sol_columns));let Le,ht=!1;const at=_e.createReactive({callback:w=>{o(5,Le=w)},execFn:S},{id:"enhanced_sol",...ee});at(Ce,{noResolve:Te,...ee}),globalThis[Symbol.for("enhanced_sol")]={get value(){return Le}};let Me={initialData:void 0,initialError:void 0},V=T`with data as (
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
order by sort_order, "method"`,_t=`with data as (
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
order by sort_order, "method"`;a.grouped_benchmark_2023_data&&(a.grouped_benchmark_2023_data instanceof Error?Me.initialError=a.grouped_benchmark_2023_data:Me.initialData=a.grouped_benchmark_2023_data,a.grouped_benchmark_2023_columns&&(Me.knownColumns=a.grouped_benchmark_2023_columns));let mt,Pe=!1;const Tt=_e.createReactive({callback:w=>{o(6,mt=w)},execFn:S},{id:"grouped_benchmark_2023",...Me});Tt(_t,{noResolve:V,...Me}),globalThis[Symbol.for("grouped_benchmark_2023")]={get value(){return mt}};let Re={initialData:void 0,initialError:void 0},te=T`with data as (
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
order by sort_order, "method"`,ft=`with data as (
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
order by sort_order, "method"`;a.grouped_benchmark_sonnet_data&&(a.grouped_benchmark_sonnet_data instanceof Error?Re.initialError=a.grouped_benchmark_sonnet_data:Re.initialData=a.grouped_benchmark_sonnet_data,a.grouped_benchmark_sonnet_columns&&(Re.knownColumns=a.grouped_benchmark_sonnet_columns));let ut,et=!1;const Qe=_e.createReactive({callback:w=>{o(7,ut=w)},execFn:S},{id:"grouped_benchmark_sonnet",...Re});Qe(ft,{noResolve:te,...Re}),globalThis[Symbol.for("grouped_benchmark_sonnet")]={get value(){return ut}};let Fe={initialData:void 0,initialError:void 0},ne=T`with data as (
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
order by sort_order, "method"`,ae=`with data as (
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
order by sort_order, "method"`;a.grouped_benchmark_codex_data&&(a.grouped_benchmark_codex_data instanceof Error?Fe.initialError=a.grouped_benchmark_codex_data:Fe.initialData=a.grouped_benchmark_codex_data,a.grouped_benchmark_codex_columns&&(Fe.knownColumns=a.grouped_benchmark_codex_columns));let gt,tt=!1;const Ee=_e.createReactive({callback:w=>{o(8,gt=w)},execFn:S},{id:"grouped_benchmark_codex",...Fe});Ee(ae,{noResolve:ne,...Fe}),globalThis[Symbol.for("grouped_benchmark_codex")]={get value(){return gt}};let He={initialData:void 0,initialError:void 0},W=T`with data as (
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
  too_many_hops`,pt=`with data as (
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
  too_many_hops`;a.summary_table_data&&(a.summary_table_data instanceof Error?He.initialError=a.summary_table_data:He.initialData=a.summary_table_data,a.summary_table_columns&&(He.knownColumns=a.summary_table_columns));let wt,rt=!1;const Ge=_e.createReactive({callback:w=>{o(9,wt=w)},execFn:S},{id:"summary_table",...He});Ge(pt,{noResolve:W,...He}),globalThis[Symbol.for("summary_table")]={get value(){return wt}};let Ae={initialData:void 0,initialError:void 0},K=T`with data as (
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
order by sort_order, cohort`,yt=`with data as (
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
order by sort_order, cohort`;a.sl_comparison_sonnet_data&&(a.sl_comparison_sonnet_data instanceof Error?Ae.initialError=a.sl_comparison_sonnet_data:Ae.initialData=a.sl_comparison_sonnet_data,a.sl_comparison_sonnet_columns&&(Ae.knownColumns=a.sl_comparison_sonnet_columns));let bt,De=!1;const Ct=_e.createReactive({callback:w=>{o(10,bt=w)},execFn:S},{id:"sl_comparison_sonnet",...Ae});Ct(yt,{noResolve:K,...Ae}),globalThis[Symbol.for("sl_comparison_sonnet")]={get value(){return bt}};let Ie={initialData:void 0,initialError:void 0},se=T`with data as (
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
order by sort_order, cohort`,le=`with data as (
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
order by sort_order, cohort`;a.sl_comparison_codex_data&&(a.sl_comparison_codex_data instanceof Error?Ie.initialError=a.sl_comparison_codex_data:Ie.initialData=a.sl_comparison_codex_data,a.sl_comparison_codex_columns&&(Ie.knownColumns=a.sl_comparison_codex_columns));let xt,ot=!1;const Ne=_e.createReactive({callback:w=>{o(11,xt=w)},execFn:S},{id:"sl_comparison_codex",...Ie});Ne(le,{noResolve:se,...Ie}),globalThis[Symbol.for("sl_comparison_codex")]={get value(){return xt}};let Ue={initialData:void 0,initialError:void 0},J=T`with data as (
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
order by sort_order, cohort`,qt=`with data as (
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
order by sort_order, cohort`;a.sql_comparison_sonnet_data&&(a.sql_comparison_sonnet_data instanceof Error?Ue.initialError=a.sql_comparison_sonnet_data:Ue.initialData=a.sql_comparison_sonnet_data,a.sql_comparison_sonnet_columns&&(Ue.knownColumns=a.sql_comparison_sonnet_columns));let $t,Xe=!1;const Lt=_e.createReactive({callback:w=>{o(12,$t=w)},execFn:S},{id:"sql_comparison_sonnet",...Ue});Lt(qt,{noResolve:J,...Ue}),globalThis[Symbol.for("sql_comparison_sonnet")]={get value(){return $t}};let Ye={initialData:void 0,initialError:void 0},ce=T`with data as (
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
order by sort_order, cohort`,ie=`with data as (
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
order by sort_order, cohort`;a.sql_comparison_codex_data&&(a.sql_comparison_codex_data instanceof Error?Ye.initialError=a.sql_comparison_codex_data:Ye.initialData=a.sql_comparison_codex_data,a.sql_comparison_codex_columns&&(Ye.knownColumns=a.sql_comparison_codex_columns));let vt,nt=!1;const je=_e.createReactive({callback:w=>{o(13,vt=w)},execFn:S},{id:"sql_comparison_codex",...Ye});return je(ie,{noResolve:ce,...Ye}),globalThis[Symbol.for("sql_comparison_codex")]={get value(){return vt}},l.$$set=w=>{"data"in w&&o(14,c=w.data)},l.$$.update=()=>{l.$$.dirty[0]&16384&&o(15,{data:a={},customFormattingSettings:g,__db:k}=c,a),l.$$.dirty[0]&32768&&kr.set(Object.keys(a).length>0),l.$$.dirty[2]&1024&&t.params,l.$$.dirty[0]&983040&&(R||!M?R||(ge(Q,{noResolve:R,...z}),o(19,M=!0)):ge(Q,{noResolve:R})),l.$$.dirty[0]&15728640&&(pe||!lt?pe||(fe(oe,{noResolve:pe,...Ve}),o(23,lt=!0)):fe(oe,{noResolve:pe})),l.$$.dirty[0]&251658240&&(we||!ct?we||(ue(ye,{noResolve:we,...We}),o(27,ct=!0)):ue(ye,{noResolve:we})),l.$$.dirty[0]&1879048192|l.$$.dirty[1]&1&&(xe||!it?xe||(Je(qe,{noResolve:xe,...Ke}),o(31,it=!0)):Je(qe,{noResolve:xe})),l.$$.dirty[1]&30&&(ve||!dt?ve||(Ze(ke,{noResolve:ve,...Z}),o(35,dt=!0)):Ze(ke,{noResolve:ve})),l.$$.dirty[1]&480&&(Te||!ht?Te||(at(Ce,{noResolve:Te,...ee}),o(39,ht=!0)):at(Ce,{noResolve:Te})),l.$$.dirty[1]&7680&&(V||!Pe?V||(Tt(_t,{noResolve:V,...Me}),o(43,Pe=!0)):Tt(_t,{noResolve:V})),l.$$.dirty[1]&122880&&(te||!et?te||(Qe(ft,{noResolve:te,...Re}),o(47,et=!0)):Qe(ft,{noResolve:te})),l.$$.dirty[1]&1966080&&(ne||!tt?ne||(Ee(ae,{noResolve:ne,...Fe}),o(51,tt=!0)):Ee(ae,{noResolve:ne})),l.$$.dirty[1]&31457280&&(W||!rt?W||(Ge(pt,{noResolve:W,...He}),o(55,rt=!0)):Ge(pt,{noResolve:W})),l.$$.dirty[1]&503316480&&(K||!De?K||(Ct(yt,{noResolve:K,...Ae}),o(59,De=!0)):Ct(yt,{noResolve:K})),l.$$.dirty[1]&1610612736|l.$$.dirty[2]&3&&(se||!ot?se||(Ne(le,{noResolve:se,...Ie}),o(63,ot=!0)):Ne(le,{noResolve:se})),l.$$.dirty[2]&60&&(J||!Xe?J||(Lt(qt,{noResolve:J,...Ue}),o(67,Xe=!0)):Lt(qt,{noResolve:J})),l.$$.dirty[2]&960&&(ce||!nt?ce||(je(ie,{noResolve:ce,...Ye}),o(71,nt=!0)):je(ie,{noResolve:ce}))},o(17,R=T`select
  case
    when model like '%sonnet-4-6%' then 'Claude Sonnet 4.6 (Mar 2026)'
    when model like '%gpt-5.3-codex%' then 'GPT-5.3 Codex (Mar 2026)'
    when model like '%claude-sonnet-5%' then 'Claude Sonnet 5 (Aug 2026, max)'
    when model like '%gpt-5.6-terra%' then 'GPT-5.6 Terra (Aug 2026, max)'
    when model like '%gpt-5.6-sol%' then 'GPT-5.6 Sol (Aug 2026, high)'
  end as "Model",
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  round(100.0 * avg(case when is_correct then 1.0 else 0.0 end), 1) as "Accuracy %",
  count(*) as "Runs"
from sql_answers
where (
    batch_id in (1771950920101, 1772035331932)
    and model not like '%gpt-5.2%'
  )
  or (
    batch_id = 1786382627626
    and model in (
      'anthropic:claude-sonnet-5:effort=max',
      'openai:gpt-5.6-terra:effort=max',
      'openai:gpt-5.6-sol:effort=high'
    )
  )
group by model, "method"
order by
  case when model like '%Mar 2026%' then 0 else 1 end,
  "Model", "Method"`),o(18,Q=`select
  case
    when model like '%sonnet-4-6%' then 'Claude Sonnet 4.6 (Mar 2026)'
    when model like '%gpt-5.3-codex%' then 'GPT-5.3 Codex (Mar 2026)'
    when model like '%claude-sonnet-5%' then 'Claude Sonnet 5 (Aug 2026, max)'
    when model like '%gpt-5.6-terra%' then 'GPT-5.6 Terra (Aug 2026, max)'
    when model like '%gpt-5.6-sol%' then 'GPT-5.6 Sol (Aug 2026, high)'
  end as "Model",
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  round(100.0 * avg(case when is_correct then 1.0 else 0.0 end), 1) as "Accuracy %",
  count(*) as "Runs"
from sql_answers
where (
    batch_id in (1771950920101, 1772035331932)
    and model not like '%gpt-5.2%'
  )
  or (
    batch_id = 1786382627626
    and model in (
      'anthropic:claude-sonnet-5:effort=max',
      'openai:gpt-5.6-terra:effort=max',
      'openai:gpt-5.6-sol:effort=high'
    )
  )
group by model, "method"
order by
  case when model like '%Mar 2026%' then 0 else 1 end,
  "Model", "Method"`),o(21,pe=T`select
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
order by sort_order, "method"`),o(22,oe=`select
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
order by sort_order, "method"`),o(25,we=T`select
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
order by sort_order, "method"`),o(26,ye=`select
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
order by sort_order, "method"`),o(29,xe=T`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1786382627626
  and model = 'anthropic:claude-sonnet-5:effort=max'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`),o(30,qe=`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1786382627626
  and model = 'anthropic:claude-sonnet-5:effort=max'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`),o(33,ve=T`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1786382627626
  and model = 'openai:gpt-5.6-terra:effort=max'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`),o(34,ke=`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1786382627626
  and model = 'openai:gpt-5.6-terra:effort=max'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`),o(37,Te=T`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1786382627626
  and model = 'openai:gpt-5.6-sol:effort=high'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`),o(38,Ce=`select
  sort_order::int::string || ' - ' || left(challenge_text, 25) as challenge_text,
  sort_order,
  case
    when "method" = 'semantic_layer' then 'Semantic Layer'
    when "method" = 'sql' then 'SQL (with modeling)'
    else "method"
  end as "Method",
  avg(case when is_correct then 1.0 else 0.0 end) as "Percentage Correct"
from sql_answers
where batch_id = 1786382627626
  and model = 'openai:gpt-5.6-sol:effort=high'
group by challenge_text, sort_order, "method"
order by sort_order, "method"`),o(41,V=T`with data as (
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
order by sort_order, "method"`),o(42,_t=`with data as (
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
order by sort_order, "method"`),o(45,te=T`with data as (
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
order by sort_order, "method"`),o(46,ft=`with data as (
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
order by sort_order, "method"`),o(49,ne=T`with data as (
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
order by sort_order, "method"`),o(50,ae=`with data as (
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
order by sort_order, "method"`),o(53,W=T`with data as (
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
  too_many_hops`),o(54,pt=`with data as (
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
  too_many_hops`),o(57,K=T`with data as (
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
order by sort_order, cohort`),o(58,yt=`with data as (
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
order by sort_order, cohort`),o(61,se=T`with data as (
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
order by sort_order, cohort`),o(62,le=`with data as (
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
order by sort_order, cohort`),o(65,J=T`with data as (
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
order by sort_order, cohort`),o(66,qt=`with data as (
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
order by sort_order, cohort`),o(69,ce=T`with data as (
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
order by sort_order, cohort`),o(70,ie=`with data as (
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
order by sort_order, cohort`),[u,St,be,$e,Se,Le,mt,ut,gt,wt,bt,xt,$t,vt,c,a,z,R,Q,M,Ve,pe,oe,lt,We,we,ye,ct,Ke,xe,qe,it,Z,ve,ke,dt,ee,Te,Ce,ht,Me,V,_t,Pe,Re,te,ft,et,Fe,ne,ae,tt,He,W,pt,rt,Ae,K,yt,De,Ie,se,le,ot,Ue,J,qt,Xe,Ye,ce,ie,nt,t]}class Vr extends xr{constructor(r){super(),qr(this,r,Dr,Ar,_r,{data:14},null,[-1,-1,-1,-1])}}export{Vr as component};
