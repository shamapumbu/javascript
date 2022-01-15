function isLeapYear(leapYear) {
    if((leapYear % 4 === 0) && (leapYear % 100 > 0)) {
        alert(leapYear);
        alert("Leap Year.");
    } else if((leapYear % 4 === 0) && (leapYear % 100 === 0) && (leapYear % 400 === 0)) {
        alert(leapYear);
        alert("Leap Year.");
    } else {
        alert(leapYear);
        alert("Not Leap Year.");
    }
}

isLeapYear(1101);