const palindromes = function (word) {
    let cleanWord = (word.replace(/[^a-zA-Z0-9]/g, "")).toLowerCase();
    let arr = cleanWord.split("");
    let rra = arr.slice()
    rra.reverse();
    console.log(arr);
    console.log("----------------");
    console.log(rra);
    return arr.every((char, index) => char === rra[index]);
};

console.log(palindromes("Racecar!"));
// Do not edit below this line

module.exports = palindromes;
