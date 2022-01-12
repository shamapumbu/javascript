var userInput = prompt("What is your message?");
var length = userInput.length;
var remaining = 140-length;
alert("You have used " + length + " characters, so you have " + remaining + " characters left");