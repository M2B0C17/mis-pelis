$(document).ready(function(){
    $.ajax({
            url: 'https://netflixroulette.net/api/api.php?title=pulp%20fiction',
            type: 'GET',
            datatype: 'JSON',
        })
        .done(function(result) {
            console.log(result);
            var actoress = result.show_cast.split(",");

                $(".fotoPeli").append('<img src="' + result.poster + '" class="macFoto">');
                $("#tituloPelicula").append('<h5 class="tituloSinop">' + result.show_title + ' <a href="#" class="macDrama">' + result.category + '</a></h5>');
                $("#sinopsisPelicula").append('<p class="macTextParrafo">' + result.summary + '</p>');
                $("#generoPelicula").append('<p class="macTextParrafo">Genres: ' + result.category + '</p>');
                $("#director").append('<p class="macTextParrafo">Director: ' + result.director + '</p>');
                $(".actores").append('<ul><a href="actor.html"><li class="macListActores">' + result.show_cast + '</li></a></ul>');
                $("#estrellas").append('<p>' + rating(result.rating) + '</p>');
        })
    .fail(function() {
            alert('Malo');
        })
        .always(function() {
            console.log('Estas Wenazoo Grrr!!!')
        });
        var rating = function(rating){
            var rating = redondearPuntoCinco(rating);
            var cantidadDeEstrellasAdicionadas = 0;
            var ratingHtml = '';

            for(var i=0; i<Math.floor(rating); i++) {
                /*console.log('Entero:'+rating);*/
                ratingHtml += '<i class="fa fa-star macStartRoja" aria-hidden="true"></i>';
                cantidadDeEstrellasAdicionadas++;
            }

            if(!esEntero(rating)) {
                /*console.log('Decimal:'+rating);*/
                ratingHtml += '<i class="fa fa-star-half-o macStartRoja" aria-hidden="true"></i>';
                cantidadDeEstrellasAdicionadas++;
            }

            while(cantidadDeEstrellasAdicionadas < 5) {
                ratingHtml += '<i class="fa fa-star-o macStartRoja" aria-hidden="true"></i>';
                cantidadDeEstrellasAdicionadas++;
            }

            return ratingHtml;
        }

        var redondearPuntoCinco = function(num) {
            return Math.round(num*2)/2;
        }

        var esEntero = function (num){
            return num % 1 == 0;
        }
});
