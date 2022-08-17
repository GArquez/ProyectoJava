/*Simulador para asociarse, ingresa nombres, ubicacion y duracion, para devolver lo mismo con el numero de asociamiento correspondiente y el precio a pagar*/
let principal = document.getElementById("Main")
principal.className = "container d-flex flex-column align-items-center justify-content-center"
const contenido = `<form id="formulario" action method="get" enctype="text/plain">
                   <div class="d-flex flex-column align-items-center justify-content-center"> 
                   <h1>Asociate al Club Atlético Tucumán</h1>
                   </div>
                   <p>Esta es una app para asociarte. Ingresa nombres, ubicacion y duracion, para devolverte tu pack de socio</p>
                   <div class="row">
                   <div class="col-md-4 d-flex flex-column align-items-center"><label>Nombre y Apellido</label><input id="Socio"></input></div>
                   <div class="col-md-4 d-flex flex-column align-items-center"><label>Duracion</label><input id="Duracion" placeholder="Coloque en numero 6 o 12 meses"></input></div>
                   <div class="col-md-4 d-flex flex-column align-items-center"><label>Sector</label><input id="Sector" placeholder="Coloque Platea, Laprida, Chile o Bolivia"></input></div>
                   </div>
                   <div class="d-flex flex-column align-items-center"><button type="submit" class="btn btn-primary">Enviar</button></div>
                   </form>`
principal.innerHTML = contenido


let Socio = 0
const duracion = 0
const sector = 0

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);


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


let div = document.createElement("div")
div.className = "d-flex flex-column align-items-center"
let caja = `<h2>Este es tu pack de socio</h2>
            <p>Ubicacion: ${packSocio.Ubicacion}</p>
            <p>Precio: ${packSocio.Precio}</p>
            <p>Tiempo: ${packSocio.Tiempo}</p>`
div.innerHTML = caja 


if (Socio != "ESC") {

    /*let ubicacion = packSocio.includes(sector)*/
    const resultado = packSocio.find((el) => el.Ubicacion.includes(sector))

    while (duracion == 6 && resultado) {
        function validarFormulario(e){
            e.preventDefault();
            let formulario = e.target
            Socio=(formulario.children[0].value);  
            duracion=parseInt((formulario.children[1].value));
            sector=(formulario.children[2].value); 
            document.main.apnned(div)
        }
    }
    while (duracion == 12 && resultado) {
        function validarFormulario(e){
            e.preventDefault();
            let formulario = e.target
            Socio=(formulario.children[0].value);  
            duracion=parseInt((formulario.children[1].value));
            sector=(formulario.children[2].value); 
            document.main.apnned(div)
        }
    }     
} else {
    alert ("Por favor, Ingresar nombre y apellido completo para asociarse")
}
