<template>
  <div>
    <h1>Post</h1>
    <Post
     v-for="post of posts"
     :key="post.id"
     :title="post.title"
     :id="post.id"

     />
  </div>
</template>

<script>
import axios from "axios";
import Post from "../../components/Post";
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { getUserFromCookie, getUserFromSession } from '@/helpers'


export default {
  components: {
       Post
  },
  data() {
    return {
      posts: []
    }
  },
  async created() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      this.posts = res.data;
      console.log(this.posts)
    } catch (error) {

      console.log(error);

    }
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
