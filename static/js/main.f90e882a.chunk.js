(this["webpackJsonptypescript-material-ui"]=this["webpackJsonptypescript-material-ui"]||[]).push([[0],{466:function(e,t,n){},477:function(e,t,n){"use strict";n.r(t);n(250),n(461);var c=n(520),r=n(521),a=n(0),o=n(78),i=n.n(o),s=n(54),l=(n(466),n(26));function j(){var e=Object(l.g)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var u=n(519),b=n(524),d=n(515),O=n(6),h=n(48),m=n(522),x=n(523),f=n(1),p=function(e){try{return new URL(e,window.location.origin).hostname===window.location.hostname}catch(t){return!1}},v=function(e){return e.disabled?Object(f.jsx)(m.a,Object(h.a)({},e)):Object(f.jsx)(x.a,Object(h.a)(Object(h.a)({},e),{},{href:p(e.to)?void 0:e.to,component:p(e.to)?s.b:"a",to:p(e.to)?e.to:"/"}))},g=Object(d.a)((function(e){return{footerRoot:{},footerContainer:{minHeight:100}}})),y=function(e){var t=e.className,n=g();return Object(f.jsx)(u.a,{container:!0,direction:"column",justifyContent:"space-between",alignItems:"stretch",className:Object(O.a)(n.footerRoot,t),children:Object(f.jsx)(u.a,{item:!0,container:!0,justifyContent:"center",alignItems:"center",className:n.footerContainer,children:Object(f.jsxs)(b.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(f.jsx)(v,{color:"inherit",to:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})})})},w=n(95),N=["layout","component","layoutprops"],C=function(e){var t=e.layout,n=e.component,c=e.layoutprops,r=Object(w.a)(e,N);return Object(f.jsx)(l.b,Object(h.a)(Object(h.a)({},r),{},{render:function(e){return Object(f.jsx)(t,{layoutprops:c,children:Object(f.jsx)(n,Object(h.a)({},e))})}}))},k=Object(d.a)((function(e){return{content:{}}})),F=function(e){var t=e.children,n=(e.layoutprops,k());return Object(f.jsx)(m.a,{children:Object(f.jsx)("main",{className:n.content,children:t})})},R=n(14),S=n(20),I=n(525),A=n(527),B=n(528),L=n(529),W=n(516),E=n(239),H=n.n(E),J=["className"],P=Object(d.a)((function(e){return{root:{},flexGrow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},drawer:{}}})),T=function(e){var t=e.className,n=Object(w.a)(e,J),c=P(),r=Object(a.useState)(!1),o=Object(S.a)(r,2),i=o[0],s=o[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(I.a,Object(h.a)(Object(h.a)({},n),{},{position:"relative",className:Object(O.a)(c.root,t),children:Object(f.jsxs)(A.a,{children:[Object(f.jsx)(B.a,{edge:"start",onClick:function(){return s(!i)},className:c.menuButton,color:"inherit","aria-label":"menu",children:Object(f.jsx)(H.a,{})}),Object(f.jsx)(b.a,{variant:"h6",className:c.title,component:"div",children:"App"}),Object(f.jsx)(L.a,{color:"inherit",children:"Button"})]})})),Object(f.jsx)(W.a,{anchor:"left",classes:{paper:c.drawer},onClose:function(){return s(!1)},open:i,variant:"temporary",children:Object(f.jsx)("div",{className:Object(O.a)(c.root,t),children:Object(f.jsx)(L.a,{children:"Example link"})})})]})},G=["className","children"],z=Object(d.a)((function(e){return{root:{},content:{paddingTop:e.spacing(10)}}})),M=function(e){var t=e.className,n=e.children,c=Object(w.a)(e,G),r=z(),a=Object(l.h)();return console.log(a),Object(f.jsxs)("div",{className:Object(O.a)(Object(R.a)({},r.root,!0),t),children:[Object(f.jsx)(T,Object(h.a)({},c)),Object(f.jsx)(u.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(f.jsxs)("main",{className:r.content,children:[n,Object(f.jsx)(y,{})]})})]})},U=Object(d.a)((function(e){return{minimalRoot:{},main:{minHeight:"300px"},leftSide:{backgroundColor:e.palette.primary.main},content:{}}})),_=function(e){var t=e.children,n=(e.layoutprops,U());return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(u.a,{container:!0,direction:"column",justifyContent:"space-between",alignItems:"stretch",className:n.minimalRoot,children:[Object(f.jsx)(u.a,{item:!0,container:!0,justifyContent:"center",alignItems:"stretch",children:Object(f.jsxs)(u.a,{item:!0,container:!0,xs:12,justifyContent:"center",alignItems:"stretch",className:n.main,children:[Object(f.jsx)(u.a,{item:!0,xs:6,justifyContent:"center",alignItems:"center",container:!0,className:n.leftSide,children:Object(f.jsx)(b.a,{variant:"h2",children:"Appname"})}),Object(f.jsx)(u.a,{item:!0,justifyContent:"center",alignItems:"center",container:!0,xs:6,children:Object(f.jsx)("main",{className:n.content,children:t})})]})}),Object(f.jsx)(y,{})]})})},D=n(530),Y=n(531),q=Object(d.a)((function(e){return{cardRoot:{},card:{height:"100%"}}})),V=function(e){var t=e.className,n=e.text,c=e.title,r=e.onClick,a=e.children,o=q();return Object(f.jsx)(u.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:Object(O.a)(o.cardRoot,t),children:Object(f.jsx)(D.a,{className:o.card,style:null!=r?{cursor:"pointer"}:{},onClick:r,children:Object(f.jsxs)(Y.a,{children:[c&&Object(f.jsx)(b.a,{variant:"h5",children:c}),n&&Object(f.jsx)(b.a,{children:n}),a]})})})},$=n(65),K=n.n($),Q=n(94),X=n(532),Z=n(533),ee=Object(d.a)((function(e){return{circularProgressRoot:{}}})),te=function(e){var t=e.text,n=e.className,c=ee();return Object(f.jsxs)(X.a,{className:Object(O.a)(c.circularProgressRoot,n),children:[t?Object(f.jsx)(X.a,{p:3,children:Object(f.jsx)(b.a,{variant:"h4",children:t})}):null,Object(f.jsx)(Z.a,{})]})},ne=Object(d.a)((function(e){return{groceryListRoot:{}}})),ce=function(e){e.className,ne();var t=Object(a.useState)(!1),n=Object(S.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)([]),i=Object(S.a)(o,2),s=i[0],l=i[1],j=function(){fetch("https://api.trello.com/1/lists/611ab9702b68a509a8047f4f/cards?key=".concat("cba899ae1111be0f75510eadeeedd60d","&token=").concat("617440f77e0c73cbae1403e7fa20103645a3cfed10bd47ca48f8f6b8467eebea")).then(function(){var e=Object(Q.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,l((null===n||void 0===n?void 0:n.filter((function(e){return"611ab9702b68a509a8047f4f"===e.idList&&!e.closed})))||[]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};return Object(a.useEffect)((function(){j(),setTimeout(j,36e5)}),[]),Object(f.jsx)(V,{title:"Grocery List",onClick:function(){r(!c)},children:(null===s||void 0===s?void 0:s.length)?Object(f.jsxs)(f.Fragment,{children:[s.length||0," items",Object(f.jsx)("br",{}),Object(f.jsx)("ul",{children:s.map((function(e,t){return(c||t)<5?Object(f.jsx)("li",{children:e.name},t):5===t?Object(f.jsx)("li",{children:"..."},t):null}))})]}):Object(f.jsx)(te,{text:"loading trello data"})})},re=Object(d.a)((function(e){return{nextSubwayRoot:{}}})),ae=function(e){e.className;var t,n,c=e.location,r=(re(),Object(a.useState)({})),o=Object(S.a)(r,2),i=o[0],s=o[1],l=function(){s({}),fetch("https://nice-chambray-wombat.glitch.me/departures/".concat(c||614)).then(function(){var e=Object(Q.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,t.json();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};Object(a.useEffect)((function(){l()}),[]);var j=null===i||void 0===i||null===(t=i.lines)||void 0===t||null===(n=t.filter((function(e){return"8th Av - Fulton St"===e.name})))||void 0===n?void 0:n[0];return console.log(j),Object(f.jsx)(V,{onClick:l,children:Object(f.jsxs)(f.Fragment,{children:["Upcoming departures: ",Object(f.jsx)("br",{}),null===j||void 0===j?void 0:j.departures.N.filter((function(e){return"A"===e.routeId})).map((function(e,t){return t<6?Object(f.jsxs)("div",{children:[e.routeId,": ",new Date(e.time).toLocaleTimeString()]},t):null}))]})})},oe=(Object(d.a)((function(e){return{todaysWeatherRoot:{}}})),function(e){if(!e)return 0;var t=e-273;return Math.floor(1.8*t+32)}),ie=function(e){e.className;var t,n,c,r,o,i,s,l,j=e.zip,u=void 0===j?10019:j,b=Object(a.useState)({}),d=Object(S.a)(b,2),O=d[0],h=d[1],m=function(){h({}),fetch("https://api.openweathermap.org/data/2.5/weather?zip=".concat(u,",","us","&appid=").concat("6102342a41d28dcbd718eb5754d15643")).then(function(){var e=Object(Q.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=h,e.next=3,t.json();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};return Object(a.useEffect)((function(){m(),setTimeout(m,36e5)}),[]),Object(f.jsx)(V,{onClick:m,title:"Weather for ".concat(O.name||""),children:Object(f.jsx)(f.Fragment,{children:(null===O||void 0===O?void 0:O.main)?Object(f.jsxs)(f.Fragment,{children:["Current: ",oe(null===O||void 0===O||null===(t=O.main)||void 0===t?void 0:t.temp),"\xb0,","  ","Feels like:"," ",oe(null===O||void 0===O||null===(n=O.main)||void 0===n?void 0:n.feels_like),"\xb0",Object(f.jsx)("br",{}),"High: ",oe(null===O||void 0===O||null===(c=O.main)||void 0===c?void 0:c.temp_max),"\xb0",Object(f.jsx)("br",{}),"Low: ",oe(null===O||void 0===O||null===(r=O.main)||void 0===r?void 0:r.temp_min),"\xb0",Object(f.jsx)("br",{}),null===O||void 0===O||null===(o=O.weather)||void 0===o||null===(i=o[0])||void 0===i?void 0:i.main,": ",null===O||void 0===O||null===(s=O.weather)||void 0===s||null===(l=s[0])||void 0===l?void 0:l.description]}):Object(f.jsx)(te,{text:"Loading Weather"})})})},se=Object(d.a)((function(e){return{root:{}}})),le=function(){document.title="Always On Home App";se();return Object(f.jsxs)(u.a,{container:!0,spacing:1,justifyContent:"space-evenly",alignItems:"stretch",children:[Object(f.jsx)(ce,{}),Object(f.jsx)(ie,{}),Object(f.jsx)(ie,{zip:33704}),Object(f.jsx)(ae,{}),Object(f.jsx)(V,{text:"hello3"}),Object(f.jsx)(V,{text:"hello4"}),Object(f.jsx)(V,{text:"hello5"}),Object(f.jsx)(V,{text:"hello6"}),Object(f.jsx)(V,{text:"hello7"})]})},je=Object(d.a)((function(e){return{root:{}}})),ue=function(){var e=je(),t=Object(l.h)();return Object(f.jsxs)("div",{className:e.root,children:[Object(f.jsx)("h1",{children:"Main Page!"}),Object(f.jsx)(v,{to:"/",children:"Back to minimal page"}),Object(f.jsx)("pre",{children:JSON.stringify(t)})]})},be=Object(d.a)((function(e){return{root:{}}})),de=function(){var e=be(),t=Object(l.h)();return Object(f.jsx)(u.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",className:e.root,children:Object(f.jsx)(u.a,{item:!0,children:Object(f.jsxs)("div",{className:e.root,children:[Object(f.jsx)("h1",{children:"First Page!"}),Object(f.jsx)(v,{to:"/main/page-name",children:"Route: main page"}),Object(f.jsx)("br",{}),Object(f.jsx)(v,{to:"/doesntexist",children:"Route: page that doesnt exist"}),Object(f.jsx)("br",{}),Object(f.jsx)("pre",{children:JSON.stringify(t)})]})})})},Oe=Object(d.a)((function(e){return{root:{}}})),he=function(){var e=Oe(),t=Object(l.h)();return Object(f.jsx)(u.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",className:e.root,children:Object(f.jsxs)(u.a,{item:!0,children:[Object(f.jsx)("h1",{children:"Page Not Found!"}),Object(f.jsx)("br",{}),Object(f.jsx)(v,{to:"/",children:"Back Home"}),Object(f.jsx)("br",{}),Object(f.jsx)("pre",{children:JSON.stringify(t)})]})})},me=function(){return Object(f.jsxs)(l.d,{children:[Object(f.jsx)(C,{component:le,exact:!0,layout:F,layoutprops:{},path:["/"]}),Object(f.jsx)(C,{component:de,exact:!0,layout:_,layoutprops:{},path:["/oldmain"]}),Object(f.jsx)(C,{component:ue,exact:!0,layout:M,path:"/main/:pageName"}),Object(f.jsx)(C,{component:he,exact:!0,layout:_,layoutprops:{},path:"/404-not-found"}),Object(f.jsx)(l.a,{push:!0,to:{pathname:"/404-not-found",search:"?from="+encodeURIComponent(window.location.href),state:{from:window.location.href}}})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=n(66),fe=n(241),pe=Object(fe.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:xe.a.A400},background:{default:"#fff"}},components:{MuiButton:{variants:[{props:{variant:"custom"},style:{backgroundColor:"#00acee",color:"#FFFFFF","&:hover":{backgroundColor:"#007cad"}}}]}}});pe.customValues={primaryFontFamily:"Roboto",secondaryFontFamily:"Arial",customColor:"green"};var ve=pe;i.a.render(Object(f.jsxs)(r.a,{theme:ve,children:[Object(f.jsx)(c.a,{}),Object(f.jsxs)(s.a,{basename:"always-on-home",children:[Object(f.jsx)(j,{}),Object(f.jsx)(me,{})]})]}),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[477,1,2]]]);
//# sourceMappingURL=main.f90e882a.chunk.js.map