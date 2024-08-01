let rating = document.querySelectorAll('label');
let ratings = document.querySelector(".container");
const button = document.querySelector(".btn");
let thankcard = document.getElementById("thank-card");




ratings.onclick = function(){
    rating.classList.add("label-checked");
      console.log("clicked");
  }

button.onclick = function(){
    thankcard.classList.remove("none");
    thankcard.classList.add("card-thank-you");
    console.log('You clicked me!');
  }