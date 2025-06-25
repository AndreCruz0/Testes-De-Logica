// function findMedianSortedArrays(nums1: number[], nums2: number[]): void {
// const soma = nums1.reduce ( (e , numero) => {
//         return  e + numero
// },0) 
//     const somaDoArray2 = nums2.reduce((e , number)  => { 
//         return  e +number
//     } ,0)
//     const resultadoFinal =    (somaDoArray2  + soma) / (nums1.length + nums2.length)
//     console.log(resultadoFinal);
// };
// findMedianSortedArrays([1,3] , [2])



function findMedianSortedArrays(nums1: number[], nums2: number[]): number | undefined {
  let arrayJunto = nums1.concat(nums2).sort((a, b) => a - b);
  let arrayCerto = 0;

  while (arrayJunto.length > 2) {
    if (arrayJunto.length % 2 !== 0) {
      const tirarMaximo = Math.max(...arrayJunto);
      const tirarNumero = arrayJunto.indexOf(tirarMaximo);
      arrayJunto.splice(tirarNumero, 1);
      const tirarMinimo = Math.min(...arrayJunto);
      const tirarNumeroMinimo = arrayJunto.indexOf(tirarMinimo);
      arrayJunto.splice(tirarNumeroMinimo, 1);
    } else {
      const tirarMaximo = Math.max(...arrayJunto);
      const tirarNumero = arrayJunto.indexOf(tirarMaximo);
      arrayJunto.splice(tirarNumero, 1);
      const tirarMinimo = Math.min(...arrayJunto);
      const tirarNumeroMinimo = arrayJunto.indexOf(tirarMinimo);
      arrayJunto.splice(tirarNumeroMinimo, 1);
    }
  }

  if (arrayJunto.length === 1) {
    return arrayJunto[0];
  } else if (arrayJunto.length === 2) {
    const division = arrayJunto.reduce((e, number) => e + number, 0);
    arrayCerto = division / 2;
    return arrayCerto;
  }

  return undefined;
}
console.log(findMedianSortedArrays([1, 3], [2]));         

 







//     const teste = nums1.map(e => {
//     console.log(e);
    
// })
// console.log(teste);


//     const transform = nums1.map(e=> {
//    return nums2.map( opa => {
//           console.log( e + opa 
//           );
           
          
//         })
        
        
//     })
//     console.log(transform);
    
    // console.log(transform.pop());
// const result: number[] = transform.pop() ?? []; // garante que seja array

// const firstNumber = result[0] ?? 0; // usa 0 se o array estiver vazio

// const teste = firstNumber / (nums1.length + 1 + nums2.length + 1);

//     console.log(teste);