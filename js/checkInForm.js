const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const p = document.getElementById('warnings');




form.addEventListener('submit', e =>{
    e.preventDefault()
    if(firstName.value.lenght < 2){
        alert("Escriba un nombre")
    }
})