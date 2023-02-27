// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


//First Passing Attempt - Needs refracturing
// function getCount(str) {
//     let vowelCount = 0
//     str = str.toLowerCase()
//     let strSplit = str.split('')
//     for (i=0; i<strSplit.length; i++) {
//         if (strSplit[i] === 'a' || strSplit[i] === 'u' || strSplit[i] === 'o' || strSplit[i] === 'i' || strSplit[i] === 'e') {
//             vowelCount += 1
//         }
//     }
//     return vowelCount
// }


//Second Passing
function getCount(str) {
    let vowelsCount = 0;
    let strLC = str.toLowerCase()
    strLC.split("").forEach(x => {
      if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
        vowelsCount++
      }
    });  
    return vowelsCount;
  }

getCount('abracadaUiobra')