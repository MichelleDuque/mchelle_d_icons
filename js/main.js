console.log("Javascript is running");

/* Longer JS Block comment
- const is a type of variable - a bit of memory that can hold a value

JS used (can use) any valid CSS selector to make a connection to any element on the page - it works the same as CSS selectors do,
because it's using css selectror to find matvhing element(s).

The document is the DOM - the web page and all of its elements

queryselector is the method (function) that makes the connection between JS and the Dom (the elements)

*/

// step 1 - Make the connection to the element(s) you want to interact with

const jpgGraphic = document.querySelector("#bitmap"); 
const svgGraphic = document.querySelector("#vector"); 

// step 3 - create function
function logID(){
    console.log("click on this element:", this.id);
}



// step 2 - decide how you want the user to ineract with object you created in step 1
svgGraphic.addEventListener("click", logID);
jpgGraphic.addEventListener("click", logID)
