const listaDeContactos = [    //Lista de contactos
    'Jose Perez',
    'Andrea Luna',
    'Juan Delgado',
    'Esteban Lenis'
]

//Funcion para agregar un contacto a la lista

function agregarContacto(contacto) {
    listaDeContactos.push(contacto);
    console.log(`Contacto agregado: ${contacto}`);
}

//Funcion para eliminar un contacto de la lista

function eliminarContacto(contacto) {
    let indice = -1;
    for (let i = 0; i < listaDeContactos.length; i++) {
        if (contacto === listaDeContactos[i]) {
            indice = i;
            break;
        }
    }

    if (indice >= 0) {
        listaDeContactos.splice(indice, 1);
        console.log(`Contacto eliminado: ${contacto}`)
    } else {
        console.log('El contacto no existe en la lista')
    }
}

//Funcion para imprimir la lista de contactos

function imprimirContactos() {
    console.log("Lista de contactos:");
    listaDeContactos.forEach(contacto => {
        console.log(contacto)
    })
}
imprimirContactos();
agregarContacto('Santiago Vallejo');
eliminarContacto('Juan Delgado');
imprimirContactos();