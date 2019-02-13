$ (".button1") .click (function(){
    $(".db").text("双击") ;
});

$ (".db").dblclick(function() {
    $(".img2").show();
});

$(".img2").mouseenter(function(){
    $(".text1").fadeToggle("双击");
});

$(".img2").mouseleave(function(){
    $(".text2").show("点击标题");
});

$(".header").click(function(){
    $("div").hide("");
    $(".img3").show("");
    $(".io").show();
});
$(".io").click(function(){
    location.reload();
});
