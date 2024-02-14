var assert = require('assert');
const isPalindrome = require('..');
const myObj = new isPalindrome();


describe('isPalindrome', function () {
  describe('Check if word is a palindrome or not', function () {
    
    it('should return if the word is a Palindrome', function () {
        assert.equal(myObj(), '^^')
    });
  });
});