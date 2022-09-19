/*Simulador para asociarse, ingresa nombres, ubicacion y duracion, para devolver lo mismo con el numero de asociamiento correspondiente y el precio a pagar*/

let principal = document.getElementById("main")
principal.className = "container"
let miFormulario = document.getElementById("formulario");
miFormulario.className = "d-flex flex-column justify-content-evenly"

let caja0 = document.getElementById("socio")
let caja1 = document.getElementById("duracion")
let caja2 = document.getElementById("sector")
let caja3 = document.getElementById("email")
caja0.className = "row"
caja1.className = "row"
caja2.className = "row"
caja3.className = "row"


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

const dataJson = async (socio, nuevoSocio) => {
    const data = await fetch('/padronSocios.json')
    const dataNombre = await data.json()
    
    const verificar = dataNombre.some((el) => el.Nombre == socio)

    if (verificar != true) {
        let enviarJson = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(nuevoSocio),
            headers: {
                'Content-type': 'application/json;charset=UTF-8',
            },
        })
        let Json = await enviarJson.json()
        
                let div = document.getElementById("Constructor")
                div.className = "d-flex flex-column align-items-center"
                
                let caja = `<h2>¡Hola! Este es tu pack de socio</h2>
                            <p>Nombre: ${Json.Identificacion}</p>
                            <p>Ubicacion: ${Json.Ubicacion}</p>
                            <p>Precio: ${Json.Precio}</p>
                            <p>Tiempo: ${Json.Tiempo}</p>`                                   
                div.innerHTML = caja
                swal("¡Listo!", "El socio " + Json.Identificacion + " se ha asociado con exito" , "success")
    } else {
        swal("Error", "El socio con el nombre " + socio + " ya existe en el padron", "error")
}
}

miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target
    let socio = (formulario.children[1].children[1].value)
    let duracion = (formulario.children[2].children[1].value)
    let sector = (formulario.children[3].children[1].value)
    let email = (formulario.children[4].children[1].value)


    let packSocio = [
        { Ubicacion: "Platea",
        Identificacion : socio,
        Precio:"$" + socioPrecio(duracion,sector),
        Tiempo: duracion + " meses",
        Email: email }, 
        { Ubicacion: "Laprida",
        Identificacion : socio,
        Precio:"$" + socioPrecio(duracion,sector),
        Tiempo: duracion + " meses",
        Email: email }, 
        { Ubicacion: "Bolivia",
        Identificacion : socio,
        Precio:"$" + socioPrecio(duracion,sector),
        Tiempo: duracion + " meses",
        Email: email },
        { Ubicacion: "Chile",
        Identificacion : socio,
        Precio:"$" + socioPrecio(duracion,sector),
        Tiempo: duracion + " meses",
        Email: email } ]

        const buscador = packSocio.find((el) => el.Ubicacion == sector)
  
        dataJson(socio, buscador)
        
}