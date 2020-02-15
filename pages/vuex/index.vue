<template>
  <div class="container">
    <h2>Vuex tareas Lista</h2>

    <form @submit.prevent="agregarTarea(tarea)">
      <input type="text" class="form-control mb-2" v-model="tarea" />
      <b-button variant="success" type="submit">Agregar</b-button>
    </form>
    <form @submit.prevent="buscador(texto)">
      <input type="test" placeholder="suchen..." class="form-control mt-5" v-model="texto" v-on:keyup="buscador(texto)" />
    </form>
    <div v-if="carga">Cargando contenido...</div>

    <ul class="list-group mt-5" v-if="!carga">
      <li v-for="item of arrayFiltrado" :key="item.id">
        {{item.id}} - {{item.nombre}}
        <b-button class="btn-sm btn-warning" :to="`/vuex/${item.id}`">Editar</b-button>
        <b-button class="btn-sm btn-danger" @click="eliminarTarea(item)">Eliminar</b-button>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/pulseLoader.vue";
import { db } from "@/plugins/firebase.js";
import { mapState, mapActions, mapGetters } from "vuex";
import * as firebase from "firebase/app";
import "firebase/auth";
import { getUserFromCookie, getUserFromSession } from "@/helpers";

export default {
  // fetch({store}){
  //   return db.collection('tareas').get()
  //     .then(query => {
  //       const tareas = []
  //       query.forEach(element => {
  //         tareas.push(element.data())
  //       });
  //       return store.commit('setTareas', tareas)
  //     })
  //     .catch(function(error) {
  //       console.log("Error getting documents: ", error);
  //     });
  // }
  name: "index",

  computed: {
    ...mapState(["tareas", "usuario", "carga","arrayCargar"]),
    ...mapGetters(['arrayFiltrado'])
  },
  methods: {
    ...mapActions(["agregarTarea", "eliminarTarea","buscador"])
  },
  asyncData({ req, redirect }) {
    if (process.server) {
      // console.log('server', req.headers)
      const user = getUserFromCookie(req);
      console.log("b", getUserFromCookie(req));
      if (!user) {
        console.log("redirecting server");
        redirect("/Ingreso");
      }
    } else {
      var user = firebase.auth().currentUser;
      if (!user) {
        redirect("/Ingreso");
      }
      console.log($nuxt.$router);
    }
  },
  data() {
    return {
      tarea: "",
      texto: ''
    };
  }
}
</script>
