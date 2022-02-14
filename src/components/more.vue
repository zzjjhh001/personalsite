<template>
  <div>
    <slot></slot>
    <div class="c-six">
      <div class="c-six-mianban">
        <div class="c-six-mianban-one">
          <span>CONTACT</span>
          <span>FOR</span>
          <span>ME</span>
        </div>
        <div class="c-six-mianban-two">
          <span>灵感</span>
          <span>代码</span>
          <span>梦想</span>
          <span>未来</span>
        </div>
          <div class="c-six-mianban-three">
            <p>学习是一个充实愉悦的过程</p>
            <p>喜欢尝试，期待新鲜事物</p>
            <p>前端即兴趣，兴趣即未来</p>
            <p>行路有良友，便是捷径</p>
            <p>期待有机会与你认识</p>
          </div>
          <div class="c-six-mianban-four">
            <a class="c-six-mianban-four-a" href="https://github.com/zzjjhh001" target="_block" >
              <img src="../assets/imgs/github.png" alt="github">
              <div class="c-six-mianban-four-wz">github</div>
            </a >
            <a class="c-six-mianban-four-a">
              <img src="../assets/imgs/weixin.png" alt="微信">
              <div class="c-six-mianban-four-ma ">
                <img src="../assets/imgs/wxt.png" alt="" />
              </div>
            </a>
            <a class="c-six-mianban-four-a">
              <img src="../assets/imgs/qq.png" alt="qq">
              <div class="c-six-mianban-four-ma">
                <img src="../assets/imgs/qqt.png" alt="" />
              </div>
            </a>
            <a class="c-six-mianban-four-a">
              <img src="../assets/imgs/yx.png" alt="邮箱">
              <div class="c-six-mianban-four-wz c-six-mianban-four-wz1">jhzzzu@163.com</div>
            </a>
          </div>
          <div class="c-six-mianban-five">
          </div>
          <div class="c-six-mianban-six">
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    
  }
}
</script>
<style  lang='scss' scoped>
.c-six{
  width: 500px;
  height: 450px;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-54%,-50%);
  z-index: 9;
  animation: fadeIn 2s;
  .c-six-mianban{
    text-align: center;
    .c-six-mianban-one{
      border-bottom: 1px rgb(231, 199, 110) solid;
      font-weight: 700;
      font-size: 45px;
      display: inline-block;
      padding: 40px 20px 0 0;
      & span:nth-child(1){
        color: yellow;
      }
      & span:nth-child(2){
          color: white;
      }
      & span:nth-child(3){
          color: white;
      }
    }
    .c-six-mianban-two {
      margin: 20px auto;
      font-size: 25px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 300;
      & span:nth-child(1){
        color: rgb(238, 119, 64);
        padding: 10px;
        font-weight: 900;
      }
      & span:nth-child(2){
        color: rgb(131, 224, 69);
        padding: 10px;
        font-weight: 900;
      }
      & span:nth-child(3){
        color: rgb(64, 154, 238);
        padding: 10px;
        font-weight: 900;
      }
      & span:nth-child(4){
        color: rgb(231, 199, 110);
        padding: 10px;
        font-weight: 900;
      }
    }
    .c-six-mianban-three{
      p{
        color: white;
        font-weight: 500;
        line-height: 35px;
      }
    }
    .c-six-mianban-four{
      width: 100%;
      margin: 20px auto;
      a {
        margin: 4px;
        position: relative;
        display: inline-block;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 50%;
        background-color: rgba($color: #000000, $alpha: 0.5);
        cursor: pointer;
        img{
          position: absolute;
          width: 20px;
          height: 20px;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
        .c-six-mianban-four-ma{
          display: block;
          opacity: 0;
          position: absolute;
          bottom: 150%;
          left: -45px;
          background-color: red;
          width: 120px;
          height: 120px;
          border: rgba($color: #06bef7, $alpha: 1) 2px solid;
          border-radius: 5px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .c-six-mianban-four-wz {
          display: block;
          opacity: 0;
          position: absolute;
          text-align: center;
          bottom: 120%;
          left: -12px;
          font-size: 15px;
          background-color: rgb(131, 224, 69);
          border-radius: 10px;
          padding: 20%;
        }
        .c-six-mianban-four-wz1{
          left: -35px;
        }
      }
      .c-six-mianban-four-a:hover{
        transition: all 1s;
        background-color: rgba($color: #0767f7, $alpha: 1);
        & .c-six-mianban-four-ma{
          opacity: 1;
          transition: all 1s;
        }
        & .c-six-mianban-four-wz{
          opacity: 1;
          transition: all 1s;
        }
      }
    }
    .c-six-mianban-five{
      height: 30px;
      border-bottom: yellow 8px solid;
      border-left: yellow 8px solid;
      border-right: yellow 8px solid;
    }
    .c-six-mianban-six{
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 70px;
      color: yellow;
      border-right: yellow 8px solid;
      border-top: yellow 8px solid;
    }
  }
}
@keyframes fadeIn {
  from {
    transform: translate(-60%,-50%);
  }
  to {
    transform: translate(-54%,-50%);
  }
}
</style>
