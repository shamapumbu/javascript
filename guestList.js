var guestList = ["Angela","Jack","Pam","James","Lara","Jason"];

var person = prompt("What is your name?");

if(guestList.includes(person)) {
    alert("Welcome!");
} else {
    alert("Sorry, maybe next time.")
}