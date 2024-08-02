<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div v-if="loading">
    <div v-if="dataFetched">
      {{ fetchedData }}
    </div>
    <div v-else>
      <HelloWorld />
    </div>
  </div>
  <div v-else>
    <h2>Loading...</h2>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      dataFetched: false,
      loading: true,
      fetchedData: null
    }
  },
  async mounted() {
    try {
      const data = await window.ghl.getUserData();
      this.fetchedData = data
      this.dataFetched = true
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
    this.loading = false
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
