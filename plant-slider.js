(function($) {
  $.fn.plantSlider = function() {
    this.each(function() {
      $(this).find('img:first').addClass('ps-active');
      var n = $(this).find('img').length,
        a = n;
      if (n > 1) {
        for (var i = 0; i < n; i++) {
          $(this).children("ul.plant-slider-ui").prepend('<li></li>');
          a = a - 1;
        }
      } else {

      }
    });
    var  i = 0;
    this.on('click', function(e) {

      e.preventDefault();
      var s = $(this).find('img'),
        ui = $(this).find('li');
      i = (i + 1) % s.length;
      s.removeClass('ps-active').eq(i).addClass('ps-active');
      ui.removeClass('ps-active').eq(i).addClass('ps-active');
    });
  }
}(jQuery));
