let listaHabitaciones =[
    { 
        id: 1, 
        nombre: "Habitación individual", 
        ubicación: "Planta baja", 
        precio: 16000, espacio: 1 , 
        dias : 1 ,
        img: "https://http2.mlstatic.com/D_NQ_NP_655385-MLA25685746798_062017-W.webp", 
        alt :"habitación individual"  
},
    { 
        id: 2, 
        nombre: "Habitación individual", 
        ubicación: "Segundo piso", 
        precio: 23000, 
        espacio: 1, 
        img: "https://http2.mlstatic.com/D_NQ_NP_390111-MLA20460698853_102015-W.webp", 
        dias :1,
        alt : "habitación individual"   
},

    { 
        id: 3, 
        nombre: "Habitación individual", 
        ubicación: "Primer piso", 
        precio: 21000, 
        espacio: 1, 
        img: "https://http2.mlstatic.com/D_NQ_NP_845727-MLA53571868357_022023-W.webp", 
        dias :1,
        alt : "habitación individual"  
},
    { 
        id: 4, 
        nombre: "Habitación doble", 
        ubicación: "Segundo piso", 
        precio: 29000, 
        espacio: 2, 
        img: "https://http2.mlstatic.com/D_NQ_NP_943852-MLA44711490365_012021-W.webp", 
        dias :1,
        alt : "habitación doble"   
},
    { 
        id: 5, 
        nombre: "Habitación matrimonial", 
        ubicación: "Tercer piso", 
        precio: 35000, 
        espacio: 2, 
        img:"https://http2.mlstatic.com/D_NQ_NP_871786-MLA47042878440_082021-W.webp", 
        dias :1,
        alt : "habitación matrimonial"  
},
    { 
        id: 6, 
        nombre: "Habitación para tres", 
        ubicación: "Planta baja", 
        precio: 32000, 
        espacio: 3, 
        img:"https://http2.mlstatic.com/D_NQ_NP_782910-MLA52511361614_112022-W.webp", 
        dias :1,
        alt : "habitación tres"  
},
    { 
        id: 7, 
        nombre: "Habitación cuartetera", 
        ubicación: "Tercer piso", 
        precio: 51000, 
        espacio: 4, 
        img:"https://http2.mlstatic.com/D_NQ_NP_897536-MLA52565385682_112022-W.webp", 
        dias :1,
        alt : "habitación cuartetera"  
},
    { 
        id: 8, 
        nombre: "Habitación 5 de copas", 
        ubicación: "Cuarto piso", 
        precio: 58000, 
        espacio: 5, 
        img:"https://http2.mlstatic.com/D_NQ_NP_965023-MLA54453166171_032023-W.webp", 
        dias :1,
        alt : "habitación 5"  
},
    { 
        id: 9, 
        nombre: "Habitación Fiesta", 
        ubicación: "Quinto piso", 
        precio: 78000, 
        espacio: 6, 
        img:"https://http2.mlstatic.com/D_NQ_NP_700099-MLA47590502580_092021-W.webp", 
        dias :1 ,
        alt : "habitación premium" 
},

]

const listaHabitacionesJSON = JSON.stringify (listaHabitaciones)

localStorage.setItem ("listaHabitaciones", listaHabitacionesJSON)

/* let listaHabitaciones



const form = document.getElementById ("formulario")

form.addEventListener ("submit", (e)=>{

    e.preventDefault()

    const id = document.getElementById("id").value
    const nombre = document.getElementById("nombre").value
    const precio = document.getElementById("precio").value
    const descripcion = document.getElementById("descripcion").value


    listaHabitaciones.push ({id:id, nombre:nombre, precio:precio , descripcion : descripcion})

    /*---Convertimos en string plano ---

    const listaHabitacionesJSON = JSON.stringify(listaHabitaciones)

    localStorage.setItem ("listaHabitaciones", listaHabitacionesJSON)

    form.reset()
})*/
