const fullImgBox = document.getElementById('fullImgBox')
const fullImg = document.getElementById('fulling')

function closeImg() {
    fullImgBox.style.display='none'
}
function openFull(reference) {
    fullImg.src = reference
    fullImgBox.style.display ="flex"
}

function playAudio() {
    document.getElementById('audio').play()

}
