function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE
    if (!arr.length) return initial
    var first= arr[0]
    return reduce(arr.slice(1),fn,fn(initial,first,null,arr))
  }

  module.exports = reduce