<template>
  <table>
    <tr>
      <th>#</th>
      <th>Date</th>
      <th>Category</th>
      <th>Amount</th>
    </tr>
    <tbody>
     <tr v-for="(item, index) in items" :key="index">
       <td>{{ item.id }}</td>
       <td>{{ item.date }}</td>
       <td>{{ item.category }}</td>
       <td>{{ item.amount }}</td>
      </tr>
    </tbody>
  </table>

</template>

<script>
export default {
  name: 'PaymentsDisplay',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang='scss'>
table {
  border-collapse: collapse;
}
th, td {
  border-bottom: 2px solid lightgray;
  padding: 15px;
}
</style>
