function iSPalindrome (word) {
    
    const chars = word.split("");
    let comp  = word.length
    let palindrome_count = 0;
    

    for (let i = 0; i < (comp); i++) {
        if (chars[i] == chars[(comp-1)-i]) {
            palindrome_count++;
        }
    }
    if (palindrome_count == comp){
        console.log("Palindrome")
    }
    else{
        console.log("Not Palindrome, now in develop")
    }
    }


iSPalindrome("traxart")
