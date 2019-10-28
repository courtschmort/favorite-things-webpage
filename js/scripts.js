// var array=[];
// function moveStuff(){
//   var newArray;
//   newArray.push()
//   console.log(newArray);
// }
// $(document).ready(function() {
//   $("form#appt-form").submit(function(event) {
//     array[0] = $("input#name").val();
//     array[1] = $("#color").val();
//     array[2] = $("input#desc").val();
//     array[3] = $("#date").val();
//     array[4] = $("input#stend").val();
//     array[5] = $("select#beverage").val();
//     array[6] = $("input:radio[name=flavor]:checked").val();
//
//     $(".name").text(array[0]);
//     $(".color").text(array[1]);
//     $(".desc").text(array[2]);
//     $(".date").text(array[3]);
//     $(".stend").text(array[4]);
//     $(".beverage").text(array[5]);
//     $("#appointment").show();
//     $(".flavor").text(array[6]);
//     moveStuff();
//     event.preventDefault();
//   });
// });



$(document).ready(function() {
  $("form#appt-form").submit(function(event) {
    var name = $("#name").val();
    var color = $("#color").val();
    var desc = $("#desc").val();
    var date = $("#date").val();
    var stend = $("#stend").val();
    var beverage = $("#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var array = [name, color, desc, date, stend, beverage, flavor];

    $(".name").text(name);
    $(".color").text(color);
    $(".desc").text(desc);
    $(".date").text(date);
    $(".stend").text(stend);
    $(".beverage").text(beverage);
    $("#appointment").show();
    $(".flavor").text(flavor);
    // moveStuff(name,color,desc);
    moveStuff(array);
    event.preventDefault();
  });
});

// function moveStuff(name,color,desc){
//   var newArray = [];
//   newArray.push(name,color,desc);
//   console.log(newArray);
// }
function moveStuff(array){
  var newArray = [];
  newArray.push(array[0],array[1],array[2]);
  console.log(newArray);
  $("#list").html('');
  $("#list").append("<li>"+newArray[0]+"</li>");
  $("#list").append("<li>"+newArray[1]+"</li>");
  $("#list").append("<li>"+newArray[2]+"</li>");
}
