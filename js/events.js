$(document).ready(function () {
    $('#first-name,#second-name,#selector,#sub').focus(function () {
        $(this).css({ 'background-color': 'green' });
    });
    $(document).ready(function(){
        $("input").focus(function(){
          $("span").css("display", "inline").fadeOut(2000);
        });
      });
    $('#first-name,#second-name,#selector,#sub').blur(function () {
        $(this).css({ 'background-color': '' });
    });

    $('#selector').change(function () {
        $(this).css({ 'background-color': 'red' });
    });
    $('#selector').change(function () {
        var a = $(this).val();
        $('#test').html(a);
        $('#test').css('border', 'solid red')
    });
    $('#first-name,#second-name').select(function () {
        $(this).css({ 'background-color': 'pink' });
    });
    $('.form').submit(function () {
        alert("Form Submitted");
    });
    // window methods
    $('window').scroll(function () {
        console.log("you are scrolling");
    });
    $(window).resize(function () {
        console.log("you are resizing window");
    });
    $("p").on("mouseover mouseout", function(){
        $(this).toggleClass("dummybg dummyc");
        });
});