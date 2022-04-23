const nbYear = (num1,num2,num3,num4) => {
  let population = num1;
  let count = 0;  
   while(population < num4){
    population = population + (population * (num2 / 100)) + num3; 
    count++;
   }  
   return count;   
}

console.log(nbYear(1500, 5, 100, 5000));

// console.log('hi')
// const nbYear = (num1,num2,num3,num4) => {
//     console.log('hi')
//     let population = num1;

// }

// console.log(nbYear(1500, 5, 100, 5000));