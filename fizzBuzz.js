var output = [];

function fizzBuzz() {
    

    var i = output.length + 1;
    if((i % 3 === 0)  && (i % 5 === 0)) {
    output.push("FizzBuzz");
    console.log(output); 
    } else if(i % 5 === 0) {
    output.push("Buzz");
    console.log(output);
    } else if(i % 3 === 0) {  
    output.push("Fizz");
    console.log(output);
    } else {
    output.push(i);
    console.log(output);
    }
    
}

fizzBuzz();