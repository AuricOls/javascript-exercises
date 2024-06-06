

const sumAll = function(limit1, limit2) {

    if (typeof limit1 !== 'number' || typeof limit2!== 'number' || limit1 < 0 || limit2 < 0) {
        return "ERROR";
    }

    let lower = Math.min(limit1, limit2);
    let upper = Math.max(limit1, limit2);
    let sum = 0;
    for(let i = lower;i<=upper;i++){
        sum += i;
    }

    return sum;

};
// Do not edit below this line
module.exports = sumAll;
