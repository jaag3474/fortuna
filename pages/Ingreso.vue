<template>
  <div>
    <form @submit.prevent="pressed" class="form-box animated fadeInUp">
      <h1 class="form-title">SignIn</h1>
      <input type="text" placeholder="Username or Email" autofocus v-model="email" />
      <input type="password" placeholder="Password" v-model="pass" />
      <button type="submit">Login</button>
    </form>
    
  </div>
</template>

<script>

import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Ingreso",
  data() {
    return {
      email: "",
      pass: "",
  
    
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.pass)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "inicio" });
          
        })
     },
   
  },
 
};
</script>

<style>
</style>
