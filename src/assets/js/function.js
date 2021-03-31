

$(document).ready(function () {

  $(".auth-field-control").blur(function () {
    let inputValue = $(this).val();
    if (inputValue && inputValue.toString().length > 0) {
      $(this).parent('.auth-form-field').addClass('isActive');
    } else {
      $(this).parent('.auth-form-field').removeClass('isActive');
    }
  });

  $('#vs-slider').bxSlider({
    pager: false,
    auto: true,
    mode: 'fade',
    speed: 1000,
    controls: false
  });

  $('#mgtCatSlider').bxSlider({
    auto: true,
    autoControls: true,
    speed: 500,
    minSlides: 1,
    maxSlides: 9,
    moveSlides: 1,
    slideWidth: 120,
    slideMargin: 10,
    auto: false,
    autoControls: true,
    hideControlOnEnd: $(window).width() > 1200,
    infiniteLoop: false
  });

  $('#testiSlider').bxSlider({
    auto: true,
    autoControls: true,
    speed: 500,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    auto: true,
    autoControls: true
  });

  $(window).scroll(function () {
    let checkoutscroll = $(window).scrollTop();
    let headerHeight = $(".app-header").height();
    if (checkoutscroll >= (headerHeight + 30)) {
      $(".app-header").addClass("isFixed");
    } else {
      $(".app-header").removeClass("isFixed");
    }

  });

  $(".nav-link").click(function () {
    $(".nav-link").removeClass("isActive");
    $(this).addClass("isActive");

    if ($(window).width() < 768) {
      $(".nav-list").removeClass("isOpen");
      $(".app-header").removeClass("isOpen");
    }
  })

  $(".menuicon").click(function () {
    $(".nav-list").toggleClass("isOpen");
    $(".app-header").toggleClass("isOpen");
  });

  $(".mobileClose").click(function () {
    $(".nav-list").removeClass("isOpen");
    $(".app-header").removeClass("isOpen");
  });


  $('.account-profile').click(function (event) {
    $('.account-profile-box').toggleClass('isOpen');
    event.stopPropagation();
  });


  $('body').click(function (event) {
    if (event.target.offsetParent.id !== 'dropdown-account') {
      $('.account-profile-box').removeClass('isOpen')
    }
  });
});

