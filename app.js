// let a = 4;
// //let b = 4;
// //let c = 10;

// //console.log("a =", a, "b =", b);

// //b = c;
// //console.log(a + b);

// console.log(a);
// console.log(typeof a);

/* 
//Пример 1
let car = {
  color: "green",
  maxSpeed: 250,
  audio: {
    brand: "Sony",
    speakers: 12,
  },
};

if (car.color == "red") {
  console.log("Автомобиль красный");
} else if (car.color == "green") {
  console.log("Автомобиль зеленый");
} else {
  console.log("Цвет не определён");
}

if (!false) {
  console.log("ИСТИНА");
} else {
  console.log("Ложь");
}
*/

/*
//Пример 2;
let car = {
  color: "red",
  maxSpeed: 250,
  audio: {
    brand: "Sony",
    speakers: 12,
  },
};

let color = car.color == "red" ? "Красный" : "Зеленый";
console.log(color);
*/

/*
//Пример 3;
let car = {
  color: "red",
  maxSpeed: 250,
  audio: {
    brand: "Sony",
    speakers: 12,
  },
};

console.log(car.color);

car.color = "green";
console.log(car.color);

function colorReset() {
  car.color = "red";
  console.log(car.color);
}

colorReset();
*/

/*
//Пример 4;
let car = {
  color: "red",
};

let car2 = {
  color: "green",
};

colorChange(car);

function colorChange(theCar) {
  theCar.color = "yellow";
}

console.log("Car: " + car.color);
console.log("Car2: " + car2.color);
*/

/*
//Пример 5;
let car = {
  maxSpeed: 240,
};

let speed = speedChange;

speed();

function speedChange() {
  console.log(car.maxSpeed);
}
*/

/*
//Пример 5;
function watch(message = "dkadevelop") {
  console.log(message); //undefined
}

watch();
*/

/*
//Пример 6;
let anonym = function () {
  console.log("you are anonymous");
};

anonym();
*/

/*
//Пример 7 Анонимные функции;
(function () {
  console.log("we are anonymous");
})();
*/

/*
//Пример 8 Анонимные функции;
let anonym = () => "you are anonymous";

console.log(anonym());
*/

/*
//Пример 9 Анонимные функции;
let anonym = () => console.log("we are anonymous");

anonym();
*/

/*
//Пример 10
function getMessage() {
  console.log("Я функция");
}
getMessage();
*/

/*
//Пример 11
let car = {
  getMessage: function () {
    console.log("Я метод");
  },
};

car.getMessage();
*/

/*
//Пример 12
let car = {
  color: "red",
  open(message) {
    console.log(message);
  },
};

car.open("Открыто - 2");
*/

/*
// Императивный подход
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 3) {
    filteredNumbers.push(numbers[i]);
  }
}

console.log(filteredNumbers); // [4, 5]
*/

/*
// Декларативный подход
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter((value) => {
  return value > 3;
});

console.log(filteredNumbers); // [4, 5]
*/

/*
const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];

dirtyMultiply(numbers, 2);

// Произошла мутация исходных данных
console.log(numbers); // [2, 4, 6, 8, 10]
*/

/*
const pureMultiply = (array, value) => {
  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    result.push(array[i] * 2);
  }

  return result;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Не произошло мутации исходных данных
console.log(numbers); // [1, 2, 3, 4, 5]

// Функция вернула новый массив с измененными данными
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
*/
