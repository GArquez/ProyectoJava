/*Simulador para asociarse, ingresa nombres, ubicacion y duracion, para devolver lo mismo con el numero de asociamiento correspondiente y el precio a pagar*/
const ubicaciones = ['Platea', "Laprida", "Bolivia", "Chile"]

let Socio = prompt("Ingresar nombre y apellido completo para asociarse")

function SocioPrecio (duracion, sector){
    let mes = 100
    let locacion = 0
    if (sector == "Platea"){
        locacion = 500
    }else if (sector == "Laprida"){
        locacion = 200
    }else if (sector == "Bolivia"){
        locacion = 150
    }else if (sector == "Chile"){
        locacion = 100
    }  
    let precio = (mes*duracion) + locacion
    return precio
}

if (Socio != "ESC") {
    console.log("!Hola! " + Socio)
    const duracion = parseInt(prompt ("Ahora elegí la duracion en meses: 6 o 12"))
    const sector = prompt ("Ahora elegi la ubicacion: Platea, Laprida, Bolivia o Chile")

    let ubicacion = ubicaciones.includes(sector)

    while (duracion == 6 && ubicacion) {
        for (let i = 1; i <= 20; i++){
            let yaSocio = "!Hola! " + Socio + " Sos el socio N° " + i + " en el sector " + sector +" por una duracion de " + duracion + " meses, por $" + SocioPrecio (duracion, sector)
            console.log(yaSocio)
        }
        break
    }
    while (duracion == 12 && ubicacion) {
        for (let i = 1; i <= 20; i++){
            let yaSocio = "!Hola! " + Socio + " Sos el socio N° " + i + " en el sector " + sector +" por una duracion de " + duracion + " meses, por $" + SocioPrecio (duracion, sector)
            console.log(yaSocio)
        }
        break
    }     
} else {
    alert ("Por favor, Ingresar nombre y apellido completo para asociarse")
}
