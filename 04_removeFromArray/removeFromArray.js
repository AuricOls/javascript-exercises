// crear un nuevo array donde se almacenaran los elementos que no se van a eliminar (clean)

const removeFromArray = function(array, ...args) {
    if(args.length == 0){
        args =[];
    }
    let cleanArray = []

    for(let i=0;i<array.length;i++){
        
        if(!args.includes(array[i])){
            cleanArray.push(array[i]);
        }
    }
    return cleanArray;
};

// Do not edit below this line
module.exports = removeFromArray;
