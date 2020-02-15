import { db } from "@/plugins/firebase.js";
import firebase from "firebase/app";
import 'firebase/auth';
import axios from 'axios';


export const state = () => ({
  tareas: [],
  tarea: '',
  usuario: '',
  carga: false,
  texto: '',
  games: []


})

export const mutations = {

  setUsuario(state, payload) {
    state.usuario = payload;
  },
  setTareas(state, payload) {
    state.tareas = payload;
  },
  setTarea(state, payload) {
    state.tareas.push(payload)
  },
  deleteTarea(state, payload) {
    const index = state.tareas.findIndex(item => item.id === payload.id);
    state.tareas.splice(index, 1);
  },
  updateTarea(state, payload) {
    const index = state.tareas.findIndex(item => item.id === payload.id);
    state.tareas[index].nombre = payload.nombre;
  },
  setTareaIndividual(state, payload) {
    state.tarea = payload;
  },
  setError(state, payload) {
    state.error = payload
  },
  cargarFirebase(state, payload) {
    state.carga = payload
  },
  arrayCargar(state, payload) {
    state.texto = payload.toLowerCase()
  },
  llenar(state, value) {
    state.games = value
  }
}



export const actions = {

  nuxtServerInito({ commit }, { req }) {
    commit('cargarFirebase', true)
    const usuario = firebase.auth().currentUser
    return db.collection(usuario.email).get()
      .then(queryData => {
        const tareas = []
        queryData.forEach(doc => {
          let tarea = doc.data();
          tarea.id = doc.id;
          tareas.push(tarea)

        });
        return commit('setTareas', tareas),

          setTimeout(() => {
            commit('cargarFirebase', false)
          }, 2000);


      })

  },
  async agregarTarea({ commit }, payload) {
    try {
      const usuario = firebase.auth().currentUser
      const doc = await db.collection(usuario.email).add({
        nombre: payload,
        fecha: new Date()
      })
      commit('setTarea', { nombre: payload, id: doc.id })
    } catch (error) {
      console.log(error);
    }
  },
  eliminarTarea({ commit }, payload) {
    const usuario = firebase.auth().currentUser
    db.collection(usuario.email).doc(payload.id).delete().then(function () {
      console.log("Document successfully deleted!");
      commit('deleteTarea', payload)
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  },
  editarTarea({ commit }, payload) {
    const usuario = firebase.auth().currentUser
    db.collection(usuario.email).doc(payload.id).update({
      nombre: payload.nombre

    })
      .then(() => {
        console.log('Tarea Editada');
        commit('updateTarea', payload)
        this.app.router.push('/vuex');
      })
      .catch(e => {
        console.log(e);
      })
  },
  crearUsuario({ commit }, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.pass)
      .then(res => {
        console.log(res.user.email);
        console.log(res.user.uid);
        commit('setUsuario', { email: res.user.email, uid: res.user.uid })

        db.collection(res.user.email).add({
          nombre: 'Tarea de ejemplo'
        })
          .then(() => {
            this.app.router.push('/inicio')
          })
      })
      .catch(err => {
        console.log(err.message);
        commit('setError', err.message)
      })
  },

  cerrarSesion({ commit }) {
    firebase.auth().signOut()
    commit('setUsuario', null)
    this.app.router.push('/Ingreso')
  },
  buscador({ commit }, payload) {
    console.log(payload)
    commit('arrayCargar', state.texto = payload.toLowerCase())


  },
  async get({ commit }) {
    await axios.get('https://pula-41000.firebaseio.com/editar.json')
      .then(res => {
        commit('llenar', res.data)
      })
  }
}


export const getters = {

  arrayFiltrado(state) {
    let arregloFiltrado = []
    for (let tarea of state.tareas) {
      let nombre = tarea.nombre.toLowerCase();
      if (nombre.indexOf(state.texto) >= 0) {
        arregloFiltrado.push(tarea)
      }
    }
    return arregloFiltrado
  },




}
