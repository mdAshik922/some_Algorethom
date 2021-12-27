const number = [45, 1, 2, 54, 69, 54, 69, 74, 32, 42];

function linear_search(array, target){
    for(let i = 0; i < array.length; i++ ){
        const element = array[i];
        if(element === target){
            return i;
        }
    }
    return -1
}

const index = linear_search(number, 69);
console.log(index);