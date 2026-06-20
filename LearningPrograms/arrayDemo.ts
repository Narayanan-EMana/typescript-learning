let sampArray: number[] = [];

sampArray = [4,5,7,10];

sampArray.push(5);

console.log(sampArray);

let doubeldArray: number[] = [];

doubeldArray = sampArray.map((e: number): number => {return e * 2});

console.log(doubeldArray);

// Tuple example
let randomTuple: [string, number, string, string, number, boolean];

randomTuple = ["Narayanan", 38, "Revathy", "Neerad", 4, true];

console.log("printing the tuple");
console.log(randomTuple);