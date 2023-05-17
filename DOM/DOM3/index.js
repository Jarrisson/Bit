const AgregarClase = () => {
    const miTitulo = document.getElementById('titulo')
    miTitulo.classList.add('destacado')

    const miParrafo = document.getElementById('parrafo')
    miParrafo.classList.add('oculto')

}

const QuitarClase = () => {
    const miTitulo = document.getElementById('titulo')
    miTitulo.classList.remove('destacado')

    const miParrafo = document.getElementById('parrafo')
    miParrafo.classList.remove('oculto')

}