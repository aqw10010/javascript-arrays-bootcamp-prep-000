var chocolateBars = 
["snickers", "hundred grand", 
"kit kat", "skittles" ] ;
var entrepreneurs = ["Oprah Winfrey", "Laurene Powell Jobs", "Arianna Huffington"];
 
console.log(entrepreneurs[0]);
 
var bio = " is the co-founder and editress-in-chief of The Huffington Post";
console.log(entrepreneurs[2] + bio);
 
entrepreneurs[9];


function addElementToBeginningOfArray(array, element) {
return [element,...array]
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
    return [...array,element]
    
  
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.pop()
  return array 
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}


function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  
}

function removeElementFromEndOfArray(array) {
  array.slice()
  
}

function removeElementFromBeginningOfArray(array) {
  array.slice()
}

function accessElementInArray(array, index) {
  array[index]
  return array[index]
}
