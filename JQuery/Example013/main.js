$(document).ready(function(){
    console.log('ready');

    $('#input-name').on('keyup',function(){
        let name=$(this).val();
        $('#feedback-message').text('Please to meet you ' +name);
    });

    $('a').on('click',function(){
        $('#feedback-message').text('That\'s fine');
    });
});