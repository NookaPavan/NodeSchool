function countWords(inputWords) {
    // SOLUTION GOES HERE
    return inputWords.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      },{});
}

  module.exports = countWords