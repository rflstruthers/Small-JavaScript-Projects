var randomNumber = Math.floor((Math.random()*10));//creates the variable "randomNumber" and sets its value to the number that the maath function gives.
switch (randomNumber){
    case 0:
    case 1:
    case 2:
    console.log(`The random number is ${randomNumber}.`);//if randomNumber is 0,1, or 2, then print that.
    break;//tells computer to stop here
    case 3:
    case 4:
    case 5:
    case 6:
    console.log("The random number is between 3 and 7.");
    break;
    case 7:
    case 8:
    case 9:
    case 10:
    console.log("The random number is greater than 7.");
    break;
    default:
    console.log("Something went wrong...");
}
