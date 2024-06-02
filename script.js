var h5 = document.querySelector("h5");
var btn = document.querySelector("button");
var check = 0;
btn.addEventListener("click", function () {
  if (check === 0) {
    h5.innerHTML = "Friends";
    h5.style.color = "green";
    btn.innerHTML = "Remove Friend";
    check = 1;
  } else {
    h5.innerHTML = "Strangers";
    h5.style.color = "palevioletred";
    btn.innerHTML = "Add Friend";

    check = 0;
  }
});

// function ko toh run karne ke liye call karna padhta hai na?
// Answer = Ye jo function hai jab hum click karte hai tab call hota hai har function ko call nahi karna padhta hai



// Teen tarah ke function hote hai :-
// 1. Ek hota hai jisko hum call kar ke bolte hai 
// 2. Ek hota hai function woh jo is ke andar likh hai click hoga woh ye function
//  run hoga automatically run nahi hoga jese hi click hoga function run ho jayega