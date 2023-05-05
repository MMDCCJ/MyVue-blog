<template>
  <div id="app">
    <B_Header/>
  </div>
</template>

<script>
import B_Header from './components/Blog-Header.vue'

export default {
  name: 'App',
  components: {
    B_Header
  },
  data() {
    return {
      radio: '1'
    }
  }
}
</script>

<style>
#app {
  
}
</style>
