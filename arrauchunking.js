// Example
// chunk([1,2,3,4], 2) --> [[1,2],[3,4]]
// chunk([1,2,3,4,5],2) --> [[1,2],[3,4],[5]]
// chunk([1,2,3,4,5], 4) --> [[1,2,3,4],[5]]

function chunk(array, size) {
    newArray = []
    for (let i = array[0]; i <= size; i++) {
        newArray.push(i)
    }
    return newArray
}

console.log(chunk([1, 2, 3, 4], 2))