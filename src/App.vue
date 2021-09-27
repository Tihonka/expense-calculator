<template>
  <div id="app">
   <header>
     <div class="header">Мои расходы</div>
   </header>
   <main>
     <AddPaymentForm @addNewPayment ="addNewPayment" />
     <PaymentsDisplay :items="paymentsList" />
   </main>
  </div>
</template>

<script>

import AddPaymentForm from './components/AddPaymentForm.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'

export default {
  name: 'App',
  components: {
    AddPaymentForm,
    PaymentsDisplay
  },
  data: () => ({
    paymentsList: []
  }),
  methods: {
    fetchData () {
      return [
        {
          Дата: '28.03.2020',
          Категория: 'Продукты',
          Сумма: 169
        },
        {
          Дата: '24.03.2020',
          Категория: 'Транспорт',
          Сумма: 360
        },
        {
          Дата: '24.03.2020',
          Категория: 'Продукты',
          Сумма: 532
        }
      ]
    },
    addNewPayment (data) {
      this.paymentsList = [...this.paymentsList, data]
    }

  },
  created () {
    this.paymentsList = this.fetchData()
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
