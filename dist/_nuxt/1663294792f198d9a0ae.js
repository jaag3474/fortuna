(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{310:function(t,e,r){"use strict";r(311),r(314)},348:function(t,e,r){var content=r(416);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("4934b8b2",content,!0,{sourceMap:!1})},415:function(t,e,r){"use strict";var n=r(348);r.n(n).a},416:function(t,e,r){(e=r(18)(!1)).push([t.i,".agregarButton{border-bottom-color:#00f;border-bottom-right-radius:5%;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;color:#00f}.agregarNombre,.agregarStock{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;color:brown}",""]),t.exports=e},455:function(t,e,r){"use strict";r.r(e);r(66),r(3),r(2),r(44),r(6),r(1),r(5);var n=r(0),o=r(74),l=r(4);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}l.default.config.productionTip=!1;var v={name:"Lista",computed:d({},Object(o.e)(["frutas"]),{arrayOrdena:function(){return this.frutas.sort((function(a,b){return b.cantidad-a.cantidad}))}}),methods:d({},Object(o.d)(["aumentar","reiniciar"]))},m=r(41),f=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",t._l(t.frutas,(function(e,n){return r("li",{key:e.id,staticClass:"list-group-item d-flex justify-content-between align-items-center agregarNombre",on:{click:function(e){return t.aumentar(n)}}},[t._v("\n      "+t._s(e.nombre)+"\n      "),r("span",{staticClass:"badge badge-primary badge-pill"},[t._v(t._s(e.cantidad))])])})),0),t._v(" "),r("button",{staticClass:"btn btn-danger btn-block",on:{click:t.reiniciar}},[t._v("Reiniciar")]),t._v(" "),r("div")])}),[],!1,null,null,null).exports,_=(r(46),{}),y=Object(m.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:"Card Title","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[this._v("\n      Some quick example text to build on the card title and make up the bulk of the card's content.\n    ")]),this._v(" "),e("b-button",{attrs:{href:"#",variant:"primary"}},[this._v("Go somewhere")])],1)],1)}),[],!1,null,null,null).exports,h=r(32);r(135),r(310);l.default.config.productionTip=!1;var x={name:"index",components:{Lista:f,cart:y},data:function(){return{fondo:"bg-info",titulo:" hola como va el ejemplo",Models:[{nombre:"coche",cantidad:10},{nombre:"moto",cantidad:8},{nombre:"bicicleta",cantidad:5}],newModel:"",totaL:0}},methods:{agregarModel:function(){this.Models.push({nombre:this.newModel,cantidad:0}),this.newModel="",console.log(this.Models.push),console.log(Date.now())}},computed:{sumarModels:function(){this.total=0;var t=!0,e=!1,r=void 0;try{for(var n,o=this.Models[Symbol.iterator]();!(t=(n=o.next()).done);t=!0)this.Model=n.value,this.total=this.total+this.Model.cantidad}catch(t){e=!0,r=t}finally{try{t||null==o.return||o.return()}finally{if(e)throw r}}return this.total},color:function(){return{"bg-success":this.sumarModels<=10,"bg-warning":this.sumarModels>10&&this.sumarModels<50,"bg-danger":this.sumarModels>=50}}},asyncData:function(t){t.req;var e=t.redirect;h.auth().currentUser||e("/Ingreso"),console.log($nuxt.$router)}},w=(r(415),r(88)),C=r.n(w),M=r(333),O=r(308),k=r(417),j=r(418),P=Object(m.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["p-4","text-blue",t.fondo]},[r("h1",[t._v(t._s(t.titulo))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newModel,expression:"newModel"}],staticClass:"agregarNombre",attrs:{type:"text"},domProps:{value:t.newModel},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.agregarModel(e)},input:function(e){e.target.composing||(t.newModel=e.target.value)}}}),t._v(" "),r("button",{staticClass:"agregarButton",on:{click:t.agregarModel}},[t._v("Agregar")]),t._v(" "),r("ul",t._l(t.Models,(function(e){return r("li",{key:e.id},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.cantidad,expression:"Model.cantidad",modifiers:{number:!0}}],staticClass:"agregarStock",attrs:{type:"number"},domProps:{value:e.cantidad},on:{input:function(r){r.target.composing||t.$set(e,"cantidad",t._n(r.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v("\n        "+t._s(e.nombre)+"\n        "),r("button",{staticClass:"btn btn-danger",on:{click:function(t){e.cantidad++}}},[t._v("+")]),t._v(" "),r("button",{staticClass:"btn btn-warning",on:{click:function(t){e.cantidad--}}},[t._v("-")]),t._v(" "),0===e.cantidad?r("span",[t._v("- Sin Stock")]):t._e()])})),0),t._v(" "),r("h4",[t._v("TOTAL : "+t._s(t.sumarModels))]),t._v(" "),r("div",{staticClass:"progress"},[r("div",{staticClass:"progress-bar",class:t.color,style:{width:t.sumarModels+"%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(t._s(t.sumarModels)+"%")])]),t._v(" "),r("br"),t._v(" "),r("div",{attrs:{id:"index"}},[r("Lista")],1),t._v(" "),r("cart"),t._v(" "),r("v-app",[r("div",[r("v-row",{attrs:{align:"center"}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"4"}},[r("div",{staticClass:"my-2"},[r("v-btn",{attrs:{text:"",small:""}},[t._v("Normal")])],1),t._v(" "),r("div",{staticClass:"my-2"},[r("v-btn",{attrs:{text:"",small:"",color:"primary"}},[t._v("Primary")])],1),t._v(" "),r("div",{staticClass:"my-2"},[r("v-btn",{attrs:{text:"",small:"",color:"error"}},[t._v("Error")])],1),t._v(" "),r("div",{staticClass:"my-2"},[r("v-btn",{attrs:{text:"",small:"",disabled:""}},[t._v("Disabled")])],1)]),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"4"}},[r("div",{staticClass:"my-2"},[r("v-btn",{attrs:{text:""}},[t._v("Normal")])],1),t._v(" "),r("div",{staticClass:"my-2"},[r("v-btn",{attrs:{text:"",color:"primary"}},[t._v("Primary")])],1),t._v(" "),r("div",{staticClass:"my-2"},[r("v-btn",{attrs:{text:"",color:"error"}},[t._v("Error")])],1),t._v(" "),r("div",{staticClass:"my-2"},[r("v-btn",{attrs:{text:"",disabled:""}},[t._v("Disabled")])],1)]),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"4"}},[r("div",{staticClass:"my-2"},[r("v-btn",{attrs:{text:"",large:""}},[t._v("Normal")])],1),t._v(" "),r("div",{staticClass:"my-2"},[r("v-btn",{attrs:{text:"",large:"",color:"primary"}},[t._v("Primary")])],1),t._v(" "),r("div",{staticClass:"my-2"},[r("v-btn",{attrs:{text:"",large:"",color:"error"}},[t._v("Error")])],1),t._v(" "),r("div",{staticClass:"my-2"},[r("v-btn",{attrs:{text:"",large:"",disabled:""}},[t._v("Disabled")])],1)])],1)],1)])],1)}),[],!1,null,null,null);e.default=P.exports;C()(P,{VApp:M.a,VBtn:O.a,VCol:k.a,VRow:j.a})}}]);