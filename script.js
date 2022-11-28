// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH

function reverseThisString(string){
    var x = string.split("");  //splitting the string argument to make an array of chars
    var y = x.reverse(); //reverse the array
    var z = y.join(""); //turn the reversed array back into a string
    return z;
}

reverseThisString("Hello");


// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) {
    var newString = '';
    for (let i = 0; i < string.length; i++){
        if (string.charAt(i) == string.charAt(i).toLowerCase()){ //if the char is lower case, change to upper case
            newString += string.charAt(i).toUpperCase();
        }
        else{ //otherwise, change to lower case
            newString += string.charAt(i).toLowerCase();
        }

    }
    return newString;

}

swapCase("Hello World");

//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map

function toCelcius(array){
    const convertedArr = array.map(x => (x-32) * (5/9));
    return convertedArr;

}

const arrFar = [23, 32, 41, 50, 59];
toCelcius(arrFar);


//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map

function passOrFail(array){
    const resultsArr = array.map(x => {
        if (x < 75){
            return false;
        }
        else{
            return true;
        }
    });
    return resultsArr;

}

const arrPassFail = [20, 30, 50, 80, 90, 100];
passOrFail(arrPassFail);

//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];

    const myArr = [];

    for (let i = 0; i < cardinalNumbers.length; i++){
        myArr.push(cardinalNumbers[i] + " is " + germanNumbers[i]);

    }

    return myArr;

}

germanNumbers();


// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter

function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const primeArr = numbers.filter(x => {
        if (x < 2){
            return false;
        }
        for (let i = 2; i <= Math.sqrt(x); i++){
            if (x % i === 0){
                return false;
            }
        }
        return true;
    }); 
    return primeArr;

} 
returnPrimeNumbers();

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:
function iLoveJavascript(){
    for (let i = 1; i < 101; i++){
        if (i % 15 == 0){
            console.log("CSC225 RULES I LOVE JAVASCRIPT");
        }
        else if (i % 5 == 0){
            console.log("I LOVE JAVASCRIPT");
        }
        else if (i % 3 == 0){
            console.log("CSC225 RULES");
        }
        else{
            console.log(i);
        }


    }

}

iLoveJavascript();