const listaDeContactos = [    //Lista de contactos
    {
        "id": 1,
        "nombres": "Jose Ferney",
        "apellidos": "Perez Camacho",
        "telefono": "3178873843",
        "ubicaciones":
            {
            "ciudad": "Popayan",
            "direccion": "Carrera 6C #33N-106"
            }
    },
    {
        "id": 2,
        "nombres": "Andrea Katherine",
        "apellidos": "Luna Nupan",
        "telefono": "3174196401",
        "ubicaciones":
            {
            "ciudad": "Popayan",
            "direccion": "Carrera 0 # 0-01"
            }
    },
    {
        "id": 3,
        "nombres": "Luz Elena",
        "apellidos": "Nupan",
        "telefono": "3175763933",
        "ubicaciones":
            {
            "ciudad": "La Plata",
            "direccion": "Carrera 5 #6-31"
            }
    },
    {
        "id": 4,
        "nombres": "Braulio",
        "apellidos": "Luna",
        "telefono": "3142342734",
        "ubicaciones":
            {
            "ciudad": "Belen",
            "direccion": "Av 5 # 6-71"
            }
    },
    {
        "id": 5,
        "nombres": "Santiago",
        "apellidos": "Bolaños",
        "telefono": "3167674532",
        "ubicaciones":
            {
            "ciudad": "Cali",
            "direccion": "Tv 5 # 3-21"
            }
    }
]

//Funcion para agregar un contacto a la lista

function agregarContacto(id, nombres, apellidos, telefono, ubicaciones) {
    
    let nuevoContacto = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        ubicaciones: ubicaciones
    }
    listaDeContactos.push(nuevoContacto);
    console.log('Contacto agregado satisfactoriamente');
    console.log('Nuevo contacto:', nuevoContacto)
}

//Funcion para eliminar un contacto de la lista a partir del id

function eliminarContacto(id) {
    let indice = -1;
    for (let i = 0; i < listaDeContactos.length; i++) {
        if (id === listaDeContactos[i].id) {
            indice = i;
            break;
        }
    }

    if (indice >= 0) {
        let contactoEliminado = listaDeContactos.splice(indice, 1);
        console.log(`Contacto con id ${id} eliminado satisfactoriamente`)
        console.log('Contacto Eliminado', contactoEliminado)
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

//Funcion para actualizar contactos a partir del id

function actualizarContacto(id, nuevosDatos) {
    let indice = -1;
    for (let i = 0; i < listaDeContactos.length; i++) {
        if (id === listaDeContactos[i].id) {
            indice = i;
            break;
        }
    }
    
    if (indice >= 0) {
        
        let listaActualizada = Object.assign(listaDeContactos[indice],nuevosDatos)
        console.log(`El contacto ${listaDeContactos[indice].nombres} con id ${id} fue actualizado satisfactoriamente`)
        console.log('Contacto Actualizado:', listaActualizada)
    } else {
        console.log('El contacto no existe en la lista')
    }
}

agregarContacto(6, 'Juan Sebastian', 'Delgado', '123123123123', { ciudad: 'Popayan', direccion: 'Carrera 5' });
eliminarContacto(1);
actualizarContacto(2, {ubicaciones: {ciudad: 'Belen', direccion: 'Vereda la reforma'}})
//imprimirContactos();