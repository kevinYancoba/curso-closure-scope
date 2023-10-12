//ejercicio almacenamiento de mascotas.

function registroMascotas(){
    let listaMascotas = [];
    function rebirMascota(mascota){
        if(mascota){
            listaMascotas.push(mascota);
        }
        return listaMascotas;
    }
    return rebirMascota;
}

const myregistroMascotas = registroMascotas();
myregistroMascotas('firulais');
myregistroMascotas('michi');
myregistroMascotas('puerco');
console.log(myregistroMascotas());


