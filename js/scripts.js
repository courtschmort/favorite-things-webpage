$(document).ready(function() {
  $("form#appt-form").submit(function(event) {
    var name = $("input#name").val();
    var color = $("input#color").val();
    var desc = $("input#desc").val();
    var date = $("input#date").val();
    var stend = $("input#stend").val();

    $(".name").text(name);
    $(".color").text(color);
    $(".desc").text(desc);
    $(".date").text(date);
    $(".stend").text(stend);

    $("#appointment").show();
    event.preventDefault();
  });
});
