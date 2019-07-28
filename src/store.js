import Vue from 'vue'
import Vuex from 'vuex'
import data from './data.js'

Vue.use(Vuex)

const state = {
    currentPage: 0,
    isLastPage: false,
    submitForm: false,
    pages: []
}

const actions = {
    nextPage({
        commit,
        state
    }) {
        if (state.pages[state.currentPage].completed) {
            if (state.isLastPage) {
                commit('goToNextPage')
            } else {
                console.log('do submit')
            }
        }
    }
}

const mutations = {
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
    },
    pages(state, pages) {
        Vue.set(state, 'pages', pages);
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})