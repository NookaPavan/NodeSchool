module.exports = function arrayMap(arr, fn) {
    return arr.reduce((acc,current,index,arr) => {
        acc.push(fn(current))
        return acc;
    },[])
  }