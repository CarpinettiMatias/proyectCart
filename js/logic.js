
let lista = [];

function addList( sName, sLastName, sEmail, sPass){

    const NuevosUsuarios = {
        name : sName,
        lastName : sLastName,
        email : sEmail,
        pass : sPass

    }
    lista.push(NuevosUsuarios);
    localStorageNuevosUsuarios(lista);
    console.log(localStorageNuevosUsuarios);
}
console.log(localStorageNuevosUsuarios);
 
function getUsuarios(){
    let storedList = localStorage.getItem('localUsuariosLista');
    if(storedList == null){
        lista = []
    }else{
        lista = JSON.parse(storedList);
    }
    return addList;
};

function localStorageNuevosUsuarios(lista){
    localStorage.setItem('localUsuariosLista', JSON.stringify(lista));
};
/*
function getUserList(){
    let storedList = JSON.parse(localStorage.getItem('localUsuariosLista'));

    
    return lista;
}
*/
function validateStart(sName , sPass){
    let lista = getUsuarios();
    let bAccess = false;

    for(let i =0; i < lista.length; i++){
        if(sName == lista[i][0] && sPass == lista[i][3]){
            bAccess = true;
            sessionStorage.setItem('usuarioActivo', userList[i][0]+ ' ' + userList[i][3]);
        }
    }

    return bAccess;

}