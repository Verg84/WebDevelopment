$(document).ready(function(){
    console.log('ready');

    $('#container').find('.hot').children().first().addClass('highlight');

    $('#container').find('.cold').children().last().addClass('highlight');

    $('#container').find('.hot').children().first().next().addClass('highlightB');

    $('#container').find('.cold').children().last().prev().addClass('highlightB');
})