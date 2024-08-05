<template>
  <div class="hello">
    <h1>Connect Your GoHighLevel account:</h1>
    <p>
      <a
        :href="oAuth_url">Choose
        location</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      oAuth_url: `https://marketplace.gohighlevel.com/oauth/chooselocation?response_type=code&client_id=${process.env.VUE_APP_GHL_APP_CLIENT_ID}&redirect_uri=${process.env.VUE_APP_DEPLOYED_URI || "http://localhost:3000"}/authorize-handler&scope=users.readonly`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
