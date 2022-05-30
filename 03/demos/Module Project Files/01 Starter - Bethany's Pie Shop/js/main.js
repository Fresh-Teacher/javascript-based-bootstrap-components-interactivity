$(document).ready(function(){

    // Dropdown options
    $('.dropdown-toggle').dropdown({
        "offset": -100,
        "flip": false
    });

});

// Dropdown methods
function displayCategories(){
    $('#pieCatergories').dropdown('toggle');
}

//pop over categories
$('[data-toggle="popover"]').popover({
trigger: 'hover'
});

// Dropdown events
$('#pieCatergories').on('show.bs.dropdown', function () {
    // alert('This')
})

//toast
$('.toast').toast('show');