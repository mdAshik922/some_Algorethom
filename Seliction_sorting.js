const number = [11, 32, 100, 125, 54, 61, 65, 78, 450, 600];

function Seliction_sorting(array){
    for(let i = 0; i < array.length; i++ ){
       let min = i;
       for ( let j = i; j < array.length; j++){
           if(array[j] < array[min]){
               min = j;
           }
       }
       [array[i], array[min]] = [array[min], array[i]];
        }
        return array;
}
const select = Seliction_sorting(number);
console.log(select);