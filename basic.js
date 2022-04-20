// var a = 10.38968;
// console.log(Math.floor(a));
// console.log(Math.ceil(a));
// console.log(Math.round(Math.random()*10));
// console.log(Math.random()*10);
// const date = new Date();
// console.log(date.getFullYear());


const names = [ 1, 2, 4, 1, 5, 90, 2, 10, 60, 40, 20, 15, 16, 13, 90];

function removeDuplicate(name){

    const newItem = [];
    for( let i = 0; i < name.length; i++ ){
        const elements = name[i];
        console.log(elements);

    };
    for(const element of names){
console.log(element);
if(newItem.indexOf(element) == -1){
    newItem.push(element);
}
    };
    return newItem;
}
// console.log(removeDuplicate(names));
const uniqName = removeDuplicate(names);
console.log(uniqName);

