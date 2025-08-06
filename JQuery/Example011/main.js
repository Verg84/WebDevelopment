$(document).ready(function(){
    console.log('ready');

    $('#select-menu').on('change',function(){
        console.log('Hello');
        console.log($('#select-menu option:selected').val());
    });
});