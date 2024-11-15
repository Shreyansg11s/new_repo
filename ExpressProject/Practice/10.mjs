function sumAll(...args) {
  // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6

//   function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
//     // error
//   }

// let objCopy = { ...obj }; // spread the object into a list of parameters
//                           // then return the result in a new object
