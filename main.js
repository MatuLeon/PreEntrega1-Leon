console.log("Bienvenidos a Hotel LEON si esta buscando donde hosperdarse, esta en el lugar correcto!" + "" + "\nComplete el formulario");

/*------------------ FUNCIONES ------------ */

function calcularTotal (arr){
    let resultado = 0;
    arr.forEach ( element =>{
        resultado += element.precio * 1.21
    })
    return resultado
}

/*LOCAL STORAGE*/

class Habitaciones{
    constructor(id, nombre, precio, espacio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.espacio = espacio;
    }
}

const listaHabitaciones = [new Habitaciones ]


const carritoCompra = []

/*const listaHabitaciones = [ {id: 1, nombre: "Habitación individual", ubicación: "Frente, 2do piso", precio : 280000, espacio: 1 },
                            {id: 2, nombre: "Habitación pareja", ubicación: "Contrafrente, planta baja", precio : 190000 , espacio: 2 },
                            {id: 3, nombre: "Habitación para tres", ubicación: "Frente, planta baja", precio : 350000 , espacio: 3},
                            {id: 4, nombre: "Habitación cuartetera", ubicación: "Frente, 3er piso", precio : 510000 , espacio: 4},
                            {id: 5, nombre: "Habitación 5 de copas", ubicación: "Contrafrente, 1er piso", precio : 580000, espacio: 5 },
                            {id: 6, nombre: "Habitación Fiesta", ubicación: "Frente, 4to piso", precio : 780000, espacio : 6},
                            ];
*/

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

                    let aPagar = carritoCompra[0].precio -( carritoCompra[0].precio * 0.15);
                    console.log ("Con el descuento del 15% le queda en $" + Math.round(aPagar))
        
                }else if(modoPago == "TARJETA"){


                    let aPagar = carritoCompra[0].precio + (carritoCompra[0].precio* 0.13);
                    console.log ("Con el recargo por tarjeta le queda en $" + Math.round(aPagar))
                }else{


                    alert ("Ingrese un modo de pago o presione 'ESC'");
                    modoPago=prompt ("¿Paga con transferencia o tarjeta?").toUpperCase();
                }
        } else {

            
            alert ("No contamos con habitaciones disponibles")
        }
    }else {
        alert ( persona + " Sentite libre de chusmear nuestras ofertas")
    }



    console.log("El total a pagar con impuesto IVA es de $" + calcularTotal (carritoCompra));


    /*DOM */

    const max_price = document.getElementById("max_price");

    max_price.addEventListener ("change", ()=>{

    })

