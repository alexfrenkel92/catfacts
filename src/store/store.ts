import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import state from "./state";
import * as mutations from './mutations';
import * as actions from './actions';

export const store = new Vuex.Store({
    state,
    mutations,
    actions
})


// export type State = { catfacts: any };

// export const store = new Vuex.Store({
//     state: {
//         catfacts: []
//     },
//     mutations: {
//         FETCH_CATFACTS(state: any, catfacts: any) {
//             state.catfacts = catfacts;
//         }
//     },
//     actions: {
//         fetchCatfacts({ commit }) {
//             axios.get('https://cat-fact.herokuapp.com/facts')
//                 .then(response => {
//                     commit('FETCH_CATFACTS', response.data)
//                 })
//         }
//     },
//     modules: {
//     },
//   });