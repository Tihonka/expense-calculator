<template>
  <table>
    <tr>
      <th>#</th>
      <th>Date</th>
      <th>Category</th>
      <th>Amount</th>
      <th></th>
    </tr>
    <tbody>
     <tr v-for="(item, index) in items" :key="index">
       <td>{{ item.id }}</td>
       <td>{{ item.date }}</td>
       <td>{{ item.category }}</td>
       <td>{{ item.amount }}</td>
       <td @click="onClickContextItem($event, item)" class="contextevent">...</td>
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
    },
    showItems: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  methods: {
    onClickContextItem (event, item) {
      const items = [
        {
          text: 'Edit',
          action: () => {
            this.$modal.show({
              title: 'Add Payment Form',
              content: 'AddPaymentForm',
              item: item
            })
          }
        },
        {
          text: 'Delete',
          action: () => { this.actionDelete(item.id) }
        }
      ]
      this.$context.show({ event, items })
    },
    actionDelete (id) {
      this.$store.commit('deleteElement', id)
      this.$context.close()
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
.contextevent {
  cursor: pointer;
}
</style>
