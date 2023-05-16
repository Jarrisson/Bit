
function MayorArray(Array) {

 //si no hay numeros en el array   
   if (Array.length === 0) {
        console.log('Null');
}
   if (Array.length === 1) {
    console.log('EL unico elemento que hay es ' + Array[0])
}

//Encuentra el numero mayor
let NumeroMayor = Array[0]
for (let i = 1; i < Array.length; i++) {
    if (Array[i] > NumeroMayor) {
        NumeroMayor = Array[i]
    }    
    console.log('el numero mayor es: ' + NumeroMayor)
}
// imprimer los elementos del array
let Elemento = 0
while (Elemento < Array.length) {
    console.log('estos son los elementos que hay: '+Array[Elemento])
    Elemento++
}

//Busca el impar

let impar = 0
let elementoArray = 0

do {
    if (Array[elementoArray]% 2 !==0) {
        impar++
    }
    elementoArray++
    
} while (elementoArray < Array.length);
    console.log('impar: ' + impar)


}


const Array = [50,70,30]
const resultado = MayorArray(Array)
