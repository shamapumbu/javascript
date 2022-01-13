var name = prompt("What is your name?");
name = name.toLowerCase();
var capitalised = name.slice(0,1);
capitalised = capitalised.toUpperCase();
alert("Hello, " + capitalised + name.slice(1,name.length));