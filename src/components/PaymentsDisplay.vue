<template>
<v-simple-table>
<template  v-slot:default>
  <thead>
    <tr>
      <th class="text-left">#</th>
      <th class="text-left">Date</th>
      <th class="text-left">Category</th>
      <th class="text-left">Amount</th>
      <th class="text-left"></th>
    </tr>
  </thead>
    <tbody>
     <tr v-for="(item, index) in items" :key="item.id">
       <td>{{ item.id }}</td>
       <td>{{ item.date }}</td>
       <td>{{ item.category }}</td>
       <td>{{ item.amount }}</td>
       <td>
       <v-dialog v-model="dialog[index]" width="500" :retain-focus="false">
        <template  v-slot:activator="{ on }">
      <v-icon
        small
        class="mr-2"
        v-on="on"
      >
        mdi-pencil
      </v-icon>
       </template>
       <v-card>
            <AddPaymentForm :item="item" />
        </v-card>
        <v-btn @click="dialog[index]=false">Close</v-btn>
       </v-dialog>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
       </td>
      </tr>
    </tbody>
  </template>
</v-simple-table>
</template>

<script>
import AddPaymentForm from '../components/AddPaymentForm.vue'
export default {
  components: { AddPaymentForm },
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
      dialog: {}
    }
  },
  methods: {
    deleteItem (item) {
      this.$store.commit('deleteElement', item.id)
    }
  }
  //   onClickContextItem (event, item) {
  //     const items = [
  //       {
  //         text: 'Edit',
  //         action: () => {
  //           this.$modal.show({
  //             title: 'Add Payment Form',
  //             content: 'AddPaymentForm',
  //             item: item
  //           })
  //         }
  //       },
  //       {
  //         text: 'Delete',
  //         action: () => { this.actionDelete(item.id) }
  //       }
  //     ]
  //     this.$context.show({ event, items })
  //   },
  //   actionDelete (id) {
  //     this.$store.commit('deleteElement', id)
  //     this.$context.close()
  //   }
  // }
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
