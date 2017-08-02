var main = function() {
    $('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle();
    });

    $('.arrow-next').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();


      if(nextSlide.length === 0) {
          nextSlide = $('.slide').first();
          nextDot = $('.dot').first();
        }

        currentSlide.fadeOut(500).removeClass('active-slide');
        nextSlide.fadeIn(500).addClass('active-slide');

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
  });

    $('.arrow-prev').click(function() {
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.last();

        if(prevSlide.length === 0) {
          prevSlide = $('.slide').last();
          prevDot = $('.dot').last();
    }
    currentSlide.fadeOut(500).removeClass('active-slide');
    prevSlide.fadeIn(500).addClass('active-slide');
});

};

$(document).ready(main);
