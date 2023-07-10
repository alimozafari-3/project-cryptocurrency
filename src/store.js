import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      datamarket: {}
    },
    getters: {
      Getdatamarket(state) {
        return state.datamarket;
      }
    },
  
    mutations: {
      Setdatamarket(state, ismark) {
        state.datamarket = ismark;
      }
    },
  
    actions: {
      dataserverfrom(context) {
        Vue.http
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
          )
          .then(respons => {
          console.log(respons);
            context.commit("Setdatamarket",respons.body)
  
          });
      }
    },
  
  });