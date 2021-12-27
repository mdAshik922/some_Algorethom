const number = [11, 32, 54, 61, 65, 78, 100, 125, 450, 600];

function Binnery_search(array, target){
    let start = 0;
    let end = array.length -1;
     while (start <= end){
         let mid = Math.floor((start + end) / 2);
         if(array[mid] === target){
             return mid;
         }
         if(target < array[mid]){
             end = mid - 1;

         }
         if(target > array[mid]){
             start = mid + 1;
         }
      
     }
     return -1;
};
const index = Binary_search(number, 78)

console.log(index);