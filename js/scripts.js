$(document).ready(function(){
    var url = $("#vid").attr('src');
    
    $("#vid").attr('src', '');
    
    $("#myModal").on('shown.bs.modal', function(){
        $("#vid").attr('src', url);
    });
    
    $("#myModal").on('hide.bs.modal', function(){
        $("#vid").attr('src', '');
    });
});

