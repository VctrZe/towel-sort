
module.exports = function towelSort(matrix) {
  if (matrix) {
    return matrix.reduce((acc, current, index) => {
      return acc.concat((!(index % 2) ? current : current.reverse()));
    
    }, [])
  }
  return [];
 }
