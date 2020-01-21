
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
  }

}
</script>

<style>
.card {
  background: #2D3436;
  border: 1px solid whitesmoke;
  padding: 4rem;
}

</style>

