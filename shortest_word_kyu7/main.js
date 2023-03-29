// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let shortWord = 0;
    let rando = s.split(' ').forEach(element => {
        
        if (shortWord === 0) {
            shortWord = element.length
            
        } else if (shortWord > element.length) {
            shortWord = element.length
            
            
        }
    });
    return shortWord
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
// , 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"))
// // , 3); 
console.log(findShort("Let's travel abroad shall we"))
// // , 2);


//Top answers on Codewars

// function findShort(s){
//     return Math.min.apply(null, s.split(' ').map(w => w.length));
//   }



// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }