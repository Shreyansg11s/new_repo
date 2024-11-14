// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let k = 0;
// while (k < 5) {
//   console.log(k);
//   k++;
// }

// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j < 5);

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Exit the loop when i is 3
  }
  console.log(i);
}
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // Skip iteration when i is 3
  }
  console.log(i);
}
export function add(a, b) {
  return a + b;
}

let result = add(5, 3); // result is 8
console.log(result);
