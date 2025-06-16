let buttonOne = document.querySelector(".button-one");
let captionOne = document.querySelector(".caption-one");
let buttonTwoElem = document.querySelector(".button-two");
let captionTwoElem = document.querySelector(".caption-two");
buttonOne.addEventListener("click", function() {
    // 1. Declare a variable named spidyCaption.
    //  - Store the value of the input with a class of "comment-one".
let spidyCaption = document.querySelector(".comment-one").value;

    // 2. Display the variable spidyCaption to captionOne.
captionOne.innerHTML = spidyCaption;

});

// 3. Repeat the previous steps for the second meme.
//  - Be sure to store variables for the button and caption.

buttonTwoElem.addEventListener("click", function() {
let kermitCaption = document.querySelector(".comment-two").value;
captionTwoElem.innerHTML = kermitCaption;
});
