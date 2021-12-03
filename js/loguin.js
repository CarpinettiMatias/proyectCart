

document.querySelector('#btn_getInto').addEventListener('click', logIn);

function logIn(){
    let sName = '';
    let  sPass = '';
    let bAccess = false;

    sName = (document.querySelector('#user').value).toLowerCase();
    sPass = document.querySelector('#password').value;

    bAccess = validateStart(sName, sPass);

    if(bAccess == true){
            inn();
        }else{
            alert('invalidos')
        }
    console.log(bAccess);
    }
    function inn(){
        if(true){
            window.location = 'home.html';
        };
    }


/*
    function getUserList(){
        let storedList = localStorage.getItem('localUsuariosLista');
        if(storedList == null){
            lista = [];
        }else{
            lista = JSON.parse(storedList);
        }
        return addList;

    }
*/
  