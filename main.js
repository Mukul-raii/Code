// yourScript.js

// Global variable to store the input string
var inputString;

document.addEventListener("DOMContentLoaded", function(){
    updateTime();

    setInterval(function() {
        updateTime();
    },1000)

})

function updateTime(){
    const currentdate=new Date();
    const formatteddate=currentdate.toLocaleTimeString('en-IN')

    const date=document.getElementById("time");
    date.textContent="Date:"+ formatteddate;
}

// Function to store input value
function storeInputValue() {
    // Get the input element
    var inputElement = document.getElementById("stringInput");

    // Get the value of the input element
    inputString = inputElement.value;

    // Display the value in the result div
    document.getElementById("results").innerHTML = "Stored Value: " + inputString;
}

// Function to convert string to uppercase
function convertToUpperCase() {
    // Ensure inputString is defined by calling storeInputValue first
    storeInputValue();

    if (inputString !== undefined) {
        // Convert to uppercase and display the result
        var result = inputString.toUpperCase();
        document.getElementById("results").innerHTML = "Uppercase Value: " + result;
    } else {
        console.log("Input value is undefined. Make sure to store a value first.");
    }
}

// Function to convert string to lowercase
function convertToLowerCase() {
    // Ensure inputString is defined by calling storeInputValue first
    storeInputValue();

    if (inputString !== undefined) {
        // Convert to lowercase and display the result
        var result = inputString.toLowerCase();
        document.getElementById("results").innerHTML = "Lowercase Value: " + result;
    } else {
        console.log("Input value is undefined. Make sure to store a value first.");
    }
}

// Function to find the length of the string
function findStringLength() {
    // Ensure inputString is defined by calling storeInputValue first
    storeInputValue();

    if (inputString !== undefined) {
        // Find the length and display the result
        var result = inputString.length;
        document.getElementById("results").innerHTML = "Length of the String: " + result;
    } else {
        console.log("Input value is undefined. Make sure to store a value first.");
    }
}

// Function to display individual characters at specific indices
function displayCharacters() {
    // Ensure inputString is defined by calling storeInputValue first
    storeInputValue();

    if (inputString !== undefined) {
        
        for(let i=0; i<inputString.length;i++){
            let char =inputString.charAt(i);
            console.log(char);
        }
    } else {
        console.log("Input value is undefined. Make sure to store a value first.");
    }
}

// Function to concatenate two strings
function concatenateStrings() {
    // Ensure inputString is defined by calling storeInputValue first
    storeInputValue();

    if (inputString !== undefined) {
        // Get the second string
        var secondString = prompt("Enter the second string:");

        // Concatenate strings and display the result
        var result = inputString + secondString;
        document.getElementById("results").innerHTML = "Concatenated String: " + result;
    } else {
        console.log("Input value is undefined. Make sure to store a value first.");
    }
}

// Function to perform string comparison
function performStringComparison() {
    // Ensure inputString is defined by calling storeInputValue first
    storeInputValue();

    if (inputString !== undefined) {
        // Get the second string
        var secondString = prompt("Enter the second string:");

        // Perform string comparison and display the result
        var result = inputString.localeCompare(secondString);
        var comparisonResult = result === 0 ? "Strings are equal" : result > 0 ? "First string is greater" : "Second string is greater";
        document.getElementById("results").innerHTML = "String Comparison Result: " + comparisonResult;
    } else {
        console.log("Input value is undefined. Make sure to store a value first.");
    }
}

// Function to display memory information
function displayMemoryInfo() {
    // Add your code here to display memory information
}

// Call the displayMemoryInfo function to show memory information on load
displayMemoryInfo();

const currentdate =new Date();

const Hour= currentdate.getHours();
const minutes= currentdate.getMinutes();
const Seconds= currentdate.getSeconds();

const hourrgb= (Hour/24)*255
const minrgb = (minutes/60)*255 
const secrgb=(Seconds/60)*255

console.log(hourrgb);
console.log(minrgb);
console.log(secrgb);

document.addEventListener("DOMContentLoaded",function(){
    const idbody= document.getElementById("body");
    
    function setBackgroundColor(element,color){
    element.style.backgroundColor=`rgb(${secrgb},${minrgb},${hourrgb})`;
    }
setBackgroundColor(idbody);
});
