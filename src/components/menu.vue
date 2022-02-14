<template>
  <div class="menu">
    <img src="../assets/imgs/nav.png" class="nav-img" alt="菜单"/>
  </div>
</template>
<script>
export default {}
</script>
<style  lang='scss' scoped>
.menu {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.2);
  transition: background-color 0.5s;
  box-shadow: 0 3px 0 rgba($color: #000000, $alpha: 0.4);
  &:hover{
    background-color:#337ab7;
    cursor: pointer;
  }
  .nav-img {
    margin-left: 9px;
    margin-top: 10px;
    width: 40px;
    height: 40px;
  }
}
</style>
