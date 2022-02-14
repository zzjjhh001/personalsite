<template>
  <div>
    <swiper
    class="swiper"
    :options="swiperOption"
    @swiper="onSwiper"
    @slideChange="onSlideChange">
      <swiper-slide class="swiper-item">
        <baseIntroduction>
          <slot>
            <img class="baseImg" src="../assets/imgs/1.jpg" alt="背景图">
          </slot>
        </baseIntroduction>
      </swiper-slide>
      <swiper-slide class="swiper-item">

      </swiper-slide>
      <swiper-slide class="swiper-item">3</swiper-slide>
      <swiper-slide class="swiper-item">
        <More>
          <slot>
            <img class="baseImg" src="../assets/imgs/4.jpg" alt="背景图">
          </slot>
        </More>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import baseIntroduction from './baseIntroduction.vue';
import More from './more.vue';
import { sliders, sliderOptions } from '../config/outerSwiper.js';
export default {
  components: {
    baseIntroduction,
    More
  },
  data() {
    return {
      swiperOption: {},
      backImgs: []
    }
  },
  created() {
    this.setConfig();
  },
  methods: {
    onSwiper(e) {
      console.log(e)
    },
    setConfig() {
      this.backImgs = sliders || [];
      this.swiperOption = sliderOptions || {};
    },
    onSlideChange(e) {
      console.log(e)
      console.log('pnSlideChange')
    }
  }
}
</script>
<style  lang='scss' scoped>
.swiper {
  transform: none;
  .swiper-item {
    position: relative;
    width: 100%;
    overflow: hidden;
    .baseImg {
      position: relative;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 8;
    }
  }
  .swiper-pagination {
    right: 20px;
    top: 30px;
    position: absolute;
    .swiper-pagination-bullet {
      width: 14px;
      height: 14px;
      margin: 24px auto !important;
      background-color: aliceblue;
    }
    .swiper-pagination-bullet::after {
      width: 6px;
      height: 6px;
      content: '';
      border-radius: 50%;
      background: #337ab7;
      display: block;
      position: absolute;
      left: 50%;
      margin-left: -3px;
      top: 50%;
      margin-top: -3px;
    }
    .swiper-pagination-bullet-active {
      width: 20px;
      height: 20px;
      transition: box-shadow 1s;
    }
    .swiper-pagination-bullet-active::after {
      width: 10px;
      height: 10px;
      content: '';
      border-radius: 50%;
      background: #337ab7;
      display: block;
      position: absolute;
      left: 50%;
      margin-left: -5px;
      top: 50%;
      margin-top: -5px;
    }
  }
}
</style>
