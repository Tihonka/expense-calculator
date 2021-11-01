<template>
  <v-app>
    <v-app-bar app flat color="teal">
      <v-btn to="/dashboard" :ripple="false" plain>Dashboard</v-btn>
      <v-btn to="about" :ripple="false" plain>About</v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  created () {
    this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchCategoryList')
  }
}
</script>
