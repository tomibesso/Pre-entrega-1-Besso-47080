// crear una funcion para calcular valor del riego

let valorMetroCuadrado = 500;
let manoDeObra = 1.25;

function calcularValorRiego () {

    let continuar = true;
    while (continuar) {
        let largoTerreno = parseInt(prompt("Ingrese el largo del terreno en metros:"));
        let anchoTerreno = parseInt(prompt("Ingrese el ancho del terreno en metros:"));

        let areaTerreno = largoTerreno * anchoTerreno;

        let valorRiego = (areaTerreno + valorMetroCuadrado) * manoDeObra;
        alert("El valor del riego es de " + valorRiego + " Ars. Este es un valor aproximado del total del trabajo incluyendo insumos y mano de obra.");

        let respuesta = prompt("Desea cotizar el valor de otro riego? Indique 'S' o 'N'.");

        if (respuesta !== "S") {
            continuar = false;  
        }
    }
}

calcularValorRiego();


// crear funcion para cuotas