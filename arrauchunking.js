// Example
// chunk([1,2,3,4], 2) --> [[1,2],[3,4]]
// chunk([1,2,3,4,5],2) --> [[1,2],[3,4],[5]]
// chunk([1,2,3,4,5], 4) --> [[1,2,3,4],[5]]

function chunk1(array, size) {
    newArray = []
    for (let i of array) {
        const last = newArray[newArray.length - 1]

        if (!last || last.length === size) {
            newArray.push([i])
        } else {
            last.push(i)
        }

    }
    return newArray
}

console.log(chunk1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))

function chunk2(array, size) {
    const chunked = []
    let index = 0
    while (index < array.length) {
        chunked.push(array.slice(index, index + size))
        index += size
    }
    return chunked
}

console.log(chunk2([1, 2, 3, 4, 5], 2))