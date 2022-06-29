// //object

// const player = {
//   name:"nico",
//   points: 10,
//   handsome: false,
//   fat:true
// };
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);
// player.fat = false;
// player.lastName = "potato"
// console.log(player);

// //=====================
// // function

// function sayHello(nameOfPerson, age){
//   console.log(`Hello my name is ${nameOfPerson}, and I am ${age}`);
// }


// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// function plus(a, b){
//   console.log(a + b);
// };

// plus(1, 2);

// const player1 = {
//   name : "nico",
//   sayHello1: function(otherPersonName){
//     console.log(`Hello ${otherPersonName}, nice to meet you!`);
//   }
// }

// console.log(player1.name);
// player1.sayHello1(player1.name);

// const calculator = {
//   add : function(a, b){
//     console.log(a+b);
//   },
//   minus : function(a, b){
//     console.log(a-b);
//   },
//   multiple : function(a, b){
//     console.log(a*b);
//   },
//   divide : function(a, b){
//     console.log(a/b);
//   },
// };

// calculator.add(1, 1);
// calculator.minus(1, 1);
// calculator.multiple(1, 1);
// calculator.divide(1, 1);


//====================
// return

// const age = 96;
// function calulateKrAge(ageOfForeigner){
//   return ageOfForeigner + 2;
// }

// const krAge = calulateKrAge(age);

// console.log(krAge);

// const calculator = {
//   plus : function(a, b){
//     return a+b;
//   },
//   minus : function(a, b){
//     return a-b;
//   },
//   multiple : function(a, b){
//     return a*b;
//   },
//   divide : function(a, b){
//     return a/b;
//   },
//   power : function(a, b){
//     return a ** b;
//   },
// };

// const plusResult = calculator.plus(2,3);

// console.log(plusResult);

//====================

// const age1 = parseInt(prompt("How old are you?"));
// console.log(isNaN(age1));

// if(isNaN(age1) || age1 < 0){
//   console.log("Please write a real positive number");
// } else if(age1 < 18 && age1 >= 0){
//   console.log("You are too young");
// } else if(age1 >= 18 && age1 <= 50){
//   console.log("You can drink");
// } else {
//   console.log("Take care");
// };


// function handleMouseEnter(){
//   console.log("mouse is here");
// }

// function handleMouseLeave(){
//   h1.innerText = "Mouse is gone";
// }

// function handleWindowResize(){
//   document.body.style.backgroundColor = "tomato";
// }

// h1.onClick = handleTitleClick;
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
//=============
// const h1 = document.querySelector(".hello h1");

// function handleTitleClick(){
//   const currentColor = h1.style.color
//   let newColor;
//   if(currentColor === "blue"){
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick)

//=============
// const h1 = document.querySelector(".hello h1");

// function handleTitleClick(){
//   const clickClass = "clicked"
//   if(h1.className === clickClass){
//     h1.className = "";
//   }else {
//     h1.className = clickClass;
//   }
// }

// h1.addEventListener("click", handleTitleClick);

//================
// const h1 = document.querySelector(".hello h1");

// function handleTitleClick(){
//   const clickedClass = "clicked"
//   if(h1.classList.contains(clickedClass)){
//     h1.classList.remove(clickedClass);
//   }else {
//     h1.classList.add(clickedClass);
//   }
// }

// h1.addEventListener("click", handleTitleClick);

//=========
// const h1 = document.querySelector(".hello h1");

// function handleTitleClick(){
//   h1.classList.toggle("clicked")
// };

// h1.addEventListener("click", handleTitleClick);

//=======================================================

// const title = document.getElementById("title");
// console.dir(title);
// title.textContent = "I've grabed you as well!"

const title = document.querySelectorAll("h1.hello");
console.log(title);
for (let i = 0; i < title.length; i++){
  title[i].textContent = "I got you";
};