<template>
  <div class="personal">
    <Menu class="menu" ></Menu>
    <Title class="title" ></Title>
    <Main  class="main"/>
  </div>
</template>
<script>
import Menu from '../components/menu.vue';
import Title from '../components/title.vue';
import Main from '../components/main.vue';
export default {
  mname: 'personal',
  components: {
    Menu,
    Title,
    Main
  }
}
</script>
<style  lang='scss' scoped>
.personal {
  .menu {
    position: absolute;
    top: 100px;
    right: 100px;
    z-index: 10;
  }
  .title {
    position: absolute;
    top: 100px;
    left: 100px;
    z-index: 10;
  }
  .main {
    width: 100%;
    height: 100%;
  }
}
</style>
