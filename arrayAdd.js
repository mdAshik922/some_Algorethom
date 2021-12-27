function arrayTotal (numbers){
    let sum = 0; 
    for(let i = 0; i < numbers.length; i++)
    {const element = numbers[i];
         sum += element;
        }
         return sum;
        }; 
    const total = arrayTotal([32, 44, 1]);
    console.log(total)