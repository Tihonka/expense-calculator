<template>
    <v-pagination
      :length="Math.ceil(this.paymentsList.length / 4)"
      @input="onClick"
    ></v-pagination>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Pagination',
  methods: {
    onClick (p) {
      this.$emit('paginate', p)
    }
  },
  computed: {
    ...mapGetters(['getPaymentsList']),
    paymentsList () {
      return this.$store.getters.getPaymentsList
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
