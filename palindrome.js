// palindrome("abba") => true
// palindrome("abcdefg") => false

function palindrome(str) {
    const reversed = str.split("").reverse().join("")
    return str === reversed
}
console.log(palindrome("abcdef"))