var producto ={
    categoria: " ", 
    nombre: " ",
    cantidad: " ",
    precio: " ",
}

var array = []
function subir(event){

    event.preventDefault();
    let categoria = document.getElementById('idCategoria').value;
    let productos = document.getElementById('idProducto').value;
    let cantidad = document.getElementById('idCantidad').value;
    let precio = document.getElementById('idPrecio').value;

    var producto = new Object()
    producto.categoria = categoria;
    producto.nombre = productos;
    producto.cantidad = cantidad;
    producto.precio = precio;


    array.push(producto)

    console.log(array)


}

