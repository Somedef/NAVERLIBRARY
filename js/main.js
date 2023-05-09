AOS.init();

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
// 헤더

$(".sec1").vegas({
  slides: [
    { src: "img/도서관6.png", delay: 10000 },
    { src: "img/도서관8.png", delay: 10000 },
    { src: "img/도서관1.png", delay: 10000 },
  ],
  animation: ["kenburnsDownLeft", "kenburnsUpLeft", "kenburnsUp"],
});
// main 베가스

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
// 베가스 this is us

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
// 탭메뉴 this is us

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
// 도서 슬라이드 탭

var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 3,
  speed: 500,
  spaceBetween: 50,
  loopAdditionalSlides: 1,
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
// 도서 스와이퍼

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
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    501: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: ".swiper-spagination",
    clickable: true,
  },
});
// .sec5 슬라이드

function FaqBox__init() {
  $(".faq-box > ul > li").click(function () {
    let $this = $(this);

    $this.siblings(".hover").find(" > .faq-box__answer").stop().slideUp(300);
    $this.siblings(".hover").removeClass("hover");

    if ($this.hasClass("hover")) {
      $this.find(" > .faq-box__answer").stop().slideUp(300);
      $this.removeClass("hover");
    } else {
      $this.find(" > .faq-box__answer").stop().slideDown(300);
      $this.addClass("hover");
    }
  });

  $(".faq-box__answer").click(function () {
    return false;
  });
}

FaqBox__init();

var map = new naver.maps.Map("map", {
  center: new naver.maps.LatLng(37.359371, 127.105147),
  zoom: 15,
});

var marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.359371, 127.105147),
  map: map,
});
// 네이버지도

$(document).on("click", 'a[href="#"]', function (e) {
  e.preventDefault();
});
// 탑이동방지
