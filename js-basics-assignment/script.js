document.addEventListener("DOMContentLoaded", function() {

  // 🧩 PART 1: Variables and Conditionals
  let userName = prompt("What is your name?"); // Ask user for their name
  let userAge = prompt("How old are you?");    // Ask user for their age

  // Conditionals: making decisions
  if (userAge >= 18) {
    document.getElementById("greeting").textContent =
      "Hello " + userName + "! You are an adult. 🎉";
  } else {
    document.getElementById("greeting").textContent =
      "Hi " + userName + "! You are still young! 🌱";
  }

  // 🧩 PART 2: Functions
  function calculateTotal(price1, price2) {
    return price1 + price2;
  }

  document.getElementById("calculateBtn").addEventListener("click", function() {
    let total = calculateTotal(25, 75); // we call our function
    document.getElementById("result").textContent = "Total price is $" + total;
  });

  // 🧩 PART 3: Loops
  let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grape", "🍊 Orange"];

  document.getElementById("showFruitsBtn").addEventListener("click", function() {
    let list = document.getElementById("fruitList");
    list.innerHTML = ""; // Clear list first

    for (let i = 0; i < fruits.length; i++) {
      let item = document.createElement("li");
      item.textContent = fruits[i];
      list.appendChild(item);
    }
  });

  // 🧩 PART 4: DOM Manipulation
  document.getElementById("colorBtn").addEventListener("click", function() {
    let colors = ["#FFC0CB", "#90EE90", "#ADD8E6", "#FFFACD"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  });

});
