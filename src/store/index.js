import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const localDB = {
  page1: [
    { id: 1, Дата: '20.03.2020', Категория: 'Продукты', Сумма: 169 },
    { id: 2, Дата: '21.03.2020', Категория: 'Транспорт', Сумма: 50 },
    { id: 3, Дата: '22.03.2020', Категория: 'Спорт', Сумма: 450 }
  ],
  page2: [
    { id: 4, Дата: '23.03.2020', Категория: 'Транспорт', Сумма: 969 },
    { id: 5, Дата: '24.03.2020', Категория: 'Спорт', Сумма: 1500 },
    { id: 6, Дата: '25.03.2020', Категория: 'Продукты', Сумма: 200 }
  ],
  page3: [
    { id: 7, Дата: '20.03.2020', Категория: 'Продукты', Сумма: 169 },
    { id: 8, Дата: '21.03.2020', Категория: 'Транспорт', Сумма: 50 },
    { id: 9, Дата: '22.03.2020', Категория: 'Спорт', Сумма: 450 }
  ],
  page4: [
    { id: 10, Дата: '23.03.2020', Категория: 'Транспорт', Сумма: 969 },
    { id: 11, Дата: '24.03.2020', Категория: 'Спорт', Сумма: 1500 },
    { id: 12, Дата: '25.03.2020', Категория: 'Продукты', Сумма: 200 }
  ]
}

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
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getCategoryList: state => state.categoryList
  },
  actions: {
    fetchData ({ commit }, page) {
      return new Promise(resolve => {
        setTimeout(() => {
          const items = localDB[`page${page}`]
          resolve(items)
        }, 1000)
      }).then(res => {
        commit('addPaymentListData', res)
      })
    },
    // fetchData ({ commit }) {
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       resolve([
    //         {
    //           Дата: '28.03.2020',
    //           Категория: 'Продукты',
    //           Сумма: 169
    //         },
    //         {
    //           Дата: '24.03.2020',
    //           Категория: 'Транспорт',
    //           Сумма: 360
    //         },
    //         {
    //           Дата: '24.03.2020',
    //           Категория: 'Продукты',
    //           Сумма: 532
    //         }
    //       ]
    //       )
    //     }, 1000)
    //   }).then(res => {
    //     commit('setPaymentsListData', res)
    //   })
    // },
    fetchCategoryList ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            'Продукты', 'Транспорт', 'Обучение', 'Спорт'
          ]
          )
        }, 1000)
      }).then(res => {
        commit('setCategoryList', res)
      })
    }
  }
})
