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