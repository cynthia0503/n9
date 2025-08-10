// テキストアニメーション（遅延付き）
$(function () {
  setTimeout(() => {
    $('.txt').addClass('animate');
  }, 100);
});

// スクロール時のアニメーション
$(function () {
  $(window).on('scroll', function () {
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    $('.fade-up, .fade-down').each(function () {
      const position = $(this).offset().top;
      if (scroll > position - windowHeight + 180) {
        if ($(this).hasClass('fade-up')) {
          $(this).addClass('fadein-up-active');
        }
        if ($(this).hasClass('fade-down')) {
          $(this).addClass('fadein-down-active');
        }
      }
    });
  });
});


// offer
const swiper3 = new Swiper('.offer-slider .swiper', {
  loop: true,
  autoplay: {
    delay: 4000, // 3秒ごとに切り替え
    disableOnInteraction: false, // ユーザー操作後も自動再生を続ける
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


$(function () {
  const $btn = $('.floating-btn');
  const troubleTop = $('.float-start').offset().top;

  $(window).on('scroll', function () {
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scroll + windowHeight > troubleTop + 100) {
      $btn.addClass('visible');
    } else {
      $btn.removeClass('visible');
    }
  });

  const floatEnd = document.querySelector('.float-end');
  if (floatEnd) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $btn.addClass('hide');
        } else {
          $btn.removeClass('hide');
        }
      });
    });
    observer.observe(floatEnd);
  }
});