$(document).ready(function(){
    console.log('ready');

    $('.box').on('click','.box-button',function(){
        $(this).parent().toggleClass('highlight');
    })
})