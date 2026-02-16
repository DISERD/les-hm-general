// 1. Конвертація температури (Цельсій -> Фаренгейт)
const celsius = 25;
const fahrenheit = (celsius * 9 / 5) + 32;
console.log(fahrenheit);

// 2. Час у місяці
const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(hoursInMonth);
console.log(minutesInMonth);

// 3. Стан гравця (здоров'я та енергія)
let health = 100;
let energy = 80;
health -= 20;
energy -= 15;
console.log(health);
console.log(energy);

// 4. Сума покупки зі знижкою 10%
let totalPrice = 1500;
const discount = 0.1;
const discountedPrice = totalPrice * (1 - discount);
console.log(discountedPrice);

// 5. Округлення числа до меншого
const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

// 6. Перетворення рядка у десяткове число
const floatString = "45.67";
const parsedFloat = Number.parseFloat(floatString);
console.log(parsedFloat);

// 7. Перетворення рядка у ціле число
const intString = "123";
const parsedInt = Number.parseInt(intString);
console.log(parsedInt);

// 8. Квадратний корінь числа
const number = 64;
const sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);

// 9. Конвертація типів (parseInt та toString)
const integer = 42;
const stringNumber = "256";

// Рядок у число
const convertedInt = Number.parseInt(stringNumber);
console.log(convertedInt);

// Число у рядок
const convertedString = integer.toString();
console.log(convertedString);