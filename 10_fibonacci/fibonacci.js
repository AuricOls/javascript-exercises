const fibonacci = function(n) {
    let curr = 1;
    let prev = 0;
    let temp = 0;
    if (n == 0){
        return 0;
    }
    if(n<0){
        return "OOPS"
    }
    for (let i=1; i<n;i++){
        temp = curr + prev;
        prev = curr;
        curr = temp;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
