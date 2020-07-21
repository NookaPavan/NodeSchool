/*
» To print these instructions again, run: functional-javascript print
» To execute your program in a test environment, run: functional-javascript run program.js
» To verify your program, run: functional-javascript verify program.js
» For help run: functional-javascript help*/

function doubleAll(numbers){
    return numbers.map(item => item*2);
}

module.exports = doubleAll;