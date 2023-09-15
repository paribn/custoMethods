// 
// const customArrayMethods = {
//     customFilter: function(arr, callback) {
//       const filteredArray = [];
//       for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//           filteredArray.push(arr[i]);
//         }
//       }
//       return filteredArray;
//     }
//   };

//   
//   const numbers = [1, 2, 3, 4, 5];

//   const evenNumbers = customArrayMethods.customFilter(numbers, function(item) {
//     return item % 2 === 0;
//   });

//   console.log(evenNumbers); // Output: [2, 4]


/// ------------------


// const array = [5, 12, 8, 130, 44];  /// array.find

// for (let i = 0; i < array.length; i++) {

//     if (array[i]>10) {
//         console.log(array[i]);
//         break;
//     }
// }

/// ------------------

// function findIndex(arr, element) {
    
//     let index = -1;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === element) {
       
//         index = i;
//         break;
//       }
//     }
  
//     return index;
//   }
  
//   const myArray = [10, 20, 30, 40, 50];
//   const elementToFind = 30;
  
//   const index = findIndex(myArray, elementToFind);
//   if (index !== -1) {
//     console.log(`The element ${elementToFind} is found at index ${index}.`);
//   } else {
//     console.log(`The element ${elementToFind} is not found in the array.`);
//   }



/// ------------------
  
function customReduce(arr, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
}


const numbers = [1,9,9,9];

const sum = customReduce(numbers, (acc, current) => acc + current, 0);
console.log(sum); 

/// ------------------


