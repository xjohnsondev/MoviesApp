$('#addMovie').on('click', function(event){
    event.preventDefault();
    let title = $('#title').val();
    let rating = $('#rating').val();

    title.length > 1 && rating >= 0 && rating <= 10 ? 
    $('ul').append('<li>'+title+'<br>'+rating+'</li>') : 
    alert("Your entry does not meet the value constraints")

    $('form').trigger('reset');
})

$('#clear-button').on('click', function(event){
    event.preventDefault();
    $('li').remove()
})