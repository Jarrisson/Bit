const mostrarImg =()=>{
    const showImg = prompt('ingrese URL de la imagen')
    if (showImg) {
        const containerDiv = document.getElementById('imgContainer');
        const newImage = document.createElement('img');
        newImage.src = showImg;
        containerDiv.appendChild(newImage)
    }

}