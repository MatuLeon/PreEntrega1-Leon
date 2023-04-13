class ProductoController {
    constructor() {
        this.listaHabitaciones = []
        this.contenedor_productos = document.getElementById("contenedor_productos");

    }

    mostrarDOM() {
        //limpio
        this.contenedor_productos.innerHTML = ""

        //muestro toda la lista
        this.listaHabitaciones.forEach(habitacion => {
            this.contenedor_productos.innerHTML += `
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



    async levantarJSON(controladorCarrito){
        let res = await fetch ("./js/api_productos.json")
        this.listaHabitaciones = await res.json()
        this.mostrarDOM()
        this.eventoAnadirCarrito(controladorCarrito)
    }




    eventoAnadirCarrito(controladorCarrito){
        this.listaHabitaciones.forEach(habitacion => {
            const sumarCarrito = document.getElementById(`habitacion${habitacion.id}`)
        
            sumarCarrito.addEventListener("click", () => {
        
                controladorCarrito.anadir(habitacion)
                controladorCarrito.limpiarDOM()
                controladorCarrito.levantar
                controladorCarrito.mostrarDOM(contenedor_carrito)
                Toastify({
                    text: "Añadido correctamente",
                    duration: 2000,
                    gravity: "bottom",
                    position: "right",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                }).showToast();
        
                controladorCarrito.mostrarPreciosDOM(precio, precio_con_iva)
            })
        })
    }

}


class CarritoController {
    constructor() {
        this.listaCarrito = []
        this.contenedor_carrito = document.getElementById("contenedor_carrito");
        this.precio = document.getElementById ("precio")
        this.precio_con_iva = document.getElementById ("precio_con_iva")
        this.finalizar_compra = document.getElementById("finalizar_compra");
        this.sumarDia = document.getElementsByClassName("sumar")
        this.restarDia = document.getElementsByClassName("restar")

    }

    levantar() {
        let obtenerListaJSON = localStorage.getItem("listaCarrito")
        if (obtenerListaJSON){
            this.listaCarrito = JSON.parse (obtenerListaJSON)
            return true
        }
        return false

    }


    anadir(habitacion) {

        let existeProducto = this.listaCarrito.some(producto => producto.id == habitacion.id)

        if (existeProducto){

            const productoEncontrado = this.buscar(habitacion.id)
            productoEncontrado.dias += 1
        
        }else{
            this.listaCarrito.push(habitacion)

        }

        let carritoJSON = JSON.stringify(this.listaCarrito)
        localStorage.setItem("listaCarrito", carritoJSON)

    }


    borrar(producto) {
        let indice = this.listaCarrito.indexOf(producto)
        this.listaCarrito.splice(indice, 1)
    }


    productos_HTML (producto){
        return `
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
                        <p class = "card-text">
                            <small class="text-body-secondary">dias de estadia:  ${producto.dias}</small>
                            <span>
                                <button class="sumar" id="sumar${producto.id}">+</button>
                            </span>
                            <span>
                                <button class="restar" id="restar${producto.id}">-</button>
                            </span>
                        </p>

                        <button id="borrar${producto.id}"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>

        `
    }

    limpiarDOM(){
        this.contenedor_carrito.innerHTML = ""
    }

    mostrarDOM() {
        this.limpiarDOM()
        this.listaCarrito.forEach(producto => {
            this.contenedor_carrito.innerHTML += this.productos_HTML(producto)
        })
        this.mostrarPreciosDOM()
        this.eventoBorrar()
    }


    eventoBorrar(){
        this.listaCarrito.forEach(producto => {
            document.getElementById(`borrar${producto.id}`).addEventListener("click", () => {

                //borramos el producto de this.listaHabitaciones
                this.borrar(producto)

                //actualizamos el storage
                localStorage.setItem("listaCarrito", JSON.stringify(this.listaCarrito));

                //Actualizar DOM

                this.mostrarDOM()
                this.mostrarPreciosDOM()
            })
        })
    }
    

    limpiar() {
        this.listaCarrito = []
        localStorage.removeItem("listaCarrito")
    }

    sumar(){
        this.sumarDia.addEventListener("click", ()=>{
            //No logre crear la funcion sumar
        })
    }

    mostrarPreciosDOM (){
        this.precio.innerHTML = `$"${this.calcularTotal()}"`
        this.precio_con_iva.innerHTML = `$"${this.calcularPrecioConIva()}"`
    }

    calcularTotal (){
        return this.listaCarrito.reduce((acumulador, habitacion)=>acumulador + habitacion.precio * habitacion.dias,0)
    }

    calcularPrecioConIva (){
        return this.calcularTotal() * 1.21;
    }

    buscar(id){
        return this.listaCarrito.find (producto => producto.id == id)
    }


    finalizarCompra(){
        this.finalizar_compra.addEventListener("click", () => {


            if (this.listaCarrito.length > 0) {
                this.limpiar()
                this.mostrarDOM(contenedor_carrito)
        
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
        
            controladorCarrito.mostrarPreciosDOM(precio,precio_con_iva)
        
        })
    }

}

//Objetos controladores
const controladorProducto = new ProductoController();
const controladorCarrito = new CarritoController();


//VERIFICAR STORAGE

const levantarAlgo = controladorCarrito.levantar();



//Eventos y DOM
controladorCarrito.mostrarDOM();
controladorProducto.eventoAnadirCarrito(controladorCarrito)

controladorProducto.levantarJSON(controladorCarrito)

controladorProducto.mostrarDOM();

controladorCarrito.finalizarCompra()




