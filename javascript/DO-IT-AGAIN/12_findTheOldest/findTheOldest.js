const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
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
var today = new Date();
var year = today.getFullYear();

/*const findTheOldest = function(people) {
  let age
  let currArray 
  let ageArray = []
  for (i = 0; i < people.length; i++){
    currArray = people[i]
    age = currArray.yearOfDeath - currArray.yearOfBirth
    if (isNaN(age) === true ){
      age = year - currArray.yearOfBirth
      let personAge = age
      console.log(currArray)
      console.log(personAge + " (personAge from isNaN condition)")
      ageArray.push(personAge)
      
    } else if (age > 0){
      age = currArray.yearOfDeath - currArray.yearOfBirth
      personAge = age
      console.log(currArray)
      console.log(personAge + " (personAge from age > 0 condition)")
      ageArray.push(personAge)
    }
  } let max =  Math.max(...ageArray) //[ 4, 49, 29 ]
    
    return max // 49
}
*/

/* To use sort to find the oldest, you need to include a default specifying the current year 
  for people without a yearOfDeath. 
Below I've done this in a helper function called "age".

Using sort if your only purpose is to find a maximum can be inefficient though,
particularly if you're dealing with a lot of data: try using reduce, as per other answer.

*/

let findTheOldest = function (people) {
  const age = (x) => (x.yearOfDeath || new Date().getFullYear()) - x.yearOfBirth;
  const oldest = people.sort((a, b) =>
    age(a) > age(b) ? -1 : 1
  );
  return oldest[0];
};

console.log(findTheOldest(people))


// Do not edit below this line
module.exports = findTheOldest;
