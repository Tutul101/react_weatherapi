(this["webpackJsonpreact-api"]=this["webpackJsonpreact-api"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(5),i=c.n(s),r=(c(12),c(13),c(3)),l=c.n(r),o=c(6),j=c(4),u=c(7),d=c(0),h=function(){var e=Object(n.useState)("kolkata"),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({}),i=Object(j.a)(s,2),r=i[0],h=i[1],b=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&units=metric&appid=f2614ab2114a6ddcd2c61d24fb7f5b54"),e.prev=1,e.next=4,fetch(t);case 4:return n=e.sent,console.log(n),e.next=8,n.json();case 8:a=e.sent,console.log(a),h(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[c]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("div",{className:"inputData",children:Object(d.jsx)("input",{type:"search",className:"inputField",onChange:function(e){a(e.target.value)},value:c})}),200===r.cod?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)(u.a,{className:"icon"}),Object(d.jsx)("h2",{className:"city",children:c}),Object(d.jsxs)("h1",{className:"temp",children:[r.main.temp,"\xb0cel"]}),Object(d.jsxs)("h4",{children:["(Feels Like: ",r.main.feels_like,"\xb0cel)"]}),Object(d.jsxs)("h3",{className:"temp_min_max",children:["Min: ",r.main.temp_min,"\xb0cel | Max : ",r.main.temp_max,"\xb0cel"]})]})}):Object(d.jsx)("h2",{className:"nodata",children:"No data found"})]})})};var b=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("h1",{children:"Weather APP"})}),Object(d.jsx)(h,{})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.87d86665.chunk.js.map