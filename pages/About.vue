<template>
  <div>
    <h1>About</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, tenetur minus nemo nostrum praesentium laborum quia, ullam fugiat, odit doloribus iure iusto. Id quia fugit natus ipsam eaque, laudantium voluptas?</p>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { getUserFromCookie, getUserFromSession } from '@/helpers'


export default {
  head() {
    return {
      title: "La pagina principal Vue | Home",
      meta: [
        {
          hid: "esto es describir",
          name: "description",
          content: " Esta pagina sirve de prueba"
        }
      ]
    };
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
};
</script>

<style>
</style>
