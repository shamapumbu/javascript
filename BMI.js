function bmi(weight, height) {
    var bmi = weight / Math.pow(height,2);
    return bmi;
}

var myWeight = prompt("Enter your weight:");
var myHeight = prompt("Enter your height");

alert("Your BMI is: " + bmi(myWeight, myHeight));