import{s as Je,J as ct,l as Ve,K as qt,q as Ne,G as mt,v as Lt,d as h,w as Mt,x as Tt,y as At,i as _,c as w,j as g,a as ze,b as A,h as Ct,e as de,f as We,g as Re,k as ue,m as St,o as It,n as kt,p as xt,r as Nt,t as Ft,u as Et}from"../chunks/scheduler.Bclb4y6L.js";import{S as Ze,i as $e,d as v,t as y,a as p,m as q,b as L,e as M,c as Qe,g as De}from"../chunks/index.BwoQS8MT.js";import{o as Rt,q as Ht,j as vt,t as Qt,u as ke,v as Ae,D as Dt,e as Ot,s as Pt,Q as Oe,p as Bt,C as xe,a as dt,r as ut,b as Gt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.DjmsfNde.js";import{w as zt}from"../chunks/entry.BaYMNKmK.js";import{h as ge,p as Wt}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{D as Xe,a as Ye}from"../chunks/Dropdown.uDDRpxsW.js";import{p as Ut}from"../chunks/stores.6shg0P9c.js";import{Q as Pe}from"../chunks/QueryViewer.8ZqyNL9l.js";import{g as jt,a as Xt,C as Yt,B as Ge}from"../chunks/BarChart.DE0mv94A.js";function Kt(o,a,t){let e,n,r,s,c,b,i,D,N,F,I,k,O,E,z,x=Ne,Q=()=>(x(),x=mt(n,u=>t(27,z=u)),n),P,m=Ne,C=()=>(m(),m=mt(e,u=>t(28,P=u)),e),R;o.$$.on_destroy.push(()=>x()),o.$$.on_destroy.push(()=>m());let X=ct(Rt);Ve(o,X,u=>t(29,R=u));let me=ct(Ht);const{resolveColor:Y}=vt();let{y:H=void 0}=a;const ve=!!H;let{series:W=void 0}=a;const K=!!W;let{options:Z=void 0}=a,{name:B=void 0}=a,{shape:qe="circle"}=a,{fillColor:pe=void 0}=a,{opacity:he=.7}=a,{outlineColor:U=void 0}=a,{outlineWidth:se=void 0}=a,{pointSize:V=10}=a,{useTooltip:re=!1}=a,{tooltipTitle:G}=a,{seriesOrder:we=void 0}=a,{seriesLabelFmt:ie=void 0}=a,J,j,ye,fe;return re&&(ye={tooltip:{formatter(u){return J?G?j=`<span id="tooltip" style='font-weight:600'>${Ae(u.value[2],"0")}</span><br/>
                            ${ke(W)}: <span style='float:right; margin-left: 15px;'>${Ae(u.seriesName)}</span><br/>
                            ${ke(s,i)}: <span style='float:right; margin-left: 15px;'>${Ae(u.value[0],i)}</span><br/>
                            ${ke(typeof H=="object"?u.seriesName:H,D)}: <span style='float:right; margin-left: 15px;'>${Ae(u.value[1],D)}</span>`:j=`<span id="tooltip" style='font-weight:600'>${Ae(u.seriesName)}</span><br/>
                            ${ke(s,i)}: <span style='float:right; margin-left: 15px;'>${Ae(u.value[0],i)}</span><br/>
                            ${ke(typeof H=="object"?u.seriesName:H,D)}: <span style='float:right; margin-left: 15px;'>${Ae(u.value[1],D)}</span>`:G?j=`<span id="tooltip" style='font-weight:600;'>${Ae(u.value[2],"0")}</span><br/>
                            <span style='font-weight: 400;'>${ke(s,i)}:</span> <span style='float:right; margin-left: 15px;'>${Ae(u.value[0],i)}</span><br/>
                            <span style='font-weight: 400;'>${ke(H,D)}:</span> <span style='float:right; margin-left: 15px;'>${Ae(u.value[1],D)}</span>`:j=`<span id="tooltip" style='font-weight: 600;'>${ke(s,i)}:</span> <span style='float:right; margin-left: 15px;'>${Ae(u.value[0],i)}</span><br/>
                            <span style='font-weight: 600;'>${ke(H,D)}:</span> <span style='float:right; margin-left: 15px;'>${Ae(u.value[1],D)}</span>`,j}}},fe={tooltip:{trigger:"item"}}),qt(()=>{me.update(u=>(c?(u.yAxis={...u.yAxis,...E.xAxis},u.xAxis={...u.xAxis,...E.yAxis}):(u.yAxis[0]={...u.yAxis[0],...E.yAxis},u.xAxis={...u.xAxis,...E.xAxis}),re&&(u.tooltip={...u.tooltip,...fe.tooltip}),u))}),o.$$set=u=>{"y"in u&&t(3,H=u.y),"series"in u&&t(4,W=u.series),"options"in u&&t(8,Z=u.options),"name"in u&&t(5,B=u.name),"shape"in u&&t(9,qe=u.shape),"fillColor"in u&&t(10,pe=u.fillColor),"opacity"in u&&t(11,he=u.opacity),"outlineColor"in u&&t(12,U=u.outlineColor),"outlineWidth"in u&&t(13,se=u.outlineWidth),"pointSize"in u&&t(14,V=u.pointSize),"useTooltip"in u&&t(6,re=u.useTooltip),"tooltipTitle"in u&&t(7,G=u.tooltipTitle),"seriesOrder"in u&&t(15,we=u.seriesOrder),"seriesLabelFmt"in u&&t(16,ie=u.seriesLabelFmt)},o.$$.update=()=>{o.$$.dirty[0]&1024&&C(t(1,e=Y(pe))),o.$$.dirty[0]&4096&&Q(t(0,n=Y(U))),o.$$.dirty[0]&64&&t(6,re=Qt(re)),o.$$.dirty[0]&536870912&&t(25,r=R.data),o.$$.dirty[0]&536870912&&t(24,s=R.x),o.$$.dirty[0]&536870912&&t(18,c=R.swapXY),o.$$.dirty[0]&536870912&&t(19,b=R.xType),o.$$.dirty[0]&536870912&&(i=R.xFormat),o.$$.dirty[0]&536870912&&(D=R.yFormat),o.$$.dirty[0]&536870912&&t(22,N=R.xMismatch),o.$$.dirty[0]&536870912&&t(21,F=R.columnSummary),o.$$.dirty[0]&536870920&&t(3,H=ve?H:R.y),o.$$.dirty[0]&536870928&&t(4,W=K?W:R.series),o.$$.dirty[0]&603979776&&t(26,I=I??R.size),o.$$.dirty[0]&536871040&&t(7,G=G??R.tooltipTitle),o.$$.dirty[0]&52428856&&(!W&&typeof H!="object"?(t(5,B=B??ke(H,F[H].title)),J=!1):(t(25,r=jt(r,s,H,W)),J=!0)),o.$$.dirty[0]&402811392&&t(23,k={type:"scatter",label:{show:!1},labelLayout:{hideOverlap:!0},emphasis:{focus:"item"},symbol:qe,symbolSize:V,itemStyle:{color:P,opacity:he,borderColor:z,borderWidth:se},...ye}),o.$$.dirty[0]&8388864&&Z&&t(23,k={...k,...Z}),o.$$.dirty[0]&65372344&&t(20,O=Xt(r,s,H,W,c,k,B,N,F,we,void 0,G,void 0,ie)),o.$$.dirty[0]&1048576&&me.update(u=>(u.series.push(...O),u.legend.data.push(...O.map(_e=>_e.name.toString())),u)),o.$$.dirty[0]&524288&&(E={yAxis:{scale:!0,boundaryGap:["1%","1%"]},xAxis:{boundaryGap:[b==="time"?"2%":"1%","2%"]}})},[n,e,X,H,W,B,re,G,Z,qe,pe,he,U,se,V,we,ie,ye,c,b,O,F,N,k,s,r,I,z,P,R]}class Vt extends Ze{constructor(a){super(),$e(this,a,Kt,null,Je,{y:3,series:4,options:8,name:5,shape:9,fillColor:10,opacity:11,outlineColor:12,outlineWidth:13,pointSize:14,useTooltip:6,tooltipTitle:7,seriesOrder:15,seriesLabelFmt:16},null,[-1,-1])}}function Jt(o){let a,t,e;a=new Vt({props:{shape:o[26],fillColor:o[49],opacity:o[27],outlineColor:o[48],outlineWidth:o[28],pointSize:o[29],useTooltip:ea,seriesOrder:o[41],seriesLabelFmt:o[43]}});const n=o[54].default,r=Lt(n,o,o[55],null);return{c(){M(a.$$.fragment),t=g(),r&&r.c()},l(s){L(a.$$.fragment,s),t=w(s),r&&r.l(s)},m(s,c){q(a,s,c),_(s,t,c),r&&r.m(s,c),e=!0},p(s,c){const b={};c[0]&67108864&&(b.shape=s[26]),c[1]&262144&&(b.fillColor=s[49]),c[0]&134217728&&(b.opacity=s[27]),c[1]&131072&&(b.outlineColor=s[48]),c[0]&268435456&&(b.outlineWidth=s[28]),c[0]&536870912&&(b.pointSize=s[29]),c[1]&1024&&(b.seriesOrder=s[41]),c[1]&4096&&(b.seriesLabelFmt=s[43]),a.$set(b),r&&r.p&&(!e||c[1]&16777216)&&Mt(r,n,s,s[55],e?At(n,s[55],c,null):Tt(s[55]),null)},i(s){e||(p(a.$$.fragment,s),p(r,s),e=!0)},o(s){y(a.$$.fragment,s),y(r,s),e=!1},d(s){s&&h(t),v(a,s),r&&r.d(s)}}}function Zt(o){let a,t;return a=new Yt({props:{data:o[0],x:o[1],y:o[2],xFmt:o[8],yFmt:o[7],series:o[3],tooltipTitle:o[32],xType:o[4],yLog:o[5],yLogBase:o[6],legend:o[11],xAxisTitle:o[12],yAxisTitle:o[13],xGridlines:o[14],yGridlines:o[15],xAxisLabels:o[16],yAxisLabels:o[17],xBaseline:o[18],yBaseline:o[19],xTickMarks:o[20],yTickMarks:o[21],xMin:o[22],xMax:o[23],yMin:o[24],yMax:o[25],title:o[9],subtitle:o[10],chartType:$t,sort:o[31],chartAreaHeight:o[30],colorPalette:o[47],echartsOptions:o[33],seriesOptions:o[34],printEchartsConfig:o[35],emptySet:o[36],emptyMessage:o[37],renderer:o[38],downloadableData:o[39],downloadableImage:o[40],connectGroup:o[42],seriesColors:o[46],leftPadding:o[44],rightPadding:o[45],$$slots:{default:[Jt]},$$scope:{ctx:o}}}),{c(){M(a.$$.fragment)},l(e){L(a.$$.fragment,e)},m(e,n){q(a,e,n),t=!0},p(e,n){const r={};n[0]&1&&(r.data=e[0]),n[0]&2&&(r.x=e[1]),n[0]&4&&(r.y=e[2]),n[0]&256&&(r.xFmt=e[8]),n[0]&128&&(r.yFmt=e[7]),n[0]&8&&(r.series=e[3]),n[1]&2&&(r.tooltipTitle=e[32]),n[0]&16&&(r.xType=e[4]),n[0]&32&&(r.yLog=e[5]),n[0]&64&&(r.yLogBase=e[6]),n[0]&2048&&(r.legend=e[11]),n[0]&4096&&(r.xAxisTitle=e[12]),n[0]&8192&&(r.yAxisTitle=e[13]),n[0]&16384&&(r.xGridlines=e[14]),n[0]&32768&&(r.yGridlines=e[15]),n[0]&65536&&(r.xAxisLabels=e[16]),n[0]&131072&&(r.yAxisLabels=e[17]),n[0]&262144&&(r.xBaseline=e[18]),n[0]&524288&&(r.yBaseline=e[19]),n[0]&1048576&&(r.xTickMarks=e[20]),n[0]&2097152&&(r.yTickMarks=e[21]),n[0]&4194304&&(r.xMin=e[22]),n[0]&8388608&&(r.xMax=e[23]),n[0]&16777216&&(r.yMin=e[24]),n[0]&33554432&&(r.yMax=e[25]),n[0]&512&&(r.title=e[9]),n[0]&1024&&(r.subtitle=e[10]),n[1]&1&&(r.sort=e[31]),n[0]&1073741824&&(r.chartAreaHeight=e[30]),n[1]&65536&&(r.colorPalette=e[47]),n[1]&4&&(r.echartsOptions=e[33]),n[1]&8&&(r.seriesOptions=e[34]),n[1]&16&&(r.printEchartsConfig=e[35]),n[1]&32&&(r.emptySet=e[36]),n[1]&64&&(r.emptyMessage=e[37]),n[1]&128&&(r.renderer=e[38]),n[1]&256&&(r.downloadableData=e[39]),n[1]&512&&(r.downloadableImage=e[40]),n[1]&2048&&(r.connectGroup=e[42]),n[1]&32768&&(r.seriesColors=e[46]),n[1]&8192&&(r.leftPadding=e[44]),n[1]&16384&&(r.rightPadding=e[45]),n[0]&1006632960|n[1]&17175552&&(r.$$scope={dirty:n,ctx:e}),a.$set(r)},i(e){t||(p(a.$$.fragment,e),t=!0)},o(e){y(a.$$.fragment,e),t=!1},d(e){v(a,e)}}}let $t="Scatter Plot",ea=!0;function ta(o,a,t){let e,n,r,s,{$$slots:c={},$$scope:b}=a;const{resolveColor:i,resolveColorsObject:D,resolveColorPalette:N}=vt();let{data:F=void 0}=a,{x:I=void 0}=a,{y:k=void 0}=a,{series:O=void 0}=a,{xType:E=void 0}=a,{yLog:z=void 0}=a,{yLogBase:x=void 0}=a,{yFmt:Q=void 0}=a,{xFmt:P=void 0}=a,{title:m=void 0}=a,{subtitle:C=void 0}=a,{legend:R=void 0}=a,{xAxisTitle:X="true"}=a,{yAxisTitle:me="true"}=a,{xGridlines:Y=void 0}=a,{yGridlines:H=void 0}=a,{xAxisLabels:ve=void 0}=a,{yAxisLabels:W=void 0}=a,{xBaseline:K=void 0}=a,{yBaseline:Z=void 0}=a,{xTickMarks:B=void 0}=a,{yTickMarks:qe=void 0}=a,{xMin:pe=void 0}=a,{xMax:he=void 0}=a,{yMin:U=void 0}=a,{yMax:se=void 0}=a,{shape:V=void 0}=a,{fillColor:re=void 0}=a,{opacity:G=void 0}=a,{outlineColor:we=void 0}=a,{outlineWidth:ie=void 0}=a,{pointSize:J=void 0}=a,{chartAreaHeight:j=void 0}=a,{sort:ye=void 0}=a,{tooltipTitle:fe=void 0}=a,{colorPalette:u="default"}=a,{echartsOptions:_e=void 0}=a,{seriesOptions:ce=void 0}=a,{printEchartsConfig:Ce=!1}=a,{emptySet:Se=void 0}=a,{emptyMessage:Le=void 0}=a,{renderer:be=void 0}=a,{downloadableData:T=void 0}=a,{downloadableImage:Me=void 0}=a,{seriesColors:Ee=void 0}=a,{seriesOrder:Ie=void 0}=a,{connectGroup:He=void 0}=a,{seriesLabelFmt:Te=void 0}=a,{leftPadding:Be=void 0}=a,{rightPadding:Ue=void 0}=a;return o.$$set=f=>{"data"in f&&t(0,F=f.data),"x"in f&&t(1,I=f.x),"y"in f&&t(2,k=f.y),"series"in f&&t(3,O=f.series),"xType"in f&&t(4,E=f.xType),"yLog"in f&&t(5,z=f.yLog),"yLogBase"in f&&t(6,x=f.yLogBase),"yFmt"in f&&t(7,Q=f.yFmt),"xFmt"in f&&t(8,P=f.xFmt),"title"in f&&t(9,m=f.title),"subtitle"in f&&t(10,C=f.subtitle),"legend"in f&&t(11,R=f.legend),"xAxisTitle"in f&&t(12,X=f.xAxisTitle),"yAxisTitle"in f&&t(13,me=f.yAxisTitle),"xGridlines"in f&&t(14,Y=f.xGridlines),"yGridlines"in f&&t(15,H=f.yGridlines),"xAxisLabels"in f&&t(16,ve=f.xAxisLabels),"yAxisLabels"in f&&t(17,W=f.yAxisLabels),"xBaseline"in f&&t(18,K=f.xBaseline),"yBaseline"in f&&t(19,Z=f.yBaseline),"xTickMarks"in f&&t(20,B=f.xTickMarks),"yTickMarks"in f&&t(21,qe=f.yTickMarks),"xMin"in f&&t(22,pe=f.xMin),"xMax"in f&&t(23,he=f.xMax),"yMin"in f&&t(24,U=f.yMin),"yMax"in f&&t(25,se=f.yMax),"shape"in f&&t(26,V=f.shape),"fillColor"in f&&t(50,re=f.fillColor),"opacity"in f&&t(27,G=f.opacity),"outlineColor"in f&&t(51,we=f.outlineColor),"outlineWidth"in f&&t(28,ie=f.outlineWidth),"pointSize"in f&&t(29,J=f.pointSize),"chartAreaHeight"in f&&t(30,j=f.chartAreaHeight),"sort"in f&&t(31,ye=f.sort),"tooltipTitle"in f&&t(32,fe=f.tooltipTitle),"colorPalette"in f&&t(52,u=f.colorPalette),"echartsOptions"in f&&t(33,_e=f.echartsOptions),"seriesOptions"in f&&t(34,ce=f.seriesOptions),"printEchartsConfig"in f&&t(35,Ce=f.printEchartsConfig),"emptySet"in f&&t(36,Se=f.emptySet),"emptyMessage"in f&&t(37,Le=f.emptyMessage),"renderer"in f&&t(38,be=f.renderer),"downloadableData"in f&&t(39,T=f.downloadableData),"downloadableImage"in f&&t(40,Me=f.downloadableImage),"seriesColors"in f&&t(53,Ee=f.seriesColors),"seriesOrder"in f&&t(41,Ie=f.seriesOrder),"connectGroup"in f&&t(42,He=f.connectGroup),"seriesLabelFmt"in f&&t(43,Te=f.seriesLabelFmt),"leftPadding"in f&&t(44,Be=f.leftPadding),"rightPadding"in f&&t(45,Ue=f.rightPadding),"$$scope"in f&&t(55,b=f.$$scope)},o.$$.update=()=>{o.$$.dirty[1]&524288&&t(49,e=i(re)),o.$$.dirty[1]&1048576&&t(48,n=i(we)),o.$$.dirty[1]&2097152&&t(47,r=N(u)),o.$$.dirty[1]&4194304&&t(46,s=D(Ee))},[F,I,k,O,E,z,x,Q,P,m,C,R,X,me,Y,H,ve,W,K,Z,B,qe,pe,he,U,se,V,G,ie,J,j,ye,fe,_e,ce,Ce,Se,Le,be,T,Me,Ie,He,Te,Be,Ue,s,r,n,e,re,we,u,Ee,c,b]}class Ke extends Ze{constructor(a){super(),$e(this,a,ta,Zt,Je,{data:0,x:1,y:2,series:3,xType:4,yLog:5,yLogBase:6,yFmt:7,xFmt:8,title:9,subtitle:10,legend:11,xAxisTitle:12,yAxisTitle:13,xGridlines:14,yGridlines:15,xAxisLabels:16,yAxisLabels:17,xBaseline:18,yBaseline:19,xTickMarks:20,yTickMarks:21,xMin:22,xMax:23,yMin:24,yMax:25,shape:26,fillColor:50,opacity:27,outlineColor:51,outlineWidth:28,pointSize:29,chartAreaHeight:30,sort:31,tooltipTitle:32,colorPalette:52,echartsOptions:33,seriesOptions:34,printEchartsConfig:35,emptySet:36,emptyMessage:37,renderer:38,downloadableData:39,downloadableImage:40,seriesColors:53,seriesOrder:41,connectGroup:42,seriesLabelFmt:43,leftPadding:44,rightPadding:45},null,[-1,-1])}}function aa(o){let a,t=S.title+"",e;return{c(){a=ue("h1"),e=Et(t),this.h()},l(n){a=de(n,"H1",{class:!0});var r=Nt(a);e=Ft(r,t),r.forEach(h),this.h()},h(){A(a,"class","title")},m(n,r){_(n,a,r),ze(a,e)},p:Ne,d(n){n&&h(a)}}}function la(o){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:Ne,p:Ne,d:Ne}}function oa(o){let a,t,e,n,r;return document.title=a=S.title,{c(){t=g(),e=ue("meta"),n=g(),r=ue("meta"),this.h()},l(s){t=w(s),e=de(s,"META",{property:!0,content:!0}),n=w(s),r=de(s,"META",{name:!0,content:!0}),this.h()},h(){var s,c;A(e,"property","og:title"),A(e,"content",((s=S.og)==null?void 0:s.title)??S.title),A(r,"name","twitter:title"),A(r,"content",((c=S.og)==null?void 0:c.title)??S.title)},m(s,c){_(s,t,c),_(s,e,c),_(s,n,c),_(s,r,c)},p(s,c){c&0&&a!==(a=S.title)&&(document.title=a)},d(s){s&&(h(t),h(e),h(n),h(r))}}}function na(o){var r,s;let a,t,e=(S.description||((r=S.og)==null?void 0:r.description))&&sa(),n=((s=S.og)==null?void 0:s.image)&&ra();return{c(){e&&e.c(),a=g(),n&&n.c(),t=We()},l(c){e&&e.l(c),a=w(c),n&&n.l(c),t=We()},m(c,b){e&&e.m(c,b),_(c,a,b),n&&n.m(c,b),_(c,t,b)},p(c,b){var i,D;(S.description||(i=S.og)!=null&&i.description)&&e.p(c,b),(D=S.og)!=null&&D.image&&n.p(c,b)},d(c){c&&(h(a),h(t)),e&&e.d(c),n&&n.d(c)}}}function sa(o){let a,t,e,n,r;return{c(){a=ue("meta"),t=g(),e=ue("meta"),n=g(),r=ue("meta"),this.h()},l(s){a=de(s,"META",{name:!0,content:!0}),t=w(s),e=de(s,"META",{property:!0,content:!0}),n=w(s),r=de(s,"META",{name:!0,content:!0}),this.h()},h(){var s,c,b;A(a,"name","description"),A(a,"content",S.description??((s=S.og)==null?void 0:s.description)),A(e,"property","og:description"),A(e,"content",((c=S.og)==null?void 0:c.description)??S.description),A(r,"name","twitter:description"),A(r,"content",((b=S.og)==null?void 0:b.description)??S.description)},m(s,c){_(s,a,c),_(s,t,c),_(s,e,c),_(s,n,c),_(s,r,c)},p:Ne,d(s){s&&(h(a),h(t),h(e),h(n),h(r))}}}function ra(o){let a,t,e;return{c(){a=ue("meta"),t=g(),e=ue("meta"),this.h()},l(n){a=de(n,"META",{property:!0,content:!0}),t=w(n),e=de(n,"META",{name:!0,content:!0}),this.h()},h(){var n,r;A(a,"property","og:image"),A(a,"content",dt((n=S.og)==null?void 0:n.image)),A(e,"name","twitter:image"),A(e,"content",dt((r=S.og)==null?void 0:r.image))},m(n,r){_(n,a,r),_(n,t,r),_(n,e,r)},p:Ne,d(n){n&&(h(a),h(t),h(e))}}}function ht(o){let a,t;return a=new Pe({props:{queryID:"available_base_models",queryResult:o[0]}}),{c(){M(a.$$.fragment)},l(e){L(a.$$.fragment,e)},m(e,n){q(a,e,n),t=!0},p(e,n){const r={};n[0]&1&&(r.queryResult=e[0]),a.$set(r)},i(e){t||(p(a.$$.fragment,e),t=!0)},o(e){y(a.$$.fragment,e),t=!1},d(e){v(a,e)}}}function _t(o){let a,t;return a=new Pe({props:{queryID:"available_efforts",queryResult:o[1]}}),{c(){M(a.$$.fragment)},l(e){L(a.$$.fragment,e)},m(e,n){q(a,e,n),t=!0},p(e,n){const r={};n[0]&2&&(r.queryResult=e[1]),a.$set(r)},i(e){t||(p(a.$$.fragment,e),t=!0)},o(e){y(a.$$.fragment,e),t=!1},d(e){v(a,e)}}}function ia(o){let a,t,e,n,r,s;return a=new Ye({props:{value:"answerable",valueLabel:"Answerable Only"}}),e=new Ye({props:{value:"all",valueLabel:"All Questions"}}),r=new Ye({props:{value:"hops",valueLabel:"Too-Many-Hops Only"}}),{c(){M(a.$$.fragment),t=g(),M(e.$$.fragment),n=g(),M(r.$$.fragment)},l(c){L(a.$$.fragment,c),t=w(c),L(e.$$.fragment,c),n=w(c),L(r.$$.fragment,c)},m(c,b){q(a,c,b),_(c,t,b),q(e,c,b),_(c,n,b),q(r,c,b),s=!0},p:Ne,i(c){s||(p(a.$$.fragment,c),p(e.$$.fragment,c),p(r.$$.fragment,c),s=!0)},o(c){y(a.$$.fragment,c),y(e.$$.fragment,c),y(r.$$.fragment,c),s=!1},d(c){c&&(h(t),h(n)),v(a,c),v(e,c),v(r,c)}}}function pt(o){let a,t;return a=new Pe({props:{queryID:"model_summary",queryResult:o[2]}}),{c(){M(a.$$.fragment)},l(e){L(a.$$.fragment,e)},m(e,n){q(a,e,n),t=!0},p(e,n){const r={};n[0]&4&&(r.queryResult=e[2]),a.$set(r)},i(e){t||(p(a.$$.fragment,e),t=!0)},o(e){y(a.$$.fragment,e),t=!1},d(e){v(a,e)}}}function fa(o){let a,t,e,n,r,s,c,b,i,D,N,F,I,k,O,E,z,x,Q,P;return a=new xe({props:{id:"Model"}}),e=new xe({props:{id:"Effort"}}),r=new xe({props:{id:"Method"}}),c=new xe({props:{id:"Runs",fmt:"num0"}}),i=new xe({props:{id:"Accuracy %",fmt:"num1",contentType:"colorscale",colorScale:["#ff4444","#44bb44"]}}),N=new xe({props:{id:"Avg Latency (s)",fmt:"num2"}}),I=new xe({props:{id:"Median Latency (s)",fmt:"num2"}}),O=new xe({props:{id:"Avg Cost ($)",fmt:"num4"}}),z=new xe({props:{id:"Total Cost ($)",fmt:"num4"}}),Q=new xe({props:{id:"Correct / $",fmt:"num0"}}),{c(){M(a.$$.fragment),t=g(),M(e.$$.fragment),n=g(),M(r.$$.fragment),s=g(),M(c.$$.fragment),b=g(),M(i.$$.fragment),D=g(),M(N.$$.fragment),F=g(),M(I.$$.fragment),k=g(),M(O.$$.fragment),E=g(),M(z.$$.fragment),x=g(),M(Q.$$.fragment)},l(m){L(a.$$.fragment,m),t=w(m),L(e.$$.fragment,m),n=w(m),L(r.$$.fragment,m),s=w(m),L(c.$$.fragment,m),b=w(m),L(i.$$.fragment,m),D=w(m),L(N.$$.fragment,m),F=w(m),L(I.$$.fragment,m),k=w(m),L(O.$$.fragment,m),E=w(m),L(z.$$.fragment,m),x=w(m),L(Q.$$.fragment,m)},m(m,C){q(a,m,C),_(m,t,C),q(e,m,C),_(m,n,C),q(r,m,C),_(m,s,C),q(c,m,C),_(m,b,C),q(i,m,C),_(m,D,C),q(N,m,C),_(m,F,C),q(I,m,C),_(m,k,C),q(O,m,C),_(m,E,C),q(z,m,C),_(m,x,C),q(Q,m,C),P=!0},p:Ne,i(m){P||(p(a.$$.fragment,m),p(e.$$.fragment,m),p(r.$$.fragment,m),p(c.$$.fragment,m),p(i.$$.fragment,m),p(N.$$.fragment,m),p(I.$$.fragment,m),p(O.$$.fragment,m),p(z.$$.fragment,m),p(Q.$$.fragment,m),P=!0)},o(m){y(a.$$.fragment,m),y(e.$$.fragment,m),y(r.$$.fragment,m),y(c.$$.fragment,m),y(i.$$.fragment,m),y(N.$$.fragment,m),y(I.$$.fragment,m),y(O.$$.fragment,m),y(z.$$.fragment,m),y(Q.$$.fragment,m),P=!1},d(m){m&&(h(t),h(n),h(s),h(b),h(D),h(F),h(k),h(E),h(x)),v(a,m),v(e,m),v(r,m),v(c,m),v(i,m),v(N,m),v(I,m),v(O,m),v(z,m),v(Q,m)}}}function yt(o){let a,t;return a=new Pe({props:{queryID:"accuracy_chart",queryResult:o[3]}}),{c(){M(a.$$.fragment)},l(e){L(a.$$.fragment,e)},m(e,n){q(a,e,n),t=!0},p(e,n){const r={};n[0]&8&&(r.queryResult=e[3]),a.$set(r)},i(e){t||(p(a.$$.fragment,e),t=!0)},o(e){y(a.$$.fragment,e),t=!1},d(e){v(a,e)}}}function bt(o){let a,t;return a=new Pe({props:{queryID:"latency_chart",queryResult:o[4]}}),{c(){M(a.$$.fragment)},l(e){L(a.$$.fragment,e)},m(e,n){q(a,e,n),t=!0},p(e,n){const r={};n[0]&16&&(r.queryResult=e[4]),a.$set(r)},i(e){t||(p(a.$$.fragment,e),t=!0)},o(e){y(a.$$.fragment,e),t=!1},d(e){v(a,e)}}}function wt(o){let a,t;return a=new Pe({props:{queryID:"cost_chart",queryResult:o[5]}}),{c(){M(a.$$.fragment)},l(e){L(a.$$.fragment,e)},m(e,n){q(a,e,n),t=!0},p(e,n){const r={};n[0]&32&&(r.queryResult=e[5]),a.$set(r)},i(e){t||(p(a.$$.fragment,e),t=!0)},o(e){y(a.$$.fragment,e),t=!1},d(e){v(a,e)}}}function gt(o){let a,t;return a=new Pe({props:{queryID:"tradeoff",queryResult:o[6]}}),{c(){M(a.$$.fragment)},l(e){L(a.$$.fragment,e)},m(e,n){q(a,e,n),t=!0},p(e,n){const r={};n[0]&64&&(r.queryResult=e[6]),a.$set(r)},i(e){t||(p(a.$$.fragment,e),t=!0)},o(e){y(a.$$.fragment,e),t=!1},d(e){v(a,e)}}}function ca(o){let a,t,e,n,r,s,c='Each model was given 11 insurance-domain questions (claims, policies, premiums) and asked to answer them via two methods: <strong class="markdown">Semantic Layer</strong> (MetricFlow queries) and <strong class="markdown">SQL</strong> (direct SQL generation). Each model/effort combination was run 5 times to account for variance. 3 of the 11 questions are &quot;too many hops&quot; — they require joins the Semantic Layer cannot express, testing whether models correctly refuse or fail gracefully.',b,i,D='<p class="markdown"><strong class="markdown">Note:</strong> SQL runs on this page use the schema <strong class="markdown">without modeling</strong> (no additional dbt models, raw DDL only).</p>',N,F,I,k,O,E,z,x,Q,P,m,C='<a href="#summary">Summary</a>',R,X,me,Y,H='<a href="#accuracy">Accuracy</a>',ve,W,K,Z,B,qe='<a href="#latency">Latency</a>',pe,he,U,se,V,re,G,we='<a href="#cost">Cost</a>',ie,J,j,ye,fe,u='<a href="#tradeoffs">Tradeoffs</a>',_e,ce,Ce='<em class="markdown">Ideal: top-left corner (high accuracy, low cost/latency)</em>',Se,Le,be,T,Me,Ee,Ie,He,Te=typeof S<"u"&&S.title&&S.hide_title!==!0&&aa();function Be(l,d){return typeof S<"u"&&S.title?oa:la}let f=Be()(o),Fe=typeof S=="object"&&na(),$=o[0]&&ht(o),ee=o[1]&&_t(o);k=new Xe({props:{data:o[0],name:"selected_base_models",value:"base_model",multiple:"true",selectAllByDefault:"true",title:"Select Models"}}),E=new Xe({props:{data:o[1],name:"selected_efforts",value:"effort",multiple:"true",selectAllByDefault:"true",title:"Select Effort"}}),x=new Xe({props:{name:"question_filter",title:"Questions",$$slots:{default:[ia]},$$scope:{ctx:o}}});let te=o[2]&&pt(o);X=new Dt({props:{data:o[2],search:"true",rows:"all",$$slots:{default:[fa]},$$scope:{ctx:o}}});let ae=o[3]&&yt(o);K=new Ge({props:{data:o[3],title:"Accuracy by Model",x:"Model",y:"Accuracy %",series:"Method",type:"grouped",swapXY:"true",sort:"false",yMax:"100",yAxisTitle:"Accuracy %"}});let le=o[4]&&bt(o);U=new Ge({props:{data:o[4],title:"Average Latency by Model",x:"Model",y:"Avg Latency (s)",series:"Method",type:"grouped",swapXY:"true",sort:"false",yAxisTitle:"Seconds"}}),V=new Ge({props:{data:o[4],title:"Median Latency by Model",x:"Model",y:"Median Latency (s)",series:"Method",type:"grouped",swapXY:"true",sort:"false",yAxisTitle:"Seconds"}});let oe=o[5]&&wt(o);j=new Ge({props:{data:o[5],title:"Average Cost per Query",x:"Model",y:"Avg Cost ($)",series:"Method",type:"grouped",swapXY:"true",sort:"false",yAxisTitle:"Cost ($)"}});let ne=o[6]&&gt(o);return be=new Ke({props:{data:o[6],title:"Accuracy vs Cost",x:"Avg Cost ($)",y:"Accuracy %",series:"Method",tooltipTitle:"Config",xAxisTitle:"Avg Cost per Query ($)",yAxisTitle:"Accuracy %",yMax:"100"}}),Me=new Ke({props:{data:o[6],title:"Accuracy vs Latency",x:"Avg Latency (s)",y:"Accuracy %",series:"Method",tooltipTitle:"Config",xAxisTitle:"Avg Latency (s)",yAxisTitle:"Accuracy %",yMax:"100"}}),Ie=new Ke({props:{data:o[6],title:"Cost vs Latency",x:"Avg Latency (s)",y:"Avg Cost ($)",series:"Method",tooltipTitle:"Config",xAxisTitle:"Avg Latency (s)",yAxisTitle:"Avg Cost per Query ($)"}}),{c(){Te&&Te.c(),a=g(),f.c(),t=ue("meta"),e=ue("meta"),Fe&&Fe.c(),n=We(),r=g(),s=ue("p"),s.innerHTML=c,b=g(),i=ue("blockquote"),i.innerHTML=D,N=g(),$&&$.c(),F=g(),ee&&ee.c(),I=g(),M(k.$$.fragment),O=g(),M(E.$$.fragment),z=g(),M(x.$$.fragment),Q=g(),te&&te.c(),P=g(),m=ue("h2"),m.innerHTML=C,R=g(),M(X.$$.fragment),me=g(),Y=ue("h2"),Y.innerHTML=H,ve=g(),ae&&ae.c(),W=g(),M(K.$$.fragment),Z=g(),B=ue("h2"),B.innerHTML=qe,pe=g(),le&&le.c(),he=g(),M(U.$$.fragment),se=g(),M(V.$$.fragment),re=g(),G=ue("h2"),G.innerHTML=we,ie=g(),oe&&oe.c(),J=g(),M(j.$$.fragment),ye=g(),fe=ue("h2"),fe.innerHTML=u,_e=g(),ce=ue("p"),ce.innerHTML=Ce,Se=g(),ne&&ne.c(),Le=g(),M(be.$$.fragment),T=g(),M(Me.$$.fragment),Ee=g(),M(Ie.$$.fragment),this.h()},l(l){Te&&Te.l(l),a=w(l);const d=Ct("svelte-2igo1p",document.head);f.l(d),t=de(d,"META",{name:!0,content:!0}),e=de(d,"META",{name:!0,content:!0}),Fe&&Fe.l(d),n=We(),d.forEach(h),r=w(l),s=de(l,"P",{class:!0,"data-svelte-h":!0}),Re(s)!=="svelte-1n4ed47"&&(s.innerHTML=c),b=w(l),i=de(l,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),Re(i)!=="svelte-1k8s2r6"&&(i.innerHTML=D),N=w(l),$&&$.l(l),F=w(l),ee&&ee.l(l),I=w(l),L(k.$$.fragment,l),O=w(l),L(E.$$.fragment,l),z=w(l),L(x.$$.fragment,l),Q=w(l),te&&te.l(l),P=w(l),m=de(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(m)!=="svelte-y5osc8"&&(m.innerHTML=C),R=w(l),L(X.$$.fragment,l),me=w(l),Y=de(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(Y)!=="svelte-nhokin"&&(Y.innerHTML=H),ve=w(l),ae&&ae.l(l),W=w(l),L(K.$$.fragment,l),Z=w(l),B=de(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(B)!=="svelte-51rye2"&&(B.innerHTML=qe),pe=w(l),le&&le.l(l),he=w(l),L(U.$$.fragment,l),se=w(l),L(V.$$.fragment,l),re=w(l),G=de(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(G)!=="svelte-kik5sb"&&(G.innerHTML=we),ie=w(l),oe&&oe.l(l),J=w(l),L(j.$$.fragment,l),ye=w(l),fe=de(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),Re(fe)!=="svelte-1z0aok"&&(fe.innerHTML=u),_e=w(l),ce=de(l,"P",{class:!0,"data-svelte-h":!0}),Re(ce)!=="svelte-80ek0m"&&(ce.innerHTML=Ce),Se=w(l),ne&&ne.l(l),Le=w(l),L(be.$$.fragment,l),T=w(l),L(Me.$$.fragment,l),Ee=w(l),L(Ie.$$.fragment,l),this.h()},h(){A(t,"name","twitter:card"),A(t,"content","summary_large_image"),A(e,"name","twitter:site"),A(e,"content","@evidence_dev"),A(s,"class","markdown"),A(i,"class","markdown"),A(m,"class","markdown"),A(m,"id","summary"),A(Y,"class","markdown"),A(Y,"id","accuracy"),A(B,"class","markdown"),A(B,"id","latency"),A(G,"class","markdown"),A(G,"id","cost"),A(fe,"class","markdown"),A(fe,"id","tradeoffs"),A(ce,"class","markdown")},m(l,d){Te&&Te.m(l,d),_(l,a,d),f.m(document.head,null),ze(document.head,t),ze(document.head,e),Fe&&Fe.m(document.head,null),ze(document.head,n),_(l,r,d),_(l,s,d),_(l,b,d),_(l,i,d),_(l,N,d),$&&$.m(l,d),_(l,F,d),ee&&ee.m(l,d),_(l,I,d),q(k,l,d),_(l,O,d),q(E,l,d),_(l,z,d),q(x,l,d),_(l,Q,d),te&&te.m(l,d),_(l,P,d),_(l,m,d),_(l,R,d),q(X,l,d),_(l,me,d),_(l,Y,d),_(l,ve,d),ae&&ae.m(l,d),_(l,W,d),q(K,l,d),_(l,Z,d),_(l,B,d),_(l,pe,d),le&&le.m(l,d),_(l,he,d),q(U,l,d),_(l,se,d),q(V,l,d),_(l,re,d),_(l,G,d),_(l,ie,d),oe&&oe.m(l,d),_(l,J,d),q(j,l,d),_(l,ye,d),_(l,fe,d),_(l,_e,d),_(l,ce,d),_(l,Se,d),ne&&ne.m(l,d),_(l,Le,d),q(be,l,d),_(l,T,d),q(Me,l,d),_(l,Ee,d),q(Ie,l,d),He=!0},p(l,d){typeof S<"u"&&S.title&&S.hide_title!==!0&&Te.p(l,d),f.p(l,d),typeof S=="object"&&Fe.p(l,d),l[0]?$?($.p(l,d),d[0]&1&&p($,1)):($=ht(l),$.c(),p($,1),$.m(F.parentNode,F)):$&&(De(),y($,1,1,()=>{$=null}),Qe()),l[1]?ee?(ee.p(l,d),d[0]&2&&p(ee,1)):(ee=_t(l),ee.c(),p(ee,1),ee.m(I.parentNode,I)):ee&&(De(),y(ee,1,1,()=>{ee=null}),Qe());const et={};d[0]&1&&(et.data=l[0]),k.$set(et);const tt={};d[0]&2&&(tt.data=l[1]),E.$set(tt);const at={};d[1]&8388608&&(at.$$scope={dirty:d,ctx:l}),x.$set(at),l[2]?te?(te.p(l,d),d[0]&4&&p(te,1)):(te=pt(l),te.c(),p(te,1),te.m(P.parentNode,P)):te&&(De(),y(te,1,1,()=>{te=null}),Qe());const je={};d[0]&4&&(je.data=l[2]),d[1]&8388608&&(je.$$scope={dirty:d,ctx:l}),X.$set(je),l[3]?ae?(ae.p(l,d),d[0]&8&&p(ae,1)):(ae=yt(l),ae.c(),p(ae,1),ae.m(W.parentNode,W)):ae&&(De(),y(ae,1,1,()=>{ae=null}),Qe());const lt={};d[0]&8&&(lt.data=l[3]),K.$set(lt),l[4]?le?(le.p(l,d),d[0]&16&&p(le,1)):(le=bt(l),le.c(),p(le,1),le.m(he.parentNode,he)):le&&(De(),y(le,1,1,()=>{le=null}),Qe());const ot={};d[0]&16&&(ot.data=l[4]),U.$set(ot);const nt={};d[0]&16&&(nt.data=l[4]),V.$set(nt),l[5]?oe?(oe.p(l,d),d[0]&32&&p(oe,1)):(oe=wt(l),oe.c(),p(oe,1),oe.m(J.parentNode,J)):oe&&(De(),y(oe,1,1,()=>{oe=null}),Qe());const st={};d[0]&32&&(st.data=l[5]),j.$set(st),l[6]?ne?(ne.p(l,d),d[0]&64&&p(ne,1)):(ne=gt(l),ne.c(),p(ne,1),ne.m(Le.parentNode,Le)):ne&&(De(),y(ne,1,1,()=>{ne=null}),Qe());const rt={};d[0]&64&&(rt.data=l[6]),be.$set(rt);const it={};d[0]&64&&(it.data=l[6]),Me.$set(it);const ft={};d[0]&64&&(ft.data=l[6]),Ie.$set(ft)},i(l){He||(p($),p(ee),p(k.$$.fragment,l),p(E.$$.fragment,l),p(x.$$.fragment,l),p(te),p(X.$$.fragment,l),p(ae),p(K.$$.fragment,l),p(le),p(U.$$.fragment,l),p(V.$$.fragment,l),p(oe),p(j.$$.fragment,l),p(ne),p(be.$$.fragment,l),p(Me.$$.fragment,l),p(Ie.$$.fragment,l),He=!0)},o(l){y($),y(ee),y(k.$$.fragment,l),y(E.$$.fragment,l),y(x.$$.fragment,l),y(te),y(X.$$.fragment,l),y(ae),y(K.$$.fragment,l),y(le),y(U.$$.fragment,l),y(V.$$.fragment,l),y(oe),y(j.$$.fragment,l),y(ne),y(be.$$.fragment,l),y(Me.$$.fragment,l),y(Ie.$$.fragment,l),He=!1},d(l){l&&(h(a),h(r),h(s),h(b),h(i),h(N),h(F),h(I),h(O),h(z),h(Q),h(P),h(m),h(R),h(me),h(Y),h(ve),h(W),h(Z),h(B),h(pe),h(he),h(se),h(re),h(G),h(ie),h(J),h(ye),h(fe),h(_e),h(ce),h(Se),h(Le),h(T),h(Ee)),Te&&Te.d(l),f.d(l),h(t),h(e),Fe&&Fe.d(l),h(n),$&&$.d(l),ee&&ee.d(l),v(k,l),v(E,l),v(x,l),te&&te.d(l),v(X,l),ae&&ae.d(l),v(K,l),le&&le.d(l),v(U,l),v(V,l),oe&&oe.d(l),v(j,l),ne&&ne.d(l),v(be,l),v(Me,l),v(Ie,l)}}}const S={title:"Comparing models and thinking effort - Without modeling"};function ma(o,a,t){let e,n;Ve(o,Ut,T=>t(38,e=T)),Ve(o,ut,T=>t(43,n=T));let{data:r}=a,{data:s={},customFormattingSettings:c,__db:b,inputs:i}=r;St(ut,n="bce48180c1771c011270e21088b8448b",n);let D=Ot(zt(i));It(D.subscribe(T=>t(9,i=T))),kt(Gt,{getCustomFormats:()=>c.customFormats||[]});const N=(T,Me)=>Wt(b.query,T,{query_name:Me});Pt(N),e.params,xt(()=>!0);let F={initialData:void 0,initialError:void 0},I=ge`select distinct
  split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare')
  and is_successful
order by base_model`,k=`select distinct
  split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare')
  and is_successful
order by base_model`;s.available_base_models_data&&(s.available_base_models_data instanceof Error?F.initialError=s.available_base_models_data:F.initialData=s.available_base_models_data,s.available_base_models_columns&&(F.knownColumns=s.available_base_models_columns));let O,E=!1;const z=Oe.createReactive({callback:T=>{t(0,O=T)},execFn:N},{id:"available_base_models",...F});z(k,{noResolve:I,...F}),globalThis[Symbol.for("available_base_models")]={get value(){return O}};let x={initialData:void 0,initialError:void 0},Q=ge`select distinct
  coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare')
  and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
  and is_successful
order by case effort
    when '-' then 0 when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
  end`,P=`select distinct
  coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare')
  and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
  and is_successful
order by case effort
    when '-' then 0 when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
  end`;s.available_efforts_data&&(s.available_efforts_data instanceof Error?x.initialError=s.available_efforts_data:x.initialData=s.available_efforts_data,s.available_efforts_columns&&(x.knownColumns=s.available_efforts_columns));let m,C=!1;const R=Oe.createReactive({callback:T=>{t(1,m=T)},execFn:N},{id:"available_efforts",...x});R(P,{noResolve:Q,...x}),globalThis[Symbol.for("available_efforts")]={get value(){return m}};let X={initialData:void 0,initialError:void 0},me=ge`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
order by "Accuracy %" desc, "Avg Latency (s)" asc`,Y=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
order by "Accuracy %" desc, "Avg Latency (s)" asc`;s.model_summary_data&&(s.model_summary_data instanceof Error?X.initialError=s.model_summary_data:X.initialData=s.model_summary_data,s.model_summary_columns&&(X.knownColumns=s.model_summary_columns));let H,ve=!1;const W=Oe.createReactive({callback:T=>{t(2,H=T)},execFn:N},{id:"model_summary",...X});W(Y,{noResolve:me,...X}),globalThis[Symbol.for("model_summary")]={get value(){return H}};let K={initialData:void 0,initialError:void 0},Z=ge`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
    else 0 end, method`,B=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
    else 0 end, method`;s.accuracy_chart_data&&(s.accuracy_chart_data instanceof Error?K.initialError=s.accuracy_chart_data:K.initialData=s.accuracy_chart_data,s.accuracy_chart_columns&&(K.knownColumns=s.accuracy_chart_columns));let qe,pe=!1;const he=Oe.createReactive({callback:T=>{t(3,qe=T)},execFn:N},{id:"accuracy_chart",...K});he(B,{noResolve:Z,...K}),globalThis[Symbol.for("accuracy_chart")]={get value(){return qe}};let U={initialData:void 0,initialError:void 0},se=ge`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, timing
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
    else 0 end, method`,V=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, timing
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
    else 0 end, method`;s.latency_chart_data&&(s.latency_chart_data instanceof Error?U.initialError=s.latency_chart_data:U.initialData=s.latency_chart_data,s.latency_chart_columns&&(U.knownColumns=s.latency_chart_columns));let re,G=!1;const we=Oe.createReactive({callback:T=>{t(4,re=T)},execFn:N},{id:"latency_chart",...U});we(V,{noResolve:se,...U}),globalThis[Symbol.for("latency_chart")]={get value(){return re}};let ie={initialData:void 0,initialError:void 0},J=ge`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
    else 0 end, method`,j=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
    else 0 end, method`;s.cost_chart_data&&(s.cost_chart_data instanceof Error?ie.initialError=s.cost_chart_data:ie.initialData=s.cost_chart_data,s.cost_chart_columns&&(ie.knownColumns=s.cost_chart_columns));let ye,fe=!1;const u=Oe.createReactive({callback:T=>{t(5,ye=T)},execFn:N},{id:"cost_chart",...ie});u(j,{noResolve:J,...ie}),globalThis[Symbol.for("cost_chart")]={get value(){return ye}};let _e={initialData:void 0,initialError:void 0},ce=ge`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
group by base_model, effort, method`,Ce=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
group by base_model, effort, method`;s.tradeoff_data&&(s.tradeoff_data instanceof Error?_e.initialError=s.tradeoff_data:_e.initialData=s.tradeoff_data,s.tradeoff_columns&&(_e.knownColumns=s.tradeoff_columns));let Se,Le=!1;const be=Oe.createReactive({callback:T=>{t(6,Se=T)},execFn:N},{id:"tradeoff",..._e});return be(Ce,{noResolve:ce,..._e}),globalThis[Symbol.for("tradeoff")]={get value(){return Se}},o.$$set=T=>{"data"in T&&t(7,r=T.data)},o.$$.update=()=>{o.$$.dirty[0]&128&&t(8,{data:s={},customFormattingSettings:c,__db:b}=r,s),o.$$.dirty[0]&256&&Bt.set(Object.keys(s).length>0),o.$$.dirty[1]&128&&e.params,o.$$.dirty[0]&15360&&(I||!E?I||(z(k,{noResolve:I,...F}),t(13,E=!0)):z(k,{noResolve:I})),o.$$.dirty[0]&512&&t(15,Q=ge`select distinct
  coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare')
  and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
  and is_successful
order by case effort
    when '-' then 0 when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
  end`),o.$$.dirty[0]&512&&t(16,P=`select distinct
  coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare')
  and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
  and is_successful
order by case effort
    when '-' then 0 when 'none' then 1 when 'minimal' then 2 when 'low' then 3
    when 'medium' then 4 when 'high' then 5 when 'max' then 6 when 'xhigh' then 7
  end`),o.$$.dirty[0]&245760&&(Q||!C?Q||(R(P,{noResolve:Q,...x}),t(17,C=!0)):R(P,{noResolve:Q})),o.$$.dirty[0]&512&&t(19,me=ge`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
order by "Accuracy %" desc, "Avg Latency (s)" asc`),o.$$.dirty[0]&512&&t(20,Y=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
order by "Accuracy %" desc, "Avg Latency (s)" asc`),o.$$.dirty[0]&3932160&&(me||!ve?me||(W(Y,{noResolve:me,...X}),t(21,ve=!0)):W(Y,{noResolve:me})),o.$$.dirty[0]&512&&t(23,Z=ge`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
    else 0 end, method`),o.$$.dirty[0]&512&&t(24,B=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
    else 0 end, method`),o.$$.dirty[0]&62914560&&(Z||!pe?Z||(he(B,{noResolve:Z,...K}),t(25,pe=!0)):he(B,{noResolve:Z})),o.$$.dirty[0]&512&&t(27,se=ge`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, timing
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
    else 0 end, method`),o.$$.dirty[0]&512&&t(28,V=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, timing
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
    else 0 end, method`),o.$$.dirty[0]&1006632960&&(se||!G?se||(we(V,{noResolve:se,...U}),t(29,G=!0)):we(V,{noResolve:se})),o.$$.dirty[0]&512&&t(31,J=ge`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
    else 0 end, method`),o.$$.dirty[0]&512&&t(32,j=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
    else 0 end, method`),o.$$.dirty[0]&1073741824|o.$$.dirty[1]&7&&(J||!fe?J||(u(j,{noResolve:J,...ie}),t(33,fe=!0)):u(j,{noResolve:J})),o.$$.dirty[0]&512&&t(35,ce=ge`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
group by base_model, effort, method`),o.$$.dirty[0]&512&&t(36,Ce=`with parsed as (
  select
    split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model,
    coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') as effort,
    method, is_correct, timing, cost
  from sql_answers
  where batch_id IN (select batch_id from batch_config where page = 'compare')
    and split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) IN ${i.selected_base_models.value}
    and coalesce(nullif(split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 2), ''), '-') IN ${i.selected_efforts.value}
    and is_successful
    and cost is not null
    and (
      '${i.question_filter.value}' = 'all'
      or ('${i.question_filter.value}' = 'answerable' and not too_many_hops)
      or ('${i.question_filter.value}' = 'hops' and too_many_hops)
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
group by base_model, effort, method`),o.$$.dirty[1]&120&&(ce||!Le?ce||(be(Ce,{noResolve:ce,..._e}),t(37,Le=!0)):be(Ce,{noResolve:ce}))},t(11,I=ge`select distinct
  split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare')
  and is_successful
order by base_model`),t(12,k=`select distinct
  split_part(replace(replace(model, 'anthropic:', ''), 'openai:', ''), ':effort=', 1) as base_model
from sql_answers
where batch_id IN (select batch_id from batch_config where page = 'compare')
  and is_successful
order by base_model`),[O,m,H,qe,re,ye,Se,r,s,i,F,I,k,E,x,Q,P,C,X,me,Y,ve,K,Z,B,pe,U,se,V,G,ie,J,j,fe,_e,ce,Ce,Le,e]}class va extends Ze{constructor(a){super(),$e(this,a,ma,ca,Je,{data:7},null,[-1,-1])}}export{va as component};
