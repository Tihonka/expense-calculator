<template>
  <div>
    <!-- <header>
     <div class="header">Мои расходы</div>
    </header> -->
     <PaymentsDisplay show-items :items="currentElements" />
     <Pagination :cur="page" :n="n" :length="paymentsList.length" @paginate="changePage" />
     <button @click="addPayment">Add Payment</button>
  </div>
</template>

<script>
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import Pagination from '../components/Pagination.vue'

export default {
  components: { PaymentsDisplay, Pagination },
  name: 'Dashboard',
  data: () => ({
    page: 1,
    n: 10
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
    changePage (p) {
      this.page = p
      this.$store.dispatch('fetchData', p)
    },
    addPayment () {
      this.$modal.show({ title: 'Add Payment Form', content: 'AddPaymentForm' })
    },
    async created () {
      await this.$store.dispatch('fetchData', 1)
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
