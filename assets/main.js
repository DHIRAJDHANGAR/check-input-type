
function checkDataType(print) {
  if(Array.isArray(print)) {
    console.log("its an array:",Array.isArray(print));
  }
  else{
    console.log(typeof print);
  }
}
console.log(checkDataType());

function _checkDataType(value) {
  if (Array.isArray(value)) {
    console.log(Array.isArray(value));
  } else if (value === null || value === undefined) {
    console.log("Please enter the valid input");
  } else {
    console.log(typeof value);
  }
}
console.log(_checkDataType());

function __checkDataType(input) {
  if (input === null || input === undefined) {
    return "Please enter the valid input" ;
  }

  return Array.isArray(input)
  ? "it is an array"
  : "The data type is" + typeof input;
}

console.log(__checkDataType());