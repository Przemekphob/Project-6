$(document).ready(function(){
    var url = $("#vid").attr('src');
    
    $("#vid").attr('src', '');
    
    $("#myModal").on('shown.bs.modal', function(){
        $("#vid").attr('src', url + '?autoplay=1');
    });
    
    $("#myModal").on('hide.bs.modal', function(){
        $("#vid").attr('src', '');
    });
});

var $btns = $('.button').click(function() {
    
    if (this.id === 'all') {

        $('#parent > div').fadeIn(450);
        
        
    } else {
        var $el = $('.' + this.id).fadeIn(450);
        $('#parent > div').not($el).hide();
    }   
    $btns.removeClass('active');
    $(this).addClass('active');
})
