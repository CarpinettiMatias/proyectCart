$(document).ready(function(){


   let inputName = $('#inputName1');
   let inputLastName = $('#inputLastName1');
   let inputEmail = $('#inputEmail1');
   let check = $('#exampleCheck1');
   let btnSend = $('.btn');

   btnSend.click(function(){
       if( $(inputName).val().length === 0 ) {
           $('.div-validacion-name').append("<div class='validacion-input'><p>*Ingrese su nombre</p></div>")
        }
      if( $(inputLastName).val().length === 0 ) {
         $('.div-validacion-lastName').append("<div class='validacion-input'><p>*Ingrese su apellido</p></div>")
      } 
      if( $(inputEmail).val().length === /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/ ) {
           $('.div-validacion-email').append("<div class='validacion-input'><p>*Ingrese email</p></div>")
        }
      if( $(check).prop('checked') === false ) {
           $('.div-validacion-check').append("<div class='validacion-input'><p>*Acepte los términos y condiciones</p></div>")
        }
 
        if($(inputName).val().length != 0 &&  $(inputLastName).val().length != 0 &&  $(inputEmail).val().length != 0 && $(check).prop('checked') != false){
           $('.respuesta').append(
          `<p> Gracias ${inputName.val()} ${inputLastName.val()} por comunicarte con nosotros</p>
           <p>Nos comunicaremos al mail ${inputEmail.val()} a la brevedad</p>`)
           $('.validacion-input').empty();
        }
   });

});
