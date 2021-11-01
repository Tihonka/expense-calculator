<template>
  <v-container>
  <v-row>
    <v-col>
           <div class="text-h5 text-sm-h3">My personal costs</div>
    </v-col>
  </v-row>
    <v-row>
      <v-col>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <v-btn color="teal" dark v-on="on" @click="dialog=true">Add new cost <v-icon>mdi-plus</v-icon></v-btn>
          </template>
          <v-card>
            <AddPaymentForm />
          </v-card>
           <v-btn @click="dialog=false">Close</v-btn>
        </v-dialog>
        <PaymentsDisplay show-items :items="currentElements" />
        <div>
          <Pagination  @paginate="changePage"/>
        </div>
      </v-col>
      <v-col>
        <div>
          <h3>Costs by categories</h3>
        <DoughnutChart :dataChart="setData"></DoughnutChart>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AddPaymentForm from '../components/AddPaymentForm.vue'
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import Pagination from '../components/Pagination.vue'
import DoughnutChart from '../components/DoughnutChart.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
  components: { PaymentsDisplay, AddPaymentForm, Pagination, DoughnutChart },
  name: 'Dashboard',
  data: () => ({
    dialog: false,
    page: 1,
    n: 4
  }),
  computed: {
    ...mapGetters(['getPaymentsList']),
    paymentsList () {
      return this.$store.getters.getPaymentsList
    },
    CategoryList () {
      return this.$store.getters.getCategoryList
    },
    currentElements () {
      const { n, page } = this
      return this.paymentsList.slice(n * (page - 1), n * (page - 1) + n)
    },
    setData () {
      const data = []
      for (let i = 0; i < this.CategoryList.length; i++) {
        let sum = 0
        for (let j = 0; j < this.paymentsList.length; j++) {
          if (this.CategoryList[i] === this.paymentsList[j].category) {
            sum += this.paymentsList[j].amount
          }
        }
        data.push(sum)
      }
      console.log(data)
      return data
    }
  },
  methods: {
    ...mapMutations({
      addData: 'setPaymentsListData'
    }),
    changePage (p) {
      this.page = p
      this.$store.dispatch('fetchData', p)
    },
    addPayment () {
      this.$modal.show({ title: 'Add Payment Form', content: 'AddPaymentForm' })
    },
    created () {
      this.$store.dispatch('fetchData')
      this.$store.dispatch('fetchCategoryList')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  font-size: 32px;
  font-weight: 700;
  text-align: start;
  margin-bottom: 20px;
}
</style>
