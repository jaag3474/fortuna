export const state = () => ({
  frutas:[
    { nombre: 'Manzana', cantidad: 10 },
  { nombre: 'Pera', cantidad: 105 },
  { nombre: 'Sandia', cantidad: 5 },]
})

export const mutations = {
  aumentar (state,marca) {
    state.frutas[marca].cantidad++
  }
}

export const actions = {
  acciones({commit}){
    // Acciónes en vuex
  }
}
