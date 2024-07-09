const findTheOldest = function(arr) {
    let ages = arr.map((x) => {
        const currYear = new Date;  
        if(x.yearOfDeath == undefined){
            return currYear.getFullYear() - x.yearOfBirth;
        }
        return x.yearOfDeath - x.yearOfBirth;
    })
    console.log(ages)

    let oldestIndex = ages.indexOf(Math.max(...ages));
    return arr[oldestIndex];
}
    
/* const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
console.log(findTheOldest(people)); */

// Do not edit below this line
module.exports = findTheOldest;
