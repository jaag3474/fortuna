(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{467:function(e,t,n){"use strict";n.r(t);n(15);var o=n(32),r=n.n(o),l=(n(136),{name:"Ingreso",data:function(){return{email:"",pass:""}},methods:{pressed:function(){var e=this;r.a.auth().signInWithEmailAndPassword(this.email,this.pass).then((function(data){console.log(data),e.$router.replace({name:"inicio"})}))}}}),m=n(42),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{staticClass:"form-box animated fadeInUp",on:{submit:function(t){return t.preventDefault(),e.pressed(t)}}},[n("h1",{staticClass:"form-title"},[e._v("SignIn")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Username or Email",autofocus:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.pass},on:{input:function(t){t.target.composing||(e.pass=t.target.value)}}}),e._v(" "),n("button",{attrs:{type:"submit"}},[e._v("Login")])])])}),[],!1,null,null,null);t.default=component.exports}}]);