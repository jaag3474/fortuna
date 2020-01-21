<template>
  <h1>La pagina principal</h1>
</template>

<script>
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
      ],
      htmlAttrs: {
        lang: "en"
      }
    };
  }
};
</script>

<style>
</style>
