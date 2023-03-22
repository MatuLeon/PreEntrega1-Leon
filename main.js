
/*Función que calcula el iva*/ 

function calcularTotal (arr){
    let resultado = 0;
    arr.forEach ( element =>{
        resultado += element.precio * 1.21
    })
    return resultado
}





//Array con productos
const room_list = [
    { id: 1, nombre: "Habitación individual", ubicación: "Planta baja", precio: 16000, espacio: 1 , img: "https://http2.mlstatic.com/D_NQ_NP_655385-MLA25685746798_062017-W.webp"},
    { id: 2, nombre: "Habitación individual", ubicación: "Segundo piso", precio: 23000, espacio: 1, img: "https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dwc5b8a303/images/funko/65654-3.png?sw=800&sh=800" },
    { id: 3, nombre: "Habitación individual", ubicación: "Primer piso", precio: 21000, espacio: 1 },
    { id: 4, nombre: "Habitación doble", ubicación: "Segundo piso", precio: 29000, espacio: 2 },
    { id: 5, nombre: "Habitación matrimonial", ubicación: "Tercer piso", precio: 35000, espacio: 2 },
    { id: 6, nombre: "Habitación para tres", ubicación: "Planta baja", precio: 32000, espacio: 3 },
    { id: 7, nombre: "Habitación cuartetera", ubicación: "Tercer piso", precio: 51000, espacio: 4 },
    { id: 8, nombre: "Habitación 5 de copas", ubicación: "Cuarto piso", precio: 58000, espacio: 5 },
    { id: 9, nombre: "Habitación Fiesta", ubicación: "Quinto piso", precio: 78000, espacio: 6 },

]

//Guardamos el array en JSON en localstorage
const roomJSON = JSON.stringify(room_list)

localStorage.setItem ("room_list", roomJSON)

let roomJS = JSON.parse(localStorage.getItem("room_list")) || []



const card_shopping = []

const container_cardShop = document.getElementById("container_cardShop")

const container_rooms = document.getElementById("container_rooms")

//Recorro lista para crear un div por cada objeto

room_list.forEach(room => {

    container_rooms.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="${room.img}">
        <div class="card-body">
            <h5 class="card-title">${room.nombre}</h5>
            <p class="card-text">${room.ubicación}
            </p>
            <p class="card-text">${room.precio}
            </p>
            <a href="#" class="btn btn-primary" id="room${room.id}">Reservar</a>
        </div>
    </div>`

});


room_list.forEach(room => {
    const reserve = document.getElementById(`room${room.id}`)
    reserve.addEventListener("click", ()=>{

        card_shopping.push(room)

        //Limpiamos el carrito
        container_cardShop.innerHTML = ""

        //Agregamos al carrito
        card_shopping.forEach (room=>{

            container_cardShop.innerHTML += 
            `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="..." class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">${room.nombre}</h5>
                        <p class="card-text">${room.ubicación}</p>
                        <p class="card-text"><small class="text-muted">Precio: $ ${room.precio}</small></p>
                        <p class="card-text"><small class="text-muted">Con IVA : $ ${calcularTotal (card_shopping)}</small></p>
                        <input type="number" id="dias" placeholder="Cuantos días quiere quedarse">
                        </div>
                    </div>
                </div>
            </div>
            `
            

        })
        let saveReserve = JSON.stringify (card_shopping)
        localStorage.setItem ("reserva", saveReserve)
        let returnReserve = localStorage.getItem (JSON.parse ("reserva"))
    })
})