var $jq = jQuery.noConflict();

$jq(document).ready(function () {

  $.easing.easeOutBounce = function (x, t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
      return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
      return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    } else if (t < (2.5 / 2.75)) {
      return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
  };

  $('a').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1700, 'easeOutBounce');
    return false;
  });

  $(window).scroll(function () {
    var slide = document.querySelector('.slide_title');
    var scrT = $(window).scrollTop();
    if (scrT >= 650 && scrT <= 1800) {
      slide.style.left = 0;
    } else {
      slide.style.left = '-800px';
    }
  });

  $(window).scroll(function () {
    var slide = document.querySelector('.slide_window');
    var scrT = $(window).scrollTop();
    if (scrT >= 650 && scrT <= 1800) {
      // slide.style.display = 물어보기;
      slide.style.right = 0;
    } else {
      slide.style.right = '-1000px';
    }
  });

  $('header h1').click(function () {
    $('.popup').fadeIn(400);
  })
  $('.close_btn').click(function () {
    $('.popup').fadeOut(500);
  });
})

// var slide_2 = 0;

// setInterval(function () {

//   if (slide_2 < 2) {
//     slide_2++;

//   } else {
//     slide_2 = 0;
//   }
//   $('.slide_2 > div').removeClass('active')
//   $('.slide_2 > div').eq(slide_2).addClass('active')
// }, 4000)

// $('.arrow_1 ul li:first_child').click(function () {
//   (this).find('.slide_2 div');

// })

var slide_2 = 2;
setInterval(function(){
  if(slide_2 == 1){
    $('.slide_2 img').eq(0).fadeIn();
    $('.slide_2 img').eq(1).fadeOut();
    $('.slide_2 img').eq(2).fadeOut();
    slide_2++;
  } else if(slide_2 == 2){
    $('.slide_2 img').eq(1).fadeIn();
    $('.slide_2 img').eq(0).fadeOut();
    $('.slide_2 img').eq(2).fadeOut();
    slide_2++;
  } else {
    $('.slide_2 img').eq(0).fadeOut();
    $('.slide_2 img').eq(1).fadeOut();
    $('.slide_2 img').eq(2).fadeIn();
    slide_2 = 1;
  }
}, 3000);


$('.slide_3').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [{
          breakpoint: 768,
          settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
          }
      },
      {
          breakpoint: 480,
          settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
          }
      }
  ]
});