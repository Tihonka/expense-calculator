<template>
  <div class="form">
      <div class="wrapper">
    </div>
     <form action="#" v-show="show">
         <input placeholder="Amount" v-model="amount" />
         <select v-model="category">
          <option v-for="option in categoryList" :key="option">
            {{ option }}
          </option>
         </select>
         <input placeholder="Date" v-model="date" />
         <router-link to="/dashboard/add/payment/Sport?value=400">
      Sport-400</router-link>
      <router-link to="/dashboard/add/payment/Education?value=500">
      Education-500</router-link>
      <router-link to="/dashboard/add/payment/Transport?value=600">
      Transport-600</router-link>
         <button class= "add" @click= "onSaveClick">Save</button>
     </form>
  </div>
</template>
<script>
export default {
  props: {
    settings: Object
  },
  name: 'AddPaymentForm',
  data () {
    if (!this.settings) {
      return {
        date: '',
        category: '',
        amount: '',
        id: 3,
        show: true
      }
    } else {
      return {
        date: this.settings.date,
        category: this.settings.category,
        amount: this.settings.amount,
        id: this.settings.id,
        show: true
      }
    }
  },
  watch: {
    $route (to, from) {
      if (to.name === 'AddPaymentFromUrl') {
        this.checkUrl()
      }
    }
  },
  computed: {
    categoryList () {
      return this.$store.getters.getCategoryList
    },
    getCurrentDate () {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },
  methods: {
    onSaveClick () {
      if (!this.settings) {
        const data = {
          date: this.date || this.getCurrentDate,
          category: this.category,
          amount: +this.amount,
          id: this.id + 1
        }
        this.id = this.id + 1
        this.addNewPayment(data)
      } else {
        const data = {
          date: this.date,
          category: this.category,
          amount: +this.amount,
          id: this.id
        }
        this.$store.commit('editElement', data)
      }
    },
    checkUrl () {
      this.amount = this.$route.query.value || ''
      this.category = this.$route.params.category || ''
      this.date = this.date || this.getCurrentDate
    },
    addNewPayment (data) {
      this.$store.commit('addDataToPaymentsList', data)
    },
    created () {
      if (this.data) {
        const { amount, category } = this.data
        this.category = category || ''
        this.amount = Number(amount) || 0
      }
    }
  }
}
</script>
<style scoped lang="scss">
form{
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 10px;
    margin-bottom: 20px;
}

input {
    width: 200px;
    padding: 8px;
}

select {
    width: 220px;
    padding: 8px 0;
}

.add {
    width: 100px;
    padding: 8px;
    background-color: lightsalmon;
}

.addCost{
    width: 150px;
    padding: 15px;
    background-color: palevioletred;
  }

  .wrapper{
    text-align: left;
    margin-bottom: 15px;
  }
</style>
