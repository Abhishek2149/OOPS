//rotate given matrix by 90 degree in clockwise direction

let matrix = [
    [1,2],
    [3,4]
]
const rotate = matrix => {
    return matrix.map((row,i)=>row.map((val,j)=> matrix[matrix.length-1-j][i]))
}
console.log(rotate(matrix))