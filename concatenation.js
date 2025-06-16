let submitButton = document.querySelector(".submit");
let result = document.querySelector(".result");
submitButton.addEventListener("click", function() {
    result.style.display = "block";
    let myName = document.querySelector(".my-name").value;
    let moodElem = document.querySelector(".mood").value;
    let foodElem = document.querySelector(".food-name").value;
    let birthYearElem = document.querySelector(".year").value;
    let age = 2025 - birthYearElem; // update to 2024, if necessary
    // 1. Declare a variable to save the value of the city the user is from.
let cityElem = document.querySelector(".city");
    // 2. Below write your sentences! 
    // - Have them show up in the div with class "results".
    // - Example paragraph: "My name is (myName). I'm feeling (mood) and I absolutely lovveeee eating (food) 😍..."
    // - Try placing your sentences into <p> or <li> tags.

let solresult = "My name is " + myName + " my mood is " + moodElem + " my fav food is " + foodElem + " Im " + age + " years old I live in " + cityElem;
result.innerHTML = solresult;

});