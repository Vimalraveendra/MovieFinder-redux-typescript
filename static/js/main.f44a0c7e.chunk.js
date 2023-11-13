(this["webpackJsonpmoviefinder-app"]=this["webpackJsonpmoviefinder-app"]||[]).push([[0],{14:function(e,r,t){e.exports={container:"SearchBox_container__2VawF",searchContainer:"SearchBox_searchContainer__3Vx-T",input:"SearchBox_input__7R9fZ",button:"SearchBox_button__vdESL",icon:"SearchBox_icon__1S6-C"}},15:function(e,r,t){e.exports={moviecard:"MovieCard_moviecard__3rhlb",title:"MovieCard_title__2YPHA",error:"MovieCard_error__3U9cl",image:"MovieCard_image__3DaOQ"}},33:function(e,r,t){e.exports={App:"App_App__16_go","App-logo":"App_App-logo__14lKf","App-logo-spin":"App_App-logo-spin__3lLOM","App-header":"App_App-header__1CKgp","App-link":"App_App-link__23rLK"}},35:function(e,r,t){e.exports={movielist:"MovieList_movielist__1vxse"}},46:function(e,r,t){},72:function(e,r,t){"use strict";t.r(r);var n=t(1),a=t.n(n),c=t(16),i=t.n(c),o=(t(46),t(31)),s=t(32),u=t(41),l=t(39),p=t(33),d=t.n(p),j=t(5),h=t(13),b="HANDLE_SEARCH_CHANGE",v="CLEAR_SEARCH_FIELD",O="REQUEST_FILM_DATA_START",_="REQUEST_FILM_DATA_SUCCESS",f="REQUEST_FILM_DATA_FAILURE",m="CLEAR_FILM_DATA",x=t(11),A=function(e){return e.moviesList},g=Object(x.a)([A],(function(e){return e.movies})),y=Object(x.a)([A],(function(e){return e.error})),S=Object(x.a)([function(e){return e.searchText}],(function(e){return e.searchField})),w=t(14),C=t.n(w),E=t(4),F=function(e){var r=e.searchChange,t=e.handleSubmit,n=e.clearMovies,a=e.searchField,c=e.error,i=e.clearSearchField;return Object(E.jsx)("div",{className:C.a.container,children:Object(E.jsxs)("div",{className:C.a.searchContainer,children:[Object(E.jsx)("input",{className:C.a.input,type:"search",placeholder:"search movies...",onChange:r,value:a}),Object(E.jsx)("button",{className:C.a.button,onClick:function(){return t(a)},children:"Search"}),a.length>0||c?Object(E.jsx)("span",{className:C.a.icon,role:"img","aria-label":"sheep",onClick:function(){n(),i()},children:"\u274c"}):null]})})},k=Object(x.b)({searchField:S,error:y}),L=Object(h.b)(k,(function(e){return{searchChange:function(r){return e((t=r.target.value,{type:b,payload:t}));var t},clearMovies:function(){return e({type:m})},handleSubmit:function(r){return e(function(e){return{type:O,payload:e}}(r))},clearSearchField:function(){return e({type:v})}}}))((function(e){return Object(E.jsx)(F,Object(j.a)({},e))})),T=t(15),M=t.n(T),N=function(e){var r=e.Title,t=e.Poster,n=e.Year,a=e.error;return r?Object(E.jsxs)("div",{className:M.a.moviecard,children:[Object(E.jsx)("img",{src:t,alt:"movie-poster",className:M.a.image}),Object(E.jsxs)("div",{className:M.a.title,children:[Object(E.jsx)("h2",{children:r}),Object(E.jsxs)("p",{children:["Year:",n]})]})]}):Object(E.jsx)("div",{className:M.a.error,children:Object(E.jsx)("p",{children:a})})},R=t(35),P=t.n(R),D=function(e){var r=e.movies,t=e.error;e.searchField;return t||void 0===r?Object(E.jsx)(N,{error:t||"Please enter a valid movie name"}):Object(E.jsx)("div",{className:P.a.movielist,children:r&&r.map((function(e){var r=e.imdbID,t=e.Title,n=e.Poster,a=e.Year;return"N/A"!==n?Object(E.jsx)(N,{Title:t,Poster:n,Year:a},r):null}))})},I=Object(x.b)({movies:g,error:y,searchField:S}),B=Object(h.b)(I)((function(e){return Object(E.jsx)(D,Object(j.a)({},e))})),U=function(e){Object(u.a)(t,e);var r=Object(l.a)(t);function t(){return Object(o.a)(this,t),r.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(E.jsxs)("div",{className:d.a.App,children:[Object(E.jsx)("h1",{children:"Movie finder"}),Object(E.jsx)(L,{}),Object(E.jsx)(B,{})]})}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=t(10),Y={movies:[],isPending:!1,error:""},Q={searchField:""},K=Object(H.c)({moviesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case O:return Object(j.a)(Object(j.a)({},e),{},{isPending:!0});case _:return Object(j.a)(Object(j.a)({},e),{},{isPending:!1,movies:r.payload});case f:return Object(j.a)(Object(j.a)({},e),{},{isPending:!1,error:r.payload});case m:return Object(j.a)(Object(j.a)({},e),{},{movies:[],error:""});default:return e}},searchText:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case b:return Object(j.a)(Object(j.a)({},e),{},{searchField:r.payload});case v:return Object(j.a)(Object(j.a)({},e),{},{searchField:""});default:return e}}}),J=t(36),V=t.n(J),W=t(40),G=t(8),Z=t.n(G),$=t(12),q=t(37),z=t(38),X=t.n(z),ee=function(){var e=Object(q.a)(Z.a.mark((function e(r){var t,n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X.a.get("http://www.omdbapi.com/?s=".concat(r,"&apikey=").concat("25804efe"));case 3:return t=e.sent,n=t.data.Search,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),re=Z.a.mark(ne),te=Z.a.mark(ae);function ne(e){var r,t;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.payload,n.prev=1,n.next=4,Object($.b)(ee,r);case 4:return t=n.sent,n.next=7,Object($.d)({type:_,payload:t});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(1),n.next=13,Object($.d)((a=n.t0,{type:f,payload:a}));case 13:case"end":return n.stop()}var a}),re,null,[[1,9]])}function ae(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.e)(O,ne);case 2:case"end":return e.stop()}}),te)}var ce=Z.a.mark(ie);function ie(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.a)([Object($.c)(ae)]);case 2:case"end":return e.stop()}}),ce)}var oe=Object(W.a)(),se=[oe,V.a],ue=Object(H.e)(K,H.a.apply(void 0,se));oe.run(ie);var le=ue;i.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(h.a,{store:le,children:Object(E.jsx)(U,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.f44a0c7e.chunk.js.map