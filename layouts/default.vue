<template>
<div>
<Navigation/>
  <div class="content">
    <nuxt />

  </div>
  </div>
</template>
<script>

import Navigation from "../components/Navigation";

export default {
  components:{
    Navigation
    }
}

</script>
<style>
* {
  box-sizing: border-box;
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
