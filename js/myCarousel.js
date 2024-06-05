var swiper = new Swiper('.swiper-container', {
    loop: true, // 循环播放
    autoplay: {
      delay: 4000, // 自动播放间隔时间（单位为毫秒）
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // 设置分页器是否可点击
      uniqueNavElements: false,
      renderBullet: function (index, className) {
        // var slide = swiper.slides.eq(index);
        // var imgSrc = slide.find('img').attr('src');
        var imgSrc = "img/0" + (index + 1) + ".jpg";
        return '<div class="' + className + ' swiper-pagination-thumbnail"><img src="' + imgSrc + '" alt=""></div>';
      },

    },
    on: {
      slideChange: function () {
        // 监听轮播图变化事件
        var activeSlide = this.slides[this.activeIndex];
        var slideName = activeSlide.querySelector('.slide-name').textContent;
        document.getElementById('current-slide-name').textContent = slideName;
      },
    }
  });