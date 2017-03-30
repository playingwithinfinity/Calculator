$(document).ready(function(){
  var display = "", x = "";
  $("#1").click(function(){
    display += 1; 
    $("#display").val(display);
  })
  $("#2").click(function(){
    display += 2; 
    $("#display").val(display);
  })
  $("#3").click(function(){
    display += 3; 
    $("#display").val(display);
  })
  $("#4").click(function(){
    display += 4; 
    $("#display").val(display);
  })
  $("#5").click(function(){
    display += 5; 
    $("#display").val(display);
  })
  $("#6").click(function(){
    display += 6; 
    $("#display").val(display);
  })
  $("#7").click(function(){
    display += 7; 
    $("#display").val(display);
  })
  $("#8").click(function(){
    display += 8; 
    $("#display").val(display);
  })
  $("#9").click(function(){
    display += 9; 
    $("#display").val(display);
  })
  $("#0").click(function(){
    display += 0; 
    $("#display").val(display);
  })
  $("#dot").click(function(){
    display += "."; 
    $("#display").val(display);
  })
  $("#add").click(function(){
    display += "+"; 
    $("#display").val(display);
  })
  $("#subtract").click(function(){
    display += "-"; 
    $("#display").val(display);
  })
  $("#divide").click(function(){
    display += "/"; 
    $("#display").val(display);
  })
  $("#multiply").click(function(){
    display += "*"; 
    $("#display").val(display);
  })
  $("#AC").click(function(){
    display = ""; 
    $("#display").val(display);
  })
  $("#equal").click(function(){
    x = $("#display").val();
    $("#display").val(eval(x)); 
 })
  $("#CE").click(function(){
    var n = $("#display").val(); 
    var nn = n.substring(0,n.length - 1);
    $("#display").val(nn);
  })
  
});


