(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{37:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(26),a=c(9),s=(c(35),c(36),c(0)),r=c.n(s),j=c(3),i=(c(37),c(2)),l=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},o=c(4),b=c(6),d=c(5);function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(39);var O=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},u=c(12),x=c.n(u),p=function(e){var t=e.person,c=t.name,n=t.sex,s=t.slug;return Object(i.jsx)(a.b,{to:"/people/".concat(s),className:x()({"has-text-danger":"f"===n}),children:c})},m=function(e){var t=e.person,c=e.people,n=t.sex,a=t.born,r=t.died,l=t.fatherName,o=t.motherName,b=t.slug,d=Object(j.p)().slug,h=Object(s.useMemo)((function(){return c.find((function(e){return o===e.name}))}),[]),O=Object(s.useMemo)((function(){return c.find((function(e){return l===e.name}))}),[]);return Object(i.jsxs)("tr",{"data-cy":"person",className:x()({"has-background-warning":d===b}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(p,{person:t})}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:h?Object(i.jsx)(p,{person:h}):o||"-"}),Object(i.jsx)("td",{children:O?Object(i.jsx)(p,{person:O}):l||"-"})]})},f=r.a.memo((function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!0),r=Object(d.a)(a,2),j=r[0],l=r[1],u=Object(s.useState)(!1),x=Object(d.a)(u,2),p=x[0],f=x[1],v=!j&&!p,g=Object(s.useCallback)(Object(b.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!1),e.prev=1,e.next=4,h();case 4:t=e.sent,n(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f(!0);case 11:l(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),[]);return Object(s.useEffect)((function(){g()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[j&&Object(i.jsx)(O,{}),v&&Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:c.map((function(e){return Object(i.jsx)(m,{person:e,people:c},e.slug)}))})]}),0===c.length&&v&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),p&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})]})})]})})),v=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},g=r.a.memo((function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{to:"/",className:function(e){var t=e.isActive;return x()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(i.jsx)(a.c,{to:"/people",className:function(e){var t=e.isActive;return x()("navbar-item",{"has-background-grey-lighter":t})},children:"People"})]})})})})),N=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(g,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(j.d,{children:[Object(i.jsxs)(j.b,{path:"/people",children:[Object(i.jsx)(j.b,{index:!0,element:Object(i.jsx)(f,{})}),Object(i.jsx)(j.b,{path:":slug",element:Object(i.jsx)(f,{})})]}),Object(i.jsx)(j.b,{path:"/",element:Object(i.jsx)(l,{})}),Object(i.jsx)(j.b,{path:"*",element:Object(i.jsx)(v,{})}),Object(i.jsx)(j.b,{path:"/home",element:Object(i.jsx)(j.a,{to:"/",replace:!0})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(N,{})}))}},[[40,1,2]]]);
//# sourceMappingURL=main.8fefb1f9.chunk.js.map