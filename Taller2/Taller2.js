const Array = []

function MayorArray(Array) {
   if (Array == 0) {
        console.log('Null, no hay numeros')
   }
   if (Array.length == 1) {
        console.log('EL unico elemento que hay es ' + Array[0])
   }

//    if (Array.length == 2 || Array.length > 2) { 

//         let NumMayor = Math.max(...Array)
//         console.log('el numero mayo es ' + NumMayor)
//     }
// Ya hubiera acabado aqui iwi, pero lei los requisitos y me toco ahora hacerlo con for T-T
}
MayorArray([1,3,5,67,7,2])
