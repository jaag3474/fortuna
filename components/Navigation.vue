import { mapActions } from 'vuex';
<template>
  <div>
    <v-card class="mx-auto" max-width="100%">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://firebasestorage.googleapis.com/v0/b/pula-41000.appspot.com/o/atomhousing.png?alt=media&token=684ae37b-517b-4e33-934e-f55d53c0c1f2"
      ></v-img>
      <vue-typed-js  :strings="['John', 'James']">
        <h1>
          Hey
          <span class="typing "></span>
        </h1>
      </vue-typed-js>
    </v-card>

    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-navbar-brand to="/inicio">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/Curs">Curs</b-nav-item>
          <b-nav-item to="/logout" @click="cerrarSesion">Logout</b-nav-item>
          <b-nav-item to="/vuex">Vuex</b-nav-item>
          <b-nav-item to="/agregar">Kontakt</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button pill variant="warning" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          <b-nav-form class="ml-auto">
            <b-form-input v-model="text" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          </b-nav-form>&nbsp&
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item to="/App">hOME</b-dropdown-item>
            <b-dropdown-item to="/blog">Blog</b-dropdown-item>
            <b-dropdown-item to="/Curs">Curs</b-dropdown-item>
            <b-dropdown-item to="/vuex">Vuex</b-dropdown-item>
            <b-dropdown-item to="/posts">Posts</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item to="/Ingreso">Sign In</b-dropdown-item>
            <b-dropdown-item to="/Registro">Registrarse</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Vue from "vue";
import VueTypedJs from "vue-typed-js";
import {  getEventHandlers } from '../assets/js/configuracion-typed.js'
Vue.use(VueTypedJs);

export default {
  name: "Navigation",

  methods: {
    ...mapActions(["cerrarSesion"])
  },
  data() {
    return {
      text: "",

    };
  }
};
</script>

<style>
</style>
