(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{471:function(t,e,n){"use strict";n.r(e);n(56);var r,c=n(21),o=n(44),l=n.n(o),d={data:function(){return{articulos:[]}},created:(r=Object(c.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get("http://jsonplaceholder.typicode.com/posts?_limit=10");case 3:e=t.sent,this.articulos=e.data,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])}))),function(){return r.apply(this,arguments)})},v=n(41),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-5"},t._l(t.articulos,(function(e,r){return n("div",{key:r,staticClass:"card my-2"},[n("div",{staticClass:"card-body"},[n("nuxt-link",{attrs:{to:"blog/"+e.id}},[n("h1",[t._v(t._s(e.title))])]),t._v(" "),n("p",[t._v(t._s(e.body))])],1)])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);