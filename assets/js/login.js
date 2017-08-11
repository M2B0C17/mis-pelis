$(document).ready(function() {
	
	$('input').change(function(){
		nombre();
		contra();
	});

	$('.login__btn').click(function(e) {

		if( nombre() && contra() ){
			e.preventDefault();
			window.location.href = "movie.html";
		}

	});
	
});


var nombre = function(){
	var nom = $('#nombreLogin').val();

	if(nom == ""){
		$('#nombre-login').addClass('has-error has-feedback');
		$('#nombre-login').append('<span class="form-control-feedback error-nom" aria-hidden="true"><i class="fa fa-times-circle" aria-hidden="true"></i></span><span id="error-login" class="sr-only error-nom">(error)</span>');
		$('#nombreLogin').attr('aria-describedby', 'error-login');
		return false;
	} 
	if(!nom == ""){
		$('#nombre-login').removeClass('has-error').addClass('has-success');
		$('span').remove('.error-nom');
		$('#nombreLogin').removeAttr('aria-describedby', 'error-login');
		$('#nombre-login').append('<span class="form-control-feedback" aria-hidden="true"><i class="fa fa-check-circle" aria-hidden="true"></i></span><span id="correcto-login" class="sr-only ">(success)</span>');
		$('#nombreLogin').attr('aria-describedby', 'correcto-login');
		return true;
	}
};

var contra = function(){
	var con = $('#claveLogin').val();

	if(con == ""){
		$('#contra-login').addClass('has-error has-feedback');
		$('#contra-login').append('<span class="form-control-feedback error-con" aria-hidden="true"><i class="fa fa-times-circle" aria-hidden="true"></i></span><span id="error-login" class="sr-only error-con">(error)</span>');
		$('#claveLogin').attr('aria-describedby', 'error-con');
		return false;
	} 
	if(!con == ""){
		$('#contra-login').removeClass('has-error').addClass('has-success');
		$('span').remove('.error-con');
		$('#nombreLogin').removeAttr('aria-describedby', 'error-login');
		$('#contra-login').append('<span class="form-control-feedback" aria-hidden="true"><i class="fa fa-check-circle" aria-hidden="true"></i></span><span id="correcto-login" class="sr-only">(success)</span>');
		$('#nombreLogin').attr('aria-describedby', 'correcto-login');
		return true;
	}
};

  						

  						