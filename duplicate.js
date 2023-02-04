const names = ['abul', 'babul', 'cabul', 'dabul', 'babul', 'abbul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];
function removesDuplicate(names){
    const unique = [];
    for(let i = 0; i <names.length; i++){
        const name = names[i];
       if(unique.includes(name) === false ){
        unique.push(name);
       }
    }
    return unique;
}
const uniqueNames = removesDuplicate(names);
console.log(uniqueNames);