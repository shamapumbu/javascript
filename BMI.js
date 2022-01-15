function bmi(weight, height) {
    var bmi = weight / Math.pow(height,2);
    return bmi;
}
function meaning(bodyMass) {
    var underWeight = "Your body mass is " + bodyMass + ", so you are underweight.";
    var overWeight = "Your body mass is " + bodyMass + ", so you are overweight.";
    var normalWeight = "Your body mass is " + bodyMass + ", so have a normal weight.";
    if(bodyMass < 18.5) {
        return underWeight;
    }
    if(bodymass >= 18.5 && bodyMass <= 24.9) {
        return normalWeight;
    }
    if(bodyMass > 24.9) {
        return overWeight;
    }
}

var myWeight = prompt("Enter your weight:");
var myHeight = prompt("Enter your height");



alert("Your BMI is: " + bmi(myWeight, myHeight));
alert(meaning(bmi(myWeight,myHeight)));

