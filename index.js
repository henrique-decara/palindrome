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

module.exports = isPalindrome;
//dssssdsd