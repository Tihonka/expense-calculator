<template>
<v-card class="text-left pa-8">
  <v-text-field v-model="date" label="Date" />
  <v-select v-model="category" label="Category" :items="categoryList" />
  <v-text-field v-model="amount" label="Amount" />
  <v-btn @click="onSaveClick">Save</v-btn>
</v-card>
</template>
<script>
export default {
  props: {
    settings: Object,
    item: Object
  },
  name: 'AddPaymentForm',
  data () {
    if (!this.item) {
      return {
        date: '',
        category: '',
        amount: '',
        id: 6
      }
    } else {
      return {
        date: this.item.date,
        category: this.item.category,
        amount: this.item.amount,
        id: this.item.id
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
      if (!this.item) {
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
    addNewPayment (data) {
      this.$store.commit('addDataToPaymentsList', data)
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
