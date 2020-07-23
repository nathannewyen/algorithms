// Example
// capitalize('a short sentence') --> 'A Short Sentence'
// capitalize('a lazy fox') --> 'A Lazy Fox'
// capitalize('look, it is working') --> 'Look It Is Working'

function capitalize(str) {
    const words = []

    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }

    return words.join(' ')

}

console.log(capitalize('hello world again'))