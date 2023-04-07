$(document).ready(function() {
  $(".single-item").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

$(document).ready(function() {
  if ($(window).width()<445) {
    $(".foodtypes").css("display", "none");
    $(".content").css("display", "block");
  }
  else {
    $(".foodtypes").css("display", "flex");
    $(".content").css("display", "none");
  }
});

$(window).resize(function(e) {
  let width = e.target.innerWidth
    if(width < 445) {
      $(".foodtypes").css("display", "none");
      $(".content").css("display", "block");
   }
   else {
    $(".foodtypes").css("display", "flex");
    $(".content").css("display", "none");
  }
});

$(document).ready(function() {

  $( ".f_type1").on("swipeleft", handlerf1l );
  function handlerf1l(event) {
    $('.choosen_food2').fadeIn(400).css("display", "block");
    $('.choosen_food1, .choosen_food3, .choosen_food4, .choosen_food5, .choosen_food6').fadeOut(400).css("display", "none");
  }
  $( ".f_type1").on("swiperight", handlerf1r );
  function handlerf1r(event) {
    $('.choosen_food6').fadeIn(400).css("display", "block");
    $('.choosen_food1, .choosen_food2, .choosen_food3, .choosen_food4, .choosen_food5').fadeOut(400).css("display", "none");
  }


  $( ".f_type2").on("swipeleft", handlerf2l );
  function handlerf2l(event) {
    $('.choosen_food3').fadeIn(400).css("display", "block");
    $('.choosen_food1, .choosen_food2, .choosen_food4, .choosen_food5, .choosen_food6').fadeOut(400).css("display", "none");
  }
  $( ".f_type2").on("swiperight", handlerf2r );
  function handlerf2r(event) {
    $('.choosen_food1').fadeIn(400).css("display", "block");
    $('.choosen_food2, .choosen_food3, .choosen_food4, .choosen_food5, .choosen_food6').fadeOut(400).css("display", "none");
  }


  $( ".f_type3").on("swipeleft", handlerf3l );
  function handlerf3l(event) {
    $('.choosen_food4').fadeIn(400).css("display", "block");
    $('.choosen_food1, .choosen_food2, .choosen_food3, .choosen_food5, .choosen_food6').fadeOut(400).css("display", "none");
  }
  $( ".f_type3").on("swiperight", handlerf3r );
  function handlerf3r(event) {
    $('.choosen_food2').fadeIn(400).css("display", "block");
    $('.choosen_food1, .choosen_food3, .choosen_food4, .choosen_food5, .choosen_food6').fadeOut(400).css("display", "none");
  }


  $( ".f_type4").on("swipeleft", handlerf4l );
  function handlerf4l(event) {
    $('.choosen_food5').fadeIn(400).css("display", "block");
    $('.choosen_food1, .choosen_food2, .choosen_food3, .choosen_food4, .choosen_food6').fadeOut(400).css("display", "none");
  }
  $( ".f_type4").on("swiperight", handlerf4r );
  function handlerf4r(event) {
    $('.choosen_food3').fadeIn(400).css("display", "block");
    $('.choosen_food1, .choosen_food2, .choosen_food4, .choosen_food5, .choosen_food6').fadeOut(400).css("display", "none");
  }


  $( ".f_type5").on("swipeleft", handlerf5l );
  function handlerf5l(event) {
    $('.choosen_food6').fadeIn(400).css("display", "block");
    $('.choosen_food1, .choosen_food2, .choosen_food3, .choosen_food4, .choosen_food5').fadeOut(400).css("display", "none");
  }
  $( ".f_type5").on("swiperight", handlerf5r );
  function handlerf5r(event) {
    $('.choosen_food4').fadeIn(400).css("display", "block");
    $('.choosen_food1, .choosen_food2, .choosen_food3, .choosen_food5, .choosen_food6').fadeOut(400).css("display", "none");
  }


  $( ".f_type6").on("swipeleft", handlerf6l );
  function handlerf6l(event) {
    $('.choosen_food1').fadeIn(400).css("display", "block");
    $('.choosen_food2, .choosen_food3, .choosen_food4, .choosen_food5, .choosen_food6').fadeOut(400).css("display", "none");
  }
  $( ".f_type6").on("swiperight", handlerf6r );
  function handlerf6r(event) {
    $('.choosen_food5').fadeIn(400).css("display", "block");
    $('.choosen_food1, .choosen_food2, .choosen_food3, .choosen_food4, .choosen_food6').fadeOut(400).css("display", "none");
  }

});

$(document).ready(function() {
  $(window).on('load',function() {
    if ($('.f_type1').attr('aria-hidden') == 'false') {
      $('.choosen_food1').fadeIn(400).css("display", "block");
      $('.choosen_food2, .choosen_food3, .choosen_food4, .choosen_food5, .choosen_food6').fadeOut(400).css("display", "none");
    }
  })
});

$(document).ready(function() {
  $('button').click(function() {
    if ($('.f_type1').attr('aria-hidden') == 'false') {
      $('.choosen_food1').fadeIn(400).css("display", "block");
      $('.choosen_food2, .choosen_food3, .choosen_food4, .choosen_food5, .choosen_food6').fadeOut(400).css("display", "none");
    }
    else if ($('.f_type2').attr('aria-hidden') == 'false') {
      $('.choosen_food2').fadeIn(400).css("display", "block");
      $('.choosen_food1, .choosen_food3, .choosen_food4, .choosen_food5, .choosen_food6').fadeOut(400).css("display", "none");
    }
    else if ($('.f_type3').attr('aria-hidden') == 'false') {
      $('.choosen_food3').fadeIn(400).css("display", "block");
      $('.choosen_food1, .choosen_food2, .choosen_food4, .choosen_food5, .choosen_food6').fadeOut(400).css("display", "none");
    }
    else if ($('.f_type4').attr('aria-hidden') == 'false') {
      $('.choosen_food4').fadeIn(400).css("display", "block");
      $('.choosen_food1, .choosen_food2, .choosen_food3, .choosen_food5, .choosen_food6').fadeOut(400).css("display", "none");
    }
    else if ($('.f_type5').attr('aria-hidden') == 'false') {
      $('.choosen_food5').fadeIn(400).css("display", "block");
      $('.choosen_food1, .choosen_food2, .choosen_food3, .choosen_food4, .choosen_food6').fadeOut(400).css("display", "none");
    }
    else {
      $('.choosen_food6').fadeIn(400).css("display", "block");
      $('.choosen_food1, .choosen_food2, .choosen_food3, .choosen_food4, .choosen_food5').fadeOut(400).css("display", "none");
    }
  })
});