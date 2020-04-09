import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('../firebaseConfig.js')

Vue.use(Vuex)

// handle page reload (reoading the page is going to empty our store. This resets the data in this instance!
fb.auth.onAuthStateChanged(user => {
  if (user) {
      store.commit('setCurrentUser', user)
      store.dispatch('fetchUserProfile')
      //listener
      fb.db.ref(`/users/${user.uid}`).on('value', function(snapshot) {
        console.log('snap:', snapshot)
        store.commit('setUserProfile', snapshot.val())
      })
  }
})

export const store = new Vuex.Store({
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
    // clear data on logout
    clearData({ commit }) {
      commit('setCurrentUser', null)
      commit('setUserProfile', {})

  },
    // we use 'once' to fetch simple data thats not going to change
    fetchUserProfile({ commit, state }) {
      fb.db.ref(`/users/${state.currentUser.uid}`).once('value').then(res => {
          commit('setUserProfile', res.val())
      }).catch(err => {
        console.log(err)
      })
    },

    updateProfile({ state, commit }, data) {
      //here is where we need the snapshot to listen for update isn the db!
      let name = data.name
      let email = data.email
      fb.db.ref(`/users/${state.currentUser.uid}`).update({ name, email }).then(user => {
        commit('setUserProfile', { name, email })
        console.log('user:', user)
      }).catch(err => {
          console.log(err)
      })
    }
  },

  modules: {
  }
})


