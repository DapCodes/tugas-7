window.onload = function () {
  document.querySelector("h1").textContent = "Latihan JavaScript Selesai";
};

window.onload = function () {
  document.querySelector("h1").textContent = "Latihan JavaScript Selesai";

  let name = "John";
  const age = 30;

  let output = document.getElementById("output");
  output.innerHTML = `<p>Name: ${name}</p><p>Age: ${age}</p>`;

  let fruits = ["Apple", "Banana", "Mango"];
  output.innerHTML += "<p>Fruits:</p><ul>";
  for (let fruit of fruits) {
    output.innerHTML += `<li>${fruit}</li>`;
  }
  output.innerHTML += "</ul>";

  let person = { firstName: "John", lastName: "Doe", age: 30 };
  output.innerHTML += `<p>First Name: ${person.firstName}</p><p>Last Name: ${person.lastName}</p>`;
};

window.onload = function () {
  document.querySelector("h1").textContent = "Latihan JavaScript Selesai";

  let name = "John";
  const age = 30;

  let output = document.getElementById("output");
  output.innerHTML = `<p>Name: ${name}</p><p>Age: ${age}</p>`;

  let fruits = ["Apple", "Banana", "Mango"];
  output.innerHTML += "<p>Fruits:</p><ul>";
  for (let fruit of fruits) {
    output.innerHTML += `<li>${fruit}</li>`;
  }
  output.innerHTML += "</ul>";

  let person = { firstName: "John", lastName: "Doe", age: 30 };
  output.innerHTML += `<p>First Name: ${person.firstName}</p><p>Last Name: ${person.lastName}</p>`;
};

function checkValue() {
  let userInput = parseInt(document.getElementById("userInput").value);
  let output = document.getElementById("output");
  let message = "";

  if (userInput > 10) {
    message = "Nilai lebih besar dari 10";
  } else if (userInput === 10) {
    message = "Nilai sama dengan 10";
  } else {
    message = "Nilai kurang dari 10";
  }

  output.innerHTML = `<p>${message}</p>`;

  output.innerHTML += "<p>Angka dari 1 hingga " + userInput + ":</p><ul>";
  for (let i = 1; i <= userInput; i++) {
    output.innerHTML += `<li>${i}</li>`;
  }
  output.innerHTML += "</ul>";
}

window.onload = function () {
  document.querySelector("h1").textContent = "Latihan JavaScript Selesai";

  let name = "John";
  const age = 30;

  let output = document.getElementById("output");
  output.innerHTML = `<p>Name: ${name}</p><p>Age: ${age}</p>`;

  let fruits = ["Apple", "Banana", "Mango"];
  output.innerHTML += "<p>Fruits:</p><ul>";
  for (let fruit of fruits) {
    output.innerHTML += `<li>${fruit}</li>`;
  }
  output.innerHTML += "</ul>";

  let person = { firstName: "John", lastName: "Doe", age: 30 };
  output.innerHTML += `<p>First Name: ${person.firstName}</p><p>Last Name: ${person.lastName}</p>`;
};

function greet(name) {
  return `Hello, ${name}`;
}

function calculateSquare(number) {
  return number * number;
}

const addNumbers = (a, b) => a + b;

window.onload = function () {
  document.querySelector("h1").textContent = "Latihan JavaScript Selesai";

  let output = document.getElementById("output");

  output.innerHTML += `<p>${greet("Alice")}</p>`;
  output.innerHTML += `<p>Square of 5: ${calculateSquare(5)}</p>`;
  output.innerHTML += `<p>Sum of 4 and 6: ${addNumbers(4, 6)}</p>`;
};

// manipulasi array dan object
window.onload = function () {
  document.querySelector("h1").textContent = "Latihan JavaScript Selesai";

  let name = "John";
  const age = 30;

  let output = document.getElementById("output");
  output.innerHTML = `<p>Name: ${name}</p><p>Age: ${age}</p>`;

  let fruits = ["Apple", "Banana", "Mango"];
  output.innerHTML += "<p>Fruits:</p><ul>";
  for (let fruit of fruits) {
    output.innerHTML += `<li>${fruit}</li>`;
  }
  output.innerHTML += "</ul>";

  let person = { firstName: "John", lastName: "Doe", age: 30 };
  output.innerHTML += `<p>First Name: ${person.firstName}</p><p>Last Name: ${person.lastName}</p>`;

  let students = ["Alice", "Bob", "Charlie"];
  students.push("David");
  output.innerHTML += "<p>Students:</p><ul>";
  students.forEach((student) => {
    output.innerHTML += `<li>${student}</li>`;
  });
  output.innerHTML += "</ul>";

  let car = { brand: "Toyota", model: "Corolla", year: 2020 };
  output.innerHTML += "<p>Car Details:</p>";
  for (let key in car) {
    output.innerHTML += `<p>${key}: ${car[key]}</p>`;
  }

  let cars = [
    { brand: "Toyota", model: "Corolla", year: 2020 },
    { brand: "Honda", model: "Civic", year: 2021 },
    { brand: "Ford", model: "Focus", year: 2019 },
  ];

  output.innerHTML += "<p>Cars:</p>";
  cars.forEach((car) => {
    output.innerHTML += `<p>Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}</p>`;
  });
};
