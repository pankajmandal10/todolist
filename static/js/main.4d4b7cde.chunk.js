(this.webpackJsonpcomplete_reactjs=this.webpackJsonpcomplete_reactjs||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),s=n.n(a),i=(n(13),n(8)),r=n(6),l=n(3),o=(n(14),n(0)),j=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(function(){var e=localStorage.getItem("mytodolist");return e?JSON.parse(e):[]}()),j=Object(l.a)(s,2),d=j[0],u=j[1],b=Object(c.useState)(""),m=Object(l.a)(b,2),f=m[0],O=m[1],h=Object(c.useState)(!1),x=Object(l.a)(h,2),g=x[0],v=x[1],p=function(){if(n)if(n&&g)u(d.map((function(e){return e.id===f?Object(r.a)(Object(r.a)({},e),{},{name:n}):e}))),a(""),O(null),v(!1);else{var e={id:(new Date).getTime().toString(),name:n};u([].concat(Object(i.a)(d),[e])),a("")}else alert("plz fill the data")};return Object(c.useEffect)((function(){localStorage.setItem("mytodolist",JSON.stringify(d))}),[d]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"main-div",children:Object(o.jsxs)("div",{className:"child-div",children:[Object(o.jsxs)("figure",{children:[Object(o.jsx)("img",{src:"./images/todo.svg",alt:"todologo"}),Object(o.jsx)("h1",{children:"Make Your List Here \u270c"})]}),Object(o.jsxs)("div",{className:"addItems",children:[Object(o.jsx)("input",{type:"text",placeholder:"\u270d Add Item",className:"form-control",value:n,onChange:function(e){return a(e.target.value)}}),g?Object(o.jsx)("i",{className:"far fa-edit add-btn",onClick:p}):Object(o.jsx)("i",{className:"fa fa-plus add-btn",onClick:p})]}),Object(o.jsx)("div",{className:"showItems",children:d.map((function(e){return Object(o.jsxs)("div",{className:"eachItem",children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsxs)("div",{className:"todo-btn",children:[Object(o.jsx)("i",{className:"far fa-edit add-btn",onClick:function(){return function(e){var t=d.find((function(t){return t.id===e}));a(t.name),O(e),v(!0)}(e.id)}}),Object(o.jsx)("i",{className:"far fa-trash-alt add-btn",onClick:function(){return function(e){var t=d.filter((function(t){return t.id!==e}));u(t)}(e.id)}})]})]},e.id)}))}),Object(o.jsx)("div",{className:"showItems",children:Object(o.jsx)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){u([])},children:Object(o.jsx)("span",{children:" CHECK LIST"})})})]})})})},d=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(j,{})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};s.a.render(Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),u()}},[[16,1,2]]]);
//# sourceMappingURL=main.4d4b7cde.chunk.js.map