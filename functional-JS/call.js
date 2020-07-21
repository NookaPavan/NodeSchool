function duckCount() {
    // SOLUTION GOES HERE
    return [].slice.call(arguments).filter(obj => {
        return Object.prototype.hasOwnProperty.call(obj,'quack');
    }).length
  }

  module.exports = duckCount