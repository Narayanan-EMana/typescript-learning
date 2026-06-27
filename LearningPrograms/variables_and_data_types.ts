// let, var, const
var company = "ABC Company";
let empName = "Narayanan E";
empName = "Rahul";
const country = "India";
console.log("Employee Name: " + empName);
console.log("company Name: " + company);
console.log("Country Name: " + country);

// type annotations
let charName: string = "Sahadevan";
let age: number = 48;
let isEmployed: boolean = true;
console.log("Name of the char: " + charName);
console.log("Age of the char: " + age);
console.log("Char is having a job?: " + isEmployed);

// primitive types
let firstName: string = "Narayanan";
let salary: number = 7537.23;
let isMarried: boolean = true;
let middleName: null = null;
let address: undefined = undefined;
console.log(firstName);
console.log(salary);
console.log(isMarried);
console.log(middleName);
console.log(address);

// type inference
let language = "Type Script";
// language = 34;
let version = 5.9;
// version = "5.9";
let passed = true;
// passed = 3

// type - any
let value: any;
value = "some string";
value = 45;
value = -true;

let input: unknown = "Hello type script";
if (typeof input == "string") {
  console.log(input.toUpperCase());
}

// void example
function greet(name: string): void {
  console.log("Hello.. Hi..." + name);
}
greet("Narayanan");

// never example
function throwErrorMessage(errorMessage: string): never {
  throw new Error(errorMessage);
}
// throwErrorMessage("You are not eligible");

// Union type
let empId: string | number;
empId = "10001";
empId = 10002;
// empid = true;

// literal type
let processStatus: "Success" | "Failure";
// processStatus = "Running";

// type alias
type empIDType = number | string;
let empID2: empIDType;
empID2 = 2345;
empID2 = "35433";
// empID2 =true;

// string literals
let singleQuote = "Single Quote String";
let doubleQuote = "Double Quote String";
console.log(singleQuote);
console.log(doubleQuote);

let product: string = "Dell Laptop";
let price: number = 57000;
let message = `
    product : ${product}
    price : ${price}
    `;
console.log(message);

// string interpolation
let userName = "Narayanan";
let experience = 11;

console.log(
  `My name is ${userName}. I have ${experience} years of experience.`,
);
