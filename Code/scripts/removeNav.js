$(function() {
    var welcome = $('.welcome').height();
    $(window).scroll(function () {
       if ($(this).scrollTop() > welcome) {
          $('nav').removeClass('d-show');
          $('nav').addClass('d-nshow');
       }
       if ($(this).scrollTop() < welcome) {
          $('nav').addClass('d-show');
          $('nav').removeClass('d-nshow');
       }
    });
 });
 