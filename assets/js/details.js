/* https://netflixroulette.net/api/api.php? */

$(document).ready(function(){
    $.ajax({
            url: 'https://netflixroulette.net/api/api.php?title=pulp%20fiction',
            type: 'GET',
            datatype: 'JSON',
        })
        .done(function(result) {
            console.log(result);
                $(".fotoPeli").append('<img src="' + result.poster + '" class="macFoto">');
                $("#tituloPelicula").append('<h5 class="tituloSinop">' + result.show_title + ' <a href="#" class="macDrama">' + result.category + '</a></h5>');
                $("#sinopsisPelicula").append('<p class="macTextParrafo">' + result.summary + '</p>');
                $("#estrellas").append('<i class="fa fa-star macStartRoja" aria-hidden="true"></i>');

        })
    .fail(function() {
            alert('Malo');
        })
        .always(function() {
            console.log('Estas Wenazoo Grrr!!!')
        });
});