console.log("Bienvenidos a Hotel LEON si esta buscando donde hosperdarse, esta en el lugar correcto!" + "" + "\nComplete el formulario");

function calcularIVA (arr){
    let total;
    arr.forEach ( producto =>{
        total = producto.precio * 1.21
    })
    return total
}


const carritoCompra = []

const listaHabitaciones = [ {id: 1, nombre: "Habitación individual", ubicación: "Frente, 2do piso", precio : 280.000, espacio: 1 },
                            {id: 2, nombre: "Habitación individual", ubicación: "Contrafrente, planta baja", precio : 190.000 , espacio: 2 },
                            {id: 3, nombre: "Habitación pareja", ubicación: "Frente, planta baja", precio : 350.000 , espacio: 2},
                            {id: 4, nombre: "Habitación pareja", ubicación: "Frente, 3er piso", precio : 510.000 , espacio: 2},
                            {id: 5, nombre: "Habitación familia", ubicación: "Contrafrente, 1er piso", precio : 580.000, espacio: 4 },
                            {id: 6, nombre: "Habitación PREMIUM", ubicación: "Frente, 4to piso", precio : 780.000, espacio : 6},
                            ]


listaHabitaciones.forEach (el=>{
    console.log(el.id)
    console.log(el.nombre)
    console.log(el.ubicación)
    console.log(el.precio)
    console.log(el.espacio)
})

let persona = prompt ("Hola y bienvenido/a, ingrese su nombre por favor")
    while (persona == "" || persona.length <= 2){
        alert ("Dato no valido")
        persona = prompt("Hola y bienvenido, ingrese su nombre por favor");
    }

let rta = prompt ( "Hola " + persona + " ¿Esta buscando donde hospedarse?" + "\nResponda si o no").toLowerCase()
console.log (rta + "Entramos al if")
    if (rta != "no"){
        let espacio = Number (prompt ("¿Para cuantas personas?"));

        if (listaHabitaciones.some( cantidad => cantidad.espacio >= espacio)){
            carritoCompra.push(listaHabitaciones.find(cantidad => cantidad.espacio >= espacio));
            console.log (carritoCompra);
            alert("Aceptamos transferencias y tarjeta")
            let modoPago = prompt ("¿Paga con transferencia o tarjeta?").toUpperCase()
            let option1 = "TRANSFERENCIA"
            let option2 = "TARJETA"
            console.log (modoPago)
                if(modoPago == option1 && modoPago != ""){
                    function descuento (total , descuento){
                        let resultado = ""
                        resultado = total % descuento
                        return resultado;
                    }
                }else if(modoPago == "TARJETA"){
                    function recargo (total, descuento){
                        let resultado = ""
                        resultado = total % descuento
                        console.log (resultado)
                        return resultado
                    }
                }

        } else {
            alert ("No contamos con habitaciones disponibles")
        }
    }else {
        alert ( persona + " Sentite libre de chusmear nuestras ofertas")
    }

    calcularIVA (carritoCompra);

