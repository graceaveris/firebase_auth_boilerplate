import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('../firebaseConfig.js')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: {}
  },
  mutations: {
      setCurrentUser(state, val) {
      state.currentUser = val
    },
      setUserProfile(state, val) {
      state.userProfile = val
    }
  },

  actions: {
    // we use 'once' to fetch simple data thats not going to change
    fetchUserProfile({ commit, state }) {
      fb.db.ref(`/users/${state.currentUser.uid}`).once('value').then(res => {
          commit('setUserProfile', res.val())
      }).catch(err => {
        console.log(err)
      })
    }
  },
  
  modules: {
  }
})
