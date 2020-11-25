(this.webpackJsonpcorona_tracker=this.webpackJsonpcorona_tracker||[]).push([[0],{183:function(e,t,a){},184:function(e,t,a){},201:function(e,t,a){},202:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),c=a(68),o=a.n(c),s=a(8),i=a.n(s),d=a(13),u=a(16),l=(a(81),a(220)),j=a(224),b=a(221),h=a(222),p=a(30),f=a.n(p),v=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?Object(r.jsx)("div",{className:"card-container",children:Object(r.jsxs)(l.a,{container:!0,spacing:3,justify:"center",children:[Object(r.jsx)(l.a,{item:!0,component:j.a,xs:12,md:3,className:"card infected",children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(h.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(r.jsx)(h.a,{variant:"h6",children:Object(r.jsx)(f.a,{start:0,end:a.value,duration:1,separator:","})}),Object(r.jsx)(h.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(r.jsx)(h.a,{variant:"body2",children:"Number of confirmed cases of COVID-19"})]})}),Object(r.jsx)(l.a,{item:!0,component:j.a,xs:12,md:3,className:"card recovered",children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(h.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(r.jsx)(h.a,{variant:"h6",children:Object(r.jsx)(f.a,{start:0,end:n.value,duration:1,separator:","})}),Object(r.jsx)(h.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(r.jsx)(h.a,{variant:"body2",children:"Number of recovered cases of COVID-19"})]})}),Object(r.jsx)(l.a,{item:!0,component:j.a,xs:12,md:3,className:"card death",children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(h.a,{color:"textSecondary",gutterBottom:!0,children:"Death"}),Object(r.jsx)(h.a,{variant:"h6",children:Object(r.jsx)(f.a,{start:0,end:c.value,duration:1,separator:","})}),Object(r.jsx)(h.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(r.jsx)(h.a,{variant:"body2",children:"Number of death cases of COVID-19"})]})})]})}):"Loading"},x=a(31),O=(a(183),function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=(t.lastUpdate,e.dailyData);if(!a)return"loading";var s={labels:["Confirmed","Recoverd","Deaths"],datasets:[{label:"Covid-19",backgroundColor:["rgba(255,0,0, 0.5)","rgba(0,255,0, 0.5)","rgba(0,0,255, 0.5)"],hoverBackgroundColor:["rgba(255,0,0, 0.5)","rgba(0,255,0, 0.5)","rgba(0,0,255, 0.5)"],data:[a.value,n.value,c.value]}]},i=[],d=parseInt(o.length/20);i.push(o[0]);for(var u=1;u<20;u++)i.push(o[u*d]);i.push(o[o.length-1]);var l=i[0]?Object(r.jsx)(x.Line,{data:{labels:i.map((function(e){return e.date})),datasets:[{data:i.map((function(e){return e.confirmed})),label:"Infected",fill:!1,lineTension:.5,backgroundColor:"rgba(255,0,0, 0.5);",borderColor:"rgba(255,0,0, 0.5)",color:"rgba(255,0,0, 0.5)",borderWidth:2},{data:i.map((function(e){return e.deaths})),label:"Deaths",lineTension:.5,borderColor:"rgba(0,0,255, 0.5)",backgroundColor:"",borderWidth:2,fill:!1}]}}):null;return Object(r.jsxs)("div",{className:"chart-container",children:[Object(r.jsx)("div",{className:"pie",children:Object(r.jsx)(x.Pie,{data:s,options:{title:{display:!1,text:"",fontSize:20},legend:{display:!0,position:"right"}}})}),Object(r.jsx)("div",{className:"bar",children:Object(r.jsx)(x.Bar,{data:s,options:{title:{display:!1,text:"Average Rainfall per month",fontSize:20},legend:{display:!1,position:"right"}}})}),Object(r.jsxs)("div",{className:"lineChart",children:[Object(r.jsx)("p",{children:"Global Confirmed and Deaths Cases Vs Dates"}),l]})]})}),m=a(225),g=a(223),y=(a(184),a(32)),C=a.n(y),D="https://covid19.mathdro.id/api",w=function(){var e=Object(d.a)(i.a.mark((function e(t){var a,r,n,c,o,s,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,C.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,s=n.deaths,d=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:d});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(i.a.mark((function e(){var t,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,r=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),N=function(e){var t=e.handleCountry,a=Object(n.useState)([]),c=Object(u.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,k();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),Object(r.jsx)("div",{className:"country-container",children:Object(r.jsx)(m.a,{className:"formControl",children:Object(r.jsxs)(g.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(r.jsx)("option",{value:"",children:"Global"}),o.map((function(e,t){return Object(r.jsx)("option",{value:e,children:e},t)}))]})})})},I=(a(201),function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),l=s[0],j=s[1],b=Object(n.useState)([]),h=Object(u.a)(b,2),p=h[0],f=h[1],x=function(){var e=Object(d.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(l),e.next=3,w(t);case 3:a=e.sent,c(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x(),function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("p",{children:"Coronavirus (COVID-19) Dashboard"}),Object(r.jsx)(N,{handleCountry:x}),Object(r.jsx)(v,{data:a}),Object(r.jsx)(O,{data:a,country:l,dailyData:p})]})});o.a.render(Object(r.jsx)(I,{}),document.getElementById("root"))},81:function(e,t,a){}},[[202,1,2]]]);
//# sourceMappingURL=main.2c213ae4.chunk.js.map