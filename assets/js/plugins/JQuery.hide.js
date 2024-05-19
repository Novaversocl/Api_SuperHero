$.fn.parpadear = function () {
  this.each(function () {
    var element = $(this);
    element.fadeOut(500, function () {
      $(this).fadeIn(500);
    });
  });
  return this;
};
