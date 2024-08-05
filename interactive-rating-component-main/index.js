const rating = document.querySelectorAll(".bt");
const button = document.querySelector(".btn");
const thankcard = document.getElementById("thank-card");
let rate = "";
let selected = document.getElementById("selected");

function toggleClasses() {
  rating.forEach((ratings)=> {
    ratings.classList.add("bt-checked");
  }
  )
};
//rate button
rating.forEach((button)=> {
  button.onclick = function(e){
   // toggleClasses()
    e.target.classList.add("bt-checked");

    rate = e.target.textContent;

    selected.textContent = rate;
    console.log(rate);
  }
})




//rating.onclick = function(){
   // rating.classList.add("label-checked");
   //   console.log("clicked");

 // }

  //submit button
button.onclick = function(){
    thankcard.classList.remove("none");
    thankcard.classList.add("card-thank-you");
    console.log('You clicked me!');
    //selected.innerHTML = rate;
  }