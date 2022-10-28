/**
 * This function reverses an array without the use of built in functions
 * @param {*} array The list to be reversed
 * @return The reversed array
 */
reverse = function(array) {
    let result = []
    for(let i = array.length - 1; i >= 0; i--){
      result.push(array[i])
    }
    return result
  }