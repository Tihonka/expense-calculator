<template>
  <div id="app">
    <header class="header">
      <router-link to="/dashboard">dashboard</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/404">not found</router-link>
    </header>
    <main>
      <router-view />
    </main>
    <transition name="fade">
    <ModalWindowAddPayment v-if="modalIsShow" :settings="modalSettings"/>
    </transition>
    <transition name="fade">
      <ContextMenu />
    </transition>
  </div>
</template>

<script>
import ContextMenu from './components/ContextMenu.vue'

export default {
  name: 'App',
  components: {
    ContextMenu,
    ModalWindowAddPayment: () => import('./components/ModalWindowAddPayment.vue')
  },
  data: () => ({
    modalIsShow: false,
    modalSettings: {}
  }),
  methods: {
    onShown (settings) {
      this.modalSettings = settings
      this.modalIsShow = true
    },
    onHide () {
      this.modalIsShow = false
      this.modalSettings = {}
    }
  },
  mounted () {
    this.$modal.EventBus.$on('onShown', this.onShown)
    this.$modal.EventBus.$on('onHide', this.onHide)
  },
  created () {
    this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchCategoryList')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a:not(:last-child){
  margin-right: 40px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
