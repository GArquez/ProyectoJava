/*Simulador para asociarse, ingresa nombres, ubicacion y duracion, para devolver lo mismo con el numero de asociamiento correspondiente y el precio a pagar*/

let principal = document.getElementById("Main")
principal.className = "container d-flex flex-column align-items-center"

let caja0 = document.getElementById("Socio")
let caja1 = document.getElementById("Duracion")
let caja2 = document.getElementById("Sector")
let caja3 = document.getElementById("Enviar")
caja0.className ="col-md-3 d-flex flex-column align-items-center"
caja1.className ="col-md-3 d-flex flex-column align-items-center"
caja2.className ="col-md-3 d-flex flex-column align-items-center"
caja3.className ="col-md-3 d-flex flex-column align-items-center"

const titular = document.getElementById("titular")
const parrafo = document.getElementById("parrafo")
titular.innerHTML = "Asociate al Club Atlético Tucumán"
parrafo.innerHTML = "Mediante esta app vas a poder asociarte. Ingresa tu nombre completo, elegí entre 6 y 12 meses junto a la ubicacion deseada ¡y tenes tu pack de socio!"


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

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target
    let socio = (formulario.children[0].value)
    let duracion = (formulario.children[1].value)
    let sector = (formulario.children[2].value)

    socioPrecio(duracion, sector)

    const packSocio = [
        { Ubicacion: "Platea",
        Precio:"$" + socioPrecio(duracion,sector),
        Tiempo: duracion + " meses" }, 
        { Ubicacion: "Laprida",
        Precio:"$" + socioPrecio(duracion,sector),
        Tiempo: duracion + " meses" }, 
        { Ubicacion: "Bolivia",
        Precio:"$" + socioPrecio(duracion,sector),
        Tiempo: duracion + " meses"},
        { Ubicacion: "Chile",
        Precio:"$" + socioPrecio(duracion,sector),
        Tiempo: duracion + " meses"} ]

        
        if (socio != "") {
            const buscador = packSocio.find((el) => el.Ubicacion == sector)
            
            while (duracion == 6 && buscador) {
            let div = document.getElementById("Constructor")
            div.className = "d-flex flex-column align-items-center"
            let caja = `<h2>¡Hola! Este es tu pack de socio</h2>
                        <p>Ubicacion: ${buscador.Ubicacion}</p>
                        <p>Precio: ${buscador.Precio}</p>
                        <p>Tiempo: ${buscador.Tiempo}</p>`
            return div.innerHTML = caja
            }    
            while (duracion == 12 && buscador) {
            let div = document.getElementById("Constructor")
            div.className = "d-flex flex-column align-items-center"
            let caja = `<h2>Este es tu pack de socio</h2>
                        <p>Ubicacion: ${buscador.Ubicacion}</p>
                        <p>Precio: ${buscador.Precio}</p>
                        <p>Tiempo: ${buscador.Tiempo}</p>`
            return div.innerHTML = caja
            }
        } else {
        alert ("Por favor, Ingresar nombre y apellido completo para asociarse")
    }
}