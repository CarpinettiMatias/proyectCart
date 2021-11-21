

// CHECK IN

let checkName = prompt('Ingrese nombre');
let checkLastName = prompt('Ingrese Apellido');
let checkEmail = prompt('Ingrese email');
let checkPass = prompt('Ingrese contraseña');

class User{
    constructor(firstName, LastName, email, pass){
        this.firstName = firstName;
        this.LastName = LastName;
        this.email = email;
        this.pass = pass;

    };

    welcome(){
        alert("Bienvenide " + this.firstName + ' ' + this.LastName).toLowerCase()
    };


};

let createUser = new User(checkName, checkLastName, checkEmail, checkPass);
console.log(createUser);

createUser.welcome();


