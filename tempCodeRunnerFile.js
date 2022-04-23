const nbYear = (num1,num2,num3,num4) => {
  let population = num1;
  let count = 0;  
  console.log('hi')
   while(population < num4){
       console.log('hi')
    population = population + (population * (num2 / 100)) + num3; 
    count++;
   }  
   return count;   
}

console.log(nbYear(1500, 5, 100, 5000));