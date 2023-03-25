class ProductoController{
    constructor (){
        this.listaHabitaciones = []
    }


    levantarProductos(){
        let obtenerListaJSON = localStorage.getItem ("listaHabitaciones")


        if (obtenerListaJSON){
            this.listaHabitaciones = JSON.parse (obtenerListaJSON)
        }
    }


    mostrarDOM (contenedor_productos){
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
    constructor(){
        this.listaCarrito = []
    }

    levantar (){
        let obtenerListaJSON = localStorage.getItem ("listaCarrito")
        if (obtenerListaJSON){
            this.listaCarrito = JSON.parse (obtenerListaJSON)
        }
    }


    anadir (habitacion){
        this.listaCarrito.push(habitacion)
        
        let carritoJSON = JSON.stringify(this.listaCarrito)
        localStorage.setItem("listaCarrito", carritoJSON)


    }


    mostrarDOM(contenedor_carrito){

        //limpio contenedor
        contenedor_carrito.innerHTML = ""
        //muestro todo
        this.listaCarrito.forEach (producto =>{
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
                        </div>
                    </div>
                </div>
            </div>
    
            `
            })
    }
}

//Objetos controladores
const controladorProducto = new ProductoController ();
const controladorCarrito = new CarritoController();


//VERIFICAR STORAGE
controladorProducto.levantarProductos();
controladorCarrito.levantar();

//DOM
const contenedor_productos = document.getElementById ("contenedor_productos");

const contenedor_carrito = document.getElementById ("contenedor_carrito");

//APP JS

/*---Recorremos el array para agregar html a cada habitación---------*/
controladorProducto.mostrarDOM(contenedor_productos);
controladorCarrito.mostrarDOM(contenedor_carrito);



/*---Evento de click para sumar un producto al carrito--------- */

controladorProducto.listaHabitaciones.forEach (habitacion =>{
    const sumarCarrito = document.getElementById (`habitacion${habitacion.id}`)

    sumarCarrito.addEventListener ("click", ()=>{

        controladorCarrito.anadir(habitacion)
        controladorCarrito.levantar
        controladorCarrito.mostrarDOM(contenedor_carrito)
    })
})