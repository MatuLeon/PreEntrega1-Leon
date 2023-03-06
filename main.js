console.log("Bienvenidos a Hotel LEON si esta buscando donde hosperdarse, esta en el lugar correcto!" + "" + "\nComplete el formulario");

function calcularIVA (arr){
    let total;
    arr.forEach ( producto =>{
        total = producto.precio * 1.21
    })
    return total
}

function descuentoDebito (modoPago){
    
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



let rta = prompt ("¿Esta buscando donde hospedarse?" + "\nResponda si o no").toLowerCase()

    if (rta != "no"){
        let espacio = Number (prompt ("¿Para cuantas personas?"));

        if (listaHabitaciones.some( cantidad => cantidad.espacio >= espacio)){
            carritoCompra.push(listaHabitaciones.find(cantidad => cantidad.espacio >= espacio))
            alert("Aceptamos transferencias y tarjeta debito o credito")
            let modoPago = prompt ("¿Paga con transferencia o tarjeta?").toUpperCase()
            let option1 = "TRANSFERENCIA"
            let option2 = "TARJETA"
                if(modoPago == option1 ){
                    
                }
        } else {
            alert ("No contamos con habitaciones disponibles")
        }
    }


    calcularIVA (carritoCompra);

