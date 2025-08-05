var checkBox=document.getElementById('petCheckbox');
var selectionDiv=document.getElementById('petSelection');

checkBox.addEventListener('change',function(event){
    if(checkBox.checked==true)
        selectionDiv.style.display='Block';
    else
        selectionDiv.style.display='None';
});

var saveForm=document.getElementById('saveForm');
saveForm.addEventListener('submit',function(event){
    event.preventDefault();

    var nameText=saveForm.elements[0].value;
    var addressText=saveForm.elements[1].value;
    var ageText=saveForm.elements[2].value;
    var doesHavePets=saveForm.elements[3].checked;
    var petText='No pets';
    
    if(nameText=='')
    {
        alert('Please enter a name');
        return;
    }
    if(addressText=='')
    {
        alert('Please enter an address');
        return;
    }
    if(ageText='')
    {
        alert('Please enter age');
        return;
    }

    if(doesHavePets)
    {
        petText=saveForm.elements[4].value;
    }

    if(petText=='Dog')
    {
        alert('Sorry, our dog capacity is full:(');
        return;
    }

    alert('Bookings saved! Info:\n'+
        nameText+'\n'+
        addressText+'\n'+
        ageText+'\n'+
        petText
    );
})


