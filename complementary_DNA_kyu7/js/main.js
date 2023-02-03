// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna){
    let result = ''
    dna.split('').map(ele => {
        if (ele === 'A') {
            result += 'T'
        } else if ( ele === 'T') {
            result += 'A'
        } else if ( ele === 'G'){
            result += 'C'
        } else if ( ele === 'C'){
            result += 'G'
        }
    })
    return result
}
//update
// function DNAStrand(dna){
//     let result = ''
//     dna.split('').map(ele => {
//         switch (ele){
//         case 'A':
//             result += 'T';
//             break;
//         case 'T':
//             result += 'A';
//             break;
//         case 'G':
//             result += 'C';
//             break;
//         case 'C':
//             result += 'G';
//             break;
// }})
//     return result
// }






//---------TEST CASES----------

console.log(DNAStrand("AAAA"))/*,"TTTT","String AAAA is")*/
console.log(DNAStrand("ATTGC"))/*,"TAACG","String ATTGC is")*/
console.log(DNAStrand("GTAT"))/*,"CATA","String GTAT is")   */

//-------Top Two Codewars--------

// function DNAStrand(dna) {
//     return dna.replace(/./g, function(c) {
//       return DNAStrand.pairs[c]
//     })
//   }
  
//   DNAStrand.pairs = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C',
//   }


// ----------------------------


// var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }