import{s as at,J as ft,l as it,K as Ft,q as De,G as _t,v as Rt,d as h,w as vt,x as It,y as Dt,i as y,c as p,j as S,a as Ze,b as Q,h as Pt,e as _e,f as $e,g as We,k as he,m as Et,o as xt,n as Ot,p as Qt,r as Bt,t as Wt,u as Ht}from"../chunks/scheduler.Bclb4y6L.js";import{S as ot,i as lt,d as T,t as w,a as g,m as k,b as C,e as q,c as xe,g as Oe}from"../chunks/index.BwoQS8MT.js";import{o as Gt,q as zt,j as qt,B as tt,t as Ve,u as Ut,v as Nt,D as Je,e as jt,s as Yt,Q as Qe,p as Xt,C as E,a as ht,r as yt,b as Kt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.D3ezODmO.js";import{w as Vt}from"../chunks/entry.ajQ9tCyF.js";import{h as Ce,p as Jt}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{D as Zt,a as nt}from"../chunks/Dropdown.loLMN9f6.js";import{p as $t}from"../chunks/stores.LmUXPhXV.js";import{Q as Be}from"../chunks/QueryViewer.DSnNt3d6.js";import{g as gt,b as en,a as tn,C as nn,B as bt}from"../chunks/BarChart.DvmKmLnr.js";function an(i,t,e){let n,l,o,r,d,b,_,P,L,R,F,I,c,M,v,W,s=De,A=()=>(s(),s=_t(n,u=>e(44,W=u)),n),ve,qe=De,we=()=>(qe(),qe=_t(l,u=>e(45,ve=u)),l),x;i.$$.on_destroy.push(()=>s()),i.$$.on_destroy.push(()=>qe());let oe=ft(Gt);it(i,oe,u=>e(46,x=u));let ne=ft(zt);const{resolveColor:Re}=qt();let{y:z=void 0}=t;const pe=!!z;let{y2:Y=void 0}=t;const me=!!Y;let{series:H=void 0}=t;const Ie=!!H;let{options:ye=void 0}=t,{name:ie=void 0}=t,{lineColor:ce=void 0}=t,{lineWidth:le=2}=t,{lineType:Se="solid"}=t,{lineOpacity:ae=void 0}=t,{markers:Ae=!1}=t,{markerShape:Fe="circle"}=t,{markerSize:X=8}=t,{labels:ee=!1}=t,{labelSize:Le=11}=t,{labelPosition:re="top"}=t,{labelColor:de=void 0}=t,{labelFmt:Me=void 0}=t,te;Me&&(te=tt(Me));let{yLabelFmt:U=void 0}=t,ge;U&&(ge=tt(U));let{y2LabelFmt:be=void 0}=t,ue;be&&(ue=tt(be));let{y2SeriesType:Te=void 0}=t,{showAllLabels:K=!1}=t,{handleMissing:N="gap"}=t,{step:fe=!1}=t,{stepPosition:se="end"}=t,{seriesOrder:Pe=void 0}=t,{seriesLabelFmt:Ee=void 0}=t;const D={above:"top",below:"bottom",middle:"inside"},ke={above:"right",below:"left",middle:"inside"};let G=d?"right":"top";return Ft(()=>{ne.update(u=>{if(d)u.yAxis={...u.yAxis,...v.xAxis},u.xAxis={...u.xAxis,...v.yAxis};else if(u.yAxis[0]={...u.yAxis[0],...v.yAxis},u.xAxis={...u.xAxis,...v.xAxis},Y&&(u.yAxis[1]={...u.yAxis[1],show:!0},["line","bar","scatter"].includes(Te)))for(let B=0;B<L;B++)u.series[P+B].type=Te;return ee&&(u.axisPointer={triggerEmphasis:!1}),u})}),i.$$set=u=>{"y"in u&&e(3,z=u.y),"y2"in u&&e(4,Y=u.y2),"series"in u&&e(5,H=u.series),"options"in u&&e(12,ye=u.options),"name"in u&&e(6,ie=u.name),"lineColor"in u&&e(13,ce=u.lineColor),"lineWidth"in u&&e(14,le=u.lineWidth),"lineType"in u&&e(15,Se=u.lineType),"lineOpacity"in u&&e(16,ae=u.lineOpacity),"markers"in u&&e(7,Ae=u.markers),"markerShape"in u&&e(17,Fe=u.markerShape),"markerSize"in u&&e(18,X=u.markerSize),"labels"in u&&e(8,ee=u.labels),"labelSize"in u&&e(19,Le=u.labelSize),"labelPosition"in u&&e(9,re=u.labelPosition),"labelColor"in u&&e(20,de=u.labelColor),"labelFmt"in u&&e(21,Me=u.labelFmt),"yLabelFmt"in u&&e(22,U=u.yLabelFmt),"y2LabelFmt"in u&&e(23,be=u.y2LabelFmt),"y2SeriesType"in u&&e(24,Te=u.y2SeriesType),"showAllLabels"in u&&e(10,K=u.showAllLabels),"handleMissing"in u&&e(25,N=u.handleMissing),"step"in u&&e(11,fe=u.step),"stepPosition"in u&&e(26,se=u.stepPosition),"seriesOrder"in u&&e(27,Pe=u.seriesOrder),"seriesLabelFmt"in u&&e(28,Ee=u.seriesLabelFmt)},i.$$.update=()=>{if(i.$$.dirty[0]&8192&&A(e(1,n=Re(ce))),i.$$.dirty[0]&128&&e(7,Ae=Ve(Ae)),i.$$.dirty[0]&256&&e(8,ee=Ve(ee)),i.$$.dirty[0]&1048576&&we(e(0,l=Re(de))),i.$$.dirty[0]&1024&&e(10,K=Ve(K)),i.$$.dirty[0]&2048&&e(11,fe=Ve(fe)),i.$$.dirty[1]&32768&&e(41,o=x.data),i.$$.dirty[1]&32768&&e(40,r=x.x),i.$$.dirty[0]&8|i.$$.dirty[1]&32768&&e(3,z=pe?z:x.y),i.$$.dirty[0]&16|i.$$.dirty[1]&32768&&e(4,Y=me?Y:x.y2),i.$$.dirty[1]&32768&&e(34,d=x.swapXY),i.$$.dirty[1]&32768&&e(43,b=x.yFormat),i.$$.dirty[1]&32768&&e(42,_=x.y2Format),i.$$.dirty[1]&32768&&e(32,P=x.yCount),i.$$.dirty[1]&32768&&e(33,L=x.y2Count),i.$$.dirty[1]&32768&&e(35,R=x.xType),i.$$.dirty[1]&32768&&e(38,F=x.xMismatch),i.$$.dirty[1]&32768&&e(37,I=x.columnSummary),i.$$.dirty[0]&32|i.$$.dirty[1]&32768&&e(5,H=Ie?H:x.series),i.$$.dirty[0]&104|i.$$.dirty[1]&1600)if(!H&&typeof z!="object")e(6,ie=ie??Ut(z,I[z].title));else try{e(41,o=gt(o,r,z,H))}catch(u){console.warn("Failed to complete data",{e:u}),e(41,o=[])}if(i.$$.dirty[0]&33554472|i.$$.dirty[1]&1536&&N==="zero")try{e(41,o=gt(o,r,z,H,!0))}catch(u){console.warn("Failed to complete data",{e:u}),e(41,o=[])}i.$$.dirty[0]&512|i.$$.dirty[1]&8&&e(9,re=(d?ke[re]:D[re])??G),i.$$.dirty[0]&1712312192|i.$$.dirty[1]&30735&&e(39,c={type:"line",label:{show:ee,formatter(u){return u.value[d?0:1]===0?"":Nt(u.value[d?0:1],[ge??te??b,ue??te??_][en(u.componentIndex,P,L)])},fontSize:Le,color:ve,position:re,padding:3},labelLayout:{hideOverlap:!K},connectNulls:N==="connect",emphasis:{focus:"series",endLabel:{show:!1},lineStyle:{opacity:1,width:3}},lineStyle:{width:parseInt(le),type:Se,opacity:ae},itemStyle:{color:W,opacity:ae},showSymbol:ee||Ae,symbol:Fe,symbolSize:ee&&!Ae?0:X,step:fe?se:!1}),i.$$.dirty[0]&402653304|i.$$.dirty[1]&1992&&e(36,M=tn(o,r,z,H,d,c,ie,F,I,Pe,void 0,void 0,Y,Ee)),i.$$.dirty[1]&32&&ne.update(u=>(u.series.push(...M),u.legend.data.push(...M.map(B=>B.name.toString())),u)),i.$$.dirty[0]&4096&&ye&&ne.update(u=>({...u,...ye})),i.$$.dirty[1]&16&&(v={yAxis:{boundaryGap:["0%","1%"]},xAxis:{boundaryGap:[R==="time"?"2%":"0%","2%"]}})},[l,n,oe,z,Y,H,ie,Ae,ee,re,K,fe,ye,ce,le,Se,ae,Fe,X,Le,de,Me,U,be,Te,N,se,Pe,Ee,te,ge,ue,P,L,d,R,M,I,F,c,r,o,_,b,W,ve,x]}class on extends ot{constructor(t){super(),lt(this,t,an,null,at,{y:3,y2:4,series:5,options:12,name:6,lineColor:13,lineWidth:14,lineType:15,lineOpacity:16,markers:7,markerShape:17,markerSize:18,labels:8,labelSize:19,labelPosition:9,labelColor:20,labelFmt:21,yLabelFmt:22,y2LabelFmt:23,y2SeriesType:24,showAllLabels:10,handleMissing:25,step:11,stepPosition:26,seriesOrder:27,seriesLabelFmt:28},null,[-1,-1])}}function ln(i){let t,e,n;t=new on({props:{lineColor:i[73],lineWidth:i[38],lineOpacity:i[37],lineType:i[36],markers:i[40],markerShape:i[41],markerSize:i[42],handleMissing:i[43],step:i[44],stepPosition:i[45],labels:i[47],labelSize:i[48],labelPosition:i[49],labelColor:i[71],labelFmt:i[50],yLabelFmt:i[51],y2LabelFmt:i[52],showAllLabels:i[53],y2SeriesType:i[8],seriesOrder:i[62],seriesLabelFmt:i[64]}});const l=i[80].default,o=Rt(l,i,i[81],null);return{c(){q(t.$$.fragment),e=S(),o&&o.c()},l(r){C(t.$$.fragment,r),e=p(r),o&&o.l(r)},m(r,d){k(t,r,d),y(r,e,d),o&&o.m(r,d),n=!0},p(r,d){const b={};d[2]&2048&&(b.lineColor=r[73]),d[1]&128&&(b.lineWidth=r[38]),d[1]&64&&(b.lineOpacity=r[37]),d[1]&32&&(b.lineType=r[36]),d[1]&512&&(b.markers=r[40]),d[1]&1024&&(b.markerShape=r[41]),d[1]&2048&&(b.markerSize=r[42]),d[1]&4096&&(b.handleMissing=r[43]),d[1]&8192&&(b.step=r[44]),d[1]&16384&&(b.stepPosition=r[45]),d[1]&65536&&(b.labels=r[47]),d[1]&131072&&(b.labelSize=r[48]),d[1]&262144&&(b.labelPosition=r[49]),d[2]&512&&(b.labelColor=r[71]),d[1]&524288&&(b.labelFmt=r[50]),d[1]&1048576&&(b.yLabelFmt=r[51]),d[1]&2097152&&(b.y2LabelFmt=r[52]),d[1]&4194304&&(b.showAllLabels=r[53]),d[0]&256&&(b.y2SeriesType=r[8]),d[2]&1&&(b.seriesOrder=r[62]),d[2]&4&&(b.seriesLabelFmt=r[64]),t.$set(b),o&&o.p&&(!n||d[2]&524288)&&vt(o,l,r,r[81],n?Dt(l,r[81],d,null):It(r[81]),null)},i(r){n||(g(t.$$.fragment,r),g(o,r),n=!0)},o(r){w(t.$$.fragment,r),w(o,r),n=!1},d(r){r&&h(e),T(t,r),o&&o.d(r)}}}function rn(i){let t,e;return t=new nn({props:{data:i[0],x:i[1],y:i[2],y2:i[3],xFmt:i[10],yFmt:i[9],y2Fmt:i[11],series:i[4],xType:i[5],yLog:i[6],yLogBase:i[7],legend:i[14],xAxisTitle:i[15],yAxisTitle:i[16],y2AxisTitle:i[17],xGridlines:i[18],yGridlines:i[19],y2Gridlines:i[20],xAxisLabels:i[21],yAxisLabels:i[22],y2AxisLabels:i[23],xBaseline:i[24],yBaseline:i[25],y2Baseline:i[26],xTickMarks:i[27],yTickMarks:i[28],y2TickMarks:i[29],yAxisColor:i[70],y2AxisColor:i[69],yMin:i[30],yMax:i[31],yScale:i[32],y2Min:i[33],y2Max:i[34],y2Scale:i[35],title:i[12],subtitle:i[13],chartType:"Line Chart",sort:i[46],chartAreaHeight:i[39],colorPalette:i[72],echartsOptions:i[54],seriesOptions:i[55],printEchartsConfig:i[56],emptySet:i[57],emptyMessage:i[58],renderer:i[59],downloadableData:i[60],downloadableImage:i[61],connectGroup:i[63],seriesColors:i[68],leftPadding:i[65],rightPadding:i[66],xLabelWrap:i[67],$$slots:{default:[ln]},$$scope:{ctx:i}}}),{c(){q(t.$$.fragment)},l(n){C(t.$$.fragment,n)},m(n,l){k(t,n,l),e=!0},p(n,l){const o={};l[0]&1&&(o.data=n[0]),l[0]&2&&(o.x=n[1]),l[0]&4&&(o.y=n[2]),l[0]&8&&(o.y2=n[3]),l[0]&1024&&(o.xFmt=n[10]),l[0]&512&&(o.yFmt=n[9]),l[0]&2048&&(o.y2Fmt=n[11]),l[0]&16&&(o.series=n[4]),l[0]&32&&(o.xType=n[5]),l[0]&64&&(o.yLog=n[6]),l[0]&128&&(o.yLogBase=n[7]),l[0]&16384&&(o.legend=n[14]),l[0]&32768&&(o.xAxisTitle=n[15]),l[0]&65536&&(o.yAxisTitle=n[16]),l[0]&131072&&(o.y2AxisTitle=n[17]),l[0]&262144&&(o.xGridlines=n[18]),l[0]&524288&&(o.yGridlines=n[19]),l[0]&1048576&&(o.y2Gridlines=n[20]),l[0]&2097152&&(o.xAxisLabels=n[21]),l[0]&4194304&&(o.yAxisLabels=n[22]),l[0]&8388608&&(o.y2AxisLabels=n[23]),l[0]&16777216&&(o.xBaseline=n[24]),l[0]&33554432&&(o.yBaseline=n[25]),l[0]&67108864&&(o.y2Baseline=n[26]),l[0]&134217728&&(o.xTickMarks=n[27]),l[0]&268435456&&(o.yTickMarks=n[28]),l[0]&536870912&&(o.y2TickMarks=n[29]),l[2]&256&&(o.yAxisColor=n[70]),l[2]&128&&(o.y2AxisColor=n[69]),l[0]&1073741824&&(o.yMin=n[30]),l[1]&1&&(o.yMax=n[31]),l[1]&2&&(o.yScale=n[32]),l[1]&4&&(o.y2Min=n[33]),l[1]&8&&(o.y2Max=n[34]),l[1]&16&&(o.y2Scale=n[35]),l[0]&4096&&(o.title=n[12]),l[0]&8192&&(o.subtitle=n[13]),l[1]&32768&&(o.sort=n[46]),l[1]&256&&(o.chartAreaHeight=n[39]),l[2]&1024&&(o.colorPalette=n[72]),l[1]&8388608&&(o.echartsOptions=n[54]),l[1]&16777216&&(o.seriesOptions=n[55]),l[1]&33554432&&(o.printEchartsConfig=n[56]),l[1]&67108864&&(o.emptySet=n[57]),l[1]&134217728&&(o.emptyMessage=n[58]),l[1]&268435456&&(o.renderer=n[59]),l[1]&536870912&&(o.downloadableData=n[60]),l[1]&1073741824&&(o.downloadableImage=n[61]),l[2]&2&&(o.connectGroup=n[63]),l[2]&64&&(o.seriesColors=n[68]),l[2]&8&&(o.leftPadding=n[65]),l[2]&16&&(o.rightPadding=n[66]),l[2]&32&&(o.xLabelWrap=n[67]),l[0]&256|l[1]&8355552|l[2]&526853&&(o.$$scope={dirty:l,ctx:n}),t.$set(o)},i(n){e||(g(t.$$.fragment,n),e=!0)},o(n){w(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function sn(i,t,e){let n,l,o,r,d,b,{$$slots:_={},$$scope:P}=t;const{resolveColor:L,resolveColorsObject:R,resolveColorPalette:F}=qt();let{data:I=void 0}=t,{x:c=void 0}=t,{y:M=void 0}=t,{y2:v=void 0}=t,{series:W=void 0}=t,{xType:s=void 0}=t,{yLog:A=void 0}=t,{yLogBase:ve=void 0}=t,{y2SeriesType:qe=void 0}=t,{yFmt:we=void 0}=t,{xFmt:x=void 0}=t,{y2Fmt:oe=void 0}=t,{title:ne=void 0}=t,{subtitle:Re=void 0}=t,{legend:z=void 0}=t,{xAxisTitle:pe=void 0}=t,{yAxisTitle:Y=v?"true":void 0}=t,{y2AxisTitle:me=v?"true":void 0}=t,{xGridlines:H=void 0}=t,{yGridlines:Ie=void 0}=t,{y2Gridlines:ye=void 0}=t,{xAxisLabels:ie=void 0}=t,{yAxisLabels:ce=void 0}=t,{y2AxisLabels:le=void 0}=t,{xBaseline:Se=void 0}=t,{yBaseline:ae=void 0}=t,{y2Baseline:Ae=void 0}=t,{xTickMarks:Fe=void 0}=t,{yTickMarks:X=void 0}=t,{y2TickMarks:ee=void 0}=t,{yMin:Le=void 0}=t,{yMax:re=void 0}=t,{yScale:de=void 0}=t,{y2Min:Me=void 0}=t,{y2Max:te=void 0}=t,{y2Scale:U=void 0}=t,{lineColor:ge=void 0}=t,{lineType:be=void 0}=t,{lineOpacity:ue=void 0}=t,{lineWidth:Te=void 0}=t,{chartAreaHeight:K=void 0}=t,{markers:N=void 0}=t,{markerShape:fe=void 0}=t,{markerSize:se=void 0}=t,{handleMissing:Pe=void 0}=t,{step:Ee=void 0}=t,{stepPosition:D=void 0}=t,{sort:ke=void 0}=t,{colorPalette:G="default"}=t,{labels:u=void 0}=t,{labelSize:B=void 0}=t,{labelPosition:V=void 0}=t,{labelColor:j=void 0}=t,{labelFmt:J=void 0}=t,{yLabelFmt:Z=void 0}=t,{y2LabelFmt:$=void 0}=t,{showAllLabels:a=void 0}=t,{yAxisColor:f=void 0}=t,{y2AxisColor:He=void 0}=t,{echartsOptions:Ge=void 0}=t,{seriesOptions:je=void 0}=t,{printEchartsConfig:ze=!1}=t,{emptySet:Ye=void 0}=t,{emptyMessage:Ue=void 0}=t,{renderer:Xe=void 0}=t,{downloadableData:Ne=void 0}=t,{downloadableImage:Ke=void 0}=t,{seriesColors:et=void 0}=t,{seriesOrder:rt=void 0}=t,{connectGroup:st=void 0}=t,{seriesLabelFmt:mt=void 0}=t,{leftPadding:ct=void 0}=t,{rightPadding:dt=void 0}=t,{xLabelWrap:ut=void 0}=t;return i.$$set=m=>{"data"in m&&e(0,I=m.data),"x"in m&&e(1,c=m.x),"y"in m&&e(2,M=m.y),"y2"in m&&e(3,v=m.y2),"series"in m&&e(4,W=m.series),"xType"in m&&e(5,s=m.xType),"yLog"in m&&e(6,A=m.yLog),"yLogBase"in m&&e(7,ve=m.yLogBase),"y2SeriesType"in m&&e(8,qe=m.y2SeriesType),"yFmt"in m&&e(9,we=m.yFmt),"xFmt"in m&&e(10,x=m.xFmt),"y2Fmt"in m&&e(11,oe=m.y2Fmt),"title"in m&&e(12,ne=m.title),"subtitle"in m&&e(13,Re=m.subtitle),"legend"in m&&e(14,z=m.legend),"xAxisTitle"in m&&e(15,pe=m.xAxisTitle),"yAxisTitle"in m&&e(16,Y=m.yAxisTitle),"y2AxisTitle"in m&&e(17,me=m.y2AxisTitle),"xGridlines"in m&&e(18,H=m.xGridlines),"yGridlines"in m&&e(19,Ie=m.yGridlines),"y2Gridlines"in m&&e(20,ye=m.y2Gridlines),"xAxisLabels"in m&&e(21,ie=m.xAxisLabels),"yAxisLabels"in m&&e(22,ce=m.yAxisLabels),"y2AxisLabels"in m&&e(23,le=m.y2AxisLabels),"xBaseline"in m&&e(24,Se=m.xBaseline),"yBaseline"in m&&e(25,ae=m.yBaseline),"y2Baseline"in m&&e(26,Ae=m.y2Baseline),"xTickMarks"in m&&e(27,Fe=m.xTickMarks),"yTickMarks"in m&&e(28,X=m.yTickMarks),"y2TickMarks"in m&&e(29,ee=m.y2TickMarks),"yMin"in m&&e(30,Le=m.yMin),"yMax"in m&&e(31,re=m.yMax),"yScale"in m&&e(32,de=m.yScale),"y2Min"in m&&e(33,Me=m.y2Min),"y2Max"in m&&e(34,te=m.y2Max),"y2Scale"in m&&e(35,U=m.y2Scale),"lineColor"in m&&e(74,ge=m.lineColor),"lineType"in m&&e(36,be=m.lineType),"lineOpacity"in m&&e(37,ue=m.lineOpacity),"lineWidth"in m&&e(38,Te=m.lineWidth),"chartAreaHeight"in m&&e(39,K=m.chartAreaHeight),"markers"in m&&e(40,N=m.markers),"markerShape"in m&&e(41,fe=m.markerShape),"markerSize"in m&&e(42,se=m.markerSize),"handleMissing"in m&&e(43,Pe=m.handleMissing),"step"in m&&e(44,Ee=m.step),"stepPosition"in m&&e(45,D=m.stepPosition),"sort"in m&&e(46,ke=m.sort),"colorPalette"in m&&e(75,G=m.colorPalette),"labels"in m&&e(47,u=m.labels),"labelSize"in m&&e(48,B=m.labelSize),"labelPosition"in m&&e(49,V=m.labelPosition),"labelColor"in m&&e(76,j=m.labelColor),"labelFmt"in m&&e(50,J=m.labelFmt),"yLabelFmt"in m&&e(51,Z=m.yLabelFmt),"y2LabelFmt"in m&&e(52,$=m.y2LabelFmt),"showAllLabels"in m&&e(53,a=m.showAllLabels),"yAxisColor"in m&&e(77,f=m.yAxisColor),"y2AxisColor"in m&&e(78,He=m.y2AxisColor),"echartsOptions"in m&&e(54,Ge=m.echartsOptions),"seriesOptions"in m&&e(55,je=m.seriesOptions),"printEchartsConfig"in m&&e(56,ze=m.printEchartsConfig),"emptySet"in m&&e(57,Ye=m.emptySet),"emptyMessage"in m&&e(58,Ue=m.emptyMessage),"renderer"in m&&e(59,Xe=m.renderer),"downloadableData"in m&&e(60,Ne=m.downloadableData),"downloadableImage"in m&&e(61,Ke=m.downloadableImage),"seriesColors"in m&&e(79,et=m.seriesColors),"seriesOrder"in m&&e(62,rt=m.seriesOrder),"connectGroup"in m&&e(63,st=m.connectGroup),"seriesLabelFmt"in m&&e(64,mt=m.seriesLabelFmt),"leftPadding"in m&&e(65,ct=m.leftPadding),"rightPadding"in m&&e(66,dt=m.rightPadding),"xLabelWrap"in m&&e(67,ut=m.xLabelWrap),"$$scope"in m&&e(81,P=m.$$scope)},i.$$.update=()=>{i.$$.dirty[2]&4096&&e(73,n=L(ge)),i.$$.dirty[2]&8192&&e(72,l=F(G)),i.$$.dirty[2]&16384&&e(71,o=L(j)),i.$$.dirty[2]&32768&&e(70,r=L(f)),i.$$.dirty[2]&65536&&e(69,d=L(He)),i.$$.dirty[2]&131072&&e(68,b=R(et))},[I,c,M,v,W,s,A,ve,qe,we,x,oe,ne,Re,z,pe,Y,me,H,Ie,ye,ie,ce,le,Se,ae,Ae,Fe,X,ee,Le,re,de,Me,te,U,be,ue,Te,K,N,fe,se,Pe,Ee,D,ke,u,B,V,J,Z,$,a,Ge,je,ze,Ye,Ue,Xe,Ne,Ke,rt,st,mt,ct,dt,ut,b,d,r,o,l,n,ge,G,j,f,He,et,_,P]}class wt extends ot{constructor(t){super(),lt(this,t,sn,rn,at,{data:0,x:1,y:2,y2:3,series:4,xType:5,yLog:6,yLogBase:7,y2SeriesType:8,yFmt:9,xFmt:10,y2Fmt:11,title:12,subtitle:13,legend:14,xAxisTitle:15,yAxisTitle:16,y2AxisTitle:17,xGridlines:18,yGridlines:19,y2Gridlines:20,xAxisLabels:21,yAxisLabels:22,y2AxisLabels:23,xBaseline:24,yBaseline:25,y2Baseline:26,xTickMarks:27,yTickMarks:28,y2TickMarks:29,yMin:30,yMax:31,yScale:32,y2Min:33,y2Max:34,y2Scale:35,lineColor:74,lineType:36,lineOpacity:37,lineWidth:38,chartAreaHeight:39,markers:40,markerShape:41,markerSize:42,handleMissing:43,step:44,stepPosition:45,sort:46,colorPalette:75,labels:47,labelSize:48,labelPosition:49,labelColor:76,labelFmt:50,yLabelFmt:51,y2LabelFmt:52,showAllLabels:53,yAxisColor:77,y2AxisColor:78,echartsOptions:54,seriesOptions:55,printEchartsConfig:56,emptySet:57,emptyMessage:58,renderer:59,downloadableData:60,downloadableImage:61,seriesColors:79,seriesOrder:62,connectGroup:63,seriesLabelFmt:64,leftPadding:65,rightPadding:66,xLabelWrap:67},null,[-1,-1,-1])}}function mn(i){let t,e=O.title+"",n;return{c(){t=he("h1"),n=Ht(e),this.h()},l(l){t=_e(l,"H1",{class:!0});var o=Bt(t);n=Wt(o,e),o.forEach(h),this.h()},h(){Q(t,"class","title")},m(l,o){y(l,t,o),Ze(t,n)},p:De,d(l){l&&h(t)}}}function cn(i){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:De,p:De,d:De}}function dn(i){let t,e,n,l,o;return document.title=t=O.title,{c(){e=S(),n=he("meta"),l=S(),o=he("meta"),this.h()},l(r){e=p(r),n=_e(r,"META",{property:!0,content:!0}),l=p(r),o=_e(r,"META",{name:!0,content:!0}),this.h()},h(){var r,d;Q(n,"property","og:title"),Q(n,"content",((r=O.og)==null?void 0:r.title)??O.title),Q(o,"name","twitter:title"),Q(o,"content",((d=O.og)==null?void 0:d.title)??O.title)},m(r,d){y(r,e,d),y(r,n,d),y(r,l,d),y(r,o,d)},p(r,d){d&0&&t!==(t=O.title)&&(document.title=t)},d(r){r&&(h(e),h(n),h(l),h(o))}}}function un(i){var o,r;let t,e,n=(O.description||((o=O.og)==null?void 0:o.description))&&fn(),l=((r=O.og)==null?void 0:r.image)&&_n();return{c(){n&&n.c(),t=S(),l&&l.c(),e=$e()},l(d){n&&n.l(d),t=p(d),l&&l.l(d),e=$e()},m(d,b){n&&n.m(d,b),y(d,t,b),l&&l.m(d,b),y(d,e,b)},p(d,b){var _,P;(O.description||(_=O.og)!=null&&_.description)&&n.p(d,b),(P=O.og)!=null&&P.image&&l.p(d,b)},d(d){d&&(h(t),h(e)),n&&n.d(d),l&&l.d(d)}}}function fn(i){let t,e,n,l,o;return{c(){t=he("meta"),e=S(),n=he("meta"),l=S(),o=he("meta"),this.h()},l(r){t=_e(r,"META",{name:!0,content:!0}),e=p(r),n=_e(r,"META",{property:!0,content:!0}),l=p(r),o=_e(r,"META",{name:!0,content:!0}),this.h()},h(){var r,d,b;Q(t,"name","description"),Q(t,"content",O.description??((r=O.og)==null?void 0:r.description)),Q(n,"property","og:description"),Q(n,"content",((d=O.og)==null?void 0:d.description)??O.description),Q(o,"name","twitter:description"),Q(o,"content",((b=O.og)==null?void 0:b.description)??O.description)},m(r,d){y(r,t,d),y(r,e,d),y(r,n,d),y(r,l,d),y(r,o,d)},p:De,d(r){r&&(h(t),h(e),h(n),h(l),h(o))}}}function _n(i){let t,e,n;return{c(){t=he("meta"),e=S(),n=he("meta"),this.h()},l(l){t=_e(l,"META",{property:!0,content:!0}),e=p(l),n=_e(l,"META",{name:!0,content:!0}),this.h()},h(){var l,o;Q(t,"property","og:image"),Q(t,"content",ht((l=O.og)==null?void 0:l.image)),Q(n,"name","twitter:image"),Q(n,"content",ht((o=O.og)==null?void 0:o.image))},m(l,o){y(l,t,o),y(l,e,o),y(l,n,o)},p:De,d(l){l&&(h(t),h(e),h(n))}}}function hn(i){let t,e,n,l,o,r;return t=new nt({props:{value:"answerable",valueLabel:"Answerable Only"}}),n=new nt({props:{value:"all",valueLabel:"All Questions"}}),o=new nt({props:{value:"hops",valueLabel:"Too-Many-Hops Only"}}),{c(){q(t.$$.fragment),e=S(),q(n.$$.fragment),l=S(),q(o.$$.fragment)},l(d){C(t.$$.fragment,d),e=p(d),C(n.$$.fragment,d),l=p(d),C(o.$$.fragment,d)},m(d,b){k(t,d,b),y(d,e,b),k(n,d,b),y(d,l,b),k(o,d,b),r=!0},p:De,i(d){r||(g(t.$$.fragment,d),g(n.$$.fragment,d),g(o.$$.fragment,d),r=!0)},o(d){w(t.$$.fragment,d),w(n.$$.fragment,d),w(o.$$.fragment,d),r=!1},d(d){d&&(h(e),h(l)),T(t,d),T(n,d),T(o,d)}}}function pt(i){let t,e;return t=new Be({props:{queryID:"summary_no_modeling",queryResult:i[0]}}),{c(){q(t.$$.fragment)},l(n){C(t.$$.fragment,n)},m(n,l){k(t,n,l),e=!0},p(n,l){const o={};l[0]&1&&(o.queryResult=n[0]),t.$set(o)},i(n){e||(g(t.$$.fragment,n),e=!0)},o(n){w(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function yn(i){let t,e,n,l,o,r,d,b,_,P,L,R,F,I,c,M,v,W;return t=new E({props:{id:"Model"}}),n=new E({props:{id:"Method"}}),o=new E({props:{id:"Runs",fmt:"num0"}}),d=new E({props:{id:"Iterations",fmt:"num0"}}),_=new E({props:{id:"Accuracy %",fmt:"num1",contentType:"colorscale",scaleColor:["#ff4444","#44bb44"]}}),L=new E({props:{id:"Avg Latency (s)",fmt:"num2"}}),F=new E({props:{id:"Median Latency (s)",fmt:"num2"}}),c=new E({props:{id:"Avg Cost ($)",fmt:"num4"}}),v=new E({props:{id:"Total Cost ($)",fmt:"num2"}}),{c(){q(t.$$.fragment),e=S(),q(n.$$.fragment),l=S(),q(o.$$.fragment),r=S(),q(d.$$.fragment),b=S(),q(_.$$.fragment),P=S(),q(L.$$.fragment),R=S(),q(F.$$.fragment),I=S(),q(c.$$.fragment),M=S(),q(v.$$.fragment)},l(s){C(t.$$.fragment,s),e=p(s),C(n.$$.fragment,s),l=p(s),C(o.$$.fragment,s),r=p(s),C(d.$$.fragment,s),b=p(s),C(_.$$.fragment,s),P=p(s),C(L.$$.fragment,s),R=p(s),C(F.$$.fragment,s),I=p(s),C(c.$$.fragment,s),M=p(s),C(v.$$.fragment,s)},m(s,A){k(t,s,A),y(s,e,A),k(n,s,A),y(s,l,A),k(o,s,A),y(s,r,A),k(d,s,A),y(s,b,A),k(_,s,A),y(s,P,A),k(L,s,A),y(s,R,A),k(F,s,A),y(s,I,A),k(c,s,A),y(s,M,A),k(v,s,A),W=!0},p:De,i(s){W||(g(t.$$.fragment,s),g(n.$$.fragment,s),g(o.$$.fragment,s),g(d.$$.fragment,s),g(_.$$.fragment,s),g(L.$$.fragment,s),g(F.$$.fragment,s),g(c.$$.fragment,s),g(v.$$.fragment,s),W=!0)},o(s){w(t.$$.fragment,s),w(n.$$.fragment,s),w(o.$$.fragment,s),w(d.$$.fragment,s),w(_.$$.fragment,s),w(L.$$.fragment,s),w(F.$$.fragment,s),w(c.$$.fragment,s),w(v.$$.fragment,s),W=!1},d(s){s&&(h(e),h(l),h(r),h(b),h(P),h(R),h(I),h(M)),T(t,s),T(n,s),T(o,s),T(d,s),T(_,s),T(L,s),T(F,s),T(c,s),T(v,s)}}}function St(i){let t,e;return t=new Be({props:{queryID:"accuracy_no_modeling",queryResult:i[1]}}),{c(){q(t.$$.fragment)},l(n){C(t.$$.fragment,n)},m(n,l){k(t,n,l),e=!0},p(n,l){const o={};l[0]&2&&(o.queryResult=n[1]),t.$set(o)},i(n){e||(g(t.$$.fragment,n),e=!0)},o(n){w(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function Lt(i){let t,e;return t=new Be({props:{queryID:"consistency_no_modeling",queryResult:i[2]}}),{c(){q(t.$$.fragment)},l(n){C(t.$$.fragment,n)},m(n,l){k(t,n,l),e=!0},p(n,l){const o={};l[0]&4&&(o.queryResult=n[2]),t.$set(o)},i(n){e||(g(t.$$.fragment,n),e=!0)},o(n){w(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function gn(i){let t,e,n,l,o,r,d,b,_,P,L,R,F,I;return t=new E({props:{id:"Model"}}),n=new E({props:{id:"Method"}}),o=new E({props:{id:"Mean Accuracy %",fmt:"num1",contentType:"colorscale",scaleColor:["#ff4444","#44bb44"]}}),d=new E({props:{id:"Std Dev",fmt:"num1"}}),_=new E({props:{id:"Worst Run %",fmt:"num1"}}),L=new E({props:{id:"Best Run %",fmt:"num1"}}),F=new E({props:{id:"Spread (pp)",fmt:"num1"}}),{c(){q(t.$$.fragment),e=S(),q(n.$$.fragment),l=S(),q(o.$$.fragment),r=S(),q(d.$$.fragment),b=S(),q(_.$$.fragment),P=S(),q(L.$$.fragment),R=S(),q(F.$$.fragment)},l(c){C(t.$$.fragment,c),e=p(c),C(n.$$.fragment,c),l=p(c),C(o.$$.fragment,c),r=p(c),C(d.$$.fragment,c),b=p(c),C(_.$$.fragment,c),P=p(c),C(L.$$.fragment,c),R=p(c),C(F.$$.fragment,c)},m(c,M){k(t,c,M),y(c,e,M),k(n,c,M),y(c,l,M),k(o,c,M),y(c,r,M),k(d,c,M),y(c,b,M),k(_,c,M),y(c,P,M),k(L,c,M),y(c,R,M),k(F,c,M),I=!0},p:De,i(c){I||(g(t.$$.fragment,c),g(n.$$.fragment,c),g(o.$$.fragment,c),g(d.$$.fragment,c),g(_.$$.fragment,c),g(L.$$.fragment,c),g(F.$$.fragment,c),I=!0)},o(c){w(t.$$.fragment,c),w(n.$$.fragment,c),w(o.$$.fragment,c),w(d.$$.fragment,c),w(_.$$.fragment,c),w(L.$$.fragment,c),w(F.$$.fragment,c),I=!1},d(c){c&&(h(e),h(l),h(r),h(b),h(P),h(R)),T(t,c),T(n,c),T(o,c),T(d,c),T(_,c),T(L,c),T(F,c)}}}function At(i){let t,e;return t=new Be({props:{queryID:"iter_no_modeling",queryResult:i[3]}}),{c(){q(t.$$.fragment)},l(n){C(t.$$.fragment,n)},m(n,l){k(t,n,l),e=!0},p(n,l){const o={};l[0]&8&&(o.queryResult=n[3]),t.$set(o)},i(n){e||(g(t.$$.fragment,n),e=!0)},o(n){w(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function Mt(i){let t,e;return t=new Be({props:{queryID:"summary_with_modeling",queryResult:i[4]}}),{c(){q(t.$$.fragment)},l(n){C(t.$$.fragment,n)},m(n,l){k(t,n,l),e=!0},p(n,l){const o={};l[0]&16&&(o.queryResult=n[4]),t.$set(o)},i(n){e||(g(t.$$.fragment,n),e=!0)},o(n){w(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function bn(i){let t,e,n,l,o,r,d,b,_,P,L,R,F,I,c,M,v,W;return t=new E({props:{id:"Model"}}),n=new E({props:{id:"Method"}}),o=new E({props:{id:"Runs",fmt:"num0"}}),d=new E({props:{id:"Iterations",fmt:"num0"}}),_=new E({props:{id:"Accuracy %",fmt:"num1",contentType:"colorscale",scaleColor:["#ff4444","#44bb44"]}}),L=new E({props:{id:"Avg Latency (s)",fmt:"num2"}}),F=new E({props:{id:"Median Latency (s)",fmt:"num2"}}),c=new E({props:{id:"Avg Cost ($)",fmt:"num4"}}),v=new E({props:{id:"Total Cost ($)",fmt:"num2"}}),{c(){q(t.$$.fragment),e=S(),q(n.$$.fragment),l=S(),q(o.$$.fragment),r=S(),q(d.$$.fragment),b=S(),q(_.$$.fragment),P=S(),q(L.$$.fragment),R=S(),q(F.$$.fragment),I=S(),q(c.$$.fragment),M=S(),q(v.$$.fragment)},l(s){C(t.$$.fragment,s),e=p(s),C(n.$$.fragment,s),l=p(s),C(o.$$.fragment,s),r=p(s),C(d.$$.fragment,s),b=p(s),C(_.$$.fragment,s),P=p(s),C(L.$$.fragment,s),R=p(s),C(F.$$.fragment,s),I=p(s),C(c.$$.fragment,s),M=p(s),C(v.$$.fragment,s)},m(s,A){k(t,s,A),y(s,e,A),k(n,s,A),y(s,l,A),k(o,s,A),y(s,r,A),k(d,s,A),y(s,b,A),k(_,s,A),y(s,P,A),k(L,s,A),y(s,R,A),k(F,s,A),y(s,I,A),k(c,s,A),y(s,M,A),k(v,s,A),W=!0},p:De,i(s){W||(g(t.$$.fragment,s),g(n.$$.fragment,s),g(o.$$.fragment,s),g(d.$$.fragment,s),g(_.$$.fragment,s),g(L.$$.fragment,s),g(F.$$.fragment,s),g(c.$$.fragment,s),g(v.$$.fragment,s),W=!0)},o(s){w(t.$$.fragment,s),w(n.$$.fragment,s),w(o.$$.fragment,s),w(d.$$.fragment,s),w(_.$$.fragment,s),w(L.$$.fragment,s),w(F.$$.fragment,s),w(c.$$.fragment,s),w(v.$$.fragment,s),W=!1},d(s){s&&(h(e),h(l),h(r),h(b),h(P),h(R),h(I),h(M)),T(t,s),T(n,s),T(o,s),T(d,s),T(_,s),T(L,s),T(F,s),T(c,s),T(v,s)}}}function Tt(i){let t,e;return t=new Be({props:{queryID:"accuracy_with_modeling",queryResult:i[5]}}),{c(){q(t.$$.fragment)},l(n){C(t.$$.fragment,n)},m(n,l){k(t,n,l),e=!0},p(n,l){const o={};l[0]&32&&(o.queryResult=n[5]),t.$set(o)},i(n){e||(g(t.$$.fragment,n),e=!0)},o(n){w(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function kt(i){let t,e;return t=new Be({props:{queryID:"consistency_with_modeling",queryResult:i[6]}}),{c(){q(t.$$.fragment)},l(n){C(t.$$.fragment,n)},m(n,l){k(t,n,l),e=!0},p(n,l){const o={};l[0]&64&&(o.queryResult=n[6]),t.$set(o)},i(n){e||(g(t.$$.fragment,n),e=!0)},o(n){w(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function wn(i){let t,e,n,l,o,r,d,b,_,P,L,R,F,I;return t=new E({props:{id:"Model"}}),n=new E({props:{id:"Method"}}),o=new E({props:{id:"Mean Accuracy %",fmt:"num1",contentType:"colorscale",scaleColor:["#ff4444","#44bb44"]}}),d=new E({props:{id:"Std Dev",fmt:"num1"}}),_=new E({props:{id:"Worst Run %",fmt:"num1"}}),L=new E({props:{id:"Best Run %",fmt:"num1"}}),F=new E({props:{id:"Spread (pp)",fmt:"num1"}}),{c(){q(t.$$.fragment),e=S(),q(n.$$.fragment),l=S(),q(o.$$.fragment),r=S(),q(d.$$.fragment),b=S(),q(_.$$.fragment),P=S(),q(L.$$.fragment),R=S(),q(F.$$.fragment)},l(c){C(t.$$.fragment,c),e=p(c),C(n.$$.fragment,c),l=p(c),C(o.$$.fragment,c),r=p(c),C(d.$$.fragment,c),b=p(c),C(_.$$.fragment,c),P=p(c),C(L.$$.fragment,c),R=p(c),C(F.$$.fragment,c)},m(c,M){k(t,c,M),y(c,e,M),k(n,c,M),y(c,l,M),k(o,c,M),y(c,r,M),k(d,c,M),y(c,b,M),k(_,c,M),y(c,P,M),k(L,c,M),y(c,R,M),k(F,c,M),I=!0},p:De,i(c){I||(g(t.$$.fragment,c),g(n.$$.fragment,c),g(o.$$.fragment,c),g(d.$$.fragment,c),g(_.$$.fragment,c),g(L.$$.fragment,c),g(F.$$.fragment,c),I=!0)},o(c){w(t.$$.fragment,c),w(n.$$.fragment,c),w(o.$$.fragment,c),w(d.$$.fragment,c),w(_.$$.fragment,c),w(L.$$.fragment,c),w(F.$$.fragment,c),I=!1},d(c){c&&(h(e),h(l),h(r),h(b),h(P),h(R)),T(t,c),T(n,c),T(o,c),T(d,c),T(_,c),T(L,c),T(F,c)}}}function Ct(i){let t,e;return t=new Be({props:{queryID:"iter_with_modeling",queryResult:i[7]}}),{c(){q(t.$$.fragment)},l(n){C(t.$$.fragment,n)},m(n,l){k(t,n,l),e=!0},p(n,l){const o={};l[0]&128&&(o.queryResult=n[7]),t.$set(o)},i(n){e||(g(t.$$.fragment,n),e=!0)},o(n){w(t.$$.fragment,n),e=!1},d(n){T(t,n)}}}function pn(i){let t,e,n,l,o,r,d='Three models — <strong class="markdown">claude-sonnet-4-6</strong>, <strong class="markdown">gpt-5.2-2025-12-11</strong>, and <strong class="markdown">gpt-5.3-codex</strong> — were each run 20 times on the same 11 questions to measure consistency and variance — not just average accuracy, but how much results fluctuate across runs.',b,_,P="This page compares two configurations:",L,R,F='<li class="markdown"><strong class="markdown">Without modeling</strong> — SQL is generated directly against raw DDL, with no additional dbt models. The Semantic Layer works but cannot answer the 3 &quot;too many hops&quot; questions, which require joins it cannot express.</li> <li class="markdown"><strong class="markdown">With modeling</strong> — Additional dbt models were created to resolve the hop limitations. This unlocks those 3 questions for the Semantic Layer and gives the SQL generator a richer schema to work with.</li>',I,c,M,v,W='<a href="#without-modeling">Without modeling</a>',s,A,ve='Without additional dbt models, the Semantic Layer cannot answer the 3 "too many hops" questions — it will always score 0% on those. Including them would unfairly drag down its overall accuracy. Use the filter below to explore all questions, or isolate the too-many-hops questions to see how each method handles an unanswerable request.',qe,we,x,oe,ne,Re,z,pe,Y,me,H,Ie,ye,ie,ce,le,Se,ae,Ae='<a href="#with-modeling">With modeling</a>',Fe,X,ee='With additional dbt models in place, the "too many hops" questions are no longer a limitation — the Semantic Layer can now answer all 11 questions. There is no filter here because all questions are meaningful and excluding any of them would hide the key result: that modeling resolves the hop problem entirely.',Le,re,de,Me,te,U,ge,be,ue,Te,K,N,fe,se=typeof O<"u"&&O.title&&O.hide_title!==!0&&mn();function Pe(a,f){return typeof O<"u"&&O.title?dn:cn}let D=Pe()(i),ke=typeof O=="object"&&un();we=new Zt({props:{name:"hops_filter_no_modeling",title:"Questions",$$slots:{default:[hn]},$$scope:{ctx:i}}});let G=i[0]&&pt(i);ne=new Je({props:{data:i[0],rows:"all",$$slots:{default:[yn]},$$scope:{ctx:i}}});let u=i[1]&&St(i);pe=new bt({props:{data:i[1],title:"Accuracy by Model — Without Modeling",x:"Model",y:"Accuracy %",series:"Method",type:"grouped",swapXY:"true",sort:"false",yMax:"100",yAxisTitle:"Accuracy %"}});let B=i[2]&&Lt(i);H=new Je({props:{data:i[2],rows:"all",$$slots:{default:[gn]},$$scope:{ctx:i}}});let V=i[3]&&At(i);ie=new wt({props:{data:i[3],title:"Accuracy by Iteration — Without Modeling",x:"Iteration",y:"Accuracy %",series:"Config",yMax:"100",yAxisTitle:"Accuracy %",xAxisTitle:"Iteration"}});let j=i[4]&&Mt(i);de=new Je({props:{data:i[4],rows:"all",$$slots:{default:[bn]},$$scope:{ctx:i}}});let J=i[5]&&Tt(i);U=new bt({props:{data:i[5],title:"Accuracy by Model — With Modeling",x:"Model",y:"Accuracy %",series:"Method",type:"grouped",swapXY:"true",sort:"false",yMax:"100",yAxisTitle:"Accuracy %"}});let Z=i[6]&&kt(i);ue=new Je({props:{data:i[6],rows:"all",$$slots:{default:[wn]},$$scope:{ctx:i}}});let $=i[7]&&Ct(i);return N=new wt({props:{data:i[7],title:"Accuracy by Iteration — With Modeling",x:"Iteration",y:"Accuracy %",series:"Config",yMax:"100",yAxisTitle:"Accuracy %",xAxisTitle:"Iteration"}}),{c(){se&&se.c(),t=S(),D.c(),e=he("meta"),n=he("meta"),ke&&ke.c(),l=$e(),o=S(),r=he("p"),r.innerHTML=d,b=S(),_=he("p"),_.textContent=P,L=S(),R=he("ul"),R.innerHTML=F,I=S(),c=he("hr"),M=S(),v=he("h2"),v.innerHTML=W,s=S(),A=he("p"),A.textContent=ve,qe=S(),q(we.$$.fragment),x=S(),G&&G.c(),oe=S(),q(ne.$$.fragment),Re=S(),u&&u.c(),z=S(),q(pe.$$.fragment),Y=S(),B&&B.c(),me=S(),q(H.$$.fragment),Ie=S(),V&&V.c(),ye=S(),q(ie.$$.fragment),ce=S(),le=he("hr"),Se=S(),ae=he("h2"),ae.innerHTML=Ae,Fe=S(),X=he("p"),X.textContent=ee,Le=S(),j&&j.c(),re=S(),q(de.$$.fragment),Me=S(),J&&J.c(),te=S(),q(U.$$.fragment),ge=S(),Z&&Z.c(),be=S(),q(ue.$$.fragment),Te=S(),$&&$.c(),K=S(),q(N.$$.fragment),this.h()},l(a){se&&se.l(a),t=p(a);const f=Pt("svelte-2igo1p",document.head);D.l(f),e=_e(f,"META",{name:!0,content:!0}),n=_e(f,"META",{name:!0,content:!0}),ke&&ke.l(f),l=$e(),f.forEach(h),o=p(a),r=_e(a,"P",{class:!0,"data-svelte-h":!0}),We(r)!=="svelte-6t5ldi"&&(r.innerHTML=d),b=p(a),_=_e(a,"P",{class:!0,"data-svelte-h":!0}),We(_)!=="svelte-1k5pl48"&&(_.textContent=P),L=p(a),R=_e(a,"UL",{class:!0,"data-svelte-h":!0}),We(R)!=="svelte-e41fw0"&&(R.innerHTML=F),I=p(a),c=_e(a,"HR",{class:!0}),M=p(a),v=_e(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),We(v)!=="svelte-ea6wh9"&&(v.innerHTML=W),s=p(a),A=_e(a,"P",{class:!0,"data-svelte-h":!0}),We(A)!=="svelte-al1wkt"&&(A.textContent=ve),qe=p(a),C(we.$$.fragment,a),x=p(a),G&&G.l(a),oe=p(a),C(ne.$$.fragment,a),Re=p(a),u&&u.l(a),z=p(a),C(pe.$$.fragment,a),Y=p(a),B&&B.l(a),me=p(a),C(H.$$.fragment,a),Ie=p(a),V&&V.l(a),ye=p(a),C(ie.$$.fragment,a),ce=p(a),le=_e(a,"HR",{class:!0}),Se=p(a),ae=_e(a,"H2",{class:!0,id:!0,"data-svelte-h":!0}),We(ae)!=="svelte-1y4ehs7"&&(ae.innerHTML=Ae),Fe=p(a),X=_e(a,"P",{class:!0,"data-svelte-h":!0}),We(X)!=="svelte-1h2d6q9"&&(X.textContent=ee),Le=p(a),j&&j.l(a),re=p(a),C(de.$$.fragment,a),Me=p(a),J&&J.l(a),te=p(a),C(U.$$.fragment,a),ge=p(a),Z&&Z.l(a),be=p(a),C(ue.$$.fragment,a),Te=p(a),$&&$.l(a),K=p(a),C(N.$$.fragment,a),this.h()},h(){Q(e,"name","twitter:card"),Q(e,"content","summary_large_image"),Q(n,"name","twitter:site"),Q(n,"content","@evidence_dev"),Q(r,"class","markdown"),Q(_,"class","markdown"),Q(R,"class","markdown"),Q(c,"class","markdown"),Q(v,"class","markdown"),Q(v,"id","without-modeling"),Q(A,"class","markdown"),Q(le,"class","markdown"),Q(ae,"class","markdown"),Q(ae,"id","with-modeling"),Q(X,"class","markdown")},m(a,f){se&&se.m(a,f),y(a,t,f),D.m(document.head,null),Ze(document.head,e),Ze(document.head,n),ke&&ke.m(document.head,null),Ze(document.head,l),y(a,o,f),y(a,r,f),y(a,b,f),y(a,_,f),y(a,L,f),y(a,R,f),y(a,I,f),y(a,c,f),y(a,M,f),y(a,v,f),y(a,s,f),y(a,A,f),y(a,qe,f),k(we,a,f),y(a,x,f),G&&G.m(a,f),y(a,oe,f),k(ne,a,f),y(a,Re,f),u&&u.m(a,f),y(a,z,f),k(pe,a,f),y(a,Y,f),B&&B.m(a,f),y(a,me,f),k(H,a,f),y(a,Ie,f),V&&V.m(a,f),y(a,ye,f),k(ie,a,f),y(a,ce,f),y(a,le,f),y(a,Se,f),y(a,ae,f),y(a,Fe,f),y(a,X,f),y(a,Le,f),j&&j.m(a,f),y(a,re,f),k(de,a,f),y(a,Me,f),J&&J.m(a,f),y(a,te,f),k(U,a,f),y(a,ge,f),Z&&Z.m(a,f),y(a,be,f),k(ue,a,f),y(a,Te,f),$&&$.m(a,f),y(a,K,f),k(N,a,f),fe=!0},p(a,f){typeof O<"u"&&O.title&&O.hide_title!==!0&&se.p(a,f),D.p(a,f),typeof O=="object"&&ke.p(a,f);const He={};f[1]&536870912&&(He.$$scope={dirty:f,ctx:a}),we.$set(He),a[0]?G?(G.p(a,f),f[0]&1&&g(G,1)):(G=pt(a),G.c(),g(G,1),G.m(oe.parentNode,oe)):G&&(Oe(),w(G,1,1,()=>{G=null}),xe());const Ge={};f[0]&1&&(Ge.data=a[0]),f[1]&536870912&&(Ge.$$scope={dirty:f,ctx:a}),ne.$set(Ge),a[1]?u?(u.p(a,f),f[0]&2&&g(u,1)):(u=St(a),u.c(),g(u,1),u.m(z.parentNode,z)):u&&(Oe(),w(u,1,1,()=>{u=null}),xe());const je={};f[0]&2&&(je.data=a[1]),pe.$set(je),a[2]?B?(B.p(a,f),f[0]&4&&g(B,1)):(B=Lt(a),B.c(),g(B,1),B.m(me.parentNode,me)):B&&(Oe(),w(B,1,1,()=>{B=null}),xe());const ze={};f[0]&4&&(ze.data=a[2]),f[1]&536870912&&(ze.$$scope={dirty:f,ctx:a}),H.$set(ze),a[3]?V?(V.p(a,f),f[0]&8&&g(V,1)):(V=At(a),V.c(),g(V,1),V.m(ye.parentNode,ye)):V&&(Oe(),w(V,1,1,()=>{V=null}),xe());const Ye={};f[0]&8&&(Ye.data=a[3]),ie.$set(Ye),a[4]?j?(j.p(a,f),f[0]&16&&g(j,1)):(j=Mt(a),j.c(),g(j,1),j.m(re.parentNode,re)):j&&(Oe(),w(j,1,1,()=>{j=null}),xe());const Ue={};f[0]&16&&(Ue.data=a[4]),f[1]&536870912&&(Ue.$$scope={dirty:f,ctx:a}),de.$set(Ue),a[5]?J?(J.p(a,f),f[0]&32&&g(J,1)):(J=Tt(a),J.c(),g(J,1),J.m(te.parentNode,te)):J&&(Oe(),w(J,1,1,()=>{J=null}),xe());const Xe={};f[0]&32&&(Xe.data=a[5]),U.$set(Xe),a[6]?Z?(Z.p(a,f),f[0]&64&&g(Z,1)):(Z=kt(a),Z.c(),g(Z,1),Z.m(be.parentNode,be)):Z&&(Oe(),w(Z,1,1,()=>{Z=null}),xe());const Ne={};f[0]&64&&(Ne.data=a[6]),f[1]&536870912&&(Ne.$$scope={dirty:f,ctx:a}),ue.$set(Ne),a[7]?$?($.p(a,f),f[0]&128&&g($,1)):($=Ct(a),$.c(),g($,1),$.m(K.parentNode,K)):$&&(Oe(),w($,1,1,()=>{$=null}),xe());const Ke={};f[0]&128&&(Ke.data=a[7]),N.$set(Ke)},i(a){fe||(g(we.$$.fragment,a),g(G),g(ne.$$.fragment,a),g(u),g(pe.$$.fragment,a),g(B),g(H.$$.fragment,a),g(V),g(ie.$$.fragment,a),g(j),g(de.$$.fragment,a),g(J),g(U.$$.fragment,a),g(Z),g(ue.$$.fragment,a),g($),g(N.$$.fragment,a),fe=!0)},o(a){w(we.$$.fragment,a),w(G),w(ne.$$.fragment,a),w(u),w(pe.$$.fragment,a),w(B),w(H.$$.fragment,a),w(V),w(ie.$$.fragment,a),w(j),w(de.$$.fragment,a),w(J),w(U.$$.fragment,a),w(Z),w(ue.$$.fragment,a),w($),w(N.$$.fragment,a),fe=!1},d(a){a&&(h(t),h(o),h(r),h(b),h(_),h(L),h(R),h(I),h(c),h(M),h(v),h(s),h(A),h(qe),h(x),h(oe),h(Re),h(z),h(Y),h(me),h(Ie),h(ye),h(ce),h(le),h(Se),h(ae),h(Fe),h(X),h(Le),h(re),h(Me),h(te),h(ge),h(be),h(Te),h(K)),se&&se.d(a),D.d(a),h(e),h(n),ke&&ke.d(a),h(l),T(we,a),G&&G.d(a),T(ne,a),u&&u.d(a),T(pe,a),B&&B.d(a),T(H,a),V&&V.d(a),T(ie,a),j&&j.d(a),T(de,a),J&&J.d(a),T(U,a),Z&&Z.d(a),T(ue,a),$&&$.d(a),T(N,a)}}}const O={title:"Repeated runs on selected models"};function Sn(i,t,e){let n,l;it(i,$t,D=>e(43,n=D)),it(i,yt,D=>e(48,l=D));let{data:o}=t,{data:r={},customFormattingSettings:d,__db:b,inputs:_}=o;Et(yt,l="cd37c5116e17826f22ab5cfd2948bfd1",l);let P=jt(Vt(_));xt(P.subscribe(D=>e(10,_=D))),Ot(Kt,{getCustomFormats:()=>d.customFormats||[]});const L=(D,ke)=>Jt(b.query,D,{query_name:ke});Yt(L),n.params,Qt(()=>!0);let R={initialData:void 0,initialError:void 0},F=Ce`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  count(*) as "Runs",
  count(distinct iteration) as "Iterations",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 2) as "Total Cost ($)"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
  and is_successful
  and (
    '${_.hops_filter_no_modeling.value}' = 'all'
    or ('${_.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
    or ('${_.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
  )
group by model, method
order by "Accuracy %" desc, "Avg Latency (s)" asc`,I=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  count(*) as "Runs",
  count(distinct iteration) as "Iterations",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 2) as "Total Cost ($)"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
  and is_successful
  and (
    '${_.hops_filter_no_modeling.value}' = 'all'
    or ('${_.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
    or ('${_.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
  )
group by model, method
order by "Accuracy %" desc, "Avg Latency (s)" asc`;r.summary_no_modeling_data&&(r.summary_no_modeling_data instanceof Error?R.initialError=r.summary_no_modeling_data:R.initialData=r.summary_no_modeling_data,r.summary_no_modeling_columns&&(R.knownColumns=r.summary_no_modeling_columns));let c,M=!1;const v=Qe.createReactive({callback:D=>{e(0,c=D)},execFn:L},{id:"summary_no_modeling",...R});v(I,{noResolve:F,...R}),globalThis[Symbol.for("summary_no_modeling")]={get value(){return c}};let W={initialData:void 0,initialError:void 0},s=Ce`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
  and is_successful
  and (
    '${_.hops_filter_no_modeling.value}' = 'all'
    or ('${_.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
    or ('${_.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
  )
group by model, method
order by "Accuracy %" desc`,A=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
  and is_successful
  and (
    '${_.hops_filter_no_modeling.value}' = 'all'
    or ('${_.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
    or ('${_.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
  )
group by model, method
order by "Accuracy %" desc`;r.accuracy_no_modeling_data&&(r.accuracy_no_modeling_data instanceof Error?W.initialError=r.accuracy_no_modeling_data:W.initialData=r.accuracy_no_modeling_data,r.accuracy_no_modeling_columns&&(W.knownColumns=r.accuracy_no_modeling_columns));let ve,qe=!1;const we=Qe.createReactive({callback:D=>{e(1,ve=D)},execFn:L},{id:"accuracy_no_modeling",...W});we(A,{noResolve:s,...W}),globalThis[Symbol.for("accuracy_no_modeling")]={get value(){return ve}};let x={initialData:void 0,initialError:void 0},oe=Ce`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(avg(iter_acc), 1) as "Mean Accuracy %",
  round(stddev(iter_acc), 1) as "Std Dev",
  round(min(iter_acc), 1) as "Worst Run %",
  round(max(iter_acc), 1) as "Best Run %",
  round(max(iter_acc) - min(iter_acc), 1) as "Spread (pp)"
from (
  select
    model, method, iteration,
    100.0 * sum(is_correct::int) / count(*) as iter_acc
  from sql_answers
  where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
    and is_successful
    and (
      '${_.hops_filter_no_modeling.value}' = 'all'
      or ('${_.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
      or ('${_.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
    )
  group by model, method, iteration
) sub
group by model, method
order by "Std Dev" desc`,ne=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(avg(iter_acc), 1) as "Mean Accuracy %",
  round(stddev(iter_acc), 1) as "Std Dev",
  round(min(iter_acc), 1) as "Worst Run %",
  round(max(iter_acc), 1) as "Best Run %",
  round(max(iter_acc) - min(iter_acc), 1) as "Spread (pp)"
from (
  select
    model, method, iteration,
    100.0 * sum(is_correct::int) / count(*) as iter_acc
  from sql_answers
  where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
    and is_successful
    and (
      '${_.hops_filter_no_modeling.value}' = 'all'
      or ('${_.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
      or ('${_.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
    )
  group by model, method, iteration
) sub
group by model, method
order by "Std Dev" desc`;r.consistency_no_modeling_data&&(r.consistency_no_modeling_data instanceof Error?x.initialError=r.consistency_no_modeling_data:x.initialData=r.consistency_no_modeling_data,r.consistency_no_modeling_columns&&(x.knownColumns=r.consistency_no_modeling_columns));let Re,z=!1;const pe=Qe.createReactive({callback:D=>{e(2,Re=D)},execFn:L},{id:"consistency_no_modeling",...x});pe(ne,{noResolve:oe,...x}),globalThis[Symbol.for("consistency_no_modeling")]={get value(){return Re}};let Y={initialData:void 0,initialError:void 0},me=Ce`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') || ' / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  iteration as "Iteration",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
  and is_successful
  and (
    '${_.hops_filter_no_modeling.value}' = 'all'
    or ('${_.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
    or ('${_.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
  )
group by model, method, iteration
order by model, method, iteration`,H=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') || ' / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  iteration as "Iteration",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
  and is_successful
  and (
    '${_.hops_filter_no_modeling.value}' = 'all'
    or ('${_.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
    or ('${_.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
  )
group by model, method, iteration
order by model, method, iteration`;r.iter_no_modeling_data&&(r.iter_no_modeling_data instanceof Error?Y.initialError=r.iter_no_modeling_data:Y.initialData=r.iter_no_modeling_data,r.iter_no_modeling_columns&&(Y.knownColumns=r.iter_no_modeling_columns));let Ie,ye=!1;const ie=Qe.createReactive({callback:D=>{e(3,Ie=D)},execFn:L},{id:"iter_no_modeling",...Y});ie(H,{noResolve:me,...Y}),globalThis[Symbol.for("iter_no_modeling")]={get value(){return Ie}};let ce={initialData:void 0,initialError:void 0},le=Ce`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  count(*) as "Runs",
  count(distinct iteration) as "Iterations",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 2) as "Total Cost ($)"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
  and is_successful
group by model, method
order by "Accuracy %" desc, "Avg Latency (s)" asc`,Se=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  count(*) as "Runs",
  count(distinct iteration) as "Iterations",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 2) as "Total Cost ($)"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
  and is_successful
group by model, method
order by "Accuracy %" desc, "Avg Latency (s)" asc`;r.summary_with_modeling_data&&(r.summary_with_modeling_data instanceof Error?ce.initialError=r.summary_with_modeling_data:ce.initialData=r.summary_with_modeling_data,r.summary_with_modeling_columns&&(ce.knownColumns=r.summary_with_modeling_columns));let ae,Ae=!1;const Fe=Qe.createReactive({callback:D=>{e(4,ae=D)},execFn:L},{id:"summary_with_modeling",...ce});Fe(Se,{noResolve:le,...ce}),globalThis[Symbol.for("summary_with_modeling")]={get value(){return ae}};let X={initialData:void 0,initialError:void 0},ee=Ce`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
  and is_successful
group by model, method
order by "Accuracy %" desc`,Le=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
  and is_successful
group by model, method
order by "Accuracy %" desc`;r.accuracy_with_modeling_data&&(r.accuracy_with_modeling_data instanceof Error?X.initialError=r.accuracy_with_modeling_data:X.initialData=r.accuracy_with_modeling_data,r.accuracy_with_modeling_columns&&(X.knownColumns=r.accuracy_with_modeling_columns));let re,de=!1;const Me=Qe.createReactive({callback:D=>{e(5,re=D)},execFn:L},{id:"accuracy_with_modeling",...X});Me(Le,{noResolve:ee,...X}),globalThis[Symbol.for("accuracy_with_modeling")]={get value(){return re}};let te={initialData:void 0,initialError:void 0},U=Ce`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(avg(iter_acc), 1) as "Mean Accuracy %",
  round(stddev(iter_acc), 1) as "Std Dev",
  round(min(iter_acc), 1) as "Worst Run %",
  round(max(iter_acc), 1) as "Best Run %",
  round(max(iter_acc) - min(iter_acc), 1) as "Spread (pp)"
from (
  select
    model, method, iteration,
    100.0 * sum(is_correct::int) / count(*) as iter_acc
  from sql_answers
  where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
    and is_successful
  group by model, method, iteration
) sub
group by model, method
order by "Std Dev" desc`,ge=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(avg(iter_acc), 1) as "Mean Accuracy %",
  round(stddev(iter_acc), 1) as "Std Dev",
  round(min(iter_acc), 1) as "Worst Run %",
  round(max(iter_acc), 1) as "Best Run %",
  round(max(iter_acc) - min(iter_acc), 1) as "Spread (pp)"
from (
  select
    model, method, iteration,
    100.0 * sum(is_correct::int) / count(*) as iter_acc
  from sql_answers
  where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
    and is_successful
  group by model, method, iteration
) sub
group by model, method
order by "Std Dev" desc`;r.consistency_with_modeling_data&&(r.consistency_with_modeling_data instanceof Error?te.initialError=r.consistency_with_modeling_data:te.initialData=r.consistency_with_modeling_data,r.consistency_with_modeling_columns&&(te.knownColumns=r.consistency_with_modeling_columns));let be,ue=!1;const Te=Qe.createReactive({callback:D=>{e(6,be=D)},execFn:L},{id:"consistency_with_modeling",...te});Te(ge,{noResolve:U,...te}),globalThis[Symbol.for("consistency_with_modeling")]={get value(){return be}};let K={initialData:void 0,initialError:void 0},N=Ce`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') || ' / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  iteration as "Iteration",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
  and is_successful
group by model, method, iteration
order by model, method, iteration`,fe=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') || ' / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  iteration as "Iteration",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
  and is_successful
group by model, method, iteration
order by model, method, iteration`;r.iter_with_modeling_data&&(r.iter_with_modeling_data instanceof Error?K.initialError=r.iter_with_modeling_data:K.initialData=r.iter_with_modeling_data,r.iter_with_modeling_columns&&(K.knownColumns=r.iter_with_modeling_columns));let se,Pe=!1;const Ee=Qe.createReactive({callback:D=>{e(7,se=D)},execFn:L},{id:"iter_with_modeling",...K});return Ee(fe,{noResolve:N,...K}),globalThis[Symbol.for("iter_with_modeling")]={get value(){return se}},i.$$set=D=>{"data"in D&&e(8,o=D.data)},i.$$.update=()=>{i.$$.dirty[0]&256&&e(9,{data:r={},customFormattingSettings:d,__db:b}=o,r),i.$$.dirty[0]&512&&Xt.set(Object.keys(r).length>0),i.$$.dirty[1]&4096&&n.params,i.$$.dirty[0]&1024&&e(12,F=Ce`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  count(*) as "Runs",
  count(distinct iteration) as "Iterations",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 2) as "Total Cost ($)"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
  and is_successful
  and (
    '${_.hops_filter_no_modeling.value}' = 'all'
    or ('${_.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
    or ('${_.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
  )
group by model, method
order by "Accuracy %" desc, "Avg Latency (s)" asc`),i.$$.dirty[0]&1024&&e(13,I=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  count(*) as "Runs",
  count(distinct iteration) as "Iterations",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 2) as "Total Cost ($)"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
  and is_successful
  and (
    '${_.hops_filter_no_modeling.value}' = 'all'
    or ('${_.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
    or ('${_.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
  )
group by model, method
order by "Accuracy %" desc, "Avg Latency (s)" asc`),i.$$.dirty[0]&30720&&(F||!M?F||(v(I,{noResolve:F,...R}),e(14,M=!0)):v(I,{noResolve:F})),i.$$.dirty[0]&1024&&e(16,s=Ce`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
  and is_successful
  and (
    '${_.hops_filter_no_modeling.value}' = 'all'
    or ('${_.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
    or ('${_.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
  )
group by model, method
order by "Accuracy %" desc`),i.$$.dirty[0]&1024&&e(17,A=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
  and is_successful
  and (
    '${_.hops_filter_no_modeling.value}' = 'all'
    or ('${_.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
    or ('${_.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
  )
group by model, method
order by "Accuracy %" desc`),i.$$.dirty[0]&491520&&(s||!qe?s||(we(A,{noResolve:s,...W}),e(18,qe=!0)):we(A,{noResolve:s})),i.$$.dirty[0]&1024&&e(20,oe=Ce`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(avg(iter_acc), 1) as "Mean Accuracy %",
  round(stddev(iter_acc), 1) as "Std Dev",
  round(min(iter_acc), 1) as "Worst Run %",
  round(max(iter_acc), 1) as "Best Run %",
  round(max(iter_acc) - min(iter_acc), 1) as "Spread (pp)"
from (
  select
    model, method, iteration,
    100.0 * sum(is_correct::int) / count(*) as iter_acc
  from sql_answers
  where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
    and is_successful
    and (
      '${_.hops_filter_no_modeling.value}' = 'all'
      or ('${_.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
      or ('${_.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
    )
  group by model, method, iteration
) sub
group by model, method
order by "Std Dev" desc`),i.$$.dirty[0]&1024&&e(21,ne=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(avg(iter_acc), 1) as "Mean Accuracy %",
  round(stddev(iter_acc), 1) as "Std Dev",
  round(min(iter_acc), 1) as "Worst Run %",
  round(max(iter_acc), 1) as "Best Run %",
  round(max(iter_acc) - min(iter_acc), 1) as "Spread (pp)"
from (
  select
    model, method, iteration,
    100.0 * sum(is_correct::int) / count(*) as iter_acc
  from sql_answers
  where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
    and is_successful
    and (
      '${_.hops_filter_no_modeling.value}' = 'all'
      or ('${_.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
      or ('${_.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
    )
  group by model, method, iteration
) sub
group by model, method
order by "Std Dev" desc`),i.$$.dirty[0]&7864320&&(oe||!z?oe||(pe(ne,{noResolve:oe,...x}),e(22,z=!0)):pe(ne,{noResolve:oe})),i.$$.dirty[0]&1024&&e(24,me=Ce`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') || ' / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  iteration as "Iteration",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
  and is_successful
  and (
    '${_.hops_filter_no_modeling.value}' = 'all'
    or ('${_.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
    or ('${_.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
  )
group by model, method, iteration
order by model, method, iteration`),i.$$.dirty[0]&1024&&e(25,H=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') || ' / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  iteration as "Iteration",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'without_modeling')
  and is_successful
  and (
    '${_.hops_filter_no_modeling.value}' = 'all'
    or ('${_.hops_filter_no_modeling.value}' = 'answerable' and not too_many_hops)
    or ('${_.hops_filter_no_modeling.value}' = 'hops' and too_many_hops)
  )
group by model, method, iteration
order by model, method, iteration`),i.$$.dirty[0]&125829120&&(me||!ye?me||(ie(H,{noResolve:me,...Y}),e(26,ye=!0)):ie(H,{noResolve:me})),i.$$.dirty[0]&2013265920&&(le||!Ae?le||(Fe(Se,{noResolve:le,...ce}),e(30,Ae=!0)):Fe(Se,{noResolve:le})),i.$$.dirty[1]&15&&(ee||!de?ee||(Me(Le,{noResolve:ee,...X}),e(34,de=!0)):Me(Le,{noResolve:ee})),i.$$.dirty[1]&240&&(U||!ue?U||(Te(ge,{noResolve:U,...te}),e(38,ue=!0)):Te(ge,{noResolve:U})),i.$$.dirty[1]&3840&&(N||!Pe?N||(Ee(fe,{noResolve:N,...K}),e(42,Pe=!0)):Ee(fe,{noResolve:N}))},e(28,le=Ce`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  count(*) as "Runs",
  count(distinct iteration) as "Iterations",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 2) as "Total Cost ($)"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
  and is_successful
group by model, method
order by "Accuracy %" desc, "Avg Latency (s)" asc`),e(29,Se=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  count(*) as "Runs",
  count(distinct iteration) as "Iterations",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %",
  round(avg(timing), 2) as "Avg Latency (s)",
  round(median(timing), 2) as "Median Latency (s)",
  round(sum(cost) / nullif(count(*), 0), 4) as "Avg Cost ($)",
  round(sum(cost), 2) as "Total Cost ($)"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
  and is_successful
group by model, method
order by "Accuracy %" desc, "Avg Latency (s)" asc`),e(32,ee=Ce`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
  and is_successful
group by model, method
order by "Accuracy %" desc`),e(33,Le=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
  and is_successful
group by model, method
order by "Accuracy %" desc`),e(36,U=Ce`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(avg(iter_acc), 1) as "Mean Accuracy %",
  round(stddev(iter_acc), 1) as "Std Dev",
  round(min(iter_acc), 1) as "Worst Run %",
  round(max(iter_acc), 1) as "Best Run %",
  round(max(iter_acc) - min(iter_acc), 1) as "Spread (pp)"
from (
  select
    model, method, iteration,
    100.0 * sum(is_correct::int) / count(*) as iter_acc
  from sql_answers
  where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
    and is_successful
  group by model, method, iteration
) sub
group by model, method
order by "Std Dev" desc`),e(37,ge=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') as "Model",
  case
    when method = 'semantic_layer' then 'Semantic Layer'
    when method = 'sql' then 'Text to SQL'
    else method
  end as "Method",
  round(avg(iter_acc), 1) as "Mean Accuracy %",
  round(stddev(iter_acc), 1) as "Std Dev",
  round(min(iter_acc), 1) as "Worst Run %",
  round(max(iter_acc), 1) as "Best Run %",
  round(max(iter_acc) - min(iter_acc), 1) as "Spread (pp)"
from (
  select
    model, method, iteration,
    100.0 * sum(is_correct::int) / count(*) as iter_acc
  from sql_answers
  where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
    and is_successful
  group by model, method, iteration
) sub
group by model, method
order by "Std Dev" desc`),e(40,N=Ce`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') || ' / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  iteration as "Iteration",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
  and is_successful
group by model, method, iteration
order by model, method, iteration`),e(41,fe=`select
  replace(replace(model, 'anthropic:', ''), 'openai:', '') || ' / ' ||
    case when method = 'semantic_layer' then 'SL' else 'SQL' end as "Config",
  iteration as "Iteration",
  round(100.0 * sum(is_correct::int) / count(*), 1) as "Accuracy %"
from sql_answers
where batch_id in (select batch_id from batch_config where page = 'repeated_runs' and config_type = 'with_modeling')
  and is_successful
group by model, method, iteration
order by model, method, iteration`),[c,ve,Re,Ie,ae,re,be,se,o,r,_,R,F,I,M,W,s,A,qe,x,oe,ne,z,Y,me,H,ye,ce,le,Se,Ae,X,ee,Le,de,te,U,ge,ue,K,N,fe,Pe,n]}class vn extends ot{constructor(t){super(),lt(this,t,Sn,pn,at,{data:8},null,[-1,-1])}}export{vn as component};
