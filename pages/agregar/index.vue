<template>
    <div>
        <h1>Guardar juego</h1>
        <Form boton="Guardar juego" @submit="guardarJuego" />
    </div>
</template>

<script>
import Form from '@/components/Form.vue'
import axios from 'axios'
export default {
    components:{
        Form
    },
    methods: {
        guardarJuego(form){
            axios.post('https://pula-41000.firebaseio.com/editar.json', form)
            .then(res => console.log(res))
            .catch(e => console.log(e))
            this.$router.push('/')
        }
    },
}
</script>