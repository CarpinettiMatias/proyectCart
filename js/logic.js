
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
  
}

function getUserStorage(){
    let storedList = localStorage.getItem('localUsuariosLista')
        if(storedList == null){
            lista = []
        }else{
            lista = storedList
        }
        return lista;
}


function localStorageNuevosUsuarios(lista){
    localStorage.setItem('localUsuariosLista', JSON.stringify(lista));

    
};



function validart(){
    let listas = getUserStorage();

    for(prop in listas){
        console.log(prop);
    }
}
