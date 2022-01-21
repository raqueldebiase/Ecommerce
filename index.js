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

/*banner SALLE*/

$(".sales").mouseenter (function () {
  $("#log").append ("<div>SALES SALES SALES</div ")
});


/*carousel shop */

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

$(".div_art").hover (
  function () {
    $(this).addClass ("opacity_articles");
  }, function () {
    $(this).removeClass ("opacity_articles");
  }
);

$(".descricao").hover (
  function (){
    $(this).find("span").css ("display", "block");
  }, function () {
    $(this).find("span").css ("display", "none");
  }
);

/*
$(".material-icons-outlined").on ("click", function (){
  if($(".material-icons-outlined").html("favorite")){
  $(this).html("favorite_border")
  } else {
  $(this).html("favorite")
  }
});
*/

$(".material-icons-outlined").each(function(){
  $(this).on('click', function(){
    if($(this).html() == 'favorite'){
      $(this).html('favorite_border');
    } else {
      $(this).html('favorite');
    }
  });
});