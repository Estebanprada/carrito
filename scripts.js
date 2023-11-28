// Funci0n para calcular el total de la compra
function calcularTotal() {
    // Obtener la cantidad ingresada para cada producto
    var cantidad1 = document.getElementById('cantidad1').value;
    var cantidad2 = document.getElementById('cantidad2').value;
    var cantidad3 = document.getElementById('cantidad3').value;

    // Precios de cada producto
    var precioLibro1 = 25000;
    var precioLibro2 = 15000;
    var precioLibro3 = 55000;
    
    // Calcular el total de la compra sumando los productos seleccionados
    var totalCompra = (cantidad1 * precioLibro1) + (cantidad2 * precioLibro2) + (cantidad3 * precioLibro3);

    // Mostrar el total en la pagina y mostrar la seccion de resultados
    document.getElementById('totalCompra').innerText = 'Precio: $' + Math.round(totalCompra);
    document.getElementById('resultadoTotal').style.display = 'block';
    
    //He utilizado la funcion Math.round()para redondear el total al numero entero mas cercano con esto asegura que el total se muestre sin decimales.
}
