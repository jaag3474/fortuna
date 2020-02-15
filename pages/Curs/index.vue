

<template>
  <div :class="['p-4','text-blue', fondo]">
    <h1>{{titulo}}</h1>
    <input class="agregarNombre" type="text" v-model="newModel" @keyup.enter="agregarModel" />

    <button @click="agregarModel" class="agregarButton">Agregar</button>
    <ul>
      <li v-for="Model of Models" v-bind:key="Model.id">
        <input class="agregarStock" type="number" v-model.number="Model.cantidad" />
        {{Model.nombre}}
        <button class="btn btn-danger" @click="Model.cantidad++">+</button>
        <button class="btn btn-warning" @click="Model.cantidad--">-</button>
        <span v-if="Model.cantidad === 0">- Sin Stock</span>
      </li>
    </ul>

    <h4>TOTAL : {{sumarModels}}</h4>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{'width': sumarModels+'%'}"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
        :class="color"
      >{{ sumarModels }}%</div>
    </div>
    <br />
    <div id="index">
      <Lista></Lista>
    </div>


<cart></cart>
 <v-app>
 <div>
  
<v-row align="center">
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn text small>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn text small color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn text small color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn text small disabled>Disabled</v-btn>
      </div>
    </v-col>

    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn text>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn text color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn text color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn text disabled>Disabled</v-btn>
      </div>
    </v-col>

    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn text large>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn text large color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn text large color="error">Error</v-btn>
      </div>
      <div class="my-2">
        <v-btn text large disabled>Disabled</v-btn>
      </div>
    </v-col>
  </v-row>
  </div>
 </v-app>
  </div>
  
</template>

<script>
import axios from 'axios';
import Lista from "../../components/Lista";
import Vue from "vue";
import { db } from "@/plugins/firebase.js";
import cart from "@/components/cart";
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { getUserFromCookie, getUserFromSession } from '@/helpers'
import vuetify from 'vuetify'

Vue.config.productionTip = false;
export default {
 /* fetch({ store }) {
    return db
      .collection("prueba")
      .get()
      .then(query => {
        const prueba = [];
        query.forEach(element => {
          pruebas.push(element.data());
        });
        store.commit("setTareas", prueba);
      })
      .catch(function(error) {
        console.log("error getting documents: ", error);
      });
  },*/
  name: "index",
  components: {
    Lista, cart
  },

  data() {
    return {
      fondo: "bg-info",
      titulo: " hola como va el ejemplo",
      Models: [
        { nombre: "coche", cantidad: 10 },
        { nombre: "moto", cantidad: 8 },
        { nombre: "bicicleta", cantidad: 5 }
      ],

      newModel: "",
      totaL: 0
    };
  },
  methods: {
    agregarModel() {
      this.Models.push({
        nombre: this.newModel,
        cantidad: 0
      });
      this.newModel = "";

      console.log(this.Models.push);
      console.log(Date.now());
    }
  },
  computed: {
    sumarModels() {
      this.total = 0;
      for (this.Model of this.Models) {
        this.total = this.total + this.Model.cantidad;
      }
      return this.total;
    },
    color() {
      return {
        "bg-success": this.sumarModels <= 10,
        "bg-warning": this.sumarModels > 10 && this.sumarModels < 50,
        "bg-danger": this.sumarModels >= 50
      };
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
.agregarButton {
  border-bottom-color: blue;
  border-bottom-right-radius: 5%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: blue;
}
.agregarNombre {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: brown;
}
.agregarStock {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: brown;
}
</style>
