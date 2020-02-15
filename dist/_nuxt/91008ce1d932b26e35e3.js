(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{310:function(t,e,r){"use strict";r(311),r(314)},311:function(t,e,r){"use strict";var o=r(312);function n(t){this.message=t}n.prototype=new Error,n.prototype.name="InvalidTokenError",t.exports=function(t,e){if("string"!=typeof t)throw new n("Invalid token specified");var r=!0===(e=e||{}).header?0:1;try{return JSON.parse(o(t.split(".")[r]))}catch(t){throw new n("Invalid token specified: "+t.message)}},t.exports.InvalidTokenError=n},312:function(t,e,r){var o=r(313);t.exports=function(t){var output=t.replace(/-/g,"+").replace(/_/g,"/");switch(output.length%4){case 0:break;case 2:output+="==";break;case 3:output+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(o(t).replace(/(.)/g,(function(t,p){var code=p.charCodeAt(0).toString(16).toUpperCase();return code.length<2&&(code="0"+code),"%"+code})))}(output)}catch(t){return o(output)}}},313:function(t,e){function r(t){this.message=t}r.prototype=new Error,r.prototype.name="InvalidCharacterError",t.exports="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(input){var t=String(input).replace(/=+$/,"");if(t.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var e,o,n=0,c=0,output="";o=t.charAt(c++);~o&&(e=n%4?64*e+o:o,n++%4)?output+=String.fromCharCode(255&e>>(-2*n&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return output}},314:function(t,e,r){"use strict";function o(){}t.exports=o,o.maxLength=4096,o.parse=function(t){var e=o.maxLength;if("string"!=typeof t)throw new TypeError("str must be a string");if(t.length>e)throw new RangeError("str is too large (CookieParser.maxLength="+e+")");var r=new o;if(arguments.length>1){var n=arguments[1];if("object"==typeof n&&null!==n&&"function"==typeof n.decode)return r.slowParse(t,n.decode)}return r.parse(t)},o.prototype.decode=function(t){try{return decodeURIComponent(t)}catch(e){return t}},o.prototype.extract=function(t,e,r){return e===r+1?"":t.slice(this.trimForward(t,e),this.trimBackward(t,r)+1)},o.prototype.trimForward=function(t,i){for(var e=t.charCodeAt(i);this.isWhiteSpace(e);)e=t.charCodeAt(++i);return i},o.prototype.trimBackward=function(t,i){for(var e=t.charCodeAt(i);this.isWhiteSpace(e);)e=t.charCodeAt(--i);return i},o.prototype.isWhiteSpace=function(t){return t<=32},o.prototype.parse=function(t){var e={},r=0,o=0,n=0,c=0,h=!1,d=!1,i=0,f=t.length;t:for(;i<f;++i){var l=t.charCodeAt(i);if(l>127)return this.slowParse(t,this.decode);if(61===l){o=i-1;var v=i+1;for(l=t.charCodeAt(v);32===l;)v++,l=t.charCodeAt(v);for(34===l&&(v++,d=!0),n=v;v<f;++v)if(37===(l=t.charCodeAt(v)))h=!0;else if(59===l||44===l){if(d)(c=this.trimBackward(t,v-1)-1)<n&&(n=c);else c=v-1;var w=this.extract(t,r,o),m=this.extract(t,n,c);for(e[w]=h?this.decode(m):m,i=v;v<f;++v)if(32!==t.charCodeAt(v)){i=v-1;break}o=r=i+1,d=!1,h=!1;continue t}if(d)(c=this.trimBackward(t,v-1)-1)<n&&(n=c);else c=v-1;w=this.extract(t,r,o),m=this.extract(t,n,c);e[w]=h?this.decode(m):m,i=v}else 59!==l&&44!==l||(r=i+1)}return e},o.serialize=function(t,e,r){var o=[t+"="+((r=r||{}).encode||encodeURIComponent)(e)];return r.maxAge&&o.push("Max-Age="+r.maxAge),r.domain&&o.push("Domain="+r.domain),r.path&&o.push("Path="+r.path),r.expires&&o.push("Expires="+r.expires.toUTCString()),r.httpOnly&&o.push("HttpOnly"),r.secure&&o.push("Secure"),o.join("; ")},o.prototype.slowParse=function(t,e){var r={};return t.split(/[;,] */).forEach((function(t){var o=t.indexOf("=");if(!(o<0)){var n=t.substr(0,o).trim(),c=t.substr(++o,t.length).trim();if('"'==c[0]&&(c=c.slice(1,-1)),null==r[n])try{r[n]=e(c)}catch(t){r[n]=c}}})),r}},351:function(t,e,r){var content=r(435);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("38a65ed8",content,!0,{sourceMap:!1})},434:function(t,e,r){"use strict";var o=r(351);r.n(o).a},435:function(t,e,r){(e=r(18)(!1)).push([t.i,".post{padding:1rem;border:1px solid #f5f5f5;margin:1rem 0}.post:hover{background:#2d3463;border:1px solid #6c5ce7;cursor:pointer}a{color:#f5f5f5;text-decoration:none}a:hover{color:#9acd32}",""]),t.exports=e},458:function(t,e,r){"use strict";r.r(e);r(56);var o,n=r(21),c=r(44),h=r.n(c),d={name:"Post",props:["id","title"]},f=(r(434),r(41)),l=Object(f.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{attrs:{to:"/posts/"+this.id}},[e("div",{staticClass:"post"},[e("p",[this._v(this._s(this.id)+"."+this._s(this.title))])])])}),[],!1,null,null,null).exports,v=r(32),w=(r(135),r(310),{components:{Post:l},data:function(){return{posts:[]}},created:(o=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("https://jsonplaceholder.typicode.com/posts");case 3:e=t.sent,this.posts=e.data,console.log(this.posts),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])}))),function(){return o.apply(this,arguments)}),asyncData:function(t){t.req;var e=t.redirect;v.auth().currentUser||e("/Ingreso"),console.log($nuxt.$router)}}),m=Object(f.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Post")]),this._v(" "),this._l(this.posts,(function(t){return e("Post",{key:t.id,attrs:{title:t.title,id:t.id}})}))],2)}),[],!1,null,null,null);e.default=m.exports}}]);