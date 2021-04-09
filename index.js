// navbar item active
$(window).scroll(function () {
  $('.nav-item').removeClass('active');
  $('.active').parent().addClass('active');
});
