$(document).ready(function(){
    $('#container').find('.hot').addClass('highlightA');

    $('#container').find('.cold').children().addClass('highlightB');

    $('#container').find('.solid').addClass('highlightC');

    $('#container').find('.non-solid').addClass('highlightD');
})