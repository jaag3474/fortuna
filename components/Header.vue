<template>
  <div>
    <v-card class="mx-auto" max-width="100%"    
      :elevation="n - 2"
                     >
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://firebasestorage.googleapis.com/v0/b/pula-41000.appspot.com/o/atomhousing.png?alt=media&token=684ae37b-517b-4e33-934e-f55d53c0c1f2"
      >
    
      </v-img>
    </v-card>

    <b-navbar toggleable="md" type="dark" variant="success">
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
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

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

export default {
  name: "Navigation",

  methods: {
    ...mapActions(["cerrarSesion"])
  }
};
</script>
d
<style>
.header {
  background: #2c3e50;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  border-bottom: 1px solid #2ecc71;
}
.header ul {
  display: flex;
  list-style: none;
}
.header a {
  color: #ffffff;
  background: #2d3426;
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
  text-transform: uppercase;
}
.header a:hover {
  background: #2c3e50;
  border-bottom: 1px solid #bdc3c7;
}
</style>
