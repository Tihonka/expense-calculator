<template>
  <div class="form">
      <div class="wrapper">
    <button class="addCost" @click="show = !show">Добавить расходы</button>
    </div>
     <form action="#" v-show="show">
         <input placeholder="Сумма" v-model="amount" />
         <input placeholder="Категория" v-model="type" />
         <input placeholder="Дата" v-model="date" />
         <button class= "add" @click= "onSaveClick">Сохранить</button>
     </form>
  </div>
</template>
<script>
export default {
  name: 'AddPaymentForm',
  data () {
    return {
      Дата: '',
      Категория: '',
      Сумма: '',
      show: false
    }
  },
  methods: {
    onSaveClick () {
      const data = {
        Дата: this.date || this.getCurrentDate,
        Категория: this.type,
        Сумма: +this.amount
      }
      this.$emit('addNewPayment', data)
    }
  },
  computed: {
    getCurrentDate () {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  }
}
</script>
<style scoped lang="scss">
form{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
}

input {
    width: 200px;
    padding: 8px;
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
