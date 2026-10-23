(function () {
  var caption = document.getElementById("gallery-caption");

  function updateCaption(swiper) {
    var slide = swiper.slides[swiper.activeIndex];
    if (!slide || !caption) return;
    caption.textContent = slide.getAttribute("data-title") || "";
  }

  var swiper = new Swiper(".gallery-swiper", {
    loop: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".gallery .swiper-pagination",
      clickable: true,
      uniqueNavElements: false,
      renderBullet: function (index, className) {
        var imgSrc = "img/0" + (index + 1) + ".jpg";
        return (
          '<div class="' +
          className +
          ' swiper-pagination-thumbnail"><img src="' +
          imgSrc +
          '" alt=""></div>'
        );
      },
    },
    on: {
      init: updateCaption,
      slideChange: updateCaption,
    },
  });
})();
