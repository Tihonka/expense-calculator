<template>
<div class="wrapper">
  <div class="overlay"></div>
    <div class="header">{{ title }}</div>
    <div class="content">
      <component :is="settings.settings.content" :settings="settings.settings.item" />
      <div class="footer">
        <button @click="onCloseClick">Close</button>
      </div>
    </div>
</div>
</template>

<script>

export default {
  components: {
    AddPaymentForm: () => import('./AddPaymentForm.vue'),
    Auth: () => import('./Auth.vue')
  },
  props: {
    settings: Object
  },
  name: 'ModalWindowAddPayment',
  methods: {
    onCloseClick () {
      this.$modal.hide()
    }
  },
  computed: {
    title () {
      return this.settings.settings.title || 'Modal Window'
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  border: 1px solid red;
  position: absolute;
  top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  width: 100%;
  height: 100%;
  & .overlay {
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(68, 61, 61, 0.5);
  }
  & .content {
    position: relative;
    z-index: 100;
  }
}
</style>
