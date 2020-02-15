import axios from 'axios'

export default function ({store}) {
    axios.get('https://pula-41000.firebaseio.com/editar.json')
    .then(res => {
        store.commit('llenar', res.data)
    })
}