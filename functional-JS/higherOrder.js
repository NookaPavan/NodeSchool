/*
» To print these instructions again, run: functional-javascript print
» To execute your program in a test environment, run: functional-javascript run program.js
» To verify your program, run: functional-javascript verify program.js
» For help run: functional-javascript help*/

function repeat(opertion,num){
    for(let i=0; i<num;i++){
        opertion();
    }
}

module.exports= repeat;