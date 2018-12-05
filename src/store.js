import Vue from 'vue'
import Vuex from 'vuex'
import data from './data.js'

Vue.use(Vuex)

const state = {
    currentPage: 0,
    isLastPage: false,
    submitForm: false
}
export default new Vuex.Store({
    state,
    mutations: {
        setCurrentPage(state, page) {
            state.currentPage = page
        },
        goToNextPage(state) {
            if (state.currentPage + 1 >= data.length) {
                state.isFinalPage = true
            } else {
                state.isFinalPage = false; 
                state.currentPage++
            }
        },
        submitForm(state) {
            state.submitForm = !state.submitForm
        }
    }
})