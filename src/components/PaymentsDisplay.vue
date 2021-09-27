<template>
  <table>
    <tr>
      <th>#</th>
      <th>Дата</th>
      <th>Категория</th>
      <th>Сумма</th>
    </tr>
    <tbody>
     <tr v-for="(item, index) in items" :key="index">
       <td>{{index + 1}}</td>
       <td>{{ item.Дата }}</td>
       <td>{{ item.Категория }}</td>
       <td>{{ item.Сумма }}</td>
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
