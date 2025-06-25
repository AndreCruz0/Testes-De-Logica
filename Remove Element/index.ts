function removeElement(nums: number[], val: number): void {
    while(nums.includes(val)){
        const teste = nums.indexOf(val)
        const teste2 = nums.splice(teste , 1 )
    }


};  
removeElement([0 ,1 ,2 ,2 ,2 ,3 ,6] ,3)