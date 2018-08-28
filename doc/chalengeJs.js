$('.ser').click(function(){
    $('html ,body').animate({
        scrollTop: $('#first-container').offset().top
    },1000);
});