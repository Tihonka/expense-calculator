<template>
  <div>
      About
      <button @click="openModalAuth">openAuth</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    openModalAuth () {
      this.$modal.show({ title: 'Auth', content: 'Auth' })
    }
  }
}
</script>

<style>

</style>
