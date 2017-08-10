$(document).ready(function() {
	$("#create-account-btn").on("click", validateForm);

	function validateForm(event){
		event.preventDefault();
		var name = $("#name").val();
		var username = $("#username").val();
		var email = $("#email").val();
		var country = $("#country").val();

		/*
		//validación nombre
		if(!/^([A-ZÑÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(name)){
			$(".name-container").append("<span>Debe ingresar su nombre (solo caracteres de la A a la Z, primera letra mayúscula)</span>");
		
		}
		//validación nombre usuario
		if(!/^([a-zñáéíóú]{1,11})+$/.test(username)){
			$(".username-container").append("<span>Debe ingresar su apellido (solo caracteres de la A a la Z, primera letra mayúscula)</span>");
		}
		//validación correo
		if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
			$(".email-container").append("<span>Verifique su email</span>");
		}
		//validación país
		if(country == ""){
			$(".country-container").append("<span>Ingrese país</span>");
		}
		*/
		clear();
	}
	//limpiar campos
	function clear(){
		$(":input")
		.not(":button, :submit, :reset, :hidden")
		.val("");
}
});	