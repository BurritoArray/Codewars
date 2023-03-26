// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


function validatePIN (pin) {
    
  }



console.log(validatePIN("1"))
// ,false, "Wrong output for '1'")
console.log(validatePIN("12"))
// ,false, "Wrong output for '12'")
console.log(validatePIN("123"))
// ,false, "Wrong output for '123'")
console.log(validatePIN("12345"))
// ,false, "Wrong output for '12345'")
console.log(validatePIN("1234567"))
// ,false, "Wrong output for '1234567'")
console.log(validatePIN("-1234"))
// ,false, "Wrong output for '-1234'")
console.log(validatePIN("1.234"))
// ,false, "Wrong output for '1.234'")
console.log(validatePIN("-1.234"))
// ,false, "Wrong output for '-1.234'")
console.log(validatePIN("00000000"))
// ,false, "Wrong output for '00000000'")