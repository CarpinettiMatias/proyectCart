document.querySelector('#btn_create').addEventListener('click', addUsuarios )


function addUsuarios(){

    let sName = document.querySelector('#bFirstName').value,
        sLastName = document.querySelector('#bLastName').value,
        sEmail = document.querySelector('#bEmail').value,
        sPass = document.querySelector('#bPassword').value;


        addList( sName, sLastName, sEmail, sPass);
};
