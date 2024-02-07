$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 600,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/catalog/left_solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/catalog/right_solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                }
              },
        ]
  });

  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  };
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
});