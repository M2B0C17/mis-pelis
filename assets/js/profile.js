function getFromLocalStorage() {
    $('#usuario').append(localStorage.getItem('username'));
    $('#nombre').append(localStorage.getItem('name'));
    $('#pais').append(localStorage.getItem('country'));
}