import Vue from 'vue'
import Vuex from 'vuex'
import http from 'axios'

const API = 'http://localhost:3000/api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    crafts: [],
    materials: [],
    user: {},
    search: {},
  },
  mutations: {
    crafts(state, payload) {
      state.crafts = payload;
    },
    materials(state, payload) {
      state.materials = payload;
    },
    user(state, payload) {
      state.user = payload;
    },
    search(state, payload) {
      state.search = payload;
    },
  },
  actions: {
    async materials({commit}, user={}) {
      if (user.id) {
        const {data} = await http.get(`${API}/users/${user.id}/materials`);
        commit('materials', data || []);
        return true;
      }

      const {data} = await http.get(`${API}/materials`);
      commit('materials', data || []);
    },

    async crafts({commit}, user={}) {
      if (user.id) {
        const {data} = await http.get(`${API}/users/${user.id}/materials`);
        commit('materials', data || []);
        return true;
      }

      const {data} = await http.get(`${API}/crafts`);
      commit('crafts', data || []);
    },

    async login({commit}, payload) {
      const {data} = await http.post(`${API}/session`, payload);
      commit('user', data || {});
      return data;
    },

    async userCreate({commit}, payload) {
      const {data} = await http.post(`${API}/users`, payload);
      commit('user', data || {});
      return data;
    },

    async search({commit}, query) {
      const {data} = await http.get(`${API}/search/${query}`);
      commit('search', data || {});
      return data;
    },

    async materialCreate({dispatch}, material) {
      await http.post(`${API}/materials`, material);
      dispatch('materials');
    },

    async craftCreate({dispatch}, craft) {
      await http.post(`${API}/crafts`, craft);
      dispatch('crafts');
    },
  }
});

export default store;
