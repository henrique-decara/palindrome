import { createClient } from "redis";

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('key', 'value');
const value = await client.get('key');

await client.hSet('user-session:123', {
    name: 'John',
    surname: 'Smith',
    company: 'Redis',
    age: 29
})

let userSession = await client.hGetAll('user-session:123');
console.log(JSON.stringify(userSession, null, 2));

console.log(isPalindrome("traxart"))


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


isPalindrome("bioib")

// module.exports = isPalindrome;