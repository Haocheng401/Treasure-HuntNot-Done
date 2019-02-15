$("#img1").click(function(){
    $("#text").text("Double click on the picture");
    $("#text").css("fontSize", "50px");
    $("#img1").fadeToggle();
    $("#img2").show();
});

$("#img2").dblclick(function(){
    $("#text").text("Hover Over The Picture");
    $("#img2").fadeToggle();
    $("#img3").show();
});