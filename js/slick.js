$(function () {
  $(".b-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".b-gallery-list-left",
    nextArrow: ".b-gallery-list-right",
  });
});

$(function () {
  $(".b-why-lists").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    cssEase: "linear",
    prevArrow: ".b-why-list-left",
    nextArrow: ".b-why-list-right",
  });
});
$(function () {
  $(".b-why-listss").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    centerMode: true,
    cssEase: "linear",
    prevArrow: ".b-why-list-left",
    nextArrow: ".b-why-list-right",
  });
});
