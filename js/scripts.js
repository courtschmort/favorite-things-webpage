$(document).ready(function() {
  $("form#appt-form").submit(function(event) {
    var name = $("input#name").val();
    var color = $("#color").val();
    var desc = $("input#desc").val();
    var date = $("#date").val();
    var stend = $("input#stend").val();
    var beverage = $("select#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();

    $(".name").text(name);
    $(".color").text(color);
    $(".desc").text(desc);
    $(".date").text(date);
    $(".stend").text(stend);
    $(".beverage").text(beverage);
    $("#appointment").show();
    $(".flavor").text(flavor);
    event.preventDefault();
  });
});
