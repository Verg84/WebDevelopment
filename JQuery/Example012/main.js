$(document).ready(function(){
    console.log('ready');

    $('#select-menu').on('change',function(){

        let name=$('#select-menu option:selected').text();
        console.log('Name: '+name);
        
        let distance=$('#select-menu option:selected').val();
        console.log('Distance: '+distance);

        let price=$('#select-menu option:selected').data('price');
        console.log('Price: '+price);

        if (distance) {
            $('#feedback-message').text('You are signing up for ' + name + ', which costs ' +
            price + ', to a distance of ' + distance + 'km');
        }
        else {
            $('#feedback-message').empty();
        }
    });
});