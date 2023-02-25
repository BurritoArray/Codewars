// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
    const nameSplit = name.split(' ')
    let nameInitial = ''
    nameSplit.forEach(element => {
        nameInitial += element[0].toUpperCase()
    });

    if (nameInitial.length > 0) {
        nameInitial = nameInitial.split('').join('.')
    }

    return nameInitial
}
console.log(abbrevName('Mark Twain'))
// This passed the test. Mine is dynamic and will accepts infinite names with a . inbetween



// Top Answer on Codewars

// function abbrevName(name){

//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   }
// This solution indices by the array first, and then the string to get the chars.


//Another good solution

// function abbrevName(name){

//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')

// }
//update  