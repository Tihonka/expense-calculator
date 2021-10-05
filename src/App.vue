<template>
  <div id="app">
   <header>
     <div class="header">Мои расходы</div>
   </header>
   <main>
     <AddPaymentForm @addNewPayment ="addNewPayment" :categoryList="CategoryList" />
     <PaymentsDisplay :items="currentElements" />
     <Pagination :cur="page" :n="n" :length="12" @paginate="changePage" />
   </main>
  </div>
</template>

<script>

import AddPaymentForm from './components/AddPaymentForm.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import Pagination from './components/Pagination.vue'

export default {
  name: 'App',
  components: {
    AddPaymentForm,
    PaymentsDisplay,
    Pagination
  },
  data: () => ({
    page: 1,
    n: 3
  }),
  computed: {
    paymentsList () {
      return this.$store.getters.getPaymentsList
    },
    CategoryList () {
      return this.$store.getters.getCategoryList
    },
    currentElements () {
      const { n, page } = this
      return this.paymentsList.slice(n * (page - 1), n * (page - 1) + n)
    }
  },
  methods: {
    addNewPayment (data) {
      this.$store.commit('addDataToPaymentsList', data)
    },
    changePage (p) {
      this.page = p
      this.$store.dispatch('fetchData', p)
    }
  },
  created () {
    this.$store.dispatch('fetchData', 1)
    this.$store.dispatch('fetchCategoryList')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  font-size: 32px;
  font-weight: 700;
  text-align: start;
  margin-bottom: 20px;
}
</style>
