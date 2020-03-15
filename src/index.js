
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (typeof(matrix) == 'undefined') { 
        return arr;
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if ( i % 2 === 0) 
            for (let j = 0; j < matrix[i].length; j++) {
                arr.push(matrix[i][j]);
            } if ( i % 2 !== 0) {
                for (let k = (matrix[i].length - 1); k >= 0; k--)
                arr.push(matrix[i][k])
            }
        }
        return arr;
    }
}
