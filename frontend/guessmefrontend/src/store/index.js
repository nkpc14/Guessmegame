import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        round: 0,
        username: null
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        setRound(state, round) {
            state.round = round;
        }
    },
    actions: {
        user({commit}, username) {
            localStorage.setItem('username', username);
            commit('setUsername', username);
        },
        round({commit}, roundData) {
            localStorage.setItem('round', roundData);
            commit('setRound', roundData);
        },
        autoLoadState({commit}, {round, username}) {
            commit('setRound', round);
            commit('setUsername', username);
        }
    },
    getters: {
        username: state => {
            return state.username;
        },
        round: state => {
            return state.round;
        },
    },
    modules: {}
})
