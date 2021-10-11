<template>
  <div>
    <!-- <header>
     <div class="header">Мои расходы</div>
    </header> -->
     <AddPaymentForm @addNewPayment ="addNewPayment" :categoryList="CategoryList" />
     <PaymentsDisplay :items="paymentsList" />
     <Pagination :cur="page" :n="n" :length="paymentsList.length" @paginate="changePage" />
  </div>
</template>

<script>
import AddPaymentForm from '../components/AddPaymentForm.vue'
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import Pagination from '../components/Pagination.vue'

export default {
  components: { AddPaymentForm, PaymentsDisplay, Pagination },
  name: 'Dashboard',
  data: () => ({
    page: 1,
    n: 5
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
    },
    async created () {
      await this.$store.dispatch('fetchData')
      await this.$store.dispatch('fetchCategoryList')
      if (this.$route.name === 'AddPaymentFromUrl') {
        this.checkUrl()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  font-size: 32px;
  font-weight: 700;
  text-align: start;
  margin-bottom: 20px;
}
</style>
