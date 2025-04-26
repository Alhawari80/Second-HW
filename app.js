/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  
console.log('Exercise 1 result:', foods);


/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods.push('pizza', 'cheeseburger');
console.log('Exercise 2 result:', foods);   


/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift('taco');
console.log('Exercise 3 result:', foods);   


/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

const favFood = foods[1]; // 'pizza' is at index 1 after the previous operations
// Note: The index starts at 0, so 'taco' is at index 0, 'pizza' is at index 1, and 'cheeseburger' is at index 2.   
console.log('Exercise 4 result:', favFood);


/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/


const pizzaIndex = foods.indexOf('pizza'); // Find the index of 'pizza'
foods.splice(pizzaIndex + 1, 0, 'tofu'); // Insert 'tofu' after 'pizza' 
console.log('Exercise 5 result:', foods);


/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/


const pizzaIndex2 = foods.indexOf('pizza'); // Find the index of 'pizza'
foods.splice(pizzaIndex2, 1, 'sushi', 'cupcake'); // Replace 'pizza' with 'sushi' and 'cupcake'
console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/


const yummy = foods.slice(pizzaIndex2, pizzaIndex2 + 2); // Slice the array to get 'sushi' and 'cupcake'
// Note: The slice method does not modify the original array, it creates a new one.    
console.log('Exercise 7 result:', yummy);

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/


const soyIdx = foods.indexOf('tofu'); // Find the index of 'tofu'
// Note: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.    
console.log('Exercise 8 result:', soyIdx);



/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/


const allFoods = foods.join(' -> '); // Join the array elements with ' -> '
// Note: The join method creates and returns a new string by concatenating all of the elements in an array, separated by the specified separator.
console.log('Exercise 9 result:', allFoods);


/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/


const hasSoup = foods.includes('soup'); // Check if 'soup' is in the array
// Note: The includes method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log('Exercise 10 result:', hasSoup);


/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];


const odds = []; // Initialize an empty array to store odd numbers
nums.forEach(num => { // Iterate through the nums array
  if (num % 2 !== 0) { // Check if the number is odd
    odds.push(num); // Push the odd number to the odds array
  }
}); // End of forEach loop  
console.log('Exercise 11 result:', odds);


/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/


const fizz = []; // Initialize an empty array for numbers divisible by 3    
const buzz = []; // Initialize an empty array for numbers divisible by 5
const fizzbuzz = []; // Initialize an empty array for numbers divisible by 3 and 5

nums.forEach(num => { // Iterate through the nums array
  if (num % 3 === 0) { // Check if the number is divisible by 3
    fizz.push(num); // Push to fizz array
  }
  if (num % 5 === 0) { // Check if the number is divisible by 5
    buzz.push(num); // Push to buzz array
  }
  if (num % 3 === 0 && num % 5 === 0) { // Check if the number is divisible by both 3 and 5
    fizzbuzz.push(num); // Push to fizzbuzz array
  }
}); // End of forEach loop 

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz); // Log the fizz array
console.log('  buzz:', buzz);// Log the buzz array
console.log('  fizzbuzz:', fizzbuzz);// Log the fizzbuzz array



/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[numArrays.length - 1]; // Get the last nested array
// Note: The length property returns the number of elements in an array, and we subtract 1 to get the last index.   
console.log('Exercise 13 result:', numList);


/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

const num = numArrays[2][1]; // Access the number 66 from the nested array  
// Note: The first index [2] accesses the third nested array, and the second index [1] accesses the second element in that array.
console.log('Exercise 14 result:', num);


/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

const numArrays2 = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
]; 
console .log('numArrays2:', numArrays2); // Log the numArrays2 array   
 
let total = 0; // Initialize the total variable to 0  
 
numArrays2.forEach(innerArray => { // Iterate through each nested array
    innerArray.forEach(num => { // Iterate through each number in the nested array
        total += num; // Add the number to the total
    }); // End of inner forEach loop 
}   
    
    ); // End of outer forEach loop
console.log('Exercise 15 result:', total); // Log the total sum of all numbers in the nested arrays








