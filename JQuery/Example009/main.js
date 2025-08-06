$(document).ready(function(){
    console.log('ready')
    $('.box').on('click',function(){
        

        $(this).addClass('highlight');
    })
    $('.boxB').on('click',function(){
        $(this).toggleClass('highlight');
        console.log('color changed');
    })
    
});