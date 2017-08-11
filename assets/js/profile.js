function getFromLocalStorage() {
    $('#username').append(localStorage.getItem('username'));
    $('#name').append(localStorage.getItem('name'));
    $('#country').append(localStorage.getItem('country'));
}