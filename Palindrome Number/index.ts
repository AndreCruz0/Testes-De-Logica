function checkPalindrome(x: number) : boolean {
    const array = [x]
    const arrayFiltered :  string[] = [] 
    array.map(e => {
     const sexo =    e.toString().split("")
   
   
      arrayFiltered.push(...sexo)
    })
    const teste = arrayFiltered.reverse().map(Number)
     return array.join("") === teste.join("");
  
}
console.log(checkPalindrome(121));
