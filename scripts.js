$(document).ready(function() {
  $("#food1").click(function() {
    if ($('#food1').prop("checked")) {
      $('#food2, #food3, #food4, #food5, #food6').prop('checked',false);
      $(".choosen_food1").fadeIn(400).css("display", "block");
      $('.choosen_food2, .choosen_food3, .choosen_food4, .choosen_food5, .choosen_food6').fadeOut(400).css("display", "none");
    } 
  });
});

$(document).ready(function() {
  $("#food2").click(function() {
    if ($('#food2').prop("checked")) {
      $('#food1, #food3, #food4, #food5, #food6').prop('checked',false);
      $(".choosen_food2").fadeIn(400).css("display", "block");
      $('.choosen_food1, .choosen_food3, .choosen_food4, .choosen_food5, .choosen_food6').fadeOut(400).css("display", "none");
    } 
  });
});

$(document).ready(function() {
  $("#food3").click(function() {
    if ($('#food3').prop("checked")) {
      $('#food1, #food2, #food4, #food5, #food6').prop('checked',false);
      $(".choosen_food3").fadeIn(400).css("display", "block");
      $('.choosen_food1, .choosen_food2, .choosen_food4, .choosen_food5, .choosen_food6').fadeOut(400).css("display", "none");
    } 
  });
});

$(document).ready(function() {
  $("#food4").click(function() {
    if ($('#food4').prop("checked")) {
      $('#food1, #food2, #food3, #food5, #food6').prop('checked',false);
      $(".choosen_food4").fadeIn(400).css("display", "block");
      $('.choosen_food1, .choosen_food2, .choosen_food3, .choosen_food5, .choosen_food6').fadeOut(400).css("display", "none");
    } 
  });
});

$(document).ready(function() {
  $("#food5").click(function() {
    if ($('#food5').prop("checked")) {
      $('#food1, #food2, #food3, #food4, #food6').prop('checked',false);
      $(".choosen_food5").fadeIn(400).css("display", "block");
      $('.choosen_food1, .choosen_food2, .choosen_food3, .choosen_food4, .choosen_food6').fadeOut(400).css("display", "none");
    } 
  });
});

$(document).ready(function() {
  $("#food6").click(function() {
    if ($('#food6').prop("checked")) {
      $('#food1, #food2, #food3, #food4, #food5').prop('checked',false);
      $(".choosen_food6").fadeIn(400).css("display", "block");
      $('.choosen_food1, .choosen_food2, .choosen_food3, .choosen_food4, .choosen_food5').fadeOut(400).css("display", "none");
    } 
  });
});