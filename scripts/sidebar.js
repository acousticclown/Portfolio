var height = $('#header').height();

$(window).scroll(function () {
    if($(this).scrollTop() > height){
        $('.sidebar').addClass('fixed');
    }else{
        $('.sidebar').removeClass('fixed');
    }
});