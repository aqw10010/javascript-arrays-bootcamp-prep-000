var chocolateBars = 
["snickers", "hundred grand", 
"kit kat", "skittles" ] ;
var entrepreneurs = ["Oprah Winfrey", "Laurene Powell Jobs", "Arianna Huffington"];
 
console.log(entrepreneurs[0]);
 
var bio = " is the co-founder and editress-in-chief of The Huffington Post";
console.log(entrepreneurs[2] + bio);
 
entrepreneurs[9];

function addElementToBeginningOfArray(array, element) {
    entrepreneurs.unshift(element)
    return array 
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  
  return array

}

function addElementToEndOfArray(array, element) {
    chocolateBars.push(element)
}

function destructivelyRemoveElementFromBeginningOfArray() {
  
}


  
