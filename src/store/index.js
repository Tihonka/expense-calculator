import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    paymentsListIds: [],
    categoryList: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    addDataToPaymentsList (state, payload) {
      state.paymentsList.push(payload)
    },
    setCategoryList (state, payload) {
      state.categoryList = payload
    },
    addPaymentListData (state, payload) {
      const newUniqObjs = payload.filter(obj => {
        return state.paymentsListIds.indexOf(obj.id) < 0
      })
      const uniqIds = newUniqObjs.map(obj => obj.id)
      state.paymentsListIds.push(...uniqIds)
      state.paymentsList.push(...newUniqObjs)
    },
    deleteElement (state, payload) {
      state.paymentsList.splice(payload, 1)
    },
    editElement (state, payload) {
      const filteredList = state.paymentsList.find(item => item.id === payload.id)
      const Position = state.paymentsList.indexOf(filteredList)
      state.paymentsList.splice(Position, 1, payload)
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getCategoryList: state => state.categoryList
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              date: '28.03.2020',
              category: 'Food',
              amount: 169
            },
            {
              id: 2,
              date: '24.03.2020',
              category: 'Transport',
              amount: 360
            },
            {
              id: 3,
              date: '24.03.2020',
              category: 'Food',
              amount: 532
            }
          ]
          )
        }, 1000)
      }).then(res => {
        commit('setPaymentsListData', res)
      })
    },
    fetchCategoryList ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            'Food', 'Transport', 'Education', 'Sport', 'Entertainment'
          ]
          )
        }, 1000)
      }).then(res => {
        commit('setCategoryList', res)
      })
    }
  }
})
