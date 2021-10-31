<template>
  <div class="pagination">
      <div @click="onClick(cur - 1)" class="page">-</div>
      <div class="page" v-for="i in amount" :key="i" :class="{active: cur === 1}" @click="onClick(i)">
        {{ i }}
      </div>
      <div @click="onClick (cur + 1)" class="page">+</div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    n: Number,
    cur: Number,
    length: Number
  },
  methods: {
    onClick (p) {
      if (p < 1 || p > this.amount) {
        return
      }
      this.$emit('paginate', p)
    }
  },
  computed: {
    amount () {
      return Math.ceil(this.length / this.n)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
    margin-left: 80px;
    display: flex;
}

.page:active {
    background-color: lightpink;
}

.page{
    padding: 10px;
    cursor: pointer;
}
</style>
