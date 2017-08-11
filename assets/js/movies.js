/* Parametros */
var actorsAux = [
    "Georg",
    "Pedro",
    "Jenni",
    "Sylve",
    "Pablo",
    "Leona",
    "Glori",
    "Rober",
];
var limiteDeItemsEnPantalla = 50;

/* Llamado a la API */
var req = new XMLHttpRequest();
var URL = "https://netflixroulette.net/api/api.php?";
var queryType = "actor=";
var posicionAleatoriaEnActorsAux = Math.floor(Math.random() * parseInt(actorsAux.length));
var actorAleatorio = actorsAux[posicionAleatoriaEnActorsAux];

req.open('GET', URL + queryType + actorAleatorio, true);
req.addEventListener("load", function() {
    var counter = 0;
    var response = JSON.parse(req.responseText);
    
    /*console.log(response);*/
    response.forEach(function(movie){
        if(counter < limiteDeItemsEnPantalla) {
            addPeliculaEnPantalla(movie);
            counter++;
        }
    });
});
req.send(null);

/* Añadir película */
var addPeliculaEnPantalla = function(movie) {
    var pelicula = `<!-- pelicula -->
        <div class="row">
            <div class="pelicula">
                <div class="col-xs-12">
                    <div class="col-xs-9">
                        <h4>${movie.show_title} <span> ${movie.release_year} | ${movie.category}</span></h4>
                    </div>
                    <div class="col-xs-3">
                        <a class="btn">ADD FAVOURITE</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row text-center">
            <div class="datos">
                <div class="col-xs-4">
                    <p><i class="fa fa-clock-o" aria-hidden="true"></i>${movie.runtime}</p>
                </div>
                <div class="col-xs-4">
                    <p><i class="fa fa-television" aria-hidden="true"></i>${movie.director}</p>
                </div>
                <div class="col-xs-4">
                    <p>${rating(movie.rating)}</p>
                </div>
            </div>
        </div>
        <hr>
        <!-- fin pelicula -->`;

    $(".peliculas .container").append(pelicula);
}

var rating = function(rating){
    var rating = redondearPuntoCinco(rating);
    var cantidadDeEstrellasAdicionadas = 0;
    var ratingHtml = '';

    for(var i=0; i<Math.floor(rating); i++) {
        /*console.log('Entero:'+rating);*/
        ratingHtml += '<i class="fa fa-star" aria-hidden="true"></i>';
        cantidadDeEstrellasAdicionadas++;
    }

    if(!esEntero(rating)) {
        /*console.log('Decimal:'+rating);*/
        ratingHtml += '<i class="fa fa-star-half-o" aria-hidden="true"></i>';
        cantidadDeEstrellasAdicionadas++;
    }

    while(cantidadDeEstrellasAdicionadas < 5) {
        ratingHtml += '<i class="fa fa-star-o" aria-hidden="true"></i>';
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