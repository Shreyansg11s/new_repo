// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("Data fetched from server");
//     callback(); // Callback after data is fetched
//   }, 2000);
// }

// function processData(callback) {
//   console.log("Processing data...");
//   callback();
// }

// // Calling the asynchronous function with a callback
// // fetchData(processData);

// function saveData() {
//   console.log("All tasks completed");
// }

// fetchData(() => {
//   processData(() => {
//     saveData();
//   });
// });

let fetchData = new Promise((resolve, reject) => {
  let success = true; // Simulating a condition

  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully");
    } else {
      reject("Error fetching data");
    }
  }, 2000);
});

fetchData
  .then((result) => {
    console.log(result); // "Data fetched successfully"
  })
  .catch((error) => {
    console.log(error); // "Error fetching data"
  });

let fetchData1 = new Promise((resolve) =>
  setTimeout(() => resolve(null), 2000)
);
let fetchData2 = new Promise((resolve) =>
  setTimeout(() => resolve("Data 2 fetched"), 3000)
);
let fetchData3 = new Promise((resolve) =>
  setTimeout(() => resolve("Data 3 fetched"), 1000)
);

// Promise.all([fetchData1, fetchData2, fetchData3])
//   .then((results) => {
//     console.log(results); // ["Data 1 fetched", "Data 2 fetched", "Data 3 fetched"]
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

Promise.race([fetchData1, fetchData2])
  .then((result) => {
    console.log(result); // "Data 2 fetched"
  })
  .catch((error) => {
    console.log("Error:", error);
  });
