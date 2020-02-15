<template id="Lista" >
  <div >
    <ul>
      <li
      v-for="(item, marca) of  frutas"
      class="list-group-item d-flex justify-content-between align-items-center agregarNombre"
      :key="item.id" @click="aumentar(marca)"
    >
      {{item.nombre}}
      <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
    </li>
    </ul>
    <button class="btn btn-danger btn-block" @click="reiniciar">Reiniciar</button>
<div>

</div>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex';
import Vue from 'vue';
Vue.config.productionTip =false
export default {
  name: 'Lista',
  computed: {
    ...mapState(['frutas']),
    arrayOrdena(){
      return this.frutas.sort((a ,b)=>b.cantidad - a.cantidad)
    }
  },
  methods:{
    ...mapMutations(['aumentar','reiniciar'])
  }
}
</script>

<style>

</style>


