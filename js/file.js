$(function(){
    $('.menu-link').click(function() {
        $.get($(this).attr('href'), "", function(data){
            $('#main').html(data);
        });
    });
})