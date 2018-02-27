$(document).ready(function(){
    var url = $("#vid").attr('src');
    
    $("#vid").attr('src', '');
    
    $("#myModal").on('shown.bs.modal', function(){
        $("#vid").attr('src', url + '?autoplay=1');
    });
    
    $("#myModal").on('hide.bs.modal', function(){
        $("#vid").attr('src', '');
    });

    $(".goup").on("click", function( e ) {

        e.preventDefault();

        $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset().top 
        }, 600);

    });

});

var $btns = $('.button').click(function() {
    
    if (this.id === 'all') {

        $('#parent > .element-item').fadeIn(450);
        
        
    } else {
        var $el = $('.' + this.id).fadeIn(450);
        $('#parent > .element-item').not($el).hide();
    }   
    $btns.removeClass('active');
    $(this).addClass('active');
});


$(function(){
    $('.carousel').carousel({
      interval: 2000
    });
});

