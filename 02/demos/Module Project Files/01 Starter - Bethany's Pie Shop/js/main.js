$(document).ready(function(){
    $('.dropdown-toggle').dropdown({
        "offset": -100
    } );
})

//Dropdown methods
function displayCategories(){
    $('#pieCatergories').dropdown('show');
}

// Dropdown events
$(document).on('shown.bs.dropdown', function(){
alert('Viewed')
})