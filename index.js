const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World, porra!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(isPalindrome("traxart"))
})


function isPalindrome (word) {
    
    const chars = word.split("");
    let comp  = word.length
    let palindrome_count = 0;
    

    for (let i = 0; i < (comp); i++) {
        if (chars[i] == chars[(comp-1)-i]) {
            palindrome_count++;
        }
    }
    if (palindrome_count == comp){
        return "Palindrome"
    }
    else{
        return "Not Palindrome"
    }
    }

// module.exports = isPalindrome;