alert("Bienvenidos a Hotel LEON si esta buscando donde hosperdarse, esta en el lugar correcto!" + "" + "\n" + "Complete el formulario" )

let fullName = prompt("Ingrese su nombre completo")
    while(fullName==""){
        console.log ("Usted no ingreso ningun nombre")
        fullName = prompt("Ingrese su nombre, por favor")
    }

let phoneNumber = Number(prompt("Ingrese su número de teléfono"));
    while (phoneNumber==""){
        alert ("Ingrese un número de teléfono, por favor")
        phoneNumber= prompt("Ingrese su número")
    }

let peopleNumber = Number(prompt("Ingrese el número de familiares a hospedarse"));
    if (peopleNumber === 1){
        alert ("Tenemos espacio para usted!");
    }else if (peopleNumber <=4 && peopleNumber > 1){
        alert ("Tenemos espacio para usted y su familia!");
    }else if (peopleNumber >=5 && peopleNumber <=8){
        alert ("ULTIMA CABAÑA EXCLUSIVA PARA 8 PERSONAS MAXIMO, APROVECHE YA YA YA");
    }else{
        alert ("No hay cabañas disponibles, disculpe");
    }

    
function Paymethod (){
    let option1 = "transferencia"
    let option2 = "tarjeta"
    if (chosePaymethod === option1){
        console.log(true + "" + " Usted eligio transferencia")
        alert ("Si realiza la transferencia en las proximas 48 horas tiene un reintregro del 10%")
    }else if (chosePaymethod === option2){
        console.log(true + "" + " Usted eligio tarjeta")
        alert ("Aceptamos todas las tarjetas y hasta 6 cuotas sin interes")
    }else{
        alert ("Elija un metodo de pago valido")
    }
}

let chosePaymethod =prompt("¿Quiere abonar con tarjeta o transferencia?").toLowerCase()
Paymethod (chosePaymethod)



