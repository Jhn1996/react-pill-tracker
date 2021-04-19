(this["webpackJsonpreact-pill-tracker"]=this["webpackJsonpreact-pill-tracker"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(9),s=n.n(a),o=(n(16),n(6)),i=n(11),u=n(2),l=n.n(u),j=n(4),b=n(3),d=n(0),p=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(d.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})};p.defaultProp={color:"steelblue"};var h=p,f=function(e){var t=e.title,n=e.onAdd,r=e.showAdd;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)(h,{color:r?"black":"blue",text:r?"Close":"Add Pill",onClick:n})]})};f.defaultProps={title:"Pill Tracker"};var O=f,m=n(10),x=function(e){var t=e.item,n=e.onDelete,r=e.onToggle;return Object(d.jsxs)("div",{className:"item ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text," ",Object(d.jsx)(m.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(d.jsxs)("p",{children:["Take ",t.dose," pills every ",t.timenumber," hrs for ",t.instance," times"]})]})},v=function(e){var t=e.items,n=e.onDelete,r=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e,t){return Object(d.jsx)(x,{item:e,onDelete:n,onToggle:r},t)}))})},g=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(b.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(b.a)(o,2),u=i[0],l=i[1],j=Object(r.useState)(""),p=Object(b.a)(j,2),h=p[0],f=p[1],O=Object(r.useState)(""),m=Object(b.a)(O,2),x=m[0],v=m[1],g=Object(r.useState)(""),k=Object(b.a)(g,2),y=k[0],C=k[1],w=Object(r.useState)(!1),S=Object(b.a)(w,2),N=S[0],T=S[1],P=Object(r.useRef)();return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,pillnumber:u,timenumber:h,dose:x,instance:y,reminder:N}),s(""),f(""),l(""),v(""),C(u/x),T(!1)):alert("Please add a pill")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Pill Name"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Pill",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Total amount of pills per prescription"}),Object(d.jsx)("input",{type:"number",placeholder:"i.e.30 pills",value:u,onChange:function(e){return l(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Time interval (in hrs)"}),Object(d.jsxs)("span",{children:["Every ",Object(d.jsx)("input",{type:"number",placeholder:"i.e. 6",value:h,onChange:function(e){return f(e.target.value)}}),"hours"]})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Dose"}),Object(d.jsx)("input",{type:"number",placeholder:"i.e. 2",ref:P,value:x,onChange:function(e){return v(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control form-control-check",children:[Object(d.jsx)("label",{children:"Set Reminder"}),Object(d.jsx)("input",{type:"checkbox",checked:N,value:N,onChange:function(e){return T(e.currentTarget.checked)}})]}),Object(d.jsx)("input",{type:"submit",value:"Save Pill",className:"btn btn-block"})]})};var k=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(b.a)(a,2),u=s[0],p=s[1];Object(r.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/items");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/items/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/items",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,p([].concat(Object(i.a)(u),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/items/".concat(t),{method:"DELETE"});case 2:p(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/items/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,p(u.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(O,{onAdd:function(){return c(!n)},showAdd:n}),n&&Object(d.jsx)(g,{onAdd:m}),u.length>0?Object(d.jsx)(v,{items:u,onDelete:x,onToggle:k}):"No Pills to take"]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),y()}},[[19,1,2]]]);
//# sourceMappingURL=main.ed0ff290.chunk.js.map