import { createStore } from 'vuex'

export default createStore({
    state: {
        collected: false
    },
    mutations: {
        toggleMenu: state => {
            if (state.collected == false) {
                state.collected = true
            } else {
                state.collected = false
            }
        }
    },
    getters: {
        collected: state => state.collected
    },
    actions: {
        toggleMenu: ({ commit }) => commit('toggleMenu')
    },
    modules: {}
})