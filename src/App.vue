<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import home from './views/index.vue'
export default {
  name: 'App',
  components: {
    home
  }
}
</script>
<style>
* {
  margin: 0;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
</style>
