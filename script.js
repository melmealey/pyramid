// let character = 'Hello';
console.log(character);
character = "World";
let secondCharacter;
secondCharacter = "Test";
console.log(secondCharacter);


// let count = 8;
// let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);



let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];

// Assign the result of rows.push() to the pushed variable
let pushed = rows.push("freeCodeCamp");  // This adds "freeCodeCamp" to the array

// Pop the last element from the array and assign it to popped
let popped = rows.pop();  // This removes and returns the last element, "freeCodeCamp"

// Log the popped element and the current state of the array
console.log(popped);  // This will log "freeCodeCamp"
console.log(rows);    // This will log the array after popping: ["Naomi", "Quincy", "CamperChan"]

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

// let result = ""

// const character = "#";
// const count = 8;
// const rows = [];




// for (let i = 0; i < count; i = i + 1) {
//   rows.push(character.repeat(i + 1))
// }

// let result = ""

// for (const row of rows) {
//   result = result + row + "\n";
// }

// console.log(result);