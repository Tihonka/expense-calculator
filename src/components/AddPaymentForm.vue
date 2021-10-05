<template>
  <div class="form">
      <div class="wrapper">
    <button class="addCost" @click="show = !show">Добавить расходы</button>
    </div>
     <form action="#" v-show="show">
         <input placeholder="Сумма" v-model="Сумма" />
         <select v-model="Категория">
          <option v-for="option in categoryList" :key="option">
            {{ option }}
          </option>
         </select>
         <input placeholder="Дата" v-model="Дата" />
         <button class= "add" @click= "onSaveClick">Сохранить</button>
     </form>
  </div>
</template>
<script>
export default {
  name: 'AddPaymentForm',
  props: {
    categoryList: {
      type: Array,
      default: () => []
    }
  },
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
        Дата: this.Дата || this.getCurrentDate,
        Категория: this.Категория,
        Сумма: +this.Сумма
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
