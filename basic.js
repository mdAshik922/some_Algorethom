// var a = 10.38968;
// console.log(Math.floor(a));
// console.log(Math.ceil(a));
// console.log(Math.round(Math.random()*10));
// console.log(Math.random()*10);
// const date = new Date();
// console.log(date.getFullYear());


const names = [ 1, 2, 4, 1, 5, 90, 2, 10, 60, 40, 20, 15, 16, 13, 90]

function removeDuplicate(names){

    const newItem = [];
    // for( let i = 0; i < names.length; i++ ){
    //     const elements = names[i];
    //     console.log(elements);

    // };
    for(const element of names){
console.log(element);
if(newItem.indexOf(element) == -1){
    uniqname.push(element)
}
    };
    return uniqname;
}
// console.log(removeDuplicate(names));
const uniqname = removeDuplicate(names);
console.log(uniqname);

