class ProductoController {
    constructor() {
        this.listaHabitaciones = []
    }


    levantarProductos() {
        this.listaHabitaciones = JSON.parse(localStorage.getItem("listaHabitaciones")) || []


    }


    mostrarDOM(contenedor_productos) {
        //limpio
        contenedor_productos.innerHTML = ""

        //muestro toda la lista
        this.listaHabitaciones.forEach(habitacion => {
            contenedor_productos.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${habitacion.img}" class="card-img-top" alt="${habitacion.alt}">
                <div class="card-body">
                    <h5 class="card-title">${habitacion.nombre}</h5>
                    <p class="card-text">
                        $${habitacion.precio}
                    </p>
                    <a href="#" class="btn btn-primary" id="habitacion${habitacion.id}">Reservar</a>
                </div>
            </div>`
        });
    }

}


class CarritoController {
    constructor() {
        this.listaCarrito = []
    }

    levantar() {
        this.listaCarrito = JSON.parse(localStorage.getItem("listaCarrito")) || []

    }


    anadir(habitacion) {
        this.listaCarrito.push(habitacion)

        let carritoJSON = JSON.stringify(this.listaCarrito)
        localStorage.setItem("listaCarrito", carritoJSON)


    }


    borrar(producto) {
        let indice = this.listaCarrito.indexOf(producto)
        this.listaCarrito.splice(indice, 1)
    }

    mostrarDOM(contenedor_carrito) {

        //limpio contenedor
        contenedor_carrito.innerHTML = ""
        //muestro todo
        this.listaCarrito.forEach(producto => {
            contenedor_carrito.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="${producto.img}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">
                                    ${producto.ubicación}
                            </p>
                            <p class="card-text">
                                <small class="text-body-secondary">$${producto.precio}</small>
                            </p>
                            <button id="borrar${producto.id}"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>
    
            `
        })

        //evento para borrar producto con button

        this.listaCarrito.forEach(producto => {
            document.getElementById(`borrar${producto.id}`).addEventListener("click", () => {

                //borramos el producto de this.listaHabitaciones
                this.borrar(producto)

                //actualizamos el storage
                localStorage.setItem("listaCarrito", JSON.stringify(this.listaCarrito));

                //Actualizar DOM

                this.mostrarDOM(contenedor_carrito)
            })
        })
    }

    limpiar() {
        this.listaCarrito = []
        localStorage.removeItem("listaCarrito")
    }
}

//Objetos controladores
const controladorProducto = new ProductoController();
const controladorCarrito = new CarritoController();


//VERIFICAR STORAGE
controladorProducto.levantarProductos();
controladorCarrito.levantar();

//DOM
const contenedor_productos = document.getElementById("contenedor_productos");

const contenedor_carrito = document.getElementById("contenedor_carrito");

const finalizar_compra = document.getElementById("finalizar_compra");

//APP JS

/*---Recorremos el array para agregar html a cada habitación---------*/
controladorProducto.mostrarDOM(contenedor_productos);
controladorCarrito.mostrarDOM(contenedor_carrito);



/*---Evento de click para sumar un producto al carrito--------- */

controladorProducto.listaHabitaciones.forEach(habitacion => {
    const sumarCarrito = document.getElementById(`habitacion${habitacion.id}`)

    sumarCarrito.addEventListener("click", () => {

        controladorCarrito.anadir(habitacion)
        controladorCarrito.levantar
        controladorCarrito.mostrarDOM(contenedor_carrito)
        Toastify({
            text: "Añadido correctamente",
            duration: 2000,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    })
})


finalizar_compra.addEventListener("click", () => {


    if (controladorCarrito.listaCarrito.length > 0) {
        controladorCarrito.limpiar()
        controladorCarrito.mostrarDOM(contenedor_carrito)

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Reserva realizada',
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Carrito vacio, debe agregar 1 producto al menos',
            showConfirmButton: false,
            timer: 2000
        })
    }


})
