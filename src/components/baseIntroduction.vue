<template>
  <div>
    <slot/>
    <div class="c-mianban"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
      @mousemove="mousemove"
      ref="mianban" >
        <div class="msg" v-for='item in msgs' :key="item">{{item}}</div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msgs: [
        'Hello,我是赵京辉',
        'life does not get easier,you just get stronger',
        '一名准大四毕业生',
        '未来的前端工程师'
      ]
    }
  },
  methods: {
    mouseenter() {

    },
    mouseleave() {

    },
    mousemove() {

    }
  }
}
</script>
<style  lang='scss' scoped>
.c-mianban {
  position: absolute;
  width: 500px;
  height: 500px;
  top: 50%;
  left: 50%;
  margin: -250px 0 0 -250px;
  background-color: rgba(255, 255, 255, 0);
  z-index: 9;
  border-radius: 10px;
  transition: box-shadow 1s;
  text-align: center;
  padding: 50px 20px;
  &:hover {
    transition: all  1s;
    box-shadow: 0 0 50px black;
    background-color: rgba(218, 202, 218, 0.1);
  }
  .msg {
    font-size: 24px;
    line-height: 50px;
    margin: 20px;
  }
}
</style>
