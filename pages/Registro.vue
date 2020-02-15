<template>
 <div class="contact-wrapper animated bounceInUp">
      <div class="contact-form">
        <h3>Contact us</h3>
        <form @submit.prevent="crearUsuario({email:email, pass: contrasena})">
          <p>
            <label>FullName</label>
            <input type="text" name="fullname" v-model="fullname" />
          </p>
          <p>
            <label>Email Adress</label>
            <input type="email" name="email" v-model="email" />
          </p>
          <p>
            <label>CYTY</label>
            <input type="tel" name="phone" v-model="phone" />
          </p>
          <p>
            <label>PLZ</label>
            <input type="text" name="PLZ" v-model="PLZ" />
          </p>
          <p class="block">
            <label>Adress</label>
            <textarea name="adress" rows="3" v-model="adress"></textarea>
          </p>
          <p class="block">
            <label>Contrasena</label>
            <textarea name="contrasena" rows="3" v-model="contrasena"></textarea>
          </p>
          <p class="block">
            <label>Confirmar contrasena</label>
            <textarea name="confirmar_contrasena" rows="3" v-model="confirmar_contrasena"></textarea>
          </p>
          <p class="block">
            <button type="submit" :disabled="!desactivar">SignUp</button>
          </p>
        </form>
      </div>
      <div class="contact-info">
        <h4>More Info</h4>
        <ul>
          <li>
            <i class="fas fa-map-marker-alt"></i> Baker Street
          </li>
          <li>
            <i class="fas fa-phone"></i> (111) 111 111 111
          </li>
          <li>
            <i class="fas fa-envelope-open-text"></i> contact@website.com
          </li>
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
        <p>Company.com</p>
      </div>
      {{ error }}
    </div>
</template>

<script>

import { mapActions,mapState } from "vuex";

export default {
  name: 'Registro',
  data(){
    return{
      fullname: "",
      email: "",
      phone: "",
      PLZ: "",
      adress: "",
      contrasena: "",
      confirmar_contrasena: ""
    }
  },
  methods:{
    ...mapActions(['crearUsuario'])
  },
  computed:{
    ...mapState(['error']),
    desactivar(){
      return this.pass1 === this.pass2 && this.pass1 != ''
    }
  }
}
</script>
