/*Simulador para asociarse, ingresa nombres, ubicacion y duracion, para devolver lo mismo con el numero de asociamiento correspondiente y el precio a pagar*/

let Socio = prompt("Ingresar nombre y apellido completo para asociarse")
alert("!Hola! " + Socio)

const duracion = parseInt(prompt ("Ahora elegí la duracion en meses: 6 o 12"))
const sector = prompt ("Ahora elegi la ubicacion: Platea, Laprida, Bolivia o Chile")

const socioPrecio = (duracion, sector) => {
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

const packSocio = [
      { Ubicacion: "Platea",
      Precio: socioPrecio(duracion,sector),
      Tiempo: duracion + " meses" }, 
      { Ubicacion: "Laprida",
      Precio: socioPrecio(duracion,sector),
      Tiempo: duracion + " meses" }, 
      { Ubicacion: "Bolivia",
      Precio: socioPrecio(duracion,sector),
      Tiempo: duracion + " meses"},
      { Ubicacion: "Chile",
      Precio: socioPrecio(duracion,sector),
      Tiempo: duracion + " meses"} ]


if (Socio != "ESC") {

    /*let ubicacion = packSocio.includes(sector)*/
    const resultado = packSocio.find((el) => el.Ubicacion.includes(sector))

    while (duracion == 6 && resultado) {
        for (let i = 1; i <= 20; i++){
            let yaSocio = "!Hola! " + Socio + " Sos el socio N° " + i + " y este es tu pack de socio "
            console.log(yaSocio)
            console.log(resultado)
        }
        break
    }
    while (duracion == 12 && resultado) {
        for (let i = 1; i <= 20; i++){
            let yaSocio = "!Hola! " + Socio + " Sos el socio N° " + i + " y este es tu pack de socio "
            resultado
            console.log(yaSocio)
            console.log(resultado)
        }
        break
    }     
} else {
    alert ("Por favor, Ingresar nombre y apellido completo para asociarse")
}