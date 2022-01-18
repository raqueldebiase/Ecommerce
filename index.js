/*carousel upcoming*/

/* tentativas com JQUERY
$('.container_image').slick({
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 8
});

*/


$(".container_image").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,  
  });

/*bannes SALEL*/

$(".sales").mouseenter (function () {
  $("#log").append ("<div>SALES SALES SALES</div ")
});


/*caroussel shop */

$(".carouselSlick").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,  
  });

/*carousel teamWork */

$(".slideTeamWork").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,  
  });