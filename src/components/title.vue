<template>
  <div class="title">
    <img src="../assets/imgs/tx2.png" class="tx" alt="头像"/>
    <img src="../assets/imgs/tb.png" class='pshows' alt="pshows图标"/>
  </div>
</template>
<script>
export default {}
</script>
<style  lang='scss' scoped>
.title {
  top: 30px;
  left: 50px;
  background-color: rgba(255,255,255,0.4);
  border-radius: 10px;
  border: rgba(255,255,255,0.7) 1px solid;
  box-shadow: 0 0 10px rgba($color: black, $alpha: 0.5);
  cursor: pointer;
  .tx {
    margin-top: 0px;
    margin-left: 10px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.5);
  }
}
</style>
