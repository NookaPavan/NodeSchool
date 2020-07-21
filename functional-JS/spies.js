/*
FUNCTIONAL JAVASCRIPT IS GOOD
───────────────────────────────
 Function Spies
 Exercise 12 of 18


# Task

Override a specified method of an object with new functionality while still maintaining all of the old behaviour.

Create a spy that keeps track of how many times a function is called.

## Example

    var spy = Spy(console, 'error')

    console.error('calling console.error')
    console.error('calling console.error')
    console.error('calling console.error')

    console.log(spy.count) // 3

## Arguments

  * target: an object containing the method `method`
  * method: a string with the name of the method on `target` to spy on.

## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

## Hint

  * Functions have context, input and output. Make sure you consider the context, input to *and output from* the function you are spying on.
*/
function Spy(target, method) {
  var originalFunction = target[method]
  var req={
    count:0
  }
  target[method] = function() {
    req.count++ // track function was called
    return originalFunction.apply(this, arguments) // invoke original function
  }

  return req
}

  module.exports = Spy

  /*Explanation

  This refers to Spy. OriginalFunction is what was just updated when you assigned the new function you created to target[method]. Because you've changed the context of the function with apply the function is now within Spy's context.
  In short your augmented method now has access to the Spy property count, well more specifically, the result object that holds count.  
  
  apply is very similar to call(), except for the type of arguments it supports. You use an arguments array instead of a list of arguments (parameters). With apply, you can also use an array literal
  */