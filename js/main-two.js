//1.
let result = 5 + 5 + '5';

console.log(result); // Виведе "105"
console.log(typeof result); // Виведе "string"

//2.
const email = "your-email@example.com";

const hasAtSymbol = email.includes('@');
const emailLength = email.length;

console.log(`${hasAtSymbol}`);
console.log(`${emailLength}`);

//3.
let w1 = "My";
let w2 = "name";
let w3 = "is";

let fullName = w1 + " " + w2 + " " + w3; // "My name is"
fullName += " Viktor"; // Додаємо ім'я

console.log(fullName); // "My name is Viktor"

//4.
const userName = "Олександро";
const payment = 300;

alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);