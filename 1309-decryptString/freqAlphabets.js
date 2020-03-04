// Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

//     Characters ('a' to 'i') are represented by ('1' to '9') respectively.
//     Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 

// Return the string formed after mapping.

// It's guaranteed that a unique mapping will always exist.

 function freqAlphabets (s) {

  const characterNumbers = parseCharacterNumbers(s)
  const characters = transformNumbers2Chars(characterNumbers)

  return characters.join('');
};

function parseCharacterNumbers (s){
  const individalNumbers = s.split('');
  const groupedNumbers = [];

  for(let i=0; i < individalNumbers.length; i++){

    let isTwoDigitNumber = individalNumbers[i+2] == '#' 
    if(isTwoDigitNumber){
      groupedNumbers.push(individalNumbers[i]+individalNumbers[i+1])
      // Advance two space to cover the second character and the hash tag
      i += 2
    } else {
      groupedNumbers.push(individalNumbers[i])
    }
  }
  return groupedNumbers
}

function transformNumbers2Chars(numbers){
  const startingIndex = 1;   // '1' => 'a'
  const characterCodeOffset = 'a'.charCodeAt(0) - startingIndex;
  return numbers.map(num => String.fromCharCode(Number(num)+characterCodeOffset))
}

module.exports = {freqAlphabets, parseCharacterNumbers, transformNumbers2Chars}
