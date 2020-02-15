


<template>

  <div class="card">


  <h2>{{post.title}}</h2>
  <p>User: {{ post.userId }} </p>
  <p>Id: {{post.id}}</p>
  <p> Content: {{post.body}}</p>


  </div>
</template>

<script>
import axios from 'axios';
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { getUserFromCookie, getUserFromSession } from '@/helpers'



export default {
  data(){
    return{
      post:{}
    }
  },
  async created(){
   const res =  await axios.get('https://jsonplaceholder.typicode.com/posts/'+ this.$route.params.id)
   this.post =res.data;
    console.log(res)
  },
   asyncData({ req, redirect }) {
    if (process.server) {
      // console.log('server', req.headers)
      const user = getUserFromCookie(req)
         console.log('b', getUserFromCookie(req))
      if (!user) {
        console.log('redirecting server')
        redirect('/Ingreso')
      }
    } else {
      var user = firebase.auth().currentUser
      if (!user) {
        redirect('/Ingreso')
      }
         console.log($nuxt.$router)
    }
  },

}
</script>

<style>
.card {
  background: #2D3436;
  border: 1px solid whitesmoke;
  padding: 4rem;
}

</style>

