const palindromes = function (str) {
    let re = /[^A-Za-z0-9]/g; 
    let length = str.length;
    str = str.toLowerCase().replace(re, '')
    str = str.replace(/[^\w\s\']|_/g, "")
         .replace(/\s+/g, " ");
    let strReverse = str.split("").reverse().join("")        
    if (str == strReverse){
        return true;
    } else{
        return false;
    }
};

console.log(palindromes("racecar"));

// Do not edit below this line
module.exports = palindromes;


//palindromes('racecar') // true
//palindromes('tacos') // false
