import firebase from 'firebase/app'
/* eslint-disable */
export default {
  actions: {
    async fetchCategories({ commit, dispatch }) {
      const uid = await dispatch('getUid')
      const categories = (await firebase.database().ref(`/users/${uid}/categories`).once('value')).val() || {}
      return Object.keys(categories).map(key => ({ ...categories[key], id: key }))
    },
    async createCategory({ commit, dispatch }, { title, limit }) {
      try {
        const uid = await dispatch('getUid')
        const category = await firebase.database().ref(`/users/${uid}/categories`).push({ title, limit })
        return { title, limit, id: category.key }
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}