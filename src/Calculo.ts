export function calcularTotal(cantidad: string, plazo: string): number {
    const cantidadInt: number = parseInt(cantidad);
    const plazoInt: number = parseInt(plazo);

    let totalCantidad: number;
    if (cantidadInt <= 1000) {
        totalCantidad = cantidadInt * 0.25;
    } else if (cantidadInt > 1000 && cantidadInt <= 5000) {
        totalCantidad = cantidadInt * 0.20;
    } else if (cantidadInt > 5000 && cantidadInt <= 10000) {
        totalCantidad = cantidadInt * 0.15;
    } else {
        totalCantidad = cantidadInt * 0.10;
    }

    let totalPlazo: number;
    switch (plazoInt) {
        case 3:
            totalPlazo = cantidadInt * 0.05;
            break;
        case 6:
            totalPlazo = cantidadInt * 0.10;
            break;
        case 12:
            totalPlazo = cantidadInt * 0.15;
            break;
        case 24:
            totalPlazo = cantidadInt * 0.20;
    break;
        default:
            totalPlazo = 0;
            break;
    }

    return totalCantidad + totalPlazo + cantidadInt;
}
