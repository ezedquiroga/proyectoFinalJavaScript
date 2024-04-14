// Productos

const productos = [
    {id: 1, prod: "a", precio: 2000},
    {id: 2, prod: "b", precio: 3000},
    {id: 3, prod: "c", precio: 3500},
];

// Calcular compra

function calcularTotal(carrito){
    return carrito.reduce((total, item) => {
        return total + (item.cantidad * item.producto.precio);
    }, 0);
}

// Carrito

function realizarCompra(){

    let carrito = [];
    let seleccion = prompt ('¿Que producto queres comprar? (1: a, 2: b, 3: c, 0: Finalizar compra)');

    while (seleccion != '0'){
        if(['1', '2', '3'].includes(seleccion)){
            let cantidad = parseInt(prompt('¿Cuantas unidades de ' + seleccion + ' queres?'));
            let producto = productos.find(p => p.id === parseInt(seleccion));
            carrito.push({producto, cantidad});
            confirm ('Añadiste ' + cantidad + ' de ' + producto.prod + ' al carrito');
        } else {
            alert ('Seleccion no valida');
        }
        seleccion = prompt ('¿Queres agregar otro producto? (1: a, 2: b, 3: c, 0: Finalizar compra)');
    }

    const total = calcularTotal(carrito);
    confirm('El total de la compra es: ' + total);

}

// Iniciar compra

realizarCompra();