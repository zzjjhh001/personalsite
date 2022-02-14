const path = require('path')
const baseUrl = '../assets/imgs';

// 暂时不用
export const sliders=[
  {
    Url: '../assets/imgs/1.jpg'
  },
  {
    Url: path.join(baseUrl, '2.jpg')
  },
  {
    Url: path.join(baseUrl, '3.jpg')
  },
  {
    Url: path.join(baseUrl, '4.jpg')
  },
  {
    Url: path.join(baseUrl, '5.jpg')
  },
  {
    Url: path.join(baseUrl, '6.jpg')
  }
];
export const sliderOptions = { // 轮播图配置
  direction: 'vertical', // horizontal:水平 vertical:垂直
  loop: false, // 是否无缝滚动
  interval: 0, // 自动播放时间间隔，为0则不自动播放
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  }, // 是否需要分页器
  mousewheel: true,
  observer: true,//修改swiper自己或子元素时，自动初始化swiper
  observeParents: true,
  speed: 300,
  height: window.innerHeight
};
