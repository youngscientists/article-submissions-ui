import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    currentPage: 0
}
export default new Vuex.Store({
    state,
    mutations: {
        setCurrentPage(state, page) {
            state.currentPage = page
        }
    }
})