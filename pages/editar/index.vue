<template>
    <div>
        <h1>{{$route.params.id}}</h1>
        <Form boton="Editar juego" @submit="editarJuego" :game="game" @eliminar="eliminar($route.params.id)"/>
    </div>
</template>

<script>
import Form from '@/components/Form.vue'
import axios from 'axios'
export default {
    name:'index',
    components:{
        Form
    },
    asyncData(context) {
        return axios.get('https://pula-41000.firebaseio.com/editar' + context.params.id + '.json')
        .then(res => {
            return {
                game:res.data
            }
        })
    },
    methods: {
        editarJuego(form){
            axios.put('https://pula-41000.firebaseio.com/editar' + this.$route.params.id + '.json', form)
            .then(res => console.log(res))
            .catch(e => console.log(e))
            this.$router.push('/editar')
        },
        eliminar(index){
            axios.delete('https://pula-41000.firebaseio.com/editar' + index + '.json')
            .then(res => console.log(res))
            .catch(e => console.log(e))
            this.$router.push('/')
        }
    },
}
</script>
