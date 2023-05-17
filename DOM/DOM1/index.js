function AgregarDatos () {
    const datos = prompt('ingrese un datos')
        if (datos) {
            const datosDiv = document.getElementById('datos');
            const nuevoDato =document.createElement('p')
            nuevoDato.textContent = datos;   
            datosDiv.appendChild(nuevoDato)
        }
}
