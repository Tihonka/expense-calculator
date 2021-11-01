<script>
import { Doughnut } from 'vue-chartjs'

export default {
  name: 'DoughnutChart',
  extends: Doughnut,
  props: {
    dataChart: Array
  },
  data () {
    return {
      chartData: {
        labels: ['Food', 'Transport', 'Education', 'Sport', 'Entertainment'],
        datasets: [{
          borderWidth: 1,
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(120, 152, 70, 1)'
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(120, 152, 70, 0.2)'
          ],
          data: []
        }]
      },
      options: {
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  watch: {
    dataChart () {
      this.$data.chartData.datasets[0].data = this.dataChart
      this.$data._chart.update()
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>

<style>

</style>
