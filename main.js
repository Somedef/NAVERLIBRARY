$(document).ready(function () {
  $(".gnb li").on("mouseover focusin", function () {
    $(this).children("ul").stop().fadeIn(300);
  });
  $(".gnb li").on("mouseleave", function () {
    $(this).children("ul").stop().fadeOut(200);
  });
  $(".gnb").on("mouseover focusin", function () {
    $(".bg_gnb").stop().fadeIn(300);
  });
  $(".gnb").on("mouseleave focusout", function () {
    $(".bg_gnb").stop().fadeOut(200);
  });
  //1뎁스 메뉴에서 키보드 초점이 벗어나면 ul이 없어지는 작용을 한다.
  $(".gnb > li").on("focusout", function () {
    $(this).children("ul").stop().fadeOut(200);
  });
});

$(".sec1").vegas({
  slides: [
    { src: "img/도서관6.png", delay: 10000 },
    { src: "img/도서관8.png", delay: 10000 },
    { src: "img/도서관1.png", delay: 10000 },
  ],
  animation: ["kenburnsDownLeft", "kenburnsUpLeft", "kenburnsUp"],
});

$(".pic").vegas({
  slides: [
    { src: "img/tab1.jpg", delay: 8000 },
    { src: "img/tab2.jpg", delay: 8000 },
    { src: "img/tab3.jpg", delay: 8000 },
    { src: "img/tab4.jpg", delay: 8000 },
    { src: "img/tab5.jpg", delay: 8000 },
  ],
  animation: ["kenburnsDownLeft", "kenburnsUpLeft", "kenburnsUp"],
});
// 베가스

// Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $("header").outerHeight();

// $(window).scroll(function (event) {
//   didScroll = true;
// });

// setInterval(function () {
//   if (didScroll) {
//     hasScrolled();
//     didScroll = false;
//   }
// }, 250);

// function hasScrolled() {
//   var st = $(this).scrollTop();

//   // Make sure they scroll more than delta
//   if (Math.abs(lastScrollTop - st) <= delta) return;

//   // If they scrolled down and are past the navbar, add class .nav-up.
//   // This is necessary so you never see what is "behind" the navbar.
//   if (st > lastScrollTop && st > navbarHeight) {
//     // Scroll Down
//     $("header").removeClass("nav-down").addClass("nav-up");
//   } else {
//     // Scroll Up
//     if (st + $(window).height() < $(document).height()) {
//       $("header").removeClass("nav-up").addClass("nav-down");
//     }
//   }

//   lastScrollTop = st;
// }
// // 헤더 나오기

$(function () {
  $(".tabcontent > div").hide();
  $(".tabnav a")
    .click(function () {
      $(".tabcontent > div").hide().filter(this.hash).fadeIn();
      $(".tabnav a").removeClass("active");
      $(this).addClass("active");
      return false;
    })
    .filter(":eq(0)")
    .click();
});
// 탭메뉴

$(document).ready(function () {
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});

$(document).ready(function () {
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 3,
  speed: 500,
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".secondSwiper", {
  speed: 700,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  direction: "horizontal",
  loop: true,
  loopAdditionalSlides: 1,
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-spagination",
    clickable: true,
  },
});
