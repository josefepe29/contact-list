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
    console.log(`Contacto agregado: ${nuevoContacto.nombres} ${nuevoContacto.apellidos}`);
}

//Funcion para eliminar un contacto de la lista

function eliminarContacto(id) {
    let indice = -1;
    for (let i = 0; i < listaDeContactos.length; i++) {
        if (id === listaDeContactos[i].id) {
            indice = i;
            break;
        }
    }

    if (indice >= 0) {
        listaDeContactos.splice(indice, 1);
        console.log(`Contacto eliminado con id #${id}`)
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

agregarContacto(6,'Juan Sebastian', 'Delgado Carabali', '123123123123', {ciudad: 'Popayan', direccion: 'Carrera 5'});
eliminarContacto(1);
imprimirContactos();