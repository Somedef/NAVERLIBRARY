AOS.init({
  disable: function () {
    var desktop = 1024;
    return window.innerWidth < desktop;
  },
});
// 에이오에스

$(document).ready(function () {
  $(".gnb li").on("mouseover focusin", function () {
    $(this).children("ul").stop().fadeIn(200);
  });
  $(".gnb li").on("mouseleave", function () {
    $(this).children("ul").stop().fadeOut(200);
  });
  //1뎁스 메뉴에서 키보드 초점이 벗어나면 ul이 없어지는 작용을 한다.
  $(".gnb > li").on("focusout", function () {
    $(this).children("ul").stop().fadeOut(200);
  });
});
// 헤더

var didScroll;
var lastScrollTop = 0;
var delta = 5; // 동작의 구현이 시작되는 위치
var navbarHeight = $("header").outerHeight(); // 영향을 받을 요소를 선택

// 스크롤시에 사용자가 스크롤했다는 것을 알림
$(window).scroll(function (event) {
  didScroll = true;
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

// 동작을 구현
function hasScrolled() {
  // 접근하기 쉽게 현재 스크롤의 위치를 저장한다.
  var st = $(this).scrollTop();

  // 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
  if (Math.abs(lastScrollTop - st) <= delta) {
    return;
  }

  // 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }

  // lastScrollTop 에 현재 스크롤위치를 지정한다.
  lastScrollTop = st;
}

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 0) {
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
});
// 헤더

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
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    681: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
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
    681: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
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

$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    $(".go-top").fadeIn();
  } else {
    $(".go-top").fadeOut();
  }
});
$(".go-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 400);
  return false;
});
// 탑버튼

$(".hamburger,header.active .hamburger").click(function () {
  $(".modal").fadeIn(150);
});

$(".modal>.right>img:nth-child(4)").click(function () {
  $(".modal").fadeOut(150);
});
// 모달

var swiper = new Swiper(".thirdSwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1500,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

alert(
  "잠시 수정 및 보완중에 있으며 곧 마무리 될 예정입니다 참고해서 봐주시면 감사하겠습니다! 😲😲"
);
