const PrecioBase = 0
const Descuento = 0
    switch (true) {
        case PrecioBase <= 0 || Descuento < 0 ||Descuento ===100 :
            console.log('Valores invalidos')
            break;

        case Descuento === 0:
            console.log(`El precio base es: ${PrecioBase}`)
            break;
        
        case Descuento > 0 && Descuento <= 100:
            const PrecioFinal = (PrecioBase * (1 - Descuento /100))
            console.log(`El precio final con descuento es ${PrecioFinal}`)
            break;
                   
        default:
             console.log('Opcion invalida')
            break;
}