import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import routeMock from '../api-mock'

// axios mock method
const mock = new MockAdapter(axios)



mock.onGet("/api/products").reply(200, {
  ...routeMock[0].response.data
})

mock.onGet("/api/cart").reply(200, {
  ...routeMock[3].response.data
})

const res = routeMock[1]
mock['on' + res.method](res.url).reply(res.status, {
  ...res.response.data
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: {},
    products: [],
    carts: [],
    shipping: {},
    payment: {}
  },
  mutations: {
    setProduct(state, value) {
      state.product = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setCart(state, value) {
      state.carts = value;
    }
  },
  actions: {
    getProducts({ commit }) {
      axios.get("/api/products").then(function (response) {
        commit('setProducts', response.data)
      });
    },
    getProduct({ commit }, param) {
      axios.get("/api/products/" + param.id).then(function (response) {
        commit('setProduct', response.data)
      });
    },
    getCart({ commit }) {
      axios.get("/api/cart").then((response) => {
        commit('setCart', response.data)
      })
    },
    deleteItem({ commit, getters }, param) {
      const newCarts = []
      for (const i in getters.carts) {
        if (getters.carts[i].id !== param) {
          newCarts.push(getters.carts[i])
        }
      }
      commit('setCart', newCarts)
    }
  },
  getters: {
    products: state => state.products,
    cart: state => state.carts
  }

})
