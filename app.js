/*Simulador para asociarse, ingresa nombres, ubicacion y duracion, para devolver lo mismo con el numero de asociamiento correspondiente y el precio a pagar*/

let principal = document.getElementById("Main")
principal.className = "d-flex flex-column align-items-center justify-content-between"

let caja0 = document.getElementById("Socio")
let caja1 = document.getElementById("Duracion")
let caja2 = document.getElementById("Sector")
let caja3 = document.getElementById("Enviar")
caja0.className ="col-md-3 d-flex flex-column align-items-center"
caja1.className ="col-md-3 d-flex flex-column align-items-center"
caja2.className ="col-md-3 d-flex flex-column align-items-center"
caja3.className ="col-md-2 offset-md-1 d-flex flex-column align-items-center"



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
    let socio = (formulario.children[1].value)
    let duracion = (formulario.children[2].value)
    let sector = (formulario.children[3].value)

    socioPrecio(duracion, sector)

    const packSocio = [
        { Ubicacion: "Platea",
        Identificacion : socio,
        Precio:"$" + socioPrecio(duracion,sector),
        Tiempo: duracion + " meses" }, 
        { Ubicacion: "Laprida",
        Identificacion : socio,
        Precio:"$" + socioPrecio(duracion,sector),
        Tiempo: duracion + " meses" }, 
        { Ubicacion: "Bolivia",
        Identificacion : socio,
        Precio:"$" + socioPrecio(duracion,sector),
        Tiempo: duracion + " meses"},
        { Ubicacion: "Chile",
        Identificacion : socio,
        Precio:"$" + socioPrecio(duracion,sector),
        Tiempo: duracion + " meses"} ]


        let SocioMemory = localStorage.getItem('id')

        
        if (SocioMemory != socio) {
            const buscador = packSocio.find((el) => el.Ubicacion == sector)
            
            while (duracion == 6 && buscador) {
            let div = document.getElementById("Constructor")
            div.className = "d-flex flex-column align-items-center"
            let caja = `<h2>¡Hola! Este es tu pack de socio</h2>
                        <p>Nombre: ${buscador.Identificacion}</p>
                        <p>Ubicacion: ${buscador.Ubicacion}</p>
                        <p>Precio: ${buscador.Precio}</p>
                        <p>Tiempo: ${buscador.Tiempo}</p>`
            
            localStorage.setItem('pack', socio)            
            return div.innerHTML = caja
            }    
            while (duracion == 12 && buscador) {
            let div = document.getElementById("Constructor")
            div.className = "d-flex flex-column align-items-center"
            let caja = `<h2>¡Hola! Este es tu pack de socio</h2>
                        <p>Nombre: ${buscador.Identificacion}</p>
                        <p>Ubicacion: ${buscador.Ubicacion}</p>
                        <p>Precio: ${buscador.Precio}</p>
                        <p>Tiempo: ${buscador.Tiempo}</p>`
            
            localStorage.setItem('id', socio)            
            return div.innerHTML = caja
            }
        } else {
        alert ("El socio con nombre " + socio + " ya existe en nuestro padron.")
    }
}