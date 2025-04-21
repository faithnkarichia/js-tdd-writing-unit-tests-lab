// Your code here
export function isPalindrome(word) {
  const wordLowerCase = word.toLowerCase();
  const reverse = wordLowerCase.split("").reverse().join("");
  console.log(reverse, word);

  const test = /^[A-Za-z]+$/.test(word);

  if(word !== '' && !test) {
    throw new Error('Numeric characters detected')
  }

  if(word===""){
    return false
  }
  if (word.toLowerCase() === reverse) {
    return true;
  } 
  else {
    return false;
  }
}
