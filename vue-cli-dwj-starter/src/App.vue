<template>
  <div id="app">
    <Hello :greeting = "greeting"/>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  name: 'app',
  data() {
    return {
      greeting: 'Hello world'
    }
  },
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
