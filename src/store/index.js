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
    fetchUserProfile({ commit, state }) {
      fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
          commit('setUserProfile', res.data())
          console.log('commit success - fetchUserProfile() - in store')
      }).catch(err => {
        console.log('err - fetchUserProfile() - in store', err)
          console.log(err)
      })
    }
  },
  modules: {
  }
})
