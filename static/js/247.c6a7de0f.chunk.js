"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(r,t,e){e.r(t);var n=e(861),a=e(439),u=e(757),c=e.n(u),s=e(791),i=e(689),o=e(941),p=e(393),f=e(184);t.default=function(){var r=(0,i.UO)().movieID,t=(0,s.useState)([]),e=(0,a.Z)(t,2),u=e[0],v=e[1],h=(0,s.useState)(!1),d=(0,a.Z)(h,2),l=d[0],m=d[1];return(0,s.useEffect)((function(){m(!0);var t=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.uV)(r);case 3:e=t.sent,v(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching movie cast:",t.t0);case 10:return t.prev=10,m(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]),(0,f.jsxs)(f.Fragment,{children:[l&&(0,f.jsx)(p.Z,{}),0!==u.length?(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Movie Cast"}),(0,f.jsx)("ul",{children:u.map((function(r){return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{width:"200px",height:"300px",src:r.profile_path?"https://image.tmdb.org/t/p/w300".concat(r.profile_path):void 0,alt:r.original_name}),(0,f.jsx)("p",{children:r.name})]},r.id)}))})]}):(0,f.jsx)("div",{children:"We don't have any cast for this movie."})]})}},941:function(r,t,e){e.d(t,{Hx:function(){return v},Y5:function(){return o},o1:function(){return p},uV:function(){return f},wr:function(){return i}});var n=e(861),a=e(757),u=e.n(a),c=e(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"552a021037d600f0ab327b517683ae85",language:"en-US"}},i=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("trending/movie/day",s);case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(t),s);case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/search/movie?query=".concat(t),s);case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/credits?"),s);case 2:return e=r.sent,r.abrupt("return",e.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/reviews?"),s);case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.c6a7de0f.chunk.js.map