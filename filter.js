/*
» To print these instructions again, run: functional-javascript print
» To execute your program in a test environment, run: functional-javascript run program.js
» To verify your program, run: functional-javascript verify program.js
» For help run: functional-javascript help*/

function getShortMessages(messages) {
    // SOLUTION GOES HERE
    return messages.filter(item =>  item.message.length < 50 ).map(item => item.message);
}

module.exports = getShortMessages;