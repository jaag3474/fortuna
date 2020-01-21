import axios from 'axios';

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
  </div>
</template>

<script>
import VueCompositionApi from "@vue/composition-api";
import Lista from "../../components/Lista";
import Vue from "vue";
import { db } from "@/plugins/firebase.js";
Vue.config.productionTip = false;
export default {
 /* fetch({ store }) {
    return db
      .collection("Nuxt-pruebas")
      .get()
      .then(query => {
        const pruebas = [];
        query.forEach(element => {
          pruebas.push(element.data());
        });
        store.commit("setTareas", Nuxt-pruebas);
      })
      .catch(function(error) {
        console.log("error getting documents: ", error);
      });
  },*/
  name: "index",
  components: {
    Lista
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
  }
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
