$(document).ready(function() {
	$("#create-account-btn").on("click", validateForm);

	function validateForm(event){
		event.preventDefault();
		var name = $("#name").val();
		var username = $("#username").val();
		var email = $("#email").val();
		var country = $("#country").val();
		
		//validación nombre
		if(!/^([a-zñáéíóúA-ZÑÁÉÍÓÚ]{2,11})+$/.test(name)){
			$("#name-form").addClass('has-error has-feedback');
			$("#name-form").append('<span class="glyphicon glyphicon-remove form-control-feedback error-name" aria-hidden="true"></span><span id="nameErrorStatus" class="sr-only error-name">(error)</span>');
			$("#name").attr('aria-describedby', 'nameErrorStatus');
		}else{
			$("#name-form").removeClass('has-error').addClass('has-success');
			$("span").remove(".error-name");
			$("#name").removeAttr('aria-describedby', 'nameErrorStatus');
			$("#name-form").append('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span><span id="nameSuccessStatus" class="sr-only">(success)</span>');
			$("#name").attr('aria-describedby', 'nameSuccessStatus');
		}

		//validación nombre usuario
		if(!/^([a-zñáéíóúA-ZÑÁÉÍÓÚ0-9]{2,11})+$/.test(username)){
			$("#username-form").addClass('has-error has-feedback');
			$("#username-form").append('<span class="glyphicon glyphicon-remove form-control-feedback error-username" aria-hidden="true"></span><span id="usernameErrorStatus" class="sr-only error-username">(error)</span>');
			$("#username").attr('aria-describedby', 'usernameErrorStatus');
		}else{
			$("#username-form").removeClass('has-error').addClass('has-success');
			$("span").remove(".error-username");
			$("#username").removeAttr('aria-describedby', 'usernameErrorStatus');
			$("#username-form").append('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span><span id="usernameSuccessStatus" class="sr-only">(success)</span>');
			$("#username").attr('aria-describedby', 'usernameSuccessStatus');
		}

		//validación correo
		if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
			$("#email-form").addClass('has-error has-feedback');
			$("#email-form").append('<span class="glyphicon glyphicon-remove form-control-feedback error-email" aria-hidden="true"></span><span id="emailErrorStatus" class="sr-only error-email">(error)</span>');
			$("#email").attr('aria-describedby', 'emailErrorStatus');
		}else{
			$("#email-form").removeClass('has-error').addClass('has-success');
			$("span").remove(".error-email");
			$("#email").removeAttr('aria-describedby', 'emailErrorStatus');
			$("#email-form").append('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span><span id="emailSuccessStatus" class="sr-only">(success)</span>');
			$("#email").attr('aria-describedby', 'emailSuccessStatus');
		}

		//validación país
		if(country == ""){
			$("#country-form").addClass('has-error has-feedback');
			$("#country-form").append('<span class="glyphicon glyphicon-remove form-control-feedback error-country" aria-hidden="true"></span><span id="countryErrorStatus" class="sr-only error-country">(error)</span>');
			$("#country").attr('aria-describedby', 'countryErrorStatus');
		}else{
			$("#country-form").removeClass('has-error').addClass('has-success');
			$("span").remove(".error-country");
			$("#country").removeAttr('aria-describedby', 'countryErrorStatus');
			$("#country-form").append('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span><span id="countrySuccessStatus" class="sr-only">(success)</span>');
			$("#country").attr('aria-describedby', 'countrySuccessStatus');
		}
		
		clear();
	}

	//limpiar campos
	function clear(){
		$(":input")
		.not(":button, :submit, :reset, :hidden")
		.val("");
	}
});	