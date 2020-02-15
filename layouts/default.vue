<template>
<div>
 
<Navigation/>

  <div class="content">
    <nuxt />

  </div>
  <Footer/>
  </div>
</template>
<script>

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


export default {
  components:{
    Navigation, Footer
   
    }
}

</script>
<style>
* {
  padding: 3px;
  box-sizing:border-box;
  color: whitesmoke;
}

body {
  background: #2d3436;
  color: whitesmoke;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding-top: 0;
}
.content {
  padding: 2rem;
}
</style>
